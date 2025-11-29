interface PostContentProps {
  title: string;
  content: string;
}

const PostContent = ({ title, content }: PostContentProps) => {
  return (
    <>
      <h2 className="my-2 text-md font-bold">{title}</h2>
      <p className="my-2 text-sm">{content}</p>
    </>
  );
};

export default PostContent;
