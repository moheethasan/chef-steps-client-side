import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/logo.png";
import { AuthContext } from "../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="navbar bg-red-50 p-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden text-red-500"
            >
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 px-4 py-2 shadow bg-base-100 rounded-lg w-40"
            >
              <div className="text-base md:text-lg flex flex-col gap-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                  to="/blog"
                >
                  Blog
                </NavLink>
              </div>
            </ul>
          </div>
          <Link to="/">
            <img className="w-32 md:w-40 ms-1" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <div className="text-base md:text-lg flex gap-3 md:gap-5">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "default")}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "default")}
                to="/blog"
              >
                Blog
              </NavLink>
            </div>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-1 md:gap-3 items-center">
              <div
                className="tooltip tooltip-bottom"
                data-tip={
                  user.displayName ? user.displayName : "name not found"
                }
              >
                {user.photoURL ? (
                  <img
                    className="w-10 md:w-14 rounded-full mr-1"
                    src={user.photoURL}
                    alt="user photo"
                  />
                ) : (
                  <FaUserCircle className="text-4xl md:text-5xl mr-1" />
                )}
              </div>
              <button onClick={handleLogout} className="btn-primary">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
