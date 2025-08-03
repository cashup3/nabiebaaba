"use client";
import { Suspense, useRef } from "react";
import Footer from "@/components/Character/Experience";
import FeaturedVideo from "@/components/Featured/FeaturedVideo";
import Header from "@/components/Featured/Header";
import Skiggle from "@/components/Featured/Skiggle";
import SubHeader from "@/components/Featured/SubHeader";
import Description from "@/components/Navbar/Description";
import Navbar from "@/components/Navbar/Navbar";
import ScrollText from "@/components/Navbar/ScrollText";
import { Scene } from "@/components/Pipes/CrossPipes";
import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";
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
        <div className="h-[200vh] relative mt-[10rem] sm:mt-[15rem] lg:mt-[20rem]" ref={ref}>
          <Skiggle />
          <Header />
          <SubHeader />
          <FeaturedVideo refForward={ref} />
        </div>
        <FeaturedWork />
        <Connection className="" />
      {/* <div className="bg-brblue flex items-center justify-center w-full h-screen font-extrabold text-9xl"> this is the footer  </div> */}
        <div className="relative">
          <div className="absolute text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-center w-full h-full top-20 sm:top-40 md:top-60 lg:top-80 px-4">
            With       Love
          </div>
          <Footer />
          <div className="absolute text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center w-full h-full top-[10rem] sm:top-[20rem] md:top-[30rem] lg:top-[40rem] px-4">
            Made By Knob Studio
          </div>
        </div>
      </div>
    </Suspense>
  );
}
