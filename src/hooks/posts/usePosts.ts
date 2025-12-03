import { useQuery } from "@tanstack/react-query";
import { postsApi } from "api/posts";

export const POSTS_QUERY_KEY = ["posts"] as const;

export function usePosts() {
  return useQuery({
    queryKey: POSTS_QUERY_KEY,
    queryFn: () => postsApi.getPosts(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
