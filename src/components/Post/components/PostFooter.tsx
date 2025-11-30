import { FaRegComment } from "react-icons/fa";

interface PostFooterProps {
  commentsCount?: number;
}

const PostFooter = ({ commentsCount }: PostFooterProps) => {
  return (
    <>
      <div className="border border-zinc-500 my-4" />
      <div className="flex flex-row items-center gap-1">
        <FaRegComment className="w-4 my-2" />
        {commentsCount}
      </div>
    </>
  );
};

export default PostFooter;
