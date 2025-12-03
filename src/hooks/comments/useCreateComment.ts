import { useMutation, useQueryClient } from "@tanstack/react-query";
import { commentsApi } from "api/comments";
import type { Comment } from "api/types";
import { commentsQueryKey } from "./useComments";

interface CreateCommentVariables {
  postId: string;
  data: Partial<Comment>;
}

export function useCreateComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, data }: CreateCommentVariables) =>
      commentsApi.createComment(postId, data),
    onSuccess: (_, variables) => {
      // Invalidate comments query for this specific post to refetch
      queryClient.invalidateQueries({ queryKey: commentsQueryKey(variables.postId) });
    },
  });
}
