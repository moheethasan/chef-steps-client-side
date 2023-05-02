import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import NewestRecipes from "../NewestRecipes/NewestRecipes";
import ClientsReview from "../ClientsReview/ClientsReview";
import Chefs from "../Chefs/Chefs";

const Home = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  return (
    <>
      <Header></Header>
      <div className="container mx-auto px-2 pt-14 pb-5 md:py-20">
        <fieldset className="border-t border-gray-400">
          <legend className="mx-auto px-4 text-gray-800 text-3xl md:text-4xl xl:text-5xl font-semibold">
            Our Professional Chefs
          </legend>
        </fieldset>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10 mt-10 md:mt-20">
          {chefs &&
            chefs.map((chef) => <Chefs key={chef.id} chef={chef}></Chefs>)}
        </div>
      </div>
      <NewestRecipes></NewestRecipes>
      <ClientsReview></ClientsReview>
    </>
  );
};

export default Home;
