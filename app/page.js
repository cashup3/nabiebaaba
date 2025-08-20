"use client";
import { Suspense, useRef } from "react";
import Footer from "@/components/Character/Experience";

import Header from "@/components/Featured/Header";
import SubHeader from "@/components/Featured/SubHeader";
import Description from "@/components/Navbar/Description";
import Navbar from "@/components/Navbar/Navbar";
import ScrollText from "@/components/Navbar/ScrollText";
import { Scene } from "@/components/Pipes/CrossPipes";
import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";
import FeaturedVideo from "@/components/Featured/FeaturedVideo";
import Connection from "@/components/ConnectingSection/Connection";
import Experience from "@/components/Experience/Experience";
import { Planets } from "@/components/Pipes/Planets";

export default function Home() {
  const ref = useRef(null);
  return (
    <Suspense
      fallback={
        <div className="w-screen bg-black h-screen text-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          
          {/* Loading text */}
          <div className="relative z-10 text-center">
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-4 tracking-wider">
              KNOB STUDIO
            </h1>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8">
              Loading amazing experiences...
            </p>
          </div>
          
          {/* Animated loading dots */}
          <div className="relative z-10 flex space-x-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-bounce"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
          
          {/* Progress bar */}
          <div className="relative z-10 w-48 sm:w-64 md:w-80 lg:w-96 h-1 bg-gray-700 rounded-full mt-8 overflow-hidden">
            <div className="h-full bg-white rounded-full animate-pulse" style={{
              animation: 'loading 2s ease-in-out infinite'
            }}></div>
          </div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
          
          <style jsx>{`
            @keyframes loading {
              0% { width: 0%; }
              50% { width: 70%; }
              100% { width: 100%; }
            }
            @keyframes float {
              0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
              50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
            }
          `}</style>
        </div>
      }
    >
      <div className="bg-[#F0F1FA] dark:bg-black h-auto w-screen font-[#060607] dark:text-white flex flex-col px-4 sm:px-6 lg:px-20 overflow-hidden transition-colors duration-300">
        <Navbar />

        <div className="h-screen flex flex-col pb-6 ">
          <Description />
          {/* <div className="h-full bg-brblue rounded-3xl"></div> */}
          {/* <Scene className="rounded-xl lg:rounded-3xl" /> */}
          <Planets className="h-full rounded-xl lg:rounded-3xl" />
          <ScrollText />
        </div>
      {/* </div> */}
        <div className="h-auto relative mt-8 sm:mt-12 lg:mt-16" ref={ref}>
          <Header />
          <SubHeader />
        </div>
        <FeaturedVideo />
        <FeaturedWork />
        <Connection className="" />
      {/* <div className="bg-brblue flex items-center justify-center w-full h-screen font-extrabold text-9xl"> this is the footer  </div> */}
        <div className="relative">
          <Footer />
          <div className="absolute text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center w-full h-full top-[10rem] sm:top-[20rem] md:top-[30rem] lg:top-[40rem] px-4">
            Powered By Knob Studio
          </div>
        </div>
        
        {/* Social Media Footer */}
        <div className="w-full bg-black text-white py-12 px-4 sm:px-6 lg:px-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
              {/* Company Info */}
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">KNOB STUDIO</h3>
                <p className="text-gray-400 text-sm sm:text-base">Professional Recording Studio</p>
                <div className="mt-4">
                  <a 
                    href="mailto:info@knobstud.com" 
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base flex items-center justify-center sm:justify-start gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    info@knobstud.com
                  </a>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="flex items-center gap-6">
                {/* Instagram */}
                <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z"/>
                    </svg>
                  </div>
                </a>
                
                {/* Facebook */}
                <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                </a>
                
                {/* Twitter/X */}
                <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
                  <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center border border-gray-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                </a>
                
                {/* YouTube */}
                <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
                  <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © 2024 KNOB STUDIO. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
