"use client";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";

import Toys from "./components/Toys";
import Quality from "./components/Quality";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page1_DownArrow from "./components/Page1_DownArrow";

const Page = () => {
  const [isClient, setIsClient] = useState(false);

  // Ensure the window object is available (client-side check)
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true); // Only set to true on the client side
    }
  }, []);

  return (
    <>
      {/* Only render the Canvas and other client-side code when on the client side */}
      {isClient && (
        <div className="page1 w-full h-screen font-['Bayon'] bg-[#7549332d] relative overflow-hidden">
          <Page1_DownArrow />
          <Canvas>
            <Quality />
            <Toys />
          </Canvas>
        </div>
      )}

      <Page2 />
      <Page3 />
    </>
  );
};

export default Page;
