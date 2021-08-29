import React from "react";
import Episodes from "../../Episodes/Episodes";
import HeroSection from "../../HeroSection";
import { homeObjThree } from "./Data";

const SignUp = () => {
  return (
    <>
      <Episodes />
      <HeroSection {...homeObjThree} />
    </>
  );
};

export default SignUp;
