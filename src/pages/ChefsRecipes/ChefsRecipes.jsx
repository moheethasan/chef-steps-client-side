import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ChefsRecipes = () => {
  const chef = useLoaderData();
  const { name, picture, recipes, experience, likes, bio, recipes_list } = chef;

  console.log(recipes_list);

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20">
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img className="w-full" src="" alt="dish" />
            </figure>
            <div className="card-body flex flex-col">
              <h2 className="card-title font-bold">{recipes_list.name}</h2>
              <div className="flex justify-between items-center mb-4">
                <p className="text-base font-semibold">Experience: {} years</p>
                <p className="text-end text-base font-semibold">Recipes: {}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefsRecipes;
