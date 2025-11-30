import { httpClient } from "lib/http-client";
import type { Comment } from "api/types";

export const commentsApi = {
  getComments: (postId: string) => httpClient.get<Comment[]>(`/post/${postId}/comments`),

  createComment: (postId: string, content: string) =>
    httpClient.post<Comment>(`/post/${postId}/comments`, { content }),

  deleteComment: (postId: string, commentId: string) =>
    httpClient.delete<void>(`/post/${postId}/comments/${commentId}`),
};
