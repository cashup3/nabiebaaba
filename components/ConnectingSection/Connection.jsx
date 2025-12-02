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
      className="mt-12 sm:mt-16 md:mt-20 lg:mt-32 xl:mt-40 px-4 sm:px-6 lg:px-8 xl:px-0"
    >
      <motion.div
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl lg:text-8xl xl:text-9xl w-full z-10 leading-tight sm:leading-normal"
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        Connecting Ideals to
      </motion.div>
      <motion.div
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl lg:text-8xl xl:text-9xl w-full z-10 leading-tight sm:leading-normal"
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
