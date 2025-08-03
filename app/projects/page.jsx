"use client";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
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
            PROJECTS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4"
          >
            Our latest creative digital experiences and interactive projects
          </motion.p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 bg-[#F0F1FA] dark:bg-black min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Interactive 3D Experience</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Immersive 3D environment with real-time interactions and stunning visuals.
              </p>
            </motion.div>

            {/* Project 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-48 bg-gradient-to-br from-green-400 to-blue-600 rounded-xl mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Web Application</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Responsive web application with modern design and smooth animations.
              </p>
            </motion.div>

            {/* Project 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-48 bg-gradient-to-br from-purple-400 to-pink-600 rounded-xl mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Digital Experience</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Creative digital experience that pushes the boundaries of web technology.
              </p>
            </motion.div>

            {/* Project 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-48 bg-gradient-to-br from-orange-400 to-red-600 rounded-xl mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Mobile Interface</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Mobile-first interface design with intuitive user experience.
              </p>
            </motion.div>

            {/* Project 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-48 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-xl mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Animation System</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Advanced animation system with smooth transitions and effects.
              </p>
            </motion.div>

            {/* Project 6 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-48 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-xl mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Creative Platform</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Creative platform for artists and designers to showcase their work.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 