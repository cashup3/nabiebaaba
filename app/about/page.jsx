"use client";
import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import Scene from "@/components/About/Particles/Particles";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scrollTextOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div className="w-screen min-h-screen bg-black text-white overflow-x-hidden relative">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <Scene />
        
        {/* Scroll Text */}
        <motion.div 
          style={{ opacity: scrollTextOpacity }}
          className="absolute z-10 w-full flex items-center justify-between font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-white px-4 sm:px-6 lg:px-20 top-1/2 transform -translate-y-1/2"
        >
          <div className="hidden sm:block">+</div>
          <div className="sm:hidden">+</div>
          <div className="text-center flex-1 sm:flex-none">Scroll to Explore</div>
          <div className="hidden sm:block">+</div>
          <div className="sm:hidden">+</div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 bg-black min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-20">
          {/* Animated Title */}
          <motion.div 
            style={{ y: titleY, opacity: titleOpacity }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[17rem] font-extrabold tracking-widest text-center mb-20"
          >
            KNOB STUDIO
          </motion.div>

          {/* About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                Creative Digital Experiences
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                We specialize in creating immersive digital experiences that push the boundaries 
                of what's possible on the web. Our team combines cutting-edge technology with 
                creative design to deliver unforgettable user experiences.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                From interactive 3D environments to responsive web applications, we craft 
                solutions that not only look stunning but also perform flawlessly across 
                all devices and platforms.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                Our Approach
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base text-gray-300">
                    Innovative design thinking and user-centered approaches
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base text-gray-300">
                    Cutting-edge 3D and interactive technologies
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base text-gray-300">
                    Responsive and performant web experiences
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">50+</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400 mt-2">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">100%</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400 mt-2">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">24/7</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400 mt-2">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">5+</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400 mt-2">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
