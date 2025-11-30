export interface Post {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
  title: string;
  content: string;
}

export interface Comment {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
  content: string;
  parentId: string | null;
}
