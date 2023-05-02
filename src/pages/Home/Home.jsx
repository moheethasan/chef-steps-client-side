import React from "react";
import Header from "../Header/Header";
import NewestRecipes from "../NewestRecipes/NewestRecipes";
import ClientsReview from "../ClientsReview/ClientsReview";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <NewestRecipes></NewestRecipes>
      <ClientsReview></ClientsReview>
    </div>
  );
};

export default Home;
