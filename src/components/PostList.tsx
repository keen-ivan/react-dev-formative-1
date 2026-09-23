import Post from "./Post";
import type { PostData } from "../types/post";

function PostList() {
  const posts: PostData[] = [
    {
      id: 1,
      title: "Understanding React Props",
      author: "Ivan Mucyo",
      content:
        "Props allow components to receive data from their parent components and make React components reusable.",
      date: "September 23, 2026",
      isNew: true,
    },
    {
      id: 2,
      title: "Getting Started with TypeScript",
      author: "Jane Doe",
      content:
        "TypeScript adds static typing to JavaScript and helps developers catch errors before running their applications.",
      date: "September 20, 2026",
      isNew: false,
    },
    {
      id: 3,
      title: "Why Component Reusability Matters",
      author: "Alex Smith",
      content:
        "Reusable components help developers organize their applications and reduce duplicated code.",
      date: "September 18, 2026",
      isNew: false,
    },
  ];

  return (
    <section className="post-list">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
}

export default PostList;