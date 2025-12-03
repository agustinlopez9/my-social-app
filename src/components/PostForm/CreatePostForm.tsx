import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAuth } from "context/AuthContext";
import { useCreatePost } from "hooks/posts/useCreatePost";
import PostFormFields from "./PostFormFields";
import { validationSchema, type CreatePostFormData } from "./utils";

const CreatePostForm = () => {
  const { t } = useTranslation();
  const createPost = useCreatePost();
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreatePostFormData>({
    resolver: yupResolver(validationSchema),
    reValidateMode: "onSubmit",
    defaultValues: {
      avatar: user?.avatar || "",
      name: user?.name || "",
      createdAt: new Date().toISOString(),
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
    <div className="bg-surface-primary border-border-subtle m-2 mb-8 rounded-sm border p-4 shadow-sm">
      <p className="text-heading-lg text-primary mb-3 font-semibold">
        {t("post.labels.createTitle")}
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <PostFormFields
          register={register}
          errors={errors}
          isSubmittingOrPending={isSubmitting || createPost.isPending}
        />
      </form>
    </div>
  );
};

export default CreatePostForm;
