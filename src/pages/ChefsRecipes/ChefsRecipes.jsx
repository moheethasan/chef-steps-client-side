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
        <div className="container mx-auto flex flex-col-reverse lg:flex-row justify-center items-center gap-10 md:gap-20 px-4">
          <div className="lg:w-2/6">
            <h2 className="text-5xl font-semibold mb-8">{name}</h2>
            <p className="text-lg mb-6">{bio}</p>
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium">
                {experience} years of experience
              </p>
              <p className="text-lg font-medium">{recipes} different recipes</p>
            </div>
            <p className="flex text-lg gap-2 items-center font-semibold justify-center md:justify-start mt-5">
              <FaThumbsUp className="text-error" /> {likes} Likes
            </p>
          </div>
          <img className="rounded-lg" src={picture} alt="chef" />
        </div>
      </div>
      <div className="container mx-auto mt-20 px-4">
        <fieldset className="border-t border-gray-400">
          <legend className="mx-auto px-4 text-gray-800 text-3xl md:text-4xl font-semibold">
            Signature Dish Recipes
          </legend>
        </fieldset>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 pb-10">
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
