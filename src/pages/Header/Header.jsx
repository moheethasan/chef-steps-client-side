import React from "react";
import banner from "../../assets/banner.jpg";

const Header = () => {
  return (
    <div className="relative">
      <img className="w-full" src={banner} alt="" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 md:mb-5 font-bold text-gray-800">
          Welcome to ChefSteps!
        </h1>
        <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl mb-1 md:mb-3 text-gray-600">
          We're here to help you go from curious cook to confident in the
          kitchen.
        </h3>
        <button className="btn-primary">Start Your Free Trial</button>
      </div>
    </div>
  );
};

export default Header;
