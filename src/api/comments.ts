import { httpClient } from "lib/http-client";
import type { Comment, Post } from "api/types";

export const commentsApi = {
  getComments: (postId: Post["id"]) => httpClient.get<Comment[]>(`/comment?postId=${postId}`),

  createComment: (postId: Post["id"], data: Partial<Comment>) =>
    httpClient.post<Comment>(`/post/${postId}/comment`, data),

  editComment: (postId: Post["id"], commentId: Comment["id"], content: Comment["content"]) =>
    httpClient.put<Comment>(`/post/${postId}/comment/${commentId}`, { content }),

  deleteComment: (postId: Post["id"], commentId: Comment["id"]) =>
    httpClient.delete<void>(`/post/${postId}/comment/${commentId}`),
};
