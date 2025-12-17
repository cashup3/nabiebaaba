 "use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const SpinningEarth = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.x = 0.3;
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <sphereGeometry args={[1.4, 64, 64]} />
      <meshStandardMaterial
        color="#ffffff"
        metalness={0.1}
        roughness={0.4}
      />
    </mesh>
  );
};

const EarthHero = () => {
  return (
    <section className="w-full bg-black text-white pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-12 xl:px-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Left: Text */}
        <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 md:space-y-8">
          <p className="uppercase tracking-[0.25em] text-xs sm:text-sm text-gray-400">
            About Knob Studio
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            Crafting sound
            <br className="hidden sm:block" />
            for every universe.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl">
            From intimate sessions to full-scale productions, we design sonic
            experiences that feel as detailed and infinite as the cosmos itself.
          </p>
        </div>

        {/* Right: 3D Earth */}
        <div className="w-full lg:w-1/2 h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[460px]">
          <div className="w-full h-full rounded-3xl bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden shadow-2xl border border-gray-800/60">
            <Canvas camera={{ position: [0, 0, 4], fov: 45 }} shadows>
              <color attach="background" args={["#000000"]} />
              <ambientLight intensity={0.3} />
              <directionalLight position={[3, 4, 5]} intensity={1.2} castShadow />
              <directionalLight
                position={[-4, -3, -2]}
                intensity={0.4}
                color="#666666"
              />
              <SpinningEarth />
              <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarthHero;
