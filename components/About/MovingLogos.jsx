import React from 'react';
import { motion } from 'framer-motion';

const MovingLogos = () => {
  // Sample company logos - you can replace these with actual company logos
  const companies = [
    { name: 'Company A', logo: 'A' },
    { name: 'Company B', logo: 'B' },
    { name: 'Company C', logo: 'C' },
    { name: 'Company D', logo: 'D' },
    { name: 'Company E', logo: 'E' },
    { name: 'Company F', logo: 'F' },
    { name: 'Company G', logo: 'G' },
    { name: 'Company H', logo: 'H' },
    { name: 'Company I', logo: 'I' },
    { name: 'Company J', logo: 'J' },
    { name: 'Company K', logo: 'K' },
    { name: 'Company L', logo: 'L' },
  ];

  // Duplicate the array to create seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className="w-full bg-black py-16 lg:py-20 xl:py-24 2xl:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 2xl:px-32 max-w-[1400px]">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20 xl:mb-24 2xl:mb-32"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-6 lg:mb-8 xl:mb-10">
            Clients We Work With
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-gray-400 max-w-4xl mx-auto">
            Trusted by leading companies and brands
          </p>
        </motion.div>

        {/* Moving Logos Container */}
        <div className="relative">
          {/* First row of logos */}
          <motion.div 
            className="flex items-center space-x-16 lg:space-x-20 xl:space-x-24 2xl:space-x-32"
            animate={{ x: [0, -50 * companies.length] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {duplicatedCompanies.map((company, index) => (
              <div 
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="w-24 h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 2xl:w-48 2xl:h-48 bg-white rounded-2xl lg:rounded-3xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110">
                  <span className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-black">
                    {company.logo}
                  </span>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-300 font-medium">
                    {company.name}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Second row of logos (moving in opposite direction for variety) */}
          <motion.div 
            className="flex items-center space-x-16 lg:space-x-20 xl:space-x-24 2xl:space-x-32 mt-16 lg:mt-20 xl:mt-24 2xl:mt-32"
            animate={{ x: [-50 * companies.length, 0] }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {duplicatedCompanies.map((company, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="w-20 h-20 lg:w-28 lg:h-28 xl:w-36 xl:h-36 2xl:w-44 2xl:h-44 bg-gray-800 border border-gray-700 rounded-2xl lg:rounded-3xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110">
                  <span className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-white">
                    {company.logo}
                  </span>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-xs lg:text-sm xl:text-base 2xl:text-lg text-gray-400 font-medium">
                    {company.name}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16 lg:mt-20 xl:mt-24 2xl:mt-32"
        >
          <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-400 mb-8 lg:mb-10 xl:mb-12">
            Want to join our client list?
          </p>
          <a 
            href="mailto:info@knobstud.com"
            className="inline-block bg-white text-black px-8 py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 2xl:px-16 2xl:py-8 rounded-2xl font-bold text-lg lg:text-xl xl:text-2xl 2xl:text-3xl hover:bg-gray-100 transition-colors duration-300"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default MovingLogos; 