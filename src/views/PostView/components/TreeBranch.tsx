interface CommentTreeBranchProps {
  isLast?: boolean;
}

const CommentTreeBranch = ({ isLast }: CommentTreeBranchProps) => {
  return (
    <div
      className={`absolute -left-4 w-4 border-l border-border-default ${
        isLast ? "h-8 border-transparent" : "h-full"
      }`}
    >
      {isLast ? (
        <div className="absolute bottom-2 -left-0.25 w-4 h-10 border-l border-b border-border-default rounded-bl-lg" />
      ) : (
        <div className="absolute top-10 left-0 w-4 border-t border-border-default" />
      )}
    </div>
  );
};

export default CommentTreeBranch;
