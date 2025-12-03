import { useTranslation } from "react-i18next";
import { usePosts } from "hooks/posts/usePosts";
import LoadingIndicator from "components/ui/Loading";
import UserPost from "components/UserPost";

const PostsList = () => {
  const { t } = useTranslation();
  const { data: posts, isLoading, error } = usePosts();

  if (isLoading) {
    return (
      <div className="my-6">
        <LoadingIndicator
          loadingMessage={t("loading.copy.withData", {
            data: t("posts.labels.title"),
          })}
        />
      </div>
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
        <UserPost key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostsList;
