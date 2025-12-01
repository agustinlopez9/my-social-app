//import { posts } from "../../mockData";
import { useTranslation } from "react-i18next";
import LoadingIndicator from "components/ui/Loading";
import UserPost from "components/UserPost";
import { usePosts } from "hooks/posts/usePosts";

const PostsList = () => {
  const { t } = useTranslation();
  const { data: posts, isLoading, error } = usePosts();

  if (isLoading) {
    return (
      <LoadingIndicator
        loadingMessage={t("loading.copy.withData", {
          data: t("loading.labels.posts"),
        })}
      />
    );
  }

  if (error) {
    return (
      <div>
        {t("posts.errors.load")} {error.message}
      </div>
    );
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
