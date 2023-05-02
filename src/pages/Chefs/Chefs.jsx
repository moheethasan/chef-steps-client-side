import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Chefs = ({ chef }) => {
  const { id, name, picture, recipes, experience, likes } = chef;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={picture} alt="chef" />
      </figure>
      <div className="card-body flex flex-col">
        <h2 className="card-title font-bold">{name}</h2>
        <div className="flex justify-between items-center mb-4">
          <p className="text-base font-semibold">
            Experience: {experience} years
          </p>
          <p className="text-end text-base font-semibold">Recipes: {recipes}</p>
        </div>
        <div className="flex justify-between items-center mt-auto text-red-400">
          <p className="flex gap-1 items-center text-lg font-semibold">
            <FaThumbsUp /> {likes}
          </p>
          <Link to={`/chefs/${id}`} className="btn-outlined">
            View Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
