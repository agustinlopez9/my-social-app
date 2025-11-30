import Filters from "components/Filters";
import NewPost from "components/NewPost";
import PostsList from "./PostsList";

const MainView = () => {
  return (
    <>
      <div className="flex flex-col">
        <NewPost />
        <Filters />
        <PostsList />
      </div>
    </>
  );
};

export default MainView;
