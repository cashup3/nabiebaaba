import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const FeaturedVideo = ({refForward, ...props }) => {
  const ref = useRef(null);

  const variants = {
    inital: { scale: 1, x: 0, y: 0 },
    animate: { scale: 1.7, x: "60%", y: "100%" },
  };

  const { scrollYProgress } = useScroll({
    target: refForward,
  });

  const [progress, setProgress] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setProgress(value);
  });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      animate={progress > 0.5 ? "animate" : "initial"}
      className="rounded-3xl bg-blue-200 w-[80vw] sm:w-[60vw] lg:w-[40vw] h-[12rem] sm:h-[16rem] lg:h-[20rem] absolute top-[800px] sm:top-[900px] lg:top-[1000px] left-0 flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl text-bold z-30"
      {...props}
    >
      Featured Video
    </motion.div>
  );
};

export default FeaturedVideo;
