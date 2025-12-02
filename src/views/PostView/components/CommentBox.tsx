import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import { useCreateComment } from "hooks/comments/useCreateComment";
import FormTextArea from "components/formComponents/FormTextArea";
import Button from "components/ui/Button";
import { validationSchema, type CreateCommentFormData } from "./utils";

interface CommentBoxProps {
  postId?: string;
  parentCommentId?: string;
}

const CommentBox = ({ postId, parentCommentId }: CommentBoxProps) => {
  const { t } = useTranslation();
  const createComment = useCreateComment();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateCommentFormData>({
    resolver: yupResolver(validationSchema),
    reValidateMode: "onSubmit",
    defaultValues: {
      content: "",
      postId: postId || undefined,
      parentId: parentCommentId || null,
    },
  });

  const onSubmit = async (data: CreateCommentFormData) => {
    try {
      await createComment.mutateAsync(data);
      reset();
      toast.success(t("comments.copy.created"));
    } catch {
      toast.error(t("comments.errors.create"));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="text-primary font-semibold mb-3">{t("comments.labels.createTitle")}</p>
      <FormTextArea
        {...register("content")}
        placeholder={t("comments.labels.placeholder")}
        error={errors.content?.message ? t(errors.content.message) : undefined}
      />
      <div className="flex justify-end">
        <Button
          type="submit"
          loading={createComment.isPending}
          disabled={isSubmitting || createComment.isPending}
          variant="primary"
          className="mt-2 mb-6"
        >
          {t("common.actions.publish")}
        </Button>
      </div>
    </form>
  );
};

export default CommentBox;
