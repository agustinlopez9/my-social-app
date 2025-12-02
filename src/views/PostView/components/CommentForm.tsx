import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import { useCreateComment } from "hooks/comments/useCreateComment";
import CommentFormFields from "components/CommentForm";
import { validationSchema, type CreateEditCommentFormData } from "./utils";

interface CommentFormProps {
  postId?: string;
  parentCommentId?: string;
}

const CommentForm = ({ postId, parentCommentId }: CommentFormProps) => {
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
      parentId: parentCommentId || null,
    },
  });

  const onSubmit = async (data: CreateEditCommentFormData) => {
    try {
      await createComment.mutateAsync(data);
      reset();
      toast.success(t("comments.copy.created"));
    } catch {
      toast.error(t("comments.errors.create"));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <p className="text-primary font-semibold mb-3">{t("comments.labels.createTitle")}</p>
      <CommentFormFields
        register={register}
        errors={errors}
        isSubmittingOrPending={isSubmitting || createComment.isPending}
      />
    </form>
  );
};

export default CommentForm;
