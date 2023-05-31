import React from "react";
import logo from "../../../public/logo.png";
import social from "../../assets/group.png";
import { FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-red-50 mt-20 pt-20 pb-10 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0">
        <div className="">
          <img className="w-32 mb-3" src={logo} alt="logo" />
          <p className="mb-4">
            Figure out what is in your food! Have you ever looked at a
            commercial food product and wondered how to make it? Not a problem.
            We ChefSteps are here to help you recreate a recipe from any
            nutrition label.
          </p>
          <img className="mb-4" src={social} alt="social link" />
        </div>
        <div className="flex justify-between md:justify-around">
          <div className="">
            <h3 className="text-xl font-bold mb-5 text-gray-600">
              Helpful Links
            </h3>
            <p className="mb-4">Recipes & Menus</p>
            <p className="mb-4">Expert Advice</p>
            <p className="mb-4">Ingredients</p>
            <p className="mb-4">Holidays & Events</p>
          </div>
          <div className="">
            <h3 className="text-xl font-bold mb-5 text-gray-600">
              Quick Links
            </h3>
            <p className="mb-4">Beef Recipes</p>
            <p className="mb-4">Chicken Recipes</p>
            <p className="mb-4">Seafood Recipes</p>
            <p className="mb-4">Fish Recipes</p>
          </div>
        </div>
        <div className="">
          <h3 className="text-xl font-bold mb-5 text-gray-600">Subscribe</h3>
          <p className="mb-4">
            Subscribe for our latest Recipes. We Won't Give You Spam Mails
          </p>
          <div className="flex">
            <input
              className="border-0 rounded-l-xl w-full md:w-3/4 p-4"
              type="email"
              placeholder="Email Address"
            />
            <button className="transition duration-200 px-3 md:px-5 py-3 md:py-4 text-white hover:bg-red-500 bg-red-400 border-2 border-red-400 hover:border-red-500 rounded-r-xl">
              <FaPaperPlane className="text-4xl" />
            </button>
          </div>
        </div>
      </div>
      <p className="text-center pt-16 pb-10">
        <small>© 2023 chefSteps Inc. All rights reserved.</small>
      </p>
    </footer>
  );
};

export default Footer;
