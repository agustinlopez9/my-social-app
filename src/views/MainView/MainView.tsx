import Filters from "components/Filters";
import CreatePostForm from "components/PostForm/CreatePostForm";
import PostsList from "./PostsList";

const MainView = () => {
  return (
    <>
      <div className="flex flex-col">
        <CreatePostForm />
        <Filters />
        <PostsList />
      </div>
    </>
  );
};

export default MainView;
