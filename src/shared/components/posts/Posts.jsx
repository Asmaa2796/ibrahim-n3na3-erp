import React, { useState } from "react";
import { usePosts, useCreatePost } from "../../../features/tanstack/hooks/usePosts";

const Posts = () => {
  const { data: posts, isLoading, isError } = usePosts();
  const { mutate, isPending } = useCreatePost();
  const [title, setTitle] = useState("");

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error fetching posts</p>;

  const handleAddPost = () => {
    mutate({ title, body: "Sample body", userId: 1 });
    setTitle("");
  };

  return (
    <div>
      <h3>Posts</h3>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New post title"
      />
      <button onClick={handleAddPost} disabled={isPending}>
        {isPending ? "Adding..." : "Add Post"}
      </button>

      <ul>
        {posts?.slice(0, 10).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
