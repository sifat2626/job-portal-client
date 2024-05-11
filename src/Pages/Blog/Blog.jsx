import { useLoaderData } from "react-router-dom";
import parse from "html-react-parser";
function Blog() {
  const blog = useLoaderData();

  return (
    <div className="mt-8 border-8 p-8 rounded-lg">
      <h2 className="text-2xl font-semibold">{blog.title}</h2>
      <p className="text-sm my-2 text-gray-500 font-semibold">
        {new Date(blog.createdAt).toLocaleDateString()}
      </p>
      <p>
        {parse(`
    ${blog.content}
  `)}
      </p>
    </div>
  );
}

export default Blog;
