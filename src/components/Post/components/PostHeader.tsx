import { useState } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { FaEllipsisV, FaPen, FaTrash, FaFlag, FaEyeSlash } from "react-icons/fa";
import { usePostContext } from "../context";
import { useDeletePost } from "hooks/posts/useDeletePost";
import Avatar from "components/ui/Avatar";
import Dropdown from "components/ui/Dropdown";
import DeleteConfirmationDialog from "components/ui/DeleteConfirmationDialog";
import { getRelativeTimeFromDate } from "utils/utils";

interface PostHeaderProps {
  avatar: string;
  name: string;
  createdAt: string;
}

const PostHeader = ({ avatar, name, createdAt }: PostHeaderProps) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const { t } = useTranslation();
  const { postId, setDropdownOpen, setIsEditing, editable } = usePostContext();
  const navigate = useNavigate();
  const deletePost = useDeletePost();

  const handleMenuClick = (action: string) => {
    console.log(`${action} clicked`);
  };

  const handleDeleteClick = () => {
    setIsDeleteDialogOpen(true);
  };

  const handleDelete = async () => {
    if (!postId) return null;
    await deletePost.mutate(postId);
    setIsDeleteDialogOpen(false);
    navigate("/");
  };

  // TODO: Hide EDIT and DELETE options for non-author users, show REPORT and HIDE instead
  const options = editable
    ? [
        {
          label: t("common.actions.edit"),
          onClick: () => setIsEditing(true),
          icon: <FaPen />,
        },
        {
          label: t("common.actions.delete"),
          onClick: handleDeleteClick,
          icon: <FaTrash />,
        },
      ]
    : [
        {
          label: t("common.actions.report"),
          onClick: () => handleMenuClick("report"),
          icon: <FaFlag />,
        },
        {
          label: t("common.actions.hide"),
          onClick: () => handleMenuClick("hide"),
          icon: <FaEyeSlash />,
        },
      ];

  return (
    <>
      <div className="flex w-full flex-row items-center justify-between">
        <Avatar
          className="my-2"
          src={avatar}
          title={name}
          subtitle={getRelativeTimeFromDate(createdAt)}
          size="small"
          direction="column"
        />
        <Dropdown
          options={options}
          onOpen={() => setDropdownOpen(true)}
          onClose={() => setDropdownOpen(false)}
          trigger={
            <FaEllipsisV className="text-tertiary hover:text-primary w-3 cursor-pointer transition-colors" />
          }
        />
      </div>

      <DeleteConfirmationDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={handleDelete}
        loading={deletePost.isPending}
      />
    </>
  );
};

export default PostHeader;
