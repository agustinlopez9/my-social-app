import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postsApi } from "api/posts";
import type { Post } from "api/types";
import { POSTS_QUERY_KEY } from "./usePosts";

export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Partial<Post>) => postsApi.createPost(data),
    onSuccess: () => {
      // Invalidate posts query to refetch
      queryClient.invalidateQueries({ queryKey: POSTS_QUERY_KEY });
    },
  });
}
