import Avatar from "components/ui/Avatar";
import { getRelativeTimeFromDate } from "utils/utils";
import type { Comment as CommentType } from "../../../mockData";

interface CommentProps {
  comment: CommentType;
}

const Comment = ({ comment }: CommentProps) => {
  const { avatar, name, createdAt, content } = comment;
  const commentDate = new Date(createdAt).toLocaleString();

  return (
    <div className="bg-surface-secondary rounded-lg p-4 border border-border-subtle mb-2">
      <Avatar
        src={avatar}
        alt={name}
        title={name}
        subtitle={getRelativeTimeFromDate(commentDate)}
        size="smaller"
        direction="row"
      />
      <p className="text-primary text-sm mt-2">{content}</p>
    </div>
  );
};

export default Comment;
