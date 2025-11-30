import { useQuery } from "@tanstack/react-query";
import { commentsApi } from "api/comments";

export const commentsQueryKey = (postId: string) => ["comments", postId] as const;

export function useComments(postId: string) {
  return useQuery({
    queryKey: commentsQueryKey(postId),
    queryFn: () => commentsApi.getComments(postId),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
