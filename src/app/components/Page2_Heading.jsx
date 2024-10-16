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
        // ease: "power4.out", // Smooth easing effect for entry
        scrollTrigger: {
          trigger: ".headingcontainer", // Trigger based on container
          scrub: 3, // Set to false for smoother animation
          markers: true, // Debug markers (remove in production)
          start: "top 90%", // When container hits 80% of the viewport
          end: "top 25%", // End trigger point
        },
      }
    );
  });

  return (
    <div className="headingcontainer text-[15vw]  overflow-hidden flex sm:text-[8vw] mb-8 sm:mb-4">
      {"Creative Toys".split("").map((e, i) => {
        return (
          <span key={i} className="heading inline-block">
            {e}
          </span>
        );
      })}
    </div>
  );
};

export default Page2_Heading;
