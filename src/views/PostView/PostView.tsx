import { useParams, useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import Post from "components/Post/Post";
import CommentsSection from "components/CommentsSection";
import Comment from "components/Comment/Comment";
import NotFound from "components/NotFound";
import { posts, comments } from "../../mockData";
import Button from "components/ui/Button";

const PostView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const postId = parseInt(id || "0", 10);

  const post = posts.find((post) => post.id === postId);
  const postComments = comments.filter((comment) => comment.parentId === postId);

  if (!post) {
    return <NotFound message="Post not found" />;
  }

  return (
    <div className="relative flex flex-col mx-auto max-w-3xl mt-4 mb-8">
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
        <Post.Footer commentsCount={postComments.length}/>
      </Post>

      <CommentsSection>
        {postComments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </CommentsSection>
    </div>
  );
};

export default PostView;
