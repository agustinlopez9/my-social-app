import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postsApi } from "api/posts";
import type { Post } from "api/types";
import { POSTS_QUERY_KEY } from "./usePosts";

export interface EditPostVariables {
  postId: Post["id"];
  data: Partial<Post>;
}

export function useEditPost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, data }: EditPostVariables) => postsApi.editPost(postId, data),
    onSuccess: () => {
      // Invalidate posts query to refetch
      queryClient.invalidateQueries({ queryKey: POSTS_QUERY_KEY });
    },
  });
}
