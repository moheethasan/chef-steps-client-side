import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaHeart } from "react-icons/fa";

const SingleRecipe = ({ recipe }) => {
  const { name, image, ingredients, method, rating } = recipe;

  return <div className="card card-compact bg-base-100 shadow-xl"></div>;
};

export default SingleRecipe;
