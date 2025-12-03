export interface CommentFormData {
  avatar: string;
  name: string;
  createdAt: string;
  postId: string;
  parentId: string | null;
  content: string;
}
