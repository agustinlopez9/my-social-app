import { useMutation, useQueryClient } from "@tanstack/react-query";
import { commentsApi } from "api/comments";
import { commentsQueryKey } from "./useComments";

interface CreateCommentVariables {
  postId: string;
  parentId: string | null;
  content: string;
}

export function useCreateComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, content, parentId }: CreateCommentVariables) =>
      commentsApi.createComment(postId, parentId, content),
    onSuccess: (_, variables) => {
      // Invalidate comments query for this specific post to refetch
      queryClient.invalidateQueries({ queryKey: commentsQueryKey(variables.postId) });
    },
  });
}
