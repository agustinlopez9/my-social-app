import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import { FaPen, FaEllipsisV } from "react-icons/fa";
import { useEditComment } from "hooks/comments/useEditComment";
import Avatar from "components/ui/Avatar";
import Dropdown from "components/ui/Dropdown";
import CommentFormFields from "components/CommentForm";
import type { Comment as CommentType } from "api/types";
import { getRelativeTimeFromDate } from "utils/utils";
import { validationSchema, type CreateEditCommentFormData } from "./utils";

interface CommentProps {
  postId: string;
  parentId: string | null;
  comment: CommentType;
}

const Comment = ({ postId, parentId, comment }: CommentProps) => {
  const { id: commentId, avatar, name, createdAt, content } = comment;
  const { t } = useTranslation();
  const [isEditing, setIsEditing] = useState(false);
  const editComment = useEditComment();
  const commentDate = new Date(createdAt).toLocaleString();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateEditCommentFormData>({
    resolver: yupResolver(validationSchema),
    reValidateMode: "onSubmit",
    defaultValues: {
      postId: postId,
      parentId: parentId,
      content: content,
    },
  });

  const onSubmit = async (data: CreateEditCommentFormData) => {
    try {
      await editComment.mutateAsync({ postId, commentId, content: data.content });
      setIsEditing(false);
      toast.success(t("comments.copy.edited"));
    } catch {
      toast.error(t("comments.errors.edit"));
    }
  };

  const handleCancel = () => {
    reset();
    setIsEditing(false);
  };

  const options = [
    {
      label: t("common.actions.edit"),
      onClick: () => setIsEditing(true),
      icon: <FaPen />,
    },
  ];

  return (
    <div className="bg-surface-secondary rounded-lg p-4 border border-border-subtle mb-2 min-w-48">
      <div className="flex flex-row justify-between">
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
            <FaEllipsisV className="w-3 text-tertiary cursor-pointer hover:text-primary transition-colors" />
          }
        />
      </div>
      {isEditing ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 mt-2">
          <CommentFormFields
            register={register}
            errors={errors}
            handleCancel={handleCancel}
            isSubmittingOrPending={isSubmitting || editComment.isPending}
          />
        </form>
      ) : (
        <p className="text-primary text-sm mt-2">{content}</p>
      )}
    </div>
  );
};

export default Comment;
