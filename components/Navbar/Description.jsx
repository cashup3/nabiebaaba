import React, { useState, useEffect } from "react";
import { Trail } from "./TrailText";

const Description = () => {
  const [open, set] = useState(false);
  useEffect(() => {
    set(true);
  }, []);

  return (
    <>
      {/* Description small screen */}
      <div className="pt-12 sm:pt-16 md:pt-20 pb-3 sm:pb-4 md:pb-6 lg:hidden px-2 sm:px-4">
        <div className="text-lg sm:text-xl md:text-2xl text-[#2B2E3A] dark:text-white font-extrabold leading-tight sm:leading-7">
          <Trail open={open}>
            <span>we can give you the world</span>
            <span>but there are other</span>
            <span>planets too</span>
          </Trail>
        </div>
      </div>

      {/*  Description large screen */}
      <div className="w-full items-start justify-center hidden lg:flex pt-6 lg:pt-8 xl:pt-11 pb-6 lg:pb-8 xl:pb-10 px-4 lg:px-8">
        <div className="text-xl lg:text-2xl xl:text-[2.75rem] w-full lg:w-2/4 text-[#2B2E3A] dark:text-white font-[500] leading-7 lg:leading-9 xl:leading-10">
          <Trail open={open}>
            <span>we can give you the world</span>
            <span>but there are other</span>
            <span>planets too</span>
          </Trail>
        </div>
      </div>
    </>
  );
};

export default Description;
