import React, { useEffect, useRef, useState } from "react";
import { a, useSpring } from "@react-spring/web";
import Menu from "./Menu";

const MobileMenuButton = () => {
  const [isOpen, open] = useState(false);

  const [hamburger, hamburgerApi] = useSpring(() => ({
    from: { transform: `rotate(0deg)` },
  }));

  const [line1, line1Api] = useSpring(() => ({
    from: { transform: `translateY(0px) rotate(0deg)` },
  }));

  const [line2, line2Api] = useSpring(() => ({
    from: { opacity: 1 },
  }));

  const [line3, line3Api] = useSpring(() => ({
    from: { transform: `translateY(0px) rotate(0deg)` },
  }));

  const handleClick = () => {
    if (isOpen) {
      // Close animation
      hamburgerApi.start({ transform: `rotate(0deg)` });
      line1Api.start({ transform: `translateY(0px) rotate(0deg)` });
      line2Api.start({ opacity: 1 });
      line3Api.start({ transform: `translateY(0px) rotate(0deg)` });
    } else {
      // Open animation
      hamburgerApi.start({ transform: `rotate(180deg)` });
      line1Api.start({ transform: `translateY(8px) rotate(45deg)` });
      line2Api.start({ opacity: 0 });
      line3Api.start({ transform: `translateY(-8px) rotate(-45deg)` });
    }
    open(!isOpen);
  };

  const ref = useRef();
  const handleWindowClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      open(false);
      hamburgerApi.start({ transform: `rotate(0deg)` });
      line1Api.start({ transform: `translateY(0px) rotate(0deg)` });
      line2Api.start({ opacity: 1 });
      line3Api.start({ transform: `translateY(0px) rotate(0deg)` });
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleWindowClick);
    return () => {
      document.removeEventListener("click", handleWindowClick);
    };
  }, []);

  return (
    <>
      <Menu open={isOpen} onOutsideClick={handleWindowClick} />
      <div
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 cursor-pointer hover:bg-white hover:scale-105 transition-all duration-200"
        ref={ref}
        onClick={handleClick}
      >
        <div className="relative w-5 h-4">
          <a.div 
            className="absolute w-5 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300"
            style={line1}
          />
          <a.div 
            className="absolute top-2 w-5 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300"
            style={line2}
          />
          <a.div 
            className="absolute top-4 w-5 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300"
            style={line3}
          />
        </div>
      </div>
    </>
  );
};

export default MobileMenuButton; 