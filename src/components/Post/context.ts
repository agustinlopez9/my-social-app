import { createContext, useContext } from "react";

export interface PostContextValue {
  postId?: string;
  dropdownOpen: boolean;
  setDropdownOpen: (open: boolean) => void;
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
  editable: boolean;
}

export const PostContext = createContext<PostContextValue | undefined>(undefined);

export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("Post compound components must be used within a Post component");
  }
  return context;
};
