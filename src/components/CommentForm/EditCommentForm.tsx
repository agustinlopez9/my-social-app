import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import { useEditComment } from "hooks/comments/useEditComment";
import CommentFormFields from "components/CommentForm/CommentFormFields";
import { editValidationSchema } from "components/CommentForm/utils";
import type { EditCommentFormData } from "components/CommentForm/types";

interface EditCommentFormProps {
  postId: string;
  commentId: string;
  initialContent: string;
  parentId: string | null;
  onCancel: () => void;
  onSuccess: () => void;
}

const EditCommentForm = ({
  postId,
  commentId,
  initialContent,
  parentId,
  onCancel,
  onSuccess,
}: EditCommentFormProps) => {
  const { t } = useTranslation();
  const editComment = useEditComment();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EditCommentFormData>({
    resolver: yupResolver(editValidationSchema),
    reValidateMode: "onSubmit",
    defaultValues: {
      postId,
      parentId,
      content: initialContent,
    },
  });

  const onSubmit = async (data: EditCommentFormData) => {
    try {
      await editComment.mutateAsync({ postId, commentId, content: data.content });
      toast.success(t("comments.copy.edited"));
      onSuccess();
    } catch {
      toast.error(t("comments.errors.edit"));
    }
  };

  const handleCancel = () => {
    reset();
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-2 space-y-3">
      <CommentFormFields<EditCommentFormData>
        register={register}
        errors={errors}
        handleCancel={handleCancel}
        isSubmittingOrPending={isSubmitting || editComment.isPending}
      />
    </form>
  );
};

export default EditCommentForm;
