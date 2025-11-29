import Post from "./Post/Post";
import type { Post as PostType } from "mockData";

interface UserPostProps {
  post: PostType;
}

const UserPost = ({ post }: UserPostProps) => {
  const { avatar, title, name, content, createdAt } = post;

  return (
    <Post>
      <Post.Header avatar={avatar} name={name} createdAt={createdAt} />
      <Post.Content title={title} content={content} />
      <Post.Footer />
    </Post>
  );
};

export default UserPost;
