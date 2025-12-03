import * as yup from "yup";
import type { CreateCommentFormData, EditCommentFormData } from "./types";

export const createValidationSchema: yup.ObjectSchema<CreateCommentFormData> = yup.object({
  avatar: yup.string().required(),
  name: yup.string().required().max(50, "comments.validation.nameMaxLength").trim(),
  createdAt: yup.string().required(),
  content: yup
    .string()
    .required("comments.validation.contentRequired")
    .min(1, "comments.validation.contentMinLength")
    .max(300, "comments.validation.contentMaxLength")
    .trim(),
  postId: yup.string().required("comments.validation.postIdRequired"),
  parentId: yup.string().nullable().required(),
});

export const editValidationSchema: yup.ObjectSchema<EditCommentFormData> = yup.object({
  content: yup
    .string()
    .required("comments.validation.contentRequired")
    .min(1, "comments.validation.contentMinLength")
    .max(300, "comments.validation.contentMaxLength")
    .trim(),
  postId: yup.string().required("comments.validation.postIdRequired"),
  parentId: yup.string().nullable().defined(),
});
