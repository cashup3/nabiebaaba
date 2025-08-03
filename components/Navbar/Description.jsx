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
      <div className="pt-16 sm:pt-20 pb-4 sm:pb-6 lg:hidden px-2">
        <div className="text-xl sm:text-2xl md:text-3xl text-[#2B2E3A] font-extrabold leading-tight sm:leading-7">
          <Trail open={open}>
            <span>We build epic realtime</span>
            <span>interactive experience to</span>
            <span>blow people's minds</span>
          </Trail>
        </div>
      </div>

      {/*  Description large screen */}
      <div className="w-full items-start justify-center hidden lg:flex pt-8 lg:pt-11 pb-8 lg:pb-10">
        <div className="text-2xl xl:text-[2.75rem] w-full lg:w-2/4 text-[#2B2E3A] font-[500] leading-8 lg:leading-10">
          <Trail open={open}>
            <span>We build epic realtime</span>
            <span>interactive experience to</span>
            <span>blow people's minds</span>
          </Trail>
        </div>
      </div>
    </>
  );
};

export default Description;
