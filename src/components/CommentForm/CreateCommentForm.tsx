import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import { useAuth } from "context/AuthContext";
import { useCreateComment } from "hooks/comments/useCreateComment";
import CommentFormFields from "components/CommentForm/CommentFormFields";
import { createValidationSchema } from "components/CommentForm/utils";
import type { CreateCommentFormData } from "components/CommentForm/types";

interface CreateCommentFormProps {
  postId?: string;
  parentCommentId?: string | null;
  onCancel?: () => void;
  onSuccess?: () => void;
  isReply?: boolean;
}

const CreateCommentForm = ({
  postId,
  parentCommentId = null,
  onCancel,
  onSuccess,
  isReply = false,
}: CreateCommentFormProps) => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const createComment = useCreateComment();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateCommentFormData>({
    resolver: yupResolver(createValidationSchema),
    reValidateMode: "onSubmit",
    defaultValues: {
      postId: postId || "",
      createdAt: new Date().toISOString(),
      name: user?.name || "",
      avatar: user?.avatar || "",
      content: "",
      parentId: parentCommentId,
    },
  });

  const onSubmit = async (data: CreateCommentFormData) => {
    const { postId, ...restData } = data;

    try {
      await createComment.mutateAsync({ postId, data: restData });
      reset();
      toast.success(t("comments.copy.created"));
      onSuccess?.();
    } catch {
      toast.error(t("comments.errors.create"));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <p className="text-heading-sm text-primary mb-3 font-semibold">
        {isReply ? t("comments.labels.replyTitle") : t("comments.labels.createTitle")}
      </p>
      <CommentFormFields<CreateCommentFormData>
        register={register}
        errors={errors}
        handleCancel={onCancel}
        isSubmittingOrPending={isSubmitting || createComment.isPending}
      />
    </form>
  );
};

export default CreateCommentForm;
