import { useLoaderData } from "react-router-dom";
import parse from "html-react-parser";
function Blog() {
  const blog = useLoaderData();

  return (
    <div className="mt-8 border-8 p-8 rounded-lg">
      <h2 className="text-2xl font-semibold">{blog.title}</h2>
      <h4 className="text-lg mt-2 mb-2 font-medium bg-blue-400 inline-block px-4 py-0.5 rounded-3xl text-gray-100">
        {blog.author}
      </h4>
      <p className="text-sm mb-2 ml-2 text-gray-500 font-semibold">
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
