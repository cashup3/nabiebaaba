import React, { useEffect, useRef } from "react";
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
import Image from "next/image";

const FeaturedWork = () => {
  const containerRef = useRef(null);
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
  const isVisibleRef = useRef(true);
  
  // Intersection Observer to pause animations when not visible
  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    
    observer.observe(containerRef.current);
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  
  // Only run animation frame when component is visible and has meaningful velocity
  useAnimationFrame((t, delta) => {
    if (!isVisibleRef.current) return;
    const velocity = velocityFactor.get();
    if (Math.abs(velocity) < 0.1) return; // Skip if velocity is very small
  });

  return (
    <div ref={containerRef} className="w-full h-auto px-4 sm:px-6 lg:px-8 xl:px-0 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
      <div className="flex flex-col lg:flex-row w-full justify-between items-start lg:items-center gap-4 sm:gap-6 lg:gap-0 mb-6 sm:mb-8 lg:mb-0">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl lg:text-[9rem] font-bold">Featured Work</div>
        <div className="text-[10px] sm:text-xs md:text-sm font-semibold max-w-xs sm:max-w-sm lg:max-w-none leading-relaxed">
          A SELECTION OF OUR MOST PASSIONALITY <br className="hidden sm:block" />
          CRAFTED WORKS WITH FORWARD THINKING
          <br className="hidden sm:block" /> CLIENTS AND FRIENDS OVER THE YEARS
        </div>
      </div>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 perspective-1000 w-full h-auto transform-style-3d mt-6 sm:mt-8 lg:mt-0">
        {[
          "/textures/4972058170432270203.jpg",
          "/textures/4972058170432270207.jpg",
          "/textures/4972058170432270208.jpg",
        ].map((src, index) => (
          <motion.div key={src} className={"flex items-center shadow-lg text-center justify-center w-full rounded-lg sm:rounded-xl lg:rounded-2xl xl:rounded-3xl h-[12rem] sm:h-[16rem] md:h-[20rem] lg:h-[24rem] xl:h-[27rem] text-black overflow-hidden"} style={{ rotateX: velocityFactor }}>
            <Image src={src} width={300} height={270} className="w-full h-full object-cover rounded-lg sm:rounded-xl lg:rounded-2xl xl:rounded-3xl" loading="lazy" alt={`Featured work ${index + 1}`}/>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(FeaturedWork);

const ApperaingText = ({ children, ...props }) => {
  return (
    <motion.div {...props} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
      {children}
    </motion.div>
  );
};
