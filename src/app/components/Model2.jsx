"use client";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import React, { useRef } from "react";
import { MathUtils } from "three";

// This component now contains the useFrame hook
const Model2 = () => {
  const model = useGLTF("/toy2.glb");
  const model2ref = useRef(null);
  const orbitControlsRef = useRef(null);

  // Move useFrame inside a Canvas child component
  useFrame((state) => {
    if (orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-MathUtils.degToRad(x * 45));
      orbitControlsRef.current.setPolarAngle(
        MathUtils.degToRad((y + 1) * 60) + 0.5
      );
      orbitControlsRef.current.update();
    }
    model2ref.current.rotation.y += 0.003;
  });

  return (
    <>
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={MathUtils.degToRad(-80)} // bottom
        maxPolarAngle={MathUtils.degToRad(120)} // top
        enableZoom={false}
      />
      <ambientLight intensity={1.5} />
      <directionalLight args={[0, 0, 3]} intensity={2.5} color={"white"} />
      <primitive ref={model2ref} object={model.scene} scale={0.3} />
    </>
  );
};

export default Model2;
