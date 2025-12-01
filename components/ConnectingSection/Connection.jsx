import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Connection = (props) => {
  return (
    <motion.div
      {...props}
      initial={{ height: 0 }}
      whileInView={{ height: '100%' }}
      viewport={{ once: true }}
      transition={{ duration: 2, staggerChildren: 1 }}
      className="mt-20 sm:mt-32 lg:mt-40 px-4 sm:px-6 lg:px-0"
    >
      <motion.div
        className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl w-full z-10"
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        Connecting Ideals to
      </motion.div>
        {/* <br /> */}
      <motion.div
        className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl w-full z-10"
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        Uniquely Crafted
        <br />
        Experiences
      </motion.div>
    </motion.div>
  );
};

export default Connection;
