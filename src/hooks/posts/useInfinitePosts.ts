import { useInfiniteQuery } from "@tanstack/react-query";
import { postsApi } from "api/posts";

export const INFINITE_POSTS_QUERY_KEY = ["posts", "infinite"] as const;
const POSTS_PER_PAGE = 10;

export function useInfinitePosts() {
  return useInfiniteQuery({
    queryKey: INFINITE_POSTS_QUERY_KEY,
    queryFn: ({ pageParam = 1 }) => postsApi.getPosts(pageParam, POSTS_PER_PAGE),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < POSTS_PER_PAGE) {
        return undefined;
      }
      return allPages.length + 1;
    },
    initialPageParam: 1,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
