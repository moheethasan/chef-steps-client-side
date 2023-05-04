import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaHeart } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const SingleRecipe = ({ recipe }) => {
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    toast.success("Added to your favorite recipes!");
    setFavorite(!favorite);
  };

  const { name, image, ingredients, method, rating } = recipe;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={image} alt="dish" />
      </figure>
      <div className="card-body flex flex-col">
        <h2 className="card-title font-bold">{name}</h2>
        <h6 className="text-base mb-2">
          <b>Ingredients:</b> {ingredients}
        </h6>
        <h6 className="text-base">
          <b>Cooking Method:</b> {method}
        </h6>
        <div className="flex justify-between items-center mt-auto">
          <span className="flex items-center text-lg font-semibold">
            <Rating style={{ maxWidth: 130 }} value={rating} readOnly />{" "}
            {rating}
          </span>
          <button
            onClick={handleFavorite}
            className="flex items-center gap-1 btn btn-error text-white hover:bg-red-500"
            disabled={favorite && true}
          >
            Favorite <FaHeart />
          </button>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
