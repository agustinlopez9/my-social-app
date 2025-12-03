import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useInfinitePosts } from "hooks/posts/useInfinitePosts";
import LoadingIndicator from "components/ui/Loading";
import UserPost from "components/UserPost";

const PostsList = () => {
  const { t } = useTranslation();
  const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfinitePosts();

  const observerTarget = useRef<HTMLDivElement>(null);

  // TODO: create a custom hook to reuse logic on comments list
  useEffect(() => {
    const target = observerTarget.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

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

  const posts = data?.pages.flatMap((page) => page) ?? [];

  return (
    <>
      {posts.map((post) => (
        <UserPost key={post.id} post={post} />
      ))}

      <div ref={observerTarget} />

      {isLoading ||
        (isFetchingNextPage && (
          <div className="my-6">
            <LoadingIndicator
              loadingMessage={t("loading.copy.withData", {
                data: t("posts.labels.title"),
              })}
            />
          </div>
        ))}
    </>
  );
};

export default PostsList;
