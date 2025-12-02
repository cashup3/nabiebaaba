import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
import Image from "next/image";

const FeaturedWork = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 300,
  });
  const velocityFactor = useTransform(smoothVelocity, [-1000, 1000], [-45, 45], {
    clamp: false,
  });
  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    if (velocityFactor.get() !== 0) {
      if (ref.current) {
        let rect = ref.current.getBoundingClientRect();
        if (rect.top > window.innerHeight / 2) {
          console.log("this is at the bottom");
        }
      }
    }
  });

  return (
    <div className="w-full h-auto px-4 sm:px-6 lg:px-8 xl:px-0 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
      <div className="flex flex-col lg:flex-row w-full justify-between items-start lg:items-center gap-4 sm:gap-6 lg:gap-0 mb-6 sm:mb-8 lg:mb-0">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl lg:text-[9rem] font-bold">Featured Work</div>
        <div className="text-[10px] sm:text-xs md:text-sm font-semibold max-w-xs sm:max-w-sm lg:max-w-none leading-relaxed">
          A SELECTION OF OUR MOST PASSIONALITY <br className="hidden sm:block" />
          CRAFTED WORKS WITH FORWARD THINKING
          <br className="hidden sm:block" /> CLIENTS AND FRIENDS OVER THE YEARS
        </div>
      </div>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 perspective-1000 w-full h-auto transform-style-3d mt-6 sm:mt-8 lg:mt-0">
        {Array.from({ length: 6 }, (_, index) => (
          <motion.div ref={ref} className={"flex items-center shadow-lg text-center justify-center w-full rounded-lg sm:rounded-xl lg:rounded-2xl xl:rounded-3xl h-[12rem] sm:h-[16rem] md:h-[20rem] lg:h-[24rem] xl:h-[27rem] text-black overflow-hidden"} style={{ rotateX: velocityFactor }}>
            <Image src={`/textures/497205817043227020${index + 3}.jpg`} width={300} height={270} className="w-full h-full object-cover rounded-lg sm:rounded-xl lg:rounded-2xl xl:rounded-3xl"/>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedWork;

const Item = ({ rotation, index }) => {
  const ref = useRef(null);
  useAnimationFrame((t, delta) => {
    if (ref.current && rotation.get() !== 0) {
      const rect = ref.current.getBoundingClientRect();
      if (rect.top > document.documentElement.clientHeight / 2) {
        rotation.set(rotation.get() * -1);
        console.log("this at the bottom of screen", rotation.get());
      }
    }
  });
  return (
    <motion.div ref={ref} className={"bg-lime-300 flex items-center shadow-lg text-center justify-center w-[30rem] rounded-3xl h-[27rem] text-black text-6xl"} style={{ rotateX: rotation }}>
      <Image src={`/textures/planet_${index + 1}.jpg`} width={30 * 16} height={27 * 16} />
    </motion.div>
  );
};

const ApperaingText = ({ children, ...props }) => {
  return (
    <motion.div {...props} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
      {children}
    </motion.div>
  );
};
