interface CommentTreeBranchProps {
  isLast?: boolean;
}

const CommentTreeBranch = ({ isLast }: CommentTreeBranchProps) => {
  return (
    <div
      className={`border-border-default absolute -left-4 w-4 border-l ${
        isLast ? "h-10 border-transparent" : "h-[calc(100%+0.5rem)]"
      }`}
    >
      {isLast ? (
        <div className="border-border-default absolute bottom-2 -left-0.25 h-10 w-4 rounded-bl-lg border-b border-l" />
      ) : (
        <div className="border-border-default absolute top-10 left-0 w-4 border-t" />
      )}
    </div>
  );
};

export default CommentTreeBranch;
