import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import { Toaster } from "react-hot-toast";

function Root() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-gray-400">
      <div className=" sticky top-0 z-50 bg-white ">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  );
}

export default Root;
