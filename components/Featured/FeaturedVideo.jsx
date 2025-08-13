import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const FeaturedVideo = ({refForward, ...props }) => {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

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

  // Only load video when it's visible and user interacts
  const handleVideoClick = () => {
    if (!isVideoLoaded && videoRef.current) {
      setIsVideoLoaded(true);
      videoRef.current.load();
    }
  };

  // Intersection Observer to detect when video is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVideoVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      animate={progress > 0.5 ? "animate" : "initial"}
      className="rounded-3xl w-[80vw] sm:w-[60vw] lg:w-[40vw] h-[12rem] sm:h-[16rem] lg:h-[20rem] absolute top-[500px] sm:top-[600px] lg:top-[700px] left-0 flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl text-bold z-30 overflow-hidden"
      {...props}
    >
      {/* Video Element with Performance Optimizations */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-3xl"
        controls
        preload="none"
        poster="/textures/planet_1.jpg"
        playsInline
        muted
        onClick={handleVideoClick}
      >
        {isVideoLoaded && isVideoVisible && (
          <>
            <source src="/videos/knob studio demo.mov" type="video/quicktime" />
            <source src="/videos/featured-video.mp4" type="video/mp4" />
            <source src="/videos/featured-video.webm" type="video/webm" />
          </>
        )}
        Your browser does not support the video tag.
      </video>
      
      {/* Loading overlay - shows until video is loaded */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 bg-blue-200 flex flex-col items-center justify-center rounded-3xl cursor-pointer" onClick={handleVideoClick}>
          <div className="text-center mb-2">Featured Video</div>
          <div className="text-sm opacity-70">Click to load video</div>
        </div>
      )}
    </motion.div>
  );
};

export default FeaturedVideo;
