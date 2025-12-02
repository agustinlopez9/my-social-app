import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import type { Comment as CommentType } from "api/types";
import { useComments } from "hooks/comments/useComments";
import LoadingIndicator from "components/ui/Loading";
import Error from "components/ui/Error";
import CommentTreeBranch from "./TreeBranch";
import CreateCommentForm from "./CreateCommentForm";
import Comment from "./Comment";

interface CommentsSectionProps {
  postId?: string;
}

interface ResponseCommentProps {
  postId: string;
  commentsByParentId: Map<string | null, CommentType[]>;
  parentId: string | null;
}

const ResponseComment = ({ postId, commentsByParentId, parentId }: ResponseCommentProps) => {
  const responseComments = commentsByParentId.get(parentId);

  if (!responseComments || !responseComments.length) return null;

  return (
    <div className="ml-6 pl-2">
      {responseComments.map((comment, index) => {
        const isLast = index === responseComments.length - 1;
        return (
          <div key={comment.id} className="relative">
            <CommentTreeBranch isLast={isLast} />
            <Comment postId={postId} parentId={parentId} comment={comment} />
            <ResponseComment
              postId={postId}
              commentsByParentId={commentsByParentId}
              parentId={comment.id}
            />
          </div>
        );
      })}
    </div>
  );
};

const CommentsSection = ({ postId }: CommentsSectionProps) => {
  const { t } = useTranslation();
  const { data: comments, isLoading, error } = useComments(postId || "");

  const commentsByParentId = useMemo(() => {
    const map = new Map<string | null, CommentType[]>();

    if (!comments || comments.length === 0) {
      return map;
    }

    comments.forEach((comment) => {
      const parentId = comment.parentId;
      if (!map.has(parentId)) {
        map.set(parentId, []);
      }
      map.get(parentId)!.push(comment);
    });

    return map;
  }, [comments]);

  const topLevelComments = commentsByParentId.get(null) || [];

  if (isLoading) {
    return (
      <div className="my-10">
        <LoadingIndicator
          loadingMessage={t("loading.copy.withData", {
            data: t("comments.labels.title").toLowerCase(),
          })}
        />
      </div>
    );
  }

  return (
    <>
      <div className="bg-surface-primary border border-border-subtle rounded-sm m-2 mt-4 p-4">
        <CreateCommentForm postId={postId} isReply={false} />
      </div>
      {!error ? (
        <div className="bg-surface-primary rounded-sm p-2 m-2 mt-6 border border-border-subtle overflow-x-scroll">
          {topLevelComments.map((comment) => (
            <div key={comment.id}>
              <Comment postId={postId || ""} parentId={null} comment={comment} />
              <ResponseComment
                postId={postId || ""}
                commentsByParentId={commentsByParentId}
                parentId={comment.id}
              />
            </div>
          ))}
        </div>
      ) : (
        <Error message={t("comments.errors.load")} error={error} />
      )}
    </>
  );
};

export default CommentsSection;
