import * as yup from "yup";

export interface CreateCommentFormData {
  content: string;
  postId: string;
  parentId: string | null;
}

export const validationSchema = yup.object({
  content: yup
    .string()
    .required("comments.validation.contentRequired")
    .min(1, "comments.validation.contentMinLength")
    .max(300, "comments.validation.contentMaxLength")
    .trim(),
  postId: yup.string().required("comments.validation.postIdRequired"),
  parentId: yup.string().nullable().defined(),
});

export type CreateCommentValidated = yup.InferType<typeof validationSchema>;
