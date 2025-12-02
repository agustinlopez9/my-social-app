import * as yup from "yup";

export type { PostFormData as CreatePostFormData } from "components/PostForm";

export const validationSchema = yup.object({
  title: yup
    .string()
    .required("post.validation.titleRequired")
    .min(3, "post.validation.titleMinLength")
    .max(100, "post.validation.titleMaxLength")
    .trim(),
  content: yup
    .string()
    .required("post.validation.contentRequired")
    .min(1, "post.validation.contentMinLength")
    .max(500, "post.validation.contentMaxLength")
    .trim(),
});

export type CreatePostValidated = yup.InferType<typeof validationSchema>;
