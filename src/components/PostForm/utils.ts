import * as yup from "yup";
import type { CreatePostFormData } from "./types";

export const validationSchema: yup.ObjectSchema<CreatePostFormData> = yup.object({
  avatar: yup.string().optional(),
  name: yup.string().max(50, "post.validation.nameMaxLength").trim().optional(),
  createdAt: yup.string().required(),
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
