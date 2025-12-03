import { httpClient } from "lib/http-client";
import type { Post } from "api/types";

export const postsApi = {
  getPosts: (page = 1, limit = 10) => httpClient.get<Post[]>(`/post?page=${page}&limit=${limit}`),

  getPost: (postId: Post["id"]) => httpClient.get<Post>(`/post/${postId}`),

  createPost: (data: Partial<Post>) => httpClient.post<Post>("/post", data),

  editPost: (postId: Post["id"], data: Partial<Post>) =>
    httpClient.put<Post>(`/post/${postId}`, data),

  deletePost: (postId: Post["id"]) => httpClient.delete<void>(`/post/${postId}`),
};
