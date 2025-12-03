import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { usePostContext } from "../context";
import { useEditPost } from "hooks/posts/useEditPost";
import PostFormFields from "components/PostForm";
import type { EditPostFormData } from "components/PostForm";
import { validationSchema } from "../utils";

interface PostContentProps {
  title: string;
  content: string;
}

const PostContent = ({ title, content }: PostContentProps) => {
  const { postId, isEditing, setIsEditing } = usePostContext();
  const { t } = useTranslation();
  const editPost = useEditPost();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EditPostFormData>({
    resolver: yupResolver(validationSchema),
    reValidateMode: "onSubmit",
    defaultValues: {
      createdAt: new Date().toISOString(),
      title: title,
      content: content,
    },
  });

  const onSubmit = async (data: EditPostFormData) => {
    try {
      if (postId) {
        await editPost.mutateAsync({ postId, data });
        setIsEditing(false);
        toast.success(t("post.copy.edited"));
      }
    } catch {
      toast.error(t("post.errors.edit"));
    }
  };

  const handleCancel = () => {
    reset();
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-2 space-y-3">
          <PostFormFields<EditPostFormData>
            register={register}
            errors={errors}
            handleCancel={handleCancel}
            isSubmittingOrPending={isSubmitting || editPost.isPending}
          />
        </form>
      ) : (
        <>
          <h2 className="text-heading-sm my-2 font-bold">{title}</h2>
          <p className="text-body my-2">{content}</p>
        </>
      )}
    </>
  );
};

export default PostContent;
