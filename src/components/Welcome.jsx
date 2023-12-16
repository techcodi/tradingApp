import React from "react";
import Header from "./Header";
import Sales from "./Sales";
import Category from "./Category";
import Best from "./Best";
import Frame from "./Frame";
import ExploreProducts from "./Explore-Products";
import NewArrival from "./New-Arrival";

const Welcome = () => {
  return (
    <div className="All">
      <Header />
      <Sales />
      <Category />
      <Best />
      <Frame />
      <ExploreProducts />
      <NewArrival />
    </div>
  );
};

export default Welcome;
