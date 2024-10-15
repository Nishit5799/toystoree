"use client";

import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import React, { useRef } from "react";
import Model2 from "./Model2";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";

const Page2 = () => {
  const page2ref = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
  });
  return (
    <div
      ref={page2ref}
      className="page2 h-screen sm:h-screen w-full sm:flex   bg-black font-['Bayon'] text-white"
    >
      <div className="container w-full h-full text-center sm:flex sm:flex-col sm:justify-between sm:items-center sm:h-full sm:w-1/2 px-10 py-7 ">
        <h1 className="text-[15vw] sm:text-[8vw] mb-8 sm:mb-4">
          Creative Toys
        </h1>
        <div className="w-full h-[50vw] overflow-hidden rounded-md sm:hidden ">
          <Image
            src="/1.jpg"
            height={1000}
            width={1000}
            className="w-full h-full bg-cover bg-center"
          />
        </div>
        <p className="text-[4vw] w-3/4 mt-8 sm:text-lg sm:w-3/4 sm:mb-[11vw]">
          "Unleash your child's imagination with our collection of creative
          toys! From building sets to arts and crafts, these toys inspire
          creativity, problem-solving, and endless fun. Perfect for sparking
          young minds and encouraging hands-on exploration."
        </p>
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
