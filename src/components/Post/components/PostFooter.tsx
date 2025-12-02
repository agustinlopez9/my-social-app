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
      <div className="border border-border-default mt-4 mb-2" />
      <div className="flex flex-row items-center gap-3">
        <button className="hover:bg-surface-elevated rounded-full px-2 cursor-pointer transition-colors">
          <FaRegHeart onClick={handleLike} className="w-5 my-2" />
        </button>
        {handleCommentClick && (
          <button className="hover:bg-surface-elevated rounded-full px-2 cursor-pointer transition-colors">
            <FaRegComment onClick={handleCommentClick} className="w-5 my-2" />
          </button>
        )}
        {commentsCount}
      </div>
    </>
  );
};

export default PostFooter;
