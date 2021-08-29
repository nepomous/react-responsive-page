import React from "react";
import Episodes from "../../Episodes/Episodes";
import HeroSection from "../../HeroSection";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "./Data";

const Home = () => {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <Episodes />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
    </>
  );
};

export default Home;
