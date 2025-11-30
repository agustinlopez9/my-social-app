import { useQuery } from "@tanstack/react-query";
import { postsApi } from "api/posts";

export const postQueryKey = (postId: string) => ["posts", postId] as const;

export function usePost(postId: string) {
  return useQuery({
    queryKey: postQueryKey(postId),
    queryFn: () => postsApi.getPost(postId),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
