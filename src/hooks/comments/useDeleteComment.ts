import { useMutation, useQueryClient } from "@tanstack/react-query";
import { commentsApi } from "api/comments";
import { commentsQueryKey } from "./useComments";

interface DeleteCommentVariables {
  postId: string;
  commentId: string;
}

export function useDeleteComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, commentId }: DeleteCommentVariables) =>
      commentsApi.deleteComment(postId, commentId),
    onSuccess: (_, variables) => {
      // Invalidate comments query for this specific post to refetch
      queryClient.invalidateQueries({ queryKey: commentsQueryKey(variables.postId) });
    },
  });
}
