import Filters from "components/Filters";
import NewPost from "components/NewPost";
import { posts } from "../../mockData";
import UserPost from "components/UserPost";

const MainView = () => {
  return (
    <>
      <div className="flex flex-col mx-auto max-w-3xl mt-4 mb-8">
        <NewPost />
        <Filters />
        {posts.map((post) => (
          <UserPost post={post}/>
        ))}
      </div>
    </>
  );
};

export default MainView;
