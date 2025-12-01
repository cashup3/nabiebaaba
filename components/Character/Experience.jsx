"use client";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import  Astronaut  from "./Character";

const Footer = () => {
  return (
    <div className="w-full h-screen">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 1, 0]} intensity={2}/>
            <directionalLight position={[5, 5, 5]} intensity={1}/>
            <directionalLight position={[-5, -5, -5]} intensity={0.5}/>
            <Astronaut scale={3} position={[0,-3,0]} />
          </Suspense>
        </Canvas>
    </div>
  );
};

export default Footer;
