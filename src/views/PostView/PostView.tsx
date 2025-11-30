import { useParams, useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { usePost } from "hooks/posts/usePost";
import Button from "components/ui/Button";
import NotFound from "components/NotFound";
import LoadingIndicator from "components/ui/Loading";
import Post from "components/Post/Post";
import CommentsSection from "views/PostView/components/CommentsSection";

const PostView = () => {
  const { id: postId } = useParams();
  const navigate = useNavigate();

  const { data: post, isLoading, error } = usePost(postId || "");

  if (isLoading) {
    return <LoadingIndicator loadingMessage="Loading post..." />;
  }

  if (error) {
    return <div>Error loading posts: {error.message}</div>;
  }

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
        <Post.Footer />
      </Post>

      <CommentsSection postId={postId} />
    </div>
  );
};

export default PostView;
