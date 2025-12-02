import { useMutation, useQueryClient } from "@tanstack/react-query";
import { commentsApi } from "api/comments";
import type { Post, Comment } from "api/types";
import { commentsQueryKey } from "./useComments";

export interface EditCommentVariables {
  postId: Post["id"];
  commentId: Comment["id"];
  content: Comment["content"];
}

export function useEditComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, commentId, content }: EditCommentVariables) =>
      commentsApi.editComment(postId, commentId, content),
    onSuccess: (_, variables) => {
      // Invalidate comments query to refetch
      queryClient.invalidateQueries({ queryKey: commentsQueryKey(variables.postId) });
    },
  });
}
