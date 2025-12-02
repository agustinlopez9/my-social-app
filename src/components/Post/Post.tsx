import { useState, type PropsWithChildren } from "react";
import { PostContext } from "./context";
import PostHeader from "./components/PostHeader";
import PostFooter from "./components/PostFooter";
import PostContent from "./components/PostContent";

interface PostProps extends PropsWithChildren {
  enableHover?: boolean;
  editable?: boolean;
}

const PostRoot = ({ enableHover = true, editable = true, children }: PostProps) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <PostContext.Provider value={{ isEditing, setIsEditing, editable }}>
      <div
        className={`text-primary bg-surface-primary border-border-subtle relative border ${enableHover ? "hover:border-border-interactive" : ""} m-2 rounded-sm p-4 shadow-sm transition duration-200 ease-in-out`}
      >
        {children}
      </div>
    </PostContext.Provider>
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
