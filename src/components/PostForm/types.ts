export interface CreatePostFormData {
  avatar?: string;
  name?: string;
  createdAt: string;
  title: string;
  content: string;
}

export interface EditPostFormData {
  createdAt: string;
  title: string;
  content: string;
}
