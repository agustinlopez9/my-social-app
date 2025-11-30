import { useMutation, useQueryClient } from "@tanstack/react-query";
import { commentsApi } from "api/comments";
import { commentsQueryKey } from "./useComments";

interface CreateCommentVariables {
  postId: string;
  content: string;
}

export function useCreateComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, content }: CreateCommentVariables) =>
      commentsApi.createComment(postId, content),
    onSuccess: (_, variables) => {
      // Invalidate comments query for this specific post to refetch
      queryClient.invalidateQueries({ queryKey: commentsQueryKey(variables.postId) });
    },
  });
}
