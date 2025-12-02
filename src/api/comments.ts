import { httpClient } from "lib/http-client";
import type { Comment } from "api/types";

export const commentsApi = {
  getComments: (postId: string) => httpClient.get<Comment[]>(`/comment?postId=${postId}`),

  createComment: (postId: string, content: string, parentId: string | null) =>
    httpClient.post<Comment>(`/post/${postId}/comment`, { content, parentId }),

  deleteComment: (postId: string, commentId: string) =>
    httpClient.delete<void>(`/post/${postId}/comment/${commentId}`),
};
