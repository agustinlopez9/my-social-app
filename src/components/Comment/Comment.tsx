import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaPen, FaTrash, FaEllipsisV } from "react-icons/fa";
import type { Comment as CommentType } from "api/types";
import Avatar from "components/ui/Avatar";
import Dropdown from "components/ui/Dropdown";
import CreateCommentForm from "../CommentForm/CreateCommentForm";
import EditCommentForm from "../CommentForm/EditCommentForm";
import CommentFooter from "./CommentFooter";
import { getRelativeTimeFromDate } from "utils/utils";
import { useDeleteComment } from "src/hooks/comments/useDeleteComment";

interface CommentProps {
  postId: string;
  parentId: string | null;
  comment: CommentType;
}

const Comment = ({ postId, parentId, comment }: CommentProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const { t } = useTranslation();
  const deleteComment = useDeleteComment();

  const { id: commentId, avatar, name, createdAt, content } = comment;
  const commentDate = new Date(createdAt).toLocaleString();

  const handleEdit = () => {
    if (isReplying) setIsReplying(false);
    setIsEditing(true);
  };

  const handleReply = () => {
    if (isEditing) setIsEditing(false);
    setIsReplying(true);
  };

  const handleCloseEdit = () => {
    setIsEditing(false);
  };

  const handleCloseReply = () => {
    setIsReplying(false);
  };

  const handleDelete = async () => {
    deleteComment.mutate({ postId, commentId });
  };

  const options = [
    {
      label: t("common.actions.edit"),
      onClick: handleEdit,
      icon: <FaPen />,
    },
    {
      label: t("common.actions.delete"),
      onClick: () => handleDelete(),
      icon: <FaTrash />,
    },
  ];

  return (
    <div className="bg-surface-secondary border-border-subtle mb-2 min-w-72 rounded-lg border p-4">
      <div className="flex flex-row items-center justify-between">
        <Avatar
          src={avatar}
          alt={name}
          title={name}
          subtitle={getRelativeTimeFromDate(commentDate)}
          size="smaller"
          direction="row"
        />
        <Dropdown
          options={options}
          trigger={
            <FaEllipsisV className="text-tertiary hover:text-primary h-4 w-4 cursor-pointer transition-colors" />
          }
        />
      </div>
      {isEditing ? (
        <EditCommentForm
          postId={postId}
          commentId={commentId}
          initialContent={content}
          parentId={parentId}
          onCancel={handleCloseEdit}
          onSuccess={handleCloseEdit}
        />
      ) : (
        <>
          <p className="text-primary text-body mt-2">{content}</p>
          <CommentFooter handleReply={handleReply} isReplying={isReplying} />
        </>
      )}
      {isReplying && (
        <div className="mt-3 ml-6 pl-2">
          <div className="bg-surface-primary border-border-subtle rounded-sm border p-4">
            <CreateCommentForm
              postId={postId}
              parentCommentId={commentId}
              isReply={true}
              onCancel={handleCloseReply}
              onSuccess={handleCloseReply}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Comment;
