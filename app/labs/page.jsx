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
        <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Lab Project 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="w-full h-48 bg-gradient-to-br from-red-400 to-pink-600 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">AI</span>
              </div>
              <h3 className="text-xl font-bold mb-2">AI Experiments</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Exploring artificial intelligence and machine learning applications in creative design.
              </p>
              <span className="inline-block bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs px-2 py-1 rounded-full">
                Experimental
              </span>
            </motion.div>

            {/* Lab Project 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">VR</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Virtual Reality</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Immersive VR experiences and spatial computing experiments.
              </p>
              <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full">
                Prototype
              </span>
            </motion.div>

            {/* Lab Project 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="w-full h-48 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">AR</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Augmented Reality</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                AR overlays and mixed reality experiences for mobile devices.
              </p>
              <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full">
                In Progress
              </span>
            </motion.div>

            {/* Lab Project 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="w-full h-48 bg-gradient-to-br from-purple-400 to-violet-600 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">3D</span>
              </div>
              <h3 className="text-xl font-bold mb-2">3D Web Graphics</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Advanced 3D rendering and real-time graphics for the web.
              </p>
              <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded-full">
                Research
              </span>
            </motion.div>

            {/* Lab Project 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="w-full h-48 bg-gradient-to-br from-orange-400 to-red-600 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">ML</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Creative applications of machine learning in design and art.
              </p>
              <span className="inline-block bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs px-2 py-1 rounded-full">
                Concept
              </span>
            </motion.div>

            {/* Lab Project 6 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="w-full h-48 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">IoT</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Internet of Things</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Connected devices and smart environment interactions.
              </p>
              <span className="inline-block bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-xs px-2 py-1 rounded-full">
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