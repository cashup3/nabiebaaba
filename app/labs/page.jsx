"use client";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import { motion } from "framer-motion";

const Labs = () => {
  return (
    <div className="w-screen min-h-screen bg-[#F0F1FA] dark:bg-black text-[#060607] dark:text-white overflow-x-hidden relative">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[12rem] font-extrabold tracking-widest mb-8"
          >
            LABS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4"
          >
            Experimental projects and cutting-edge innovations
          </motion.p>
        </div>
      </div>

      {/* Labs Section */}
      <div className="relative z-10 bg-[#F0F1FA] dark:bg-black min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 py-16 sm:py-20 lg:py-24 xl:py-32 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
            {/* Lab Project 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="w-full h-48 lg:h-56 bg-gradient-to-br from-red-400 to-pink-600 rounded-xl lg:rounded-2xl mb-4 lg:mb-6 flex items-center justify-center">
                <span className="text-white text-2xl lg:text-3xl xl:text-4xl font-bold">AI</span>
              </div>
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-2 lg:mb-3">AI Experiments</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base mb-4 lg:mb-6 leading-relaxed">
                Exploring artificial intelligence and machine learning applications in creative design.
              </p>
              <span className="inline-block bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs lg:text-sm px-2 py-1 lg:px-3 lg:py-2 rounded-full">
                Experimental
              </span>
            </motion.div>

            {/* Lab Project 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="w-full h-48 lg:h-56 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-xl lg:rounded-2xl mb-4 lg:mb-6 flex items-center justify-center">
                <span className="text-white text-2xl lg:text-3xl xl:text-4xl font-bold">VR</span>
              </div>
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-2 lg:mb-3">Virtual Reality</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base mb-4 lg:mb-6 leading-relaxed">
                Immersive VR experiences and spatial computing experiments.
              </p>
              <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs lg:text-sm px-2 py-1 lg:px-3 lg:py-2 rounded-full">
                Prototype
              </span>
            </motion.div>

            {/* Lab Project 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="w-full h-48 lg:h-56 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl lg:rounded-2xl mb-4 lg:mb-6 flex items-center justify-center">
                <span className="text-white text-2xl lg:text-3xl xl:text-4xl font-bold">AR</span>
              </div>
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-2 lg:mb-3">Augmented Reality</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base mb-4 lg:mb-6 leading-relaxed">
                AR overlays and mixed reality experiences for mobile devices.
              </p>
              <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs lg:text-sm px-2 py-1 lg:px-3 lg:py-2 rounded-full">
                In Progress
              </span>
            </motion.div>

            {/* Lab Project 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="w-full h-48 lg:h-56 bg-gradient-to-br from-purple-400 to-violet-600 rounded-xl lg:rounded-2xl mb-4 lg:mb-6 flex items-center justify-center">
                <span className="text-white text-2xl lg:text-3xl xl:text-4xl font-bold">3D</span>
              </div>
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-2 lg:mb-3">3D Web Graphics</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base mb-4 lg:mb-6 leading-relaxed">
                Advanced 3D rendering and real-time graphics for the web.
              </p>
              <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs lg:text-sm px-2 py-1 lg:px-3 lg:py-2 rounded-full">
                Research
              </span>
            </motion.div>

            {/* Lab Project 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="w-full h-48 lg:h-56 bg-gradient-to-br from-orange-400 to-red-600 rounded-xl lg:rounded-2xl mb-4 lg:mb-6 flex items-center justify-center">
                <span className="text-white text-2xl lg:text-3xl xl:text-4xl font-bold">ML</span>
              </div>
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-2 lg:mb-3">Machine Learning</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base mb-4 lg:mb-6 leading-relaxed">
                Creative applications of machine learning in design and art.
              </p>
              <span className="inline-block bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs lg:text-sm px-2 py-1 lg:px-3 lg:py-2 rounded-full">
                Concept
              </span>
            </motion.div>

            {/* Lab Project 6 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="w-full h-48 lg:h-56 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-xl lg:rounded-2xl mb-4 lg:mb-6 flex items-center justify-center">
                <span className="text-white text-2xl lg:text-3xl xl:text-4xl font-bold">IoT</span>
              </div>
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-2 lg:mb-3">Internet of Things</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base mb-4 lg:mb-6 leading-relaxed">
                Connected devices and smart environment interactions.
              </p>
              <span className="inline-block bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-xs lg:text-sm px-2 py-1 lg:px-3 lg:py-2 rounded-full">
                Planning
              </span>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Want to collaborate?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for innovative partners to explore new technologies and push creative boundaries.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Labs; 