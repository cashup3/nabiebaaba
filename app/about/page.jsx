"use client";

import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import { motion } from "framer-motion";
import EarthHero from "@/components/About/EarthHero";
import MovingLogos from "@/components/About/MovingLogos";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <EarthHero />

      {/* Content Section */}
      <section className="relative z-10 bg-black pb-16 sm:pb-20 lg:pb-24">
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                Professional Recording Studio
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                KNOB STUDIO is your premier destination for professional audio
                recording and production. With over 10 years of experience in
                the music industry, we&apos;ve helped countless artists bring
                their musical visions to life.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                Our state-of-the-art facility combines cutting-edge technology
                with acoustic excellence to deliver studio-quality recordings
                that capture the true essence of your sound.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-5 sm:space-y-6 md:space-y-7"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                What We Offer
              </h3>
              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                    Professional recording sessions with experienced engineers
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                    Mixing and mastering services for polished final products
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                    Creative production support from demo to final release
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
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold">
                100+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400 mt-3">
                Songs Recorded
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
                10+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400 mt-3">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold">
                24/7
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400 mt-3">
                Studio Availability
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent & Previous Clients */}
      <MovingLogos />

      {/* Contact Section */}
      <section className="bg-[#050505] border-t border-gray-800/60 py-16 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
          >
            Ready to record your next project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-10"
          >
            Book your session today and experience the KNOB STUDIO difference.
            From demo to final master, we&apos;re with you at every step.
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
              className="bg-white text-black px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-xl font-semibold text-sm sm:text-base md:text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Book Your Session
            </a>
            <a
              href="tel:+15149293511"
              className="border border-white text-white px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-xl font-semibold text-sm sm:text-base md:text-lg hover:bg-white hover:text-black transition-colors duration-300"
            >
              Call Us Now
            </a>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 text-xs sm:text-sm md:text-base text-gray-400"
          >
            Located in{" "}
            <span className="text-white font-semibold">
              Toronto, Ontario, Canada
            </span>
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default About;

