"use client";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Labs = () => {
  const labProjects = [
    {
      id: 1,
      title: "AI Experiments",
      description: "Exploring artificial intelligence and machine learning applications in creative design.",
      gradient: "from-red-400 to-pink-600",
      badge: "Experimental",
      badgeColor: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
      icon: "AI"
    },
    {
      id: 2,
      title: "Virtual Reality",
      description: "Immersive VR experiences and spatial computing experiments.",
      gradient: "from-blue-400 to-cyan-600",
      badge: "Prototype",
      badgeColor: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      icon: "VR"
    },
    {
      id: 3,
      title: "Augmented Reality",
      description: "AR overlays and mixed reality experiences for mobile devices.",
      gradient: "from-green-400 to-emerald-600",
      badge: "In Progress",
      badgeColor: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      icon: "AR"
    },
    {
      id: 4,
      title: "3D Web Graphics",
      description: "Advanced 3D rendering and real-time graphics for the web.",
      gradient: "from-purple-400 to-violet-600",
      badge: "Research",
      badgeColor: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      icon: "3D"
    },
    {
      id: 5,
      title: "Machine Learning",
      description: "Creative applications of machine learning in design and art.",
      gradient: "from-orange-400 to-red-600",
      badge: "Concept",
      badgeColor: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
      icon: "ML"
    },
    {
      id: 6,
      title: "Internet of Things",
      description: "Connected devices and smart environment interactions.",
      gradient: "from-teal-400 to-cyan-600",
      badge: "Planning",
      badgeColor: "bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200",
      icon: "IoT"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F1FA] via-white to-[#F0F1FA] dark:from-black dark:via-gray-900 dark:to-black">
      <Navbar />
      
      {/* Main Content */}
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent leading-tight">
              LABS
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
              Experimental projects and cutting-edge innovations
            </p>
          </motion.div>

          {/* Labs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-12 sm:mb-16 md:mb-20">
            {labProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                {/* Icon/Image Area */}
                <div className={`w-full h-40 sm:h-48 md:h-56 lg:h-64 bg-gradient-to-br ${project.gradient} rounded-lg sm:rounded-xl mb-4 sm:mb-5 md:mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                  <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                    {project.icon}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <span className={`inline-block ${project.badgeColor} text-xs sm:text-sm md:text-base px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-medium`}>
                    {project.badge}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-gray-900 dark:text-white">
              Want to collaborate?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              We're always looking for innovative partners to explore new technologies and push creative boundaries.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 sm:px-8 md:px-10 lg:px-12 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg sm:rounded-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 text-sm sm:text-base md:text-lg"
            >
              Get In Touch
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Labs;
