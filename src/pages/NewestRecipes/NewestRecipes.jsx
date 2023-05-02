import React from "react";
import pasta from "../../assets/pasta.jpg";
import falafel from "../../assets/falafel.jpg";
import chicken from "../../assets/chicken.jpg";
import shawarma from "../../assets/shawarma.jpg";

const NewestRecipes = () => {
  return (
    <div className="bg-red-50 px-2 mt-20 py-10 md:py-20">
      <div className="container mx-auto">
        <fieldset className="border-t border-gray-400">
          <legend className="mx-auto px-4 text-gray-800 text-3xl md:text-4xl xl:text-5xl font-semibold">
            Our Newest Recipes
          </legend>
        </fieldset>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 mt-10 md:mt-20">
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src={pasta} alt="pasta" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Penne Pasta
                <div className="badge badge-error text-white">NEW</div>
              </h2>
              <p>Pasta in tomato sauce with chicken and tomatoes</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src={falafel} alt="falafel" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Falafel Salad
                <div className="badge badge-error text-white">NEW</div>
              </h2>
              <p>Tortilla wrap with falafel and fresh salad</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src={chicken} alt="chicken" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Chicken Skewers
                <div className="badge badge-error text-white">NEW</div>
              </h2>
              <p>Chicken skewers with slices of sweet peppers and dill</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src={shawarma} alt="shawarma" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Shawarma
                <div className="badge badge-error text-white">NEW</div>
              </h2>
              <p>Burrito wraps with chicken and vegetables</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewestRecipes;
