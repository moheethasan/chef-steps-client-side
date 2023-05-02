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
  console.log(chefs);

  return (
    <>
      <Header></Header>
      <div className="">
        {chefs.map((chef) => (
          <Chefs key={chef.id} chef={chef}></Chefs>
        ))}
      </div>
      <NewestRecipes></NewestRecipes>
      <ClientsReview></ClientsReview>
    </>
  );
};

export default Home;
