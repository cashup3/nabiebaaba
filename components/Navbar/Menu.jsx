import { useSpring, a } from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState, useCallback } from "react";

const Menu = ({ open, onOutsideClick, onLinkClick }) => {
  const ref = useRef();
  const pathname = usePathname();
  const timeoutRef = useRef(null);
  
  const handleChildClick = useCallback((event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onOutsideClick(event);
    }
  }, [onOutsideClick]);

  // Close menu when route changes
  useEffect(() => {
    if (open && onLinkClick) {
      onLinkClick();
    }
  }, [pathname, open, onLinkClick]);

  useEffect(() => {
    if (open) {
      document.addEventListener("click", handleChildClick);
    }
    return () => {
      document.removeEventListener("click", handleChildClick);
      // Cleanup timeout if component unmounts
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [open, handleChildClick]);

  const [contents, contentsApi] = useSpring(() => ({
    from: { y: 100, opacity: 0, transform: "rotate(20deg)" },
  }));

  const [news, newsApi] = useSpring(() => ({
    from: { y: 100, opacity: 0, transform: "rotate(-20deg)" },
  }));
  
  const [hidden, setHidden] = useState(true);
  
  useEffect(() => {
    // Cleanup previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (open === false) {
      // Hide menu after animation completes (500ms)
      timeoutRef.current = setTimeout(() => {
        setHidden(true);
      }, 500);
    } else {
      // Show menu immediately when opening
      setHidden(false);
    }

    contentsApi.start({
      y: open ? 0 : 100,
      opacity: open ? 1 : 0,
      transform: open ? `rotate(0deg)` : `rotate(20deg)`,
    });

    newsApi.start({
      y: open ? 0 : 100,
      opacity: open ? 1 : 0,
      transform: open ? `rotate(0deg)` : `rotate(-20deg)`,
    });

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [open, contentsApi, newsApi]);

  return (
    <>
      {!hidden && (
        <div
          className="absolute top-[4rem] right-0 w-[calc(100vw-2rem)] lg:w-[20rem] max-w-[20rem]"
          ref={ref}
        >
          {/* Contents */}
          <a.div
            className="rounded-xl bg-white dark:bg-gray-800 flex flex-col font-Aeonik text-2xl lg:text-3xl p-6 lg:p-8 text-gray-900 dark:text-white"
            style={contents}
          >
            <div className="flex justify-between pb-3">
              <Link href="/" onClick={onLinkClick} className="hover:opacity-70 transition-opacity">HOME</Link>
              <div>•</div>
            </div>
            <div className="py-3">
              <Link href={"/about"} onClick={onLinkClick} className="hover:opacity-70 transition-opacity">ABOUT US</Link>
            </div>
            <div className="py-3">
              <Link href="/services" onClick={onLinkClick} className="hover:opacity-70 transition-opacity">Services</Link>
            </div>
            <div className="pt-3">
              <Link href="/contact" onClick={onLinkClick} className="hover:opacity-70 transition-opacity">CONTACT</Link>
            </div>
          </a.div>

          {/* Newsletter */}
          <a.div
            className="rounded-xl bg-white dark:bg-gray-800 flex flex-col p-6 lg:p-8 my-2 text-gray-900 dark:text-white"
            style={news}
          >
            <div className="font-Aeonik text-2xl lg:text-4xl ">
              Subscribe to our newsletter
            </div>
            <form
              onSubmit={() => console.log("submitted thank you")}
              className="flex justify-between bg-[#F0F1FA] dark:bg-gray-700 p-3 lg:p-4 rounded-xl mt-6 text-[#BEBFC7] dark:text-gray-300 text-lg lg:text-xl"
            >
              <label className="">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-[#F0F1FA] dark:bg-gray-700 dark:text-white w-1/2"
                ></input>
              </label>
              <button type="submit">
                <Image
                  src={"/arrow-right.svg"}
                  width={30}
                  height={30}
                  alt="right-arrow"
                />
              </button>
            </form>
          </a.div>
        </div>
      )}
    </>
  );
};

export default Menu;
