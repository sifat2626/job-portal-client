import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import { Toaster } from "react-hot-toast";

function Root() {
  return (
    <div className="custom-container">
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  );
}

export default Root;
