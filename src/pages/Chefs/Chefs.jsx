import React from "react";

const Chefs = ({ chef }) => {
  const { id, name, picture, recipes, experience, likes } = chef;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn-outlined">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
