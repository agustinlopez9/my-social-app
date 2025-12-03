export interface CreateCommentFormData {
  avatar: string;
  name: string;
  createdAt: string;
  postId: string;
  parentId: string | null;
  content: string;
}

export interface EditCommentFormData {
  postId: string;
  parentId: string | null;
  content: string;
}
