import React from "react";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="bg-red-50 px-2 py-4">
      <div className="flex justify-between items-center">
        <img className="w-40" src="./logo.png" alt="logo" />
        <div className="text-lg flex gap-3 md:gap-5">
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
        <button className="btn-primary">Login</button>
      </div>
    </nav>
  );
};

export default NavigationBar;
