//import { posts } from "../../mockData";
import LoadingIndicator from "components/ui/Loading";
import UserPost from "components/UserPost";
import { usePosts } from "hooks/posts/usePosts";

const PostsList = () => {
  const { data: posts, isLoading, error } = usePosts();

  if (isLoading) {
    return <LoadingIndicator loadingMessage="Loading posts..." />;
  }

  if (error) {
    return <div>Error loading posts: {error.message}</div>;
  }

  return (
    <>
      {posts?.map((post) => (
        <UserPost post={post} />
      ))}
    </>
  );
};

export default PostsList;
