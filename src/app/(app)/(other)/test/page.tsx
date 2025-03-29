import { MDXContent } from "@content-collections/mdx/react";
import { components } from "@/components/mdx-component";

export default function App() {
  // console.log(allBlogs);
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {/* {allBlogs.map((post) => (
          <li key={post._meta.path}>
            <h2>{post.title}</h2>
            <MDXContent code={post.mdx} />
          </li>
        ))} */}
      </ul>
    </main>
  );
}