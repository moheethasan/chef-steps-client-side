import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const Chefs = ({ chef }) => {
  const { id, name, picture, recipes, experience, likes } = chef;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <LazyLoad height={300} width={500} threshold={0.7}>
          <img className="w-full rounded-t-2xl" src={picture} alt="chef" />
        </LazyLoad>
      </figure>
      <div className="card-body flex flex-col">
        <h2 className="card-title font-bold">{name}</h2>
        <div className="flex justify-between items-center mb-4">
          <p className="text-base font-semibold">
            Experience: {experience} years
          </p>
          <p className="text-end text-base font-semibold">Recipes: {recipes}</p>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <p className="flex gap-1 items-center text-base font-semibold">
            <FaThumbsUp className="text-error" /> {likes} Likes
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
