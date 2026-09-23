import React from "react";
import type { PostData } from "../types/post";

interface PostProps {
  post: PostData;
}

function Post({ post }: PostProps) {
  return (
    <article className={`post ${post.isNew ? "new-post" : ""}`}>
      <h2>
        {post.title}

        {post.isNew && <span className="new-badge">NEW!</span>}
      </h2>

      <p className="post-author">By {post.author}</p>

      <p className="post-content">{post.content}</p>

      <small className="post-date">{post.date}</small>
    </article>
  );
}

export default React.memo(Post);