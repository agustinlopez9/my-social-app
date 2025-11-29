import type { PropsWithChildren } from "react";

const CommentsSection = ({children}: PropsWithChildren) => {
  return (
    <div className="bg-zinc-700 rounded-sm p-4 shadow-lg border border-zinc-600 mt-6">
      {children}
    </div>
  );
}
 
export default CommentsSection;