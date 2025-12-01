import Filters from "components/Filters";
import CreatePost from "components/CreatePost/CreatePost";
import PostsList from "./PostsList";

const MainView = () => {
  return (
    <>
      <div className="flex flex-col">
        <CreatePost />
        <Filters />
        <PostsList />
      </div>
    </>
  );
};

export default MainView;
