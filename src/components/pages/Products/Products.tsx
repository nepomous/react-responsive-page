import React from "react";
import Episodes from "../../Episodes/Episodes";
import HeroSection from "../../HeroSection";
import { homeObjFour } from "./Data";

const Products = () => {
  return (
    <>
      <Episodes />
      <HeroSection {...homeObjFour} />
    </>
  );
};

export default Products;
