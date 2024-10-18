import React from "react";
import { BiDownArrowAlt } from "react-icons/bi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
const Page1_DownArrow = () => {
  const handleDownArrow = () => {
    const element = document.querySelector(".page2");
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY; // Calculate the element's position from the top of the page
      window.scrollTo({
        top: elementPosition, // Scroll to the top of the element
        left: 0,
        behavior: "smooth", // Smooth scrolling behavior
      });
    }
  };
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".menu .menus", {
      opacity: 0,
      duration: 1,
      ease: "expo.out",
    });
    tl.to(".menus", {
      y: 5,
      duration: 1,
      ease: "linear",
      repeat: -1,
      yoyo: true,
    });
  });
  return (
    <div
      className="top-[155vw] left-44 menu sm:h-10 sm:w-10 rounded-full  flex items-center justify-center text-black absolute z-[1] sm:top-[40vw] cursor-pointer sm:left-1/2 transition-all duration-500 ease-in-out hover:bg-[#f7f1eca9] hover:shadow-[0px_0px_20px_10px_rgba(255,165,0,0.7)]"
      onClick={handleDownArrow}
    >
      <div className="menus w-full h-full  flex items-center justify-center">
        <BiDownArrowAlt size={40} />
      </div>
    </div>
  );
};

export default Page1_DownArrow;
