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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/add-job",
        element: <AddJob />,
      },
      {
        path: "/my-jobs",
        element: <MyJobs />,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs />,
      },
    ],
  },
]);

export default router;
