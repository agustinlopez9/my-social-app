import { useNavigate } from "react-router";
import Post from "./Post/Post";
import type { Post as PostType } from "mockData";

interface UserPostProps {
  post: PostType;
}

const UserPost = ({ post }: UserPostProps) => {
  const { id, avatar, title, name, content, createdAt } = post;
  const navigate = useNavigate();

  const handlePostClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/post/${id}`);
  };

  return (
    <div onClick={handlePostClick} className="block cursor-pointer m-2">
      <Post>
        <Post.Header avatar={avatar} name={name} createdAt={createdAt} />
        <Post.Content title={title} content={content} />
        <Post.Footer />
      </Post>
    </div>
  );
};

export default UserPost;
