"use client";

import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import { motion } from "framer-motion";
import EarthHero from "@/components/About/EarthHero";
import MovingLogos from "@/components/About/MovingLogos";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F1FA] via-white to-[#F0F1FA] dark:from-black dark:via-gray-900 dark:to-black text-gray-900 dark:text-white overflow-x-hidden">
      <Navbar />
      <EarthHero />

      {/* Content Section */}
      <section className="relative z-10 bg-transparent dark:bg-black pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          {/* About + What We Offer */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 sm:gap-14 lg:gap-16 xl:gap-20">
          <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-4 sm:space-y-6 md:space-y-7"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                Full-Service Video Production
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                KNOB is a full-service video production company built on passion, precision, and storytelling.
                With more than 15 years in the industry, we&apos;ve worked across commercials, brand films,
                music videos, documentaries, and digital content — always focused on quality and impact.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                Our team blends creative vision with technical excellence to deliver visuals that feel
                authentic, modern, and unforgettable.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-5 sm:space-y-6 md:space-y-7"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                What We Offer
              </h3>
              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gray-900 dark:bg-white rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Commercials and brand films that tell your story
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gray-900 dark:bg-white rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Music videos and creative content production
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gray-900 dark:bg-white rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Documentaries and digital content with cinematic quality
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mt-12 sm:mt-16 lg:mt-20"
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                500+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 mt-3">
                Projects Completed
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold">
                100%
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400 mt-3">
                Client Satisfaction
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold">
                15+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400 mt-3">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold">
                50+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400 mt-3">
                Awards & Recognition
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent & Previous Clients */}
        <MovingLogos />

        {/* Contact Section */}
      <section className="bg-gray-100 dark:bg-[#050505] border-t border-gray-200 dark:border-gray-800/60 py-16 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white"
          >
            Ready to bring your vision to life?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-10"
          >
            Let&apos;s create something unforgettable together. From concept to final cut,
            we&apos;re with you at every step of your production journey.
          </motion.p>
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
              <a 
                href="mailto:info@knobstud.com"
              className="bg-gray-900 dark:bg-white text-white dark:text-black px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-xl font-semibold text-sm sm:text-base md:text-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300"
              >
              Start Your Project
              </a>
              <a 
              href="tel:+15149293511"
              className="border border-gray-900 dark:border-white text-gray-900 dark:text-white px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-xl font-semibold text-sm sm:text-base md:text-lg hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-300"
              >
                Call Us Now
              </a>
        </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400"
          >
            Located in{" "}
            <span className="text-gray-900 dark:text-white font-semibold">
              Toronto, Ontario, Canada
            </span>
          </motion.p>
      </div>
      </section>
    </div>
  );
};

export default About;

