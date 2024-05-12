import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllJobs from "../Pages/AllJobs/AllJobs";
import Blogs from "../Pages/Blogs/Blogs";
import AddJob from "../Pages/AddJob/AddJob";
import AddBlog from "../Pages/AddBlog/AddBlog";
import MyJobs from "../Pages/MyJobs/MyJobs";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import PrivateRoute from "./PrivateRoute";
import JobDetails from "../Pages/JobDetails/JobDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import UserProfile from "../Pages/UserProfile/UserProfile";
import UpdateJob from "../Pages/UpdateJob/UpdateJob";
import axios from "axios";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/all-jobs",
        element: <AllJobs />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/jobs`),
      },
      {
        path: "/blogs",
        element: <Blogs />,
        loader: () => {
          return fetch(`${import.meta.env.VITE_API_URL}/blogs`);
        },
      },
      {
        path: "/blogs/:id",
        element: <Blog />,
        loader: ({ params }) => {
          return fetch(`${import.meta.env.VITE_API_URL}/blogs/${params.id}`);
        },
      },

      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-job",
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-blog",
        element: (
          <PrivateRoute>
            <AddBlog />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-job/:id",
        element: (
          <PrivateRoute>
            <UpdateJob />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const { data } = await axios.get(
            `${import.meta.env.VITE_API_URL}/jobs/${params.id}`,
            { withCredentials: true }
          );
          return data.job;
        },
      },
      {
        path: "/my-jobs",
        element: (
          <PrivateRoute>
            <MyJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/applied-jobs",
        element: (
          <PrivateRoute>
            <AppliedJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/jobs/${params.id}`,
            {
              credentials: "include", // Include credentials (cookies) in the request
            }
          );
          return await response.json();
        },
      },
    ],
  },
]);

export default router;
