import { FaRegHeart, FaRegComment } from "react-icons/fa";

interface PostFooterProps {
  commentsCount?: number;
  handleCommentClick?: () => void;
}

const PostFooter = ({ commentsCount, handleCommentClick }: PostFooterProps) => {
  const handleLike = () => {
    // TODO: Logic to handle liking the post
    console.log("Post liked!");
  };

  return (
    <>
      <div className="border-border-default mt-4 mb-2 border" />
      <div className="flex flex-row items-center gap-3">
        <button className="hover:bg-surface-elevated cursor-pointer rounded-full px-2 transition-colors">
          <FaRegHeart onClick={handleLike} className="my-2 w-5" />
        </button>
        {handleCommentClick && (
          <button className="hover:bg-surface-elevated cursor-pointer rounded-full px-2 transition-colors">
            <FaRegComment onClick={handleCommentClick} className="my-2 w-5" />
          </button>
        )}
        {commentsCount}
      </div>
    </>
  );
};

export default PostFooter;
