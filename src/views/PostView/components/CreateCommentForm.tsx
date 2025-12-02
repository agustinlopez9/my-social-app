import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import { useCreateComment } from "hooks/comments/useCreateComment";
import CommentFormFields from "components/CommentForm";
import { validationSchema, type CreateEditCommentFormData } from "./utils";

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
  const createComment = useCreateComment();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateEditCommentFormData>({
    resolver: yupResolver(validationSchema),
    reValidateMode: "onSubmit",
    defaultValues: {
      content: "",
      postId: postId || undefined,
      parentId: parentCommentId,
    },
  });

  const onSubmit = async (data: CreateEditCommentFormData) => {
    try {
      await createComment.mutateAsync(data);
      reset();
      toast.success(t("comments.copy.created"));
      onSuccess?.();
    } catch {
      toast.error(t("comments.errors.create"));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <p className="text-primary font-semibold mb-3">
        {isReply ? t("comments.labels.replyTitle") : t("comments.labels.createTitle")}
      </p>
      <CommentFormFields
        register={register}
        errors={errors}
        handleCancel={onCancel}
        isSubmittingOrPending={isSubmitting || createComment.isPending}
      />
    </form>
  );
};

export default CreateCommentForm;
