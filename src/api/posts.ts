import { httpClient } from "lib/http-client";
import type { Post } from "api/types";

export const postsApi = {
  getPosts: () => httpClient.get<Post[]>("/post"),

  getPost: (postId: string) => httpClient.get<Post>(`/post/${postId}`),

  createPost: (content: string) => httpClient.post<Post>("/post", { content }),

  deletePost: (postId: string) => httpClient.delete<void>(`/post/${postId}`),
};
