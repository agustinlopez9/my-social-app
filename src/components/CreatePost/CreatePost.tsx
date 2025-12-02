import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useCreatePost } from "hooks/posts/useCreatePost";
import Button from "../ui/Button";
import FormInput from "../formComponents/FormInput";
import FormTextArea from "../formComponents/FormTextArea";
import { validationSchema, type CreatePostFormData } from "./utils";

const CreatePost = () => {
  const { t } = useTranslation();
  const createPost = useCreatePost();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreatePostFormData>({
    resolver: yupResolver(validationSchema),
    reValidateMode: "onSubmit",
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit = async (data: CreatePostFormData) => {
    try {
      await createPost.mutateAsync(data);
      reset();
      toast.success(t("post.copy.created"));
    } catch {
      toast.error(t("post.errors.create"));
    }
  };

  return (
    <div className="bg-surface-primary rounded-sm p-4 border border-border-subtle m-2 mb-8 shadow-sm">
      <p className="text-primary font-semibold mb-3">{t("post.labels.createTitle")}</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <FormInput
          {...register("title")}
          placeholder={t("post.labels.titlePlaceholder")}
          error={errors.title?.message ? t(errors.title.message) : undefined}
        />
        <FormTextArea
          {...register("content")}
          placeholder={t("post.labels.placeholder")}
          error={errors.content?.message ? t(errors.content.message) : undefined}
        />
        <div className="flex justify-end">
          <Button
            type="submit"
            loading={createPost.isPending}
            disabled={isSubmitting || createPost.isPending}
          >
            {createPost.isPending ? null : t("common.actions.publish")}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
