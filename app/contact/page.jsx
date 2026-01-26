"use client";
import Navbar from "@/components/Navbar/Navbar";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", text: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          text: "Message sent successfully. Check your inbox.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await response.json();
        const missing = Array.isArray(data.missing) ? data.missing.join(", ") : "";
        setStatus({
          type: "error",
          text:
            data.error ||
            "Something went wrong. Please try again." +
              (missing ? ` Missing: ${missing}` : ""),
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        text: "Failed to send message. Please try again later.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F1FA] via-white to-[#F0F1FA] dark:from-black dark:via-gray-900 dark:to-black">
      <Navbar />
      
      {/* Main Content */}
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent leading-tight">
              Get In Touch
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
              Have a project in mind? Let's collaborate and bring your ideas to life.
            </p>
          </motion.div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-12 md:mb-16">
            {/* Email Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 002 2z" />
                    </svg>
                  </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1.5 sm:mb-2">Email</h3>
              <a 
                href="mailto:info@knobstud.com" 
                className="text-xs sm:text-sm md:text-base text-blue-600 dark:text-blue-400 hover:underline break-all"
              >
                      info@knobstud.com
                    </a>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1.5 sm:mb-2">Phone</h3>
              <a 
                href="tel:+15149293511" 
                className="text-xs sm:text-sm md:text-base text-blue-600 dark:text-blue-400 hover:underline break-words"
              >
                      +1 (514) 929-3511
                    </a>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow duration-300 sm:col-span-2 md:col-span-1"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1.5 sm:mb-2">Location</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">
                      Toronto, Ontario, Canada
                    </p>
            </motion.div>
          </div>

            {/* Contact Form */}
            <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-12 shadow-lg"
            >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-5 sm:mb-6 md:mb-8 text-center sm:text-left">
              Send us a message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm md:text-base font-medium mb-1.5 sm:mb-2 text-gray-700 dark:text-gray-300">
                    Name *
                  </label>
                    <input 
                      type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="Your name"
                    />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm md:text-base font-medium mb-1.5 sm:mb-2 text-gray-700 dark:text-gray-300">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
                </div>
                
              {/* Subject */}
                <div>
                <label htmlFor="subject" className="block text-xs sm:text-sm md:text-base font-medium mb-1.5 sm:mb-2 text-gray-700 dark:text-gray-300">
                  Subject *
                </label>
                  <input 
                    type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                  placeholder="What's this about?"
                  />
                </div>
                
              {/* Message */}
                <div>
                <label htmlFor="message" className="block text-xs sm:text-sm md:text-base font-medium mb-1.5 sm:mb-2 text-gray-700 dark:text-gray-300">
                  Message *
                </label>
                  <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all text-sm sm:text-base"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
              {/* Submit Button */}
              <div className="pt-1 sm:pt-2">
                <button 
                  type="submit"
                  className="w-full px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg sm:rounded-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 text-sm sm:text-base"
                >
                  Send Message
                </button>
              </div>
              {status.text && (
                <div
                  className={`text-sm sm:text-base ${
                    status.type === "success"
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {status.text}
                </div>
              )}
              </form>
            </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact; 
