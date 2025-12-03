# API Architecture

This folder contains the API layer for the Social App, organized for use with TanStack Query.

## Structure

```
src/
├── config/
│   └── env.ts                    # Environment variables (type-safe)
├── lib/
│   └── api-client.ts             # Base HTTP client with error handling
├── api/
│   ├── types.ts                  # TypeScript interfaces for API responses
│   ├── posts.ts                  # Post-related API functions
│   └── comments.ts               # Comment-related API functions
└── hooks/
    ├── posts/
    │   ├── usePosts.ts           # Fetch all posts
    │   ├── usePost.ts            # Fetch single post
    │   ├── useCreatePost.ts      # Create post
    │   ├── useEditPost.ts        # Edit post
    │   └── useDeletePost.ts      # Delete post
    └── comments/
        ├── useComments.ts        # Fetch comments for a post
        ├── useCreateComment.ts   # Create comment
        ├── useEditComment.ts   # Edit comment
        └── useDeleteComment.ts   # Delete comment
```

## Usage Examples

### Fetching Posts

```typescript
import { usePosts } from 'hooks/posts/usePosts';

function PostsList() {
  const { data: posts, isLoading, error } = usePosts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {posts?.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
```

### Creating a Post

```typescript
import { useCreatePost } from 'hooks/posts/useCreatePost';

function NewPostForm() {
  const createPost = useCreatePost();

  const handleSubmit = (content: string) => {
    createPost.mutate(content, {
      onSuccess: () => {
        console.log('Post created!');
      },
      onError: (error) => {
        console.error('Failed to create post:', error);
      },
    });
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSubmit(e.currentTarget.content.value);
    }}>
      <input name="content" />
      <button type="submit" disabled={createPost.isPending}>
        {createPost.isPending ? 'Creating...' : 'Create Post'}
      </button>
    </form>
  );
}
```

## Environment Variables

The API uses environment variables defined in `.env.local`:

```env
VITE_BASE_API_URL=https://665de6d7e88051d60408c32d.mockapi.io
```

Access them through the type-safe config:

```typescript
import { ENV } from "config/env";

console.log(ENV.BASE_API_URL);
```

## Error Handling

The API client includes a custom `ApiError` class:

```typescript
try {
  const posts = await postsApi.getPosts();
} catch (error) {
  if (error instanceof ApiError) {
    console.error(`API Error ${error.status}: ${error.message}`);
  }
}
```
