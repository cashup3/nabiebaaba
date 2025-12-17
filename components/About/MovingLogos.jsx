"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const MovingLogos = () => {
  const clients = [
    { name: "Canada Film Equipment", logo: "/logos/canada-film-equipment.png" },
    { name: "Ontario Camera", logo: "/logos/ontario-camera.png" },
    { name: "Strada XR", logo: "/logos/strada-xr.png" },
    { name: "B Camera", logo: "/logos/b-camera.png" },
    { name: "Rumiversal", logo: "/logos/rumiversal.png" },
    { name: "Warner Brothers", logo: "/logos/warner-brothers.png" },
    { name: "Def Jam", logo: "/logos/def-jam.png" },
    { name: "Epic Records", logo: "/logos/epic-records.png" },
    { name: "97 Collective", logo: "/logos/97-collective.png" },
    { name: "Toronto Film School", logo: "/logos/toronto-film-school.png" },
    { name: "OVO", logo: "/logos/ovo.png" },
  ];

  // Duplicate for seamless loop
  const row1 = [...clients, ...clients];
  const row2 = [...clients, ...clients];

  return (
    <section className="w-full bg-black py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          Trusted By
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Industry leaders we&apos;ve worked with
        </p>
      </motion.div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Row 1 - Moving Left */}
        <div className="flex mb-6 sm:mb-8">
          <motion.div
            className="flex gap-6 sm:gap-8"
            animate={{ x: [0, -1920] }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {row1.map((client, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-white rounded-xl p-4 flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160}
                  height={160}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Moving Right */}
        <div className="flex">
          <motion.div
            className="flex gap-6 sm:gap-8"
            animate={{ x: [-1920, 0] }}
            transition={{
              x: {
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {row2.map((client, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160}
                  height={160}
                  className="w-full h-full object-contain invert"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-16 sm:mt-20"
      >
        <a
          href="mailto:info@knobstud.com"
          className="inline-block border border-white text-white px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-medium hover:bg-white hover:text-black transition-all duration-300"
        >
          Work With Us
        </a>
      </motion.div>
    </section>
  );
};

export default MovingLogos;
