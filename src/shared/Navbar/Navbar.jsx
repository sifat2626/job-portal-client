import { useContext } from "react";
import logo from "../../../public/logo.jpg";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const navList = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/all-jobs"}>All Jobs</NavLink>
      </li>
      <li>
        <NavLink to={"/blogs"}>Blogs</NavLink>
      </li>

      {!user && (
        <>
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
          <li>
            <NavLink to={"/register"}>Register</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navList}
          </ul>
        </div>
        <div className="flex gap-2">
          <img src={logo} alt="" className="h- w-8" />
          <Link to={"/"} className="text-xl font-bold">
            Webby
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
      </div>
      <div className="navbar-end">
        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div title={user.displayName} className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/profile"}>User Profile</Link>
              </li>
              <li>
                <Link to={"/add-job"}>Add Job</Link>
              </li>
              <li>
                <Link to={"/my-jobs"}>My Jobs</Link>
              </li>
              <li>
                <Link to={"/applied-jobs"}>Applied Jobs</Link>
              </li>
              <li>
                <Link to={"/add-blog"}>Add Blog</Link>
              </li>
              <li>
                <Link onClick={logOut}>Logout</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
