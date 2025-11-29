import type { ReactNode } from "react";
import PostHeader from "./components/PostHeader";
import PostFooter from "./components/PostFooter";
import PostContent from "./components/PostContent";

interface PostProps {
  children: ReactNode;
}

const PostRoot = ({ children }: PostProps) => {
  return (
    <div className="relative text-white border bg-zinc-700 border-zinc-600 hover:border-orange-600 p-4 rounded-sm transition ease-in-out duration-200">
      {children}
    </div>
  );
};

type PostComponent = typeof PostRoot & {
  Header: typeof PostHeader;
  Content: typeof PostContent;
  Footer: typeof PostFooter;
};

const Post = PostRoot as PostComponent;
Post.Header = PostHeader;
Post.Content = PostContent;
Post.Footer = PostFooter;

export default Post;
