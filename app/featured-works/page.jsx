"use client";

import Navbar from "@/components/Navbar/Navbar";
import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";

export default function FeaturedWorksPage() {
  return (
    <div className="min-h-screen bg-[#F0F1FA] dark:bg-black text-gray-900 dark:text-white px-4 sm:px-6 lg:px-8 xl:px-20 pb-16">
      <Navbar />
      <div className="pt-24 sm:pt-28 lg:pt-32">
        <FeaturedWork />
      </div>
    </div>
  );
}
