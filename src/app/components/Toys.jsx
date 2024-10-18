// import React, { useRef } from "react";
// import {
//   Environment,
//   OrbitControls,
//   useGLTF,
//   useTexture,
// } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { MathUtils } from "three";
// import * as THREE from "three";

// const Toys = () => {
//   const model = useGLTF("/toyy.glb");
//   const orbitControlsRef = useRef(null);
//   const texture = useTexture("/bg.jpg");
//   if (texture) {
//     texture.mapping = THREE.EquirectangularReflectionMapping;
//   }
//   useFrame((state) => {
//     if (orbitControlsRef.current) {
//       const { x, y } = state.mouse;
//       orbitControlsRef.current.setAzimuthalAngle(-MathUtils.degToRad(x * 45));
//       orbitControlsRef.current.setPolarAngle(MathUtils.degToRad((y + 1) * 60));
//       orbitControlsRef.current.update();
//     }
//   });
//   return (
//     <>
//       {texture && (
//         <Environment background={true} map={texture} intensity={0.03} />
//       )}
//       <OrbitControls
//         ref={orbitControlsRef}
//         minPolarAngle={MathUtils.degToRad(70)} // bottom
//         maxPolarAngle={MathUtils.degToRad(120)} // top
//         enableZoom={false}
//       />
//       <ambientLight intensity={0.3} />
//       <directionalLight args={[0, 3, 5]} intensity={2} color={"white"} />
//       <primitive object={model.scene} scale={0.8} />;
//     </>
//   );
// };

// export default Toys;
import React, { useEffect, useRef } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";

import * as THREE from "three";

const Toys = () => {
  const model = useGLTF("/figures.glb");
  const orbitControlsRef = useRef(null);

  const mixer = useRef(null); // Reference for the AnimationMixer
  useEffect(() => {
    if (model.animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(model.scene);
      model.animations.forEach((clip) => {
        mixer.current.clipAction(clip).play(); // Play all animations
      });
    }
    return () => {
      if (mixer.current) mixer.current.stopAllAction(); // Clean up mixer when unmounted
    };
  }, [model]);

  useFrame((state, delta) => {
    if (orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-MathUtils.degToRad(x * 45));
      orbitControlsRef.current.setPolarAngle(MathUtils.degToRad((y + 1) * 60));
      orbitControlsRef.current.update();
    }
    if (mixer.current) mixer.current.update(delta);
  });
  return (
    <>
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={MathUtils.degToRad(70)} // bottom
        maxPolarAngle={MathUtils.degToRad(120)} // top
        enableZoom={false}
        enableDamping
      />
      <ambientLight intensity={0.3} />
      <directionalLight args={[0, 0, 5]} intensity={2} color={"white"} />
      <primitive object={model.scene} scale={1.7} position={[0, 0, 2]} />;
    </>
  );
};

export default Toys;
