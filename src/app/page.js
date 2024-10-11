"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";

import Toys from "./components/Toys";
import Quality from "./components/Quality";
import Page2 from "./components/Page2";

const page = () => {
  return (
    <div className="w-full h-screen  font-['Bayon'] bg-[#F7F1EC] relative ">
      <Quality />
      <Canvas>
        <Toys />
      </Canvas>
      <Page2 />
    </div>
  );
};

export default page;
