import Avatar from "components/ui/Avatar";
import { getRelativeTimeFromDate } from "utils";
import type { Comment as CommentType } from "../../../mockData";

interface CommentProps {
  comment: CommentType;
}

const Comment = ({ comment }: CommentProps) => {
  const { avatar, name, createdAt, content } = comment;
  const commentDate = new Date(createdAt).toLocaleString();

  return (
    <div className="bg-zinc-800 rounded-lg p-4 border border-zinc-600 mb-2">
      <Avatar
        src={avatar}
        alt={name}
        title={name}
        subtitle={getRelativeTimeFromDate(commentDate)}
        size="smaller"
        direction="row"
      />
      <p className="text-white text-sm mt-2">{content}</p>
    </div>
  );
};

export default Comment;
