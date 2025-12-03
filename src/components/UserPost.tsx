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
    <Post postId={id} editable={false} onClick={handlePostClick}>
      <Post.Header avatar={avatar} name={name} createdAt={createdAt} />
      <Post.Content title={title} content={content} />
      <Post.Footer handleCommentClick={handlePostClick} />
    </Post>
  );
};

export default UserPost;
