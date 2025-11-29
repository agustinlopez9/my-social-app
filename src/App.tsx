import Navbar from "components/layout/Navbar";
import Post from "components/Post/Post";
import Filters from "components/Filters";
import { posts } from "./mockData";
import NewPost from "components/NewPost";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row">
        <div className="flex flex-col mx-auto max-w-3xl mt-4 mb-8">
          <NewPost />
          <Filters />
          {posts.map((post) => (
            <>
            <Post key={post.id}>
              <Post.Header
                avatar={post.avatar}
                name={post.name}
                createdAt={post.createdAt}
                />
              <Post.Content title={post.title} content={post.content} />
              <Post.Footer />
            </Post>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
