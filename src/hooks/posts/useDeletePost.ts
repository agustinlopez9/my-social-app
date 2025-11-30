import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postsApi } from "api/posts";
import { POSTS_QUERY_KEY } from "./usePosts";

export function useDeletePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId: string) => postsApi.deletePost(postId),
    onSuccess: () => {
      // Invalidate posts query to refetch
      queryClient.invalidateQueries({ queryKey: POSTS_QUERY_KEY });
    },
  });
}
