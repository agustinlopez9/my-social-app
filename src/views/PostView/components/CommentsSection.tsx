import { useMemo } from "react";
import Comment from "./Comment";
import type { Comment as CommentType } from "src/mockData";
import { useComments } from "hooks/comments/useComments";

interface CommentsSectionProps {
  postId?: string;
}

interface ResponseCommentProps {
  commentsByParentId: Map<string | null, CommentType[]>;
  parentId: string | null;
}

const ResponseComment = ({ commentsByParentId, parentId }: ResponseCommentProps) => {
  const responseComments = commentsByParentId.get(parentId);

  if (!responseComments || !responseComments.length) return null;

  return (
    <div className="ml-6">
      {responseComments.map((comment) => {
        return (
          <div key={comment.id}>
            <Comment comment={comment} />
            <ResponseComment commentsByParentId={commentsByParentId} parentId={comment.id} />
          </div>
        );
      })}
    </div>
  );
};

const CommentsSection = ({ postId }: CommentsSectionProps) => {
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
    return <div>Loading comments...</div>;
  }

  if (error) {
    return <div>Error loading comments: {error.message}</div>;
  }

  return (
    <div className="bg-zinc-700 rounded-sm p-2 border border-zinc-600 mt-6">
      {topLevelComments.map((comment) => (
        <div key={comment.id}>
          <Comment comment={comment} />
          <ResponseComment commentsByParentId={commentsByParentId} parentId={comment.id} />
        </div>
      ))}
    </div>
  );
};

export default CommentsSection;
