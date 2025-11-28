import Navbar from "components/layout/Navbar";
import Post from "components/Post";
import Filters from "components/Filters";
import { posts } from "./mockData";
import NewPost from "components/NewPost";

function App() {
  return (
    <div className="flex flex-col">
    <Navbar />
    <div className="flex flex-col mx-auto max-w-3xl mt-4 mb-8">
      <NewPost />
      <Filters />
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
      </div>
    </div>
  );
}

export default App;
