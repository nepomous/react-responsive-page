import React from "react";
import Episodes from "../../Episodes/Episodes";
import HeroSection from "../../HeroSection";
import {homeObjOne } from "./Data";

const Services = () => {
  return (
    <>
      <Episodes />
      <HeroSection {...homeObjOne} />
    </>
  );
};

export default Services;
