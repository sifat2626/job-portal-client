import { Link, useLoaderData } from "react-router-dom";

function Blogs() {
  const blogs = useLoaderData();
  return (
    <div className=" custom-container dark:text-gray-400">
      <div className="mt-16">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="flex flex-col md:flex-row justify-between border-4 p-4 mb-4 rounded-lg items-center"
          >
            <h3 className="lg:text-xl font-semibold max-w-sm lg:max-w-4xl">
              {blog.title}
            </h3>
            <Link
              to={`/blogs/${blog._id}`}
              className="bg-green-400 mt-4 md:mt-0 md:w-auto text-white px-4 py-2 rounded-lg"
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
