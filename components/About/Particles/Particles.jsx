'use client'
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { fetchData } from "@/components/Loaders/loader";
import * as THREE from "three";
import { OrbitControls, ScrollControls, useScroll } from "@react-three/drei";

const Scene = () => {
  return (
    <Canvas className="w-full h-full" camera={{ position: [0, 0, 5], fov: 75 }}>
      <ScrollControls pages={3} damping={0.5} maxSpeed={0.5}>
        <Stars />
      </ScrollControls>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default Scene;
const Particles = () => {
  const ref = useRef();

  // useEffect(() => {
  //   fetchData("/assets/cross.buf").then((mesh) => (ref.current.geometry = mesh.geometry));
  // }, []);
  const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
  useEffect(() => {
    console.log(sphereGeometry)
    ref.current.geometry = sphereGeometry
  }, [])

  // useFrame(() => {
  //   if (ref.current) ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += 0.01;
  // });

  return (
    <points ref={ref} castShadow receiveShadow scale={2}>
      <pointsMaterial size={0.05} attach={"material"} />
    </points>
  );
};
const Stars = () => {
  const ref = useRef();
  const starsGeometry = new THREE.BufferGeometry();
  const initialGeometry = new THREE.SphereGeometry(3, 64, 64);
  const scrollObject = useScroll();
  const [finalGeometry, setFinalGeometry] = useState(null);
  
  useEffect(() => {
    fetchData('/assets/cross.buf').then(mesh => {
      setFinalGeometry(mesh.geometry);
    });
  }, []);

  starsGeometry.setAttribute("position", new THREE.Float32BufferAttribute(initialGeometry.attributes.position.array, 3));

  const mousePos = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    if (ref.current) ref.current.geometry = starsGeometry;
    
    const handleMouseMove = (event) => {
      mousePos.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const initArray = initialGeometry.attributes.position.array;
  const posArray = new Float32Array(initArray.length);
  posArray.set(initArray);

  useFrame((_, delta) => {
    if (finalGeometry && ref.current) {
      const finalArray = finalGeometry.attributes.position.array;
      const scrollProgress = scrollObject.scroll.current;
      const velocity = scrollObject.__damp?.velocity_offset || 0;
      const direction = Math.sign(velocity);
      
      // Smooth morphing based on scroll
      for (let i = 0; i < initArray.length; i += 3) {
        const targetX = scrollProgress < 0.5 
          ? finalArray[i] * 2 
          : -finalArray[i] * 2;
        const targetY = scrollProgress < 0.5 
          ? finalArray[i + 1] * 2 
          : -finalArray[i + 1] * 2;
        const targetZ = scrollProgress < 0.5 
          ? finalArray[i + 2] * 2 
          : -finalArray[i + 2] * 2;
        
        // Smooth interpolation
        const lerpFactor = 0.02;
        posArray[i] += (targetX - posArray[i]) * lerpFactor;
        posArray[i + 1] += (targetY - posArray[i + 1]) * lerpFactor;
        posArray[i + 2] += (targetZ - posArray[i + 2]) * lerpFactor;
      }
      
      starsGeometry.setAttribute("position", new THREE.Float32BufferAttribute(posArray, 3));
    }
    
    // Mouse interaction
    if (ref.current) {
      ref.current.rotation.x += (-mousePos.current.y - ref.current.rotation.x) * 0.01;
      ref.current.rotation.y += (mousePos.current.x - ref.current.rotation.y) * 0.01;
    }
  });

  return (
    <points ref={ref}>
      <pointsMaterial size={0.015} color="#ffffff" transparent opacity={0.8} />
    </points>
  );
};

