import FormTextArea from "components/formComponents/FormTextArea";

interface PostContentProps {
  title: string;
  content: string;
  isEditing: boolean;
}

const PostContent = ({ title, content, isEditing }: PostContentProps) => {
  const editPost = useEditPost();

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
    <>
      <h2 className="my-2 text-md font-bold">{title}</h2>
      {isEditing ? <p className="my-2 text-sm">{content}</p> : <FormTextArea />}
    </>
  );
};

export default PostContent;
