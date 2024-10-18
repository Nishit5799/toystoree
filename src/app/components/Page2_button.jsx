import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import React from "react";

const Page2_button = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(
      ".btn",
      {
        y: 40, // Initial position offset for the letters
        opacity: 0, // Start invisible
      },
      {
        y: 0, // End position at normal
        opacity: 1, // Fully visible

        ease: "elastic.out(1,0.2)",
        duration: 0.2,
        stagger: 0.5, // Delay between each letter's animation
        // ease: "power4.out", // Smooth easing effect for entry
        scrollTrigger: {
          trigger: ".btn", // Trigger based on container
          scrub: 3, // Set to false for smoother animation

          start: "top 100%", // When container hits 80% of the viewport
          end: "top 75%", // End trigger point
        },
      }
    );
  });
  return (
    <button className="btn mt-[20vw] text-sm sm:mt-1 text-md px-4 sm:px-8 sm:py-2 mx-auto mb-10 sm:mb-10  text-black  sm:w-[9vw] rounded-full bg-white">
      Buy now
    </button>
  );
};

export default Page2_button;
