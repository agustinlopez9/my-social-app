import { Link } from "react-router";
import Post from "./Post/Post";
import type { Post as PostType } from "mockData";

interface UserPostProps {
  post: PostType;
}

const UserPost = ({ post }: UserPostProps) => {
  const { id, avatar, title, name, content, createdAt } = post;

  return (
    <Link to={`/post/${id}`} className="block no-underline cursor-pointer m-2">
      <Post>
        <Post.Header avatar={avatar} name={name} createdAt={createdAt} />
        <Post.Content title={title} content={content} />
        <Post.Footer />
      </Post>
    </Link>
  );
};

export default UserPost;
