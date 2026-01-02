 "use client";

import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

const SpinningEarth = () => {
  const meshRef = useRef();

  // Load Earth textures - using reliable public Earth texture sources
  // Using NASA Blue Marble or similar Earth textures
  const earthTexture = useTexture("https://raw.githubusercontent.com/mrdoob/three.js/r129/examples/textures/planets/earth_atmos_2048.jpg");
  const normalMap = useTexture("https://raw.githubusercontent.com/mrdoob/three.js/r129/examples/textures/planets/earth_normal_2048.jpg");
  const specularMap = useTexture("https://raw.githubusercontent.com/mrdoob/three.js/r129/examples/textures/planets/earth_specular_2048.jpg");

  // Configure texture wrapping
  earthTexture.wrapS = earthTexture.wrapT = THREE.RepeatWrapping;
  normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;
  specularMap.wrapS = specularMap.wrapT = THREE.RepeatWrapping;

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
        map={earthTexture}
        normalMap={normalMap}
        roughnessMap={specularMap}
        metalness={0.1}
        roughness={0.4}
      />
    </mesh>
  );
};

const EarthHero = () => {

  return (
    <section className="w-full bg-gradient-to-br from-[#F0F1FA] via-white to-[#F0F1FA] dark:from-black dark:via-gray-900 dark:to-black text-gray-900 dark:text-white pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-12 xl:px-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Left: Text */}
        <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 md:space-y-8">
          <p className="uppercase tracking-[0.25em] text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            About Knob Studio
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
            15 Years of Experience.
            <br className="hidden sm:block" />
            Endless Creativity.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl">
            KNOB is a full-service video production company built on passion, precision, and storytelling.
          </p>
        </div>

        {/* Right: 3D Earth */}
        <div className="w-full lg:w-1/2 h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[460px]">
          <div className="w-full h-full rounded-3xl overflow-hidden">
            <Canvas camera={{ position: [0, 0, 4], fov: 45 }} gl={{ alpha: true }} shadows>
              <ambientLight intensity={0.4} />
              <directionalLight position={[3, 4, 5]} intensity={1.5} castShadow />
              <directionalLight
                position={[-4, -3, -2]}
                intensity={0.5}
                color="#666666"
              />
              <pointLight position={[5, 5, 5]} intensity={0.3} />
              <Suspense fallback={null}>
                <SpinningEarth />
              </Suspense>
              <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarthHero;
