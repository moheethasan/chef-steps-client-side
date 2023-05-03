import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/logo.png";
import { AuthContext } from "../../providers/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <nav className="bg-red-50 px-2 py-4">
      <div className="flex justify-between items-center">
        <img className="w-32 md:w-40" src={logo} alt="logo" />
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
        {user ? (
          <div className="flex gap-3">
            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
              <img
                className="w-14 rounded-full"
                src={user.photoURL}
                alt="user photo"
              />
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
    </nav>
  );
};

export default NavigationBar;
