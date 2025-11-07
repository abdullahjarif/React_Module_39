import { use } from "react";
import PostDetails from "./post_details";

export default function Post({ postsUser }) {
  const posts = use(postsUser);
  return (
    <div className="card">
      <h2>Total Post: {posts.length}</h2>
      {posts.map((post) => (
        <PostDetails key={post.id} post={post}></PostDetails>
      ))}
    </div>
  );
}
