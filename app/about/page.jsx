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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 py-16 sm:py-20 lg:py-24 xl:py-32 max-w-7xl">
          {/* Animated Title */}
          <motion.div 
            style={{ y: titleY, opacity: titleOpacity }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[17rem] xl:text-[20rem] font-extrabold tracking-widest text-center mb-16 lg:mb-20 xl:mb-24"
          >
            KNOB STUDIO
          </motion.div>

          {/* About Content */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:space-y-8"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                Professional Recording Studio
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed">
                KNOB STUDIO is your premier destination for professional audio recording and production. 
                With over 10 years of experience in the music industry, we've helped countless artists 
                bring their musical visions to life.
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed">
                Our state-of-the-art facility combines cutting-edge technology with acoustic excellence 
                to deliver studio-quality recordings that capture the true essence of your music.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 lg:space-y-8"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                What We Offer
              </h3>
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-start space-x-4 lg:space-x-6">
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-white rounded-full mt-2 lg:mt-3 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 leading-relaxed">
                    Professional recording sessions with experienced engineers
                  </p>
                </div>
                <div className="flex items-start space-x-4 lg:space-x-6">
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-white rounded-full mt-2 lg:mt-3 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 leading-relaxed">
                    Mixing and mastering services for polished final products
                  </p>
                </div>
                <div className="flex items-start space-x-4 lg:space-x-6">
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-white rounded-full mt-2 lg:mt-3 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 leading-relaxed">
                    Affordable rates without compromising on quality
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
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-20 lg:mt-24 xl:mt-32"
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">100+</div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-400 mt-2 lg:mt-4">Songs Recorded</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">100%</div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-400 mt-2 lg:mt-4">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">10+</div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-400 mt-2 lg:mt-4">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">24/7</div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-400 mt-2 lg:mt-4">Studio Availability</div>
            </div>
          </motion.div>
        </div>

        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-900 py-20"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 max-w-7xl">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8">
                Ready to Record?
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Book your session today and experience the KNOB STUDIO difference
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-10">
              <a 
                href="mailto:info@knobstud.com"
                className="bg-white text-black px-8 py-4 lg:px-10 lg:py-5 rounded-xl lg:rounded-2xl font-bold text-lg lg:text-xl hover:bg-gray-100 transition-colors duration-300"
              >
                Book Your Session
              </a>
              <a 
                href="tel:+1234567890"
                className="border-2 border-white text-white px-8 py-4 lg:px-10 lg:py-5 rounded-xl lg:rounded-2xl font-bold text-lg lg:text-xl hover:bg-white hover:text-black transition-colors duration-300"
              >
                Call Us Now
              </a>
            </div>
            
            <div className="text-center mt-12 lg:mt-16">
              <p className="text-gray-400 text-base lg:text-lg">
                Located in <span className="text-white font-semibold">Toronto, Ontario, Canada</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
