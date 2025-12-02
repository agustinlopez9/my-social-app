import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { usePostContext } from "../context";
import { useEditPost } from "hooks/posts/useEditPost";
import PostFormFields from "components/PostForm";
import { validationSchema, type EditPostFormData } from "../utils";

interface PostContentProps {
  postId?: string;
  title: string;
  content: string;
}

const PostContent = ({ postId, title, content }: PostContentProps) => {
  const { isEditing, setIsEditing } = usePostContext();
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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 mt-2">
          <PostFormFields
            register={register}
            errors={errors}
            handleCancel={handleCancel}
            isSubmittingOrPending={isSubmitting || editPost.isPending}
          />
        </form>
      ) : (
        <>
          <h2 className="my-2 text-md font-bold">{title}</h2>
          <p className="my-2 text-sm">{content}</p>
        </>
      )}
    </>
  );
};

export default PostContent;
