import PostHeader from "components/PostHeader";
import PostFooter from "./PostFooter";
import type { Post as PostProps } from "mockData";

const Post = ({ avatar, name, createdAt, title, content }: PostProps) => {

  return (
    <>
      <div className="relative text-white border bg-zinc-700   border-zinc-600 hover:border-orange-600 p-4 m-2 rounded-sm transition ease-in-out duration-200">
        <PostHeader avatar={avatar} name={name} createdAt={createdAt} />
        <h2 className="my-2 text-md font-bold">{title}</h2>
        <p className="my-2 text-sm">{content}</p>
        <PostFooter />
      </div>
    </>
  );
};

export default Post;
