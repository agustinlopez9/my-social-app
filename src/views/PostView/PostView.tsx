import { useParams, useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import Button from "components/ui/Button";
import Post from "components/Post/Post";
import CommentsSection from "components/CommentsSection";
import NotFound from "components/NotFound";
import { posts, comments } from "../../mockData";

const PostView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const postId = parseInt(id || "0", 10);

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return <NotFound message="Post not found" />;
  }

  return (
    <div className="relative">
      <Button
        variant="secondary"
        className="absolute z-20 top-6 -left-12 p-2 rounded-full"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />
      </Button>

      <Post>
        <Post.Header avatar={post.avatar} name={post.name} createdAt={post.createdAt} />
        <Post.Content title={post.title} content={post.content} />
        <Post.Footer commentsCount={comments.length}/>
      </Post>

      <CommentsSection comments={comments}/>
    </div>
  );
};

export default PostView;
