import { Link, useLoaderData } from "react-router-dom";

function Blogs() {
  const blogs = useLoaderData();
  return (
    <div className=" custom-container dark:text-gray-400">
      <div className="mt-16">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="flex justify-between border-4 p-4 mb-4 rounded-lg items-center"
          >
            <h3 className="lg:text-xl font-semibold">{blog.title}</h3>
            <Link
              to={`/blogs/${blog._id}`}
              className="bg-green-400 text-white px-4 py-2 rounded-lg"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
