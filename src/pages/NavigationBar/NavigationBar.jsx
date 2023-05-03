import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/logo.png";

const NavigationBar = () => {
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
        <Link to="/login" className="btn-primary">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
