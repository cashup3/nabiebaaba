"use client";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Labs = () => {
  const labProjects = [
    {
      id: 1,
      title: "Commercial & Brand Videos",
      description: "Compelling commercial content and brand storytelling that captivates audiences and drives engagement.",
      gradient: "from-red-400 to-pink-600 dark:from-gray-800 dark:to-gray-900",
      badge: "Active",
      badgeColor: "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200",
      icon: "CB"
    },
    {
      id: 2,
      title: "Corporate & Promotional Films",
      description: "Professional corporate videos and promotional content that elevate your brand and communicate your message effectively.",
      gradient: "from-blue-400 to-cyan-600 dark:from-gray-700 dark:to-gray-800",
      badge: "Active",
      badgeColor: "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200",
      icon: "CP"
    },
    {
      id: 3,
      title: "Music Videos",
      description: "Creative music video production that brings songs to life with stunning visuals and artistic direction.",
      gradient: "from-green-400 to-emerald-600 dark:from-gray-900 dark:to-black",
      badge: "Active",
      badgeColor: "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200",
      icon: "MV"
    },
    {
      id: 4,
      title: "Social Media Content",
      description: "Engaging social media videos optimized for platforms like Instagram, TikTok, YouTube, and more.",
      gradient: "from-purple-400 to-violet-600 dark:from-black dark:to-gray-900",
      badge: "Active",
      badgeColor: "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200",
      icon: "SM"
    },
    {
      id: 5,
      title: "Post-Production",
      description: "Professional editing, color grading, motion graphics, and visual effects to polish your content to perfection.",
      gradient: "from-orange-400 to-red-600 dark:from-gray-800 dark:to-black",
      badge: "Active",
      badgeColor: "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200",
      icon: "PP"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F1FA] via-white to-[#F0F1FA] dark:from-black dark:via-gray-900 dark:to-black text-gray-900 dark:text-white">
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
              Our video production services and creative capabilities
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
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg sm:rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 group cursor-pointer shadow-md hover:shadow-xl dark:shadow-none"
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
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-5 md:mb-6 leading-relaxed">
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
            className="text-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg sm:rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg dark:shadow-none"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-gray-900 dark:text-white">
              Ready to start your project?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's bring your vision to life with professional video production that makes an impact.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 sm:px-8 md:px-10 lg:px-12 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-white dark:to-gray-100 dark:hover:from-gray-100 dark:hover:to-gray-200 text-white dark:text-black font-semibold rounded-lg sm:rounded-xl transition-all duration-300 shadow-md hover:shadow-lg dark:shadow-none active:scale-95 text-sm sm:text-base md:text-lg"
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
