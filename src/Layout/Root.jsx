import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

function Root() {
  return (
    <div className="custom-container">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Root;
