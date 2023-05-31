import React from "react";
import review1 from "../../assets/review1.jpg";
import review2 from "../../assets/review2.jpg";
import review3 from "../../assets/review3.jpg";
import { FaUser } from "react-icons/fa";

const ClientsReview = () => {
  return (
    <div className="container mx-auto px-4 py-14 md:py-20">
      <fieldset className="border-t border-gray-400">
        <legend className="mx-auto px-4 text-gray-800 text-3xl md:text-4xl xl:text-5xl font-semibold">
          What Our Clients Say
        </legend>
      </fieldset>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-10 md:mt-20">
        <div className="flex bg-base-100 shadow-xl rounded-2xl h-56 lg:h-64">
          <div className="p-5 flex flex-col gap-5 w-3/5 lg:w-1/2">
            <span className="flex items-center gap-1 text-xl font-semibold text-error">
              <FaUser />
              Jasmine.kings
            </span>
            <p className="italic text-lg">
              "Really tasty! to thicken the teriyaki sauce just add a few
              teaspoons of flour or cornstarch."
            </p>
          </div>
          <div className="w-2/5 lg:w-1/2">
            <img
              className="w-full rounded-r-2xl h-full"
              src={review1}
              alt="review"
            />
          </div>
        </div>
        <div className="flex bg-base-100 shadow-xl rounded-2xl h-56 lg:h-64">
          <div className="p-5 flex flex-col gap-5 w-3/5 lg:w-1/2">
            <span className="flex items-center gap-1 text-xl font-semibold text-error">
              <FaUser />
              Tinycook
            </span>
            <p className="italic text-lg">
              "Absolutely amazing!! Follow the recipe just as it is."
            </p>
          </div>
          <div className="w-2/5 lg:w-1/2">
            <img
              className="w-full rounded-r-2xl h-full"
              src={review2}
              alt="review"
            />
          </div>
        </div>
        <div className="flex bg-base-100 shadow-xl rounded-2xl h-56 lg:h-64">
          <div className="p-5 flex flex-col gap-5 w-3/5 lg:w-1/2">
            <span className="flex items-center gap-1 text-xl font-semibold text-error">
              <FaUser />
              Thetastychef
            </span>
            <p className="italic text-lg">
              "These were sooo good and oh so gooey."
            </p>
          </div>
          <div className="w-2/5 lg:w-1/2">
            <img
              className="w-full rounded-r-2xl h-full"
              src={review3}
              alt="review"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsReview;
