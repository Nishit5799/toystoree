import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import React from "react";

const Page2_Heading = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      ".heading",
      {
        y: 40, // Initial position offset for the letters
        opacity: 0, // Start invisible
        rotate: "45deg",
      },
      {
        y: 0, // End position at normal
        opacity: 1, // Fully visible
        rotate: 0,
        ease: "elastic.out(1,0.3)",
        duration: 0.2,
        stagger: 0.5, // Delay between each letter's animation
        scrollTrigger: {
          trigger: ".headingcontainer", // Trigger based on container
          scrub: 3, // Set to false for smoother animation
          start: "top 75%", // When container hits 90% of the viewport
          end: "top 35%", // End trigger point
        },
      }
    );
  });

  return (
    <div className="headingcontainer text-[15vw] overflow-hidden flex sm:text-[8vw] mb-8 sm:mb-4">
      {"Creative Toys".split("").map((e, i) => {
        return (
          <span key={i} className="heading inline-block">
            {e === " " ? "\u00A0" : e} {/* Treat space as a character */}
          </span>
        );
      })}
    </div>
  );
};

export default Page2_Heading;
