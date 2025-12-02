import { useNavigate } from "react-router";
import type { Post as PostType } from "api/types";
import Post from "./Post/Post";

interface UserPostProps {
  post: PostType;
}

const UserPost = ({ post }: UserPostProps) => {
  const { id, avatar, title, name, content, createdAt } = post;
  const navigate = useNavigate();

  const handlePostClick = () => {
    navigate(`/post/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div onClick={handlePostClick} className="block cursor-pointer">
      <Post editable={false}>
        <Post.Header postId={id} avatar={avatar} name={name} createdAt={createdAt} />
        <Post.Content title={title} content={content} />
        <Post.Footer handleCommentClick={handlePostClick} />
      </Post>
    </div>
  );
};

export default UserPost;
