import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllJobs from "../Pages/AllJobs/AllJobs";
import Blogs from "../Pages/Blogs/Blogs";
import AddJob from "../Pages/AddJob/AddJob";
import MyJobs from "../Pages/MyJobs/MyJobs";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import PrivateRoute from "./PrivateRoute";
import JobDetails from "../Pages/JobDetails/JobDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import UserProfile from "../Pages/UserProfile/UserProfile";

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
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`),
      },
    ],
  },
]);

export default router;
