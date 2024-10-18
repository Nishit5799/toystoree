// import { useGSAP } from "@gsap/react";
// import gsap from "gsap/all";
// import React from "react";
// import { BiDownArrowAlt } from "react-icons/bi";

// const Quality = () => {
//   // Scroll to next section when arrow is clicked
//   const handleDownArrow = () => {
//     const element = document.querySelector(".page2");
//     if (element) {
//       const elementPosition =
//         element.getBoundingClientRect().top + window.scrollY; // Calculate the element's position from the top of the page
//       window.scrollTo({
//         top: elementPosition, // Scroll to the top of the element
//         left: 0,
//         behavior: "smooth", // Smooth scrolling behavior
//       });
//     }
//   };

//   // Array of qualities with bg image, top, left, etc.
//   const qualities = [
//     {
//       name: "Creative Toys",
//       top: "top-[55vh]",
//       left: "left-[10vw]",
//       top2: "sm:top-[45vh]",
//       left2: "sm:left-[12vw]",
//     },
//     {
//       name: "Action Figures",
//       top: "top-[55vh]",
//       left: "left-[75vw]",
//       top2: "sm:top-[45vh]",
//       left2: "sm:left-[80vw]",
//     },
//     {
//       name: "Premium Quality",
//       top: "top-[70vh]",
//       left: "left-[10vw]",
//       top2: "sm:top-[70vh]",
//       left2: "sm:left-[30vw]",
//     },
//     {
//       name: "Eco Friendly",
//       top: "top-[70vh]",
//       left: "left-[75vw]",
//       top2: "sm:top-[70vh]",
//       left2: "sm:left-[60vw]",
//     },
//   ];

//   useGSAP(() => {
//     const tl = gsap.timeline();

//     tl.from(" .qual", {
//       y: "-100%",
//       duration: 2,
//       delay: 2,
//       stagger: 0.2,
//       ease: "expo.out",
//       opacity: 0,
//     }).from(".menu .menus", {
//       opacity: 0,
//       duration: 1,
//       ease: "expo.out",
//     });

//     tl.to(".menus", {
//       y: 5,
//       duration: 1,
//       ease: "linear",
//       repeat: -1,
//       yoyo: true,
//     });
//   });

//   return (
//     <>
//       {qualities.map((quality, index) => (
//         <div
//           key={index}
//           className={`qualities font-['Bayon']  absolute text-center h-16 w-16 sm:h-32 sm:w-32 text-black z-[1] overflow-hidden rounded-full transition-all duration-500 ease-in-out hover:scale-110 hover:bg-[#f7f1ec0e] hover:shadow-[0px_0px_20px_10px_rgba(255,165,0,0.7)]  ${quality.top} ${quality.left} ${quality.top2} ${quality.left2} `}
//         >
//           <div className="qual h-full w-full flex items-center justify-center bg-[#f7f1ec7f] cursor-pointer">
//             <div className="text-sm h-10 overflow-hidden w-full sm:text-[1vw] sm:h-5 sm:w-full sm:overflow-hidden ">
//               <h1 className="h-full w-full hover:-translate-y-10 sm:hover:-translate-y-5  transition-all duration-300">
//                 {quality.name} <br /> {quality.name}
//               </h1>
//             </div>
//           </div>
//         </div>
//       ))}

//       <div
//         className="top-[155vw] left-44 menu sm:h-10 sm:w-10 rounded-full  flex items-center justify-center text-black absolute z-[1] sm:top-[40vw] cursor-pointer sm:left-1/2 transition-all duration-500 ease-in-out hover:bg-[#f7f1eca9] hover:shadow-[0px_0px_20px_10px_rgba(255,165,0,0.7)]"
//         onClick={handleDownArrow}
//       >
//         <div className="menus w-full h-full  flex items-center justify-center">
//           <BiDownArrowAlt size={40} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Quality;

//2nd
// import React, { useRef } from "react";
// import { useFrame } from "@react-three/fiber";
// import { Text } from "@react-three/drei";

// const Quality = () => {
//   const groupRef = useRef(); // Reference for the group rotation
//   const sphereRefs = useRef([]); // References for individual spheres

//   // useFrame to rotate the group and each sphere individually
//   useFrame(() => {
//     if (groupRef.current) {
//       groupRef.current.rotation.y += 0.01; // Rotate the entire group
//     }

//     // // Rotate each sphere individually
//     // sphereRefs.current.forEach((sphere) => {
//     //   if (sphere) {
//     //     sphere.rotation.y += 0.02; // Adjust rotation speed here for individual rotation
//     //   }
//     // });
//   });

//   const radius = 3; // Define the radius of the circle
//   const sphereData = [
//     { angle: 0, text: "Creative Toys" }, // Sphere 1 with text "Creative Toys"
//     { angle: Math.PI / 2, text: "Premium Quality" }, // Sphere 2 with text "Premium Quality"
//     { angle: Math.PI, text: "Eco Friendly" }, // Sphere 3 with text "Eco Friendly"
//     { angle: (3 * Math.PI) / 2, text: "Action Figures" }, // Sphere 4 with text "Action Figures"
//   ];

//   return (
//     <>
//       <ambientLight intensity={1} />
//       <group ref={groupRef}>
//         {" "}
//         {/* Attach the ref to the group */}
//         {sphereData.map((data, index) => (
//           <mesh
//             key={index}
//             ref={(el) => (sphereRefs.current[index] = el)} // Attach ref for individual rotation
//             position={[
//               radius * Math.cos(data.angle), // X position (circular layout)
//               0, // Y position (same level)
//               radius * Math.sin(data.angle), // Z position (circular layout)
//             ]}
//           >
//             <sphereGeometry args={[0.5, 30, 30]} />
//             <meshStandardMaterial />
//             {/* Add Text component on the surface of the sphere */}
//             <Text
//               position={[0, 0, 0.55]} // Place the text slightly outside the sphere's surface
//               fontSize={0.15}
//               color="black" // Text color
//               anchorX="center" // Center the text horizontally
//               anchorY="middle" // Center the text vertically
//             >
//               {data.text}
//             </Text>
//           </mesh>
//         ))}
//       </group>
//     </>
//   );
// };

// export default Quality;

//3
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef, useState, useEffect } from "react";

const Quality = () => {
  const mod1 = useGLTF("/creative.glb");
  const mod2 = useGLTF("/quality.glb");
  const mod3 = useGLTF("/toyy.glb");
  const mod4 = useGLTF("/plane.glb");

  const groupRef = useRef(); // Create a ref for the group
  const { camera } = useThree(); // Access the default camera
  const [isSmallScreen, setIsSmallScreen] = useState(false); // State to track screen size

  // Check screen size on load and window resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Assume 'sm' is width < 640px
    };

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize(); // Initial check on load

    return () => window.removeEventListener("resize", checkScreenSize); // Clean up
  }, []);

  // Rotate the group on the y-axis with a speed of 0.01 and make objects look at the camera
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;

      // Make all objects in the group face the camera
      groupRef.current.children.forEach((child) => {
        child.lookAt(camera.position); // Ensure the objects face the camera
      });
    }
  });

  return (
    <>
      {/* Set up a Perspective Camera */}
      <PerspectiveCamera
        makeDefault // Make it the default camera
        fov={75} // Set the field of view
        position={[0, 0, 8]} // Position the camera at positive Z
      />

      <ambientLight intensity={0.8} />
      <directionalLight position={[0, 2, 3]} intensity={1} color={"white"} />

      {/* Group the three models */}
      <group ref={groupRef}>
        <primitive
          object={mod1.scene}
          scale={0.06}
          position={[-5, isSmallScreen ? 1 : -0.5, 0]} // Adjust y-position based on screen size
        />
        <primitive
          object={mod2.scene}
          scale={0.8}
          position={[5, isSmallScreen ? 1 : 0, 0]} // Adjust y-position based on screen size
        />
        <primitive
          object={mod3.scene}
          scale={0.8}
          position={[0, isSmallScreen ? 1 : 0, -4]} // Adjust y-position based on screen size
        />
        <primitive
          object={mod4.scene}
          scale={0.002}
          position={[2, isSmallScreen ? 1 : 0, 4.5]} // Adjust y-position based on screen size
        />
      </group>
    </>
  );
};

export default Quality;
