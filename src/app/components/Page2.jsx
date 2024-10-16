"use client";

import { Canvas } from "@react-three/fiber";

import React from "react";
import Model2 from "./Model2";
import Page2_Heading from "./Page2_Heading";
import Page2_Para from "./Page2_Para";

const Page2 = () => {
  const para = [
    "Unleash your child's imagination with our collection of creative",
    "toys! From building sets to arts and crafts, these toys inspire",
    "creativity, problem-solving, and endless fun. Perfect for sparking",
    "young minds and encouraging hands-on exploration",
  ];
  return (
    <div className="page2 h-screen sm:h-screen w-full sm:flex   bg-black font-['Bayon'] text-white">
      <div className="container w-full h-full text-center sm:flex sm:flex-col sm:justify-between sm:items-center sm:h-full sm:w-1/2 px-10 py-7 ">
        <Page2_Heading />
        <div className="w-full h-[50vw] overflow-hidden rounded-md sm:hidden ">
          <Canvas>
            <Model2 />
          </Canvas>
        </div>
        <Page2_Para />
        <button className="mt-[20vw] sm:mt-1 text-md px-4 sm:px-8 sm:py-2 mx-auto mb-10 sm:mb-10  text-black  sm:w-[9vw] rounded-full bg-white">
          Buy now
        </button>
      </div>
      <div className="hidden   sm:w-1/2 sm:flex sm:items-center sm:pt-[10vw] sm:justify-center sm:h-full ">
        <Canvas>
          <Model2 />
        </Canvas>
      </div>
    </div>
  );
};

export default Page2;
