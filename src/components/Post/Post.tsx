import type { PropsWithChildren } from "react";
import PostHeader from "./components/PostHeader";
import PostFooter from "./components/PostFooter";
import PostContent from "./components/PostContent";

interface PostProps extends PropsWithChildren {
  enableHover?: boolean;
}

const PostRoot = ({ enableHover = true, children }: PostProps) => {
  return (
    <div
      className={`relative text-primary border bg-surface-primary border-border-subtle ${enableHover ? "hover:border-border-interactive" : ""} p-4 m-2 rounded-sm transition ease-in-out duration-200 shadow-sm`}
    >
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
