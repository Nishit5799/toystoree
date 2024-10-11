import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import React from "react";
import { BiDownArrowAlt } from "react-icons/bi";
const Quality = () => {
  // Array of objects with name, top, left, top2, and left2 properties
  const handleDownArrow = () => {
    const element = document.querySelector(".page2");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,

      behavior: "smooth",
    });
  };

  const qualities = [
    {
      name: "Creative Toys",

      top: "top-[55vh]",
      left: "left-[10vw]",
      top2: "sm:top-[45vh]",
      left2: "sm:left-[12vw]",
    },
    {
      name: "Action Figures",
      top: "top-[55vh]",
      left: "left-[75vw]",
      top2: "sm:top-[45vh]",
      left2: "sm:left-[80vw]",
    },
    {
      name: "Premium Quality",
      top: "top-[70vh]",
      left: "left-[10vw]",
      top2: "sm:top-[70vh]",
      left2: "sm:left-[30vw]",
    },
    {
      name: "Eco Friendly",
      top: "top-[70vh]",
      left: "left-[75vw]",
      top2: "sm:top-[70vh]",
      left2: "sm:left-[60vw]",
    },
  ];

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".qualities .qual", {
      y: "-100%",
      duration: 2,
      delay: 2,
      stagger: 0.2,
      ease: "expo.out",
      opacity: 0,
    }).from(".menu  .menus", {
      opacity: 0,
      duration: 1,
      ease: "expo.out",
    });
  });
  return (
    <>
      {qualities.map((quality, index) => (
        <div
          key={index}
          className={`qualities font-['Bayon'] absolute text-center  h-16 w-16 sm:h-32 sm:w-32 text-black z-[1] overflow-hidden rounded-full transition-all duration-500 ease-in-out   hover:bg-[#f7f1eca9] hover:shadow-[0px_0px_20px_10px_rgba(255,165,0,0.7)] ${quality.top} ${quality.left} ${quality.top2} ${quality.left2}`}
        >
          <div className="qual h-full w-full flex items-center justify-center bg-[#f7f1ecb4] cursor-pointer">
            <div className="text-sm h-10 overflow-hidden w-full sm:text-[1.2vw] sm:h-5  sm:w-full  sm:overflow-hidden ">
              <h1 className=" h-full w-full hover:-translate-y-10 sm:hover:-translate-y-5 transition-all duration-300 ">
                {quality.name} <br /> {quality.name}
              </h1>
            </div>
          </div>
        </div>
      ))}
      <div
        className="top-[155vw] left-44 menu  sm:h-10 sm:w-10 rounded-full bg-[#f7f1ecb4] flex items-center justify-center text-black absolute z-[1] sm:top-[40vw] cursor-pointer sm:left-1/2 transition-all duration-500 ease-in-out   hover:bg-[#f7f1eca9] hover:shadow-[0px_0px_20px_10px_rgba(255,165,0,0.7)]"
        onClick={handleDownArrow}
      >
        <div className="menus w-full h-full flex items-center justify-center">
          <BiDownArrowAlt size={30} />
        </div>
      </div>
    </>
  );
};

export default Quality;
