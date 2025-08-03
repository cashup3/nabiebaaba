import React from "react";

const ScrollText = (props) => {
  return (
    <div className="w-full flex items-center justify-between font-bold text-lg sm:text-xl lg:text-2xl mt-4 px-4 sm:px-6 lg:px-0" {...props}>
      <div className="hidden sm:block">+</div>
      <div className="sm:hidden">+</div>
      <div className="text-center flex-1 sm:flex-none">Scroll to Explore</div>
      <div className="hidden sm:block">+</div>
      <div className="sm:hidden">+</div>
    </div>
  );
};

export default ScrollText;
