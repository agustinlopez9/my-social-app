import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postsApi } from "api/posts";
import { POSTS_QUERY_KEY } from "./usePosts";

export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (content: string) => postsApi.createPost(content),
    onSuccess: () => {
      // Invalidate posts query to refetch
      queryClient.invalidateQueries({ queryKey: POSTS_QUERY_KEY });
    },
  });
}
