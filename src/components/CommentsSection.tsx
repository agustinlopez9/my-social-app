import type { Comment as CommentType } from "src/mockData";
import Comment from "./Comment/Comment";

interface CommentsSectionProps {
  comments: CommentType[];
  parentId?: number;
}

const ResponseComment = ({ comments, parentId }: CommentsSectionProps) => {
  const responseComments = comments.filter((comment) => comment.parentId === parentId);
  return (
    <div className="ml-6">
      {responseComments.map((comment) => {
        return (
          <>
            <Comment key={comment.id} comment={comment} />
            <ResponseComment comments={comments} parentId={comment.id} />
          </>
        );
      })}
    </div>
  );
};

const CommentsSection = ({ comments }: CommentsSectionProps) => {
  // Filter only top-level comments (those without a parentId)
  const filteredComments = comments.filter((comment) => !comment.parentId);
  return (
    <div className="bg-zinc-700 rounded-sm p-2 border border-zinc-600 mt-6">
      {filteredComments.map((comment) => 
        <div key={comment.id}>
          <Comment comment={comment} />
          <ResponseComment comments={comments} parentId={comment.id} />
        </div>
      )}
    </div>
  );
};

export default CommentsSection;
