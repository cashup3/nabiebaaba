"use client";
import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import Scene from "@/components/About/Particles/Particles";
import MovingLogos from "@/components/About/MovingLogos";
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 2xl:px-32 py-16 sm:py-20 lg:py-32 xl:py-40 2xl:py-48 max-w-[1400px]">
          {/* Animated Title */}
          <motion.div 
            style={{ y: titleY, opacity: titleOpacity }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[17rem] xl:text-[20rem] 2xl:text-[24rem] font-extrabold tracking-widest text-center mb-16 lg:mb-20 xl:mb-24 2xl:mb-32"
          >
            KNOB STUDIO
          </motion.div>

          {/* About Content */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 2xl:gap-32">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 lg:space-y-10 xl:space-y-12 2xl:space-y-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">
                Professional Recording Studio
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-300 leading-relaxed">
                KNOB STUDIO is your premier destination for professional audio recording and production. 
                With over 10 years of experience in the music industry, we've helped countless artists 
                bring their musical visions to life.
              </p>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-300 leading-relaxed">
                Our state-of-the-art facility combines cutting-edge technology with acoustic excellence 
                to deliver studio-quality recordings that capture the true essence of your music.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 lg:space-y-10 xl:space-y-12 2xl:space-y-16"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">
                What We Offer
              </h3>
              <div className="space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12">
                <div className="flex items-start space-x-6 lg:space-x-8 xl:space-x-10 2xl:space-x-12">
                  <div className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 bg-white rounded-full mt-3 lg:mt-4 xl:mt-5 flex-shrink-0"></div>
                  <p className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-300 leading-relaxed">
                    Professional recording sessions with experienced engineers
                  </p>
                </div>
                <div className="flex items-start space-x-6 lg:space-x-8 xl:space-x-10 2xl:space-x-12">
                  <div className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 bg-white rounded-full mt-3 lg:mt-4 xl:mt-5 flex-shrink-0"></div>
                  <p className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-300 leading-relaxed">
                    Mixing and mastering services for polished final products
                  </p>
                </div>
                <div className="flex items-start space-x-6 lg:space-x-8 xl:space-x-10 2xl:space-x-12">
                  <div className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 bg-white rounded-full mt-3 lg:mt-4 xl:mt-5 flex-shrink-0"></div>
                  <p className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-300 leading-relaxed">
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
            className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 xl:gap-20 mt-24 lg:mt-32 xl:mt-40 2xl:mt-48"
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">100+</div>
              <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-400 mt-4 lg:mt-6 xl:mt-8">Songs Recorded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">100%</div>
              <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-400 mt-4 lg:mt-6 xl:mt-8">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">10+</div>
              <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-400 mt-4 lg:mt-6 xl:mt-8">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">24/7</div>
              <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-400 mt-4 lg:mt-6 xl:mt-8">Studio Availability</div>
            </div>
          </motion.div>
        </div>

        {/* Moving Logos Section */}
        <MovingLogos />

        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-900 py-24 lg:py-32 xl:py-40 2xl:py-48"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 2xl:px-32 max-w-[1400px]">
            <div className="text-center mb-16 lg:mb-20 xl:mb-24 2xl:mb-32">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-8 lg:mb-12 xl:mb-16">
                Ready to Record?
              </h2>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Book your session today and experience the KNOB STUDIO difference
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20">
              <a 
                href="mailto:info@knobstud.com"
                className="bg-white text-black px-10 py-5 lg:px-12 lg:py-6 xl:px-16 xl:py-8 2xl:px-20 2xl:py-10 rounded-2xl xl:rounded-3xl font-bold text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl hover:bg-gray-100 transition-colors duration-300"
              >
                Book Your Session
              </a>
              <a 
                href="tel:+1234567890"
                className="border-2 border-white text-white px-10 py-5 lg:px-12 lg:py-6 xl:px-16 xl:py-8 2xl:px-20 2xl:py-10 rounded-2xl xl:rounded-3xl font-bold text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl hover:bg-white hover:text-black transition-colors duration-300"
              >
                Call Us Now
              </a>
            </div>
            
            <div className="text-center mt-16 lg:mt-20 xl:mt-24 2xl:mt-32">
              <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-400">
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
