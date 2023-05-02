import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import SingleRecipe from "../SingleRecipe/SingleRecipe";

const ChefsRecipes = () => {
  const chef = useLoaderData();
  const { id, name, picture, recipes, experience, likes, bio, recipes_list } =
    chef;

  return (
    <>
      <div className="bg-red-50 py-14 md:py-20">
        <div className="container mx-auto flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-20 px-2">
          <div className="md:w-2/6">
            <h2 className="text-5xl font-semibold mb-4">{name}</h2>
            <p className="text-lg mb-2">{bio}</p>
            <div className="flex justify-between items-center mb-3">
              <p className="text-lg font-medium">
                Experience: {experience} years
              </p>
              <p className="text-lg font-medium">Recipes: {recipes}</p>
            </div>
            <p className="flex text-lg gap-2 items-center font-semibold justify-center md:justify-start">
              <FaThumbsUp /> {likes}
            </p>
          </div>
          <img className="rounded-full md:w-2/6" src={picture} alt="" />
        </div>
      </div>
      <div className="container mx-auto mt-20">
        <fieldset className="border-t border-gray-400">
          <legend className="mx-auto px-4 text-gray-800 text-3xl md:text-4xl font-semibold">
            Signature Dish Recipes
          </legend>
        </fieldset>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mt-16 pb-10">
          {recipes_list &&
            recipes_list.map((recipe, index) => (
              <SingleRecipe key={index} recipe={recipe}></SingleRecipe>
            ))}
        </div>
      </div>
    </>
  );
};

export default ChefsRecipes;
