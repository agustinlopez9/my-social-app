import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { FaEllipsisV, FaPen, FaTrash, FaFlag, FaEyeSlash } from "react-icons/fa";
import { usePostContext } from "../context";
import { useDeletePost } from "hooks/posts/useDeletePost";
import Avatar from "components/ui/Avatar";
import Dropdown from "components/ui/Dropdown";
import { getRelativeTimeFromDate } from "utils/utils";

interface PostHeaderProps {
  postId: string;
  avatar: string;
  name: string;
  createdAt: string;
}

const PostHeader = ({ postId, avatar, name, createdAt }: PostHeaderProps) => {
  const { t } = useTranslation();
  const { setIsEditing, editable } = usePostContext();
  const navigate = useNavigate();
  const deletePost = useDeletePost();

  const handleMenuClick = (action: string) => {
    console.log(`${action} clicked`);
  };

  const handleDelete = async () => {
    await deletePost.mutate(postId);
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
          onClick: () => handleDelete(),
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
    <div className="flex flex-row justify-between items-center w-full">
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
        trigger={
          <FaEllipsisV className="w-3 text-tertiary cursor-pointer hover:text-primary transition-colors" />
        }
      />
    </div>
  );
};

export default PostHeader;
