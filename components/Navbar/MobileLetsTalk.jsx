import React from "react";
import { useSpring, a } from "@react-spring/web";

const MobileLetsTalk = () => {
  const [springs, api] = useSpring(() => ({
    from:{x:0},
    x: -5,
  }));

  const [opacitySprings, opacityApi] = useSpring(() => ({
    opacity: 1,
    x:0,
  }));

  const [opacitySpringsReverse, opacityApiReverse] = useSpring(() => ({
    opacity: 0,
    x:-5,
  }));

  const handleClick = () => {
    // For mobile devices, use tel: protocol
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window.location.href = 'tel:+15149293511';
    } else {
      // For desktop, show a prompt or copy to clipboard
      if (navigator.clipboard) {
        navigator.clipboard.writeText('+15149293511').then(() => {
          alert('Phone number copied to clipboard: +15149293511');
        });
      } else {
        alert('Phone number: +15149293511');
      }
    }
  };

  return (
    <div
      className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2B2E3A] text-[#D4D5D7] hover:bg-brblue cursor-pointer transition-all duration-300 active:scale-95"
      onMouseEnter={() => {
        api.start({  x: 10 });
        opacityApi.start({ opacity: 0, x: 3 });
        opacityApiReverse.start({ opacity: 1, x: 2 });
      }}
      onMouseLeave={() => {
        api.start({  x: 0 });
        opacityApi.start({ opacity: 1 , x:0});
        opacityApiReverse.start({ opacity: 0, x: -5 });
      }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <div className="flex items-center justify-center text-xs font-medium">
        <a.div style={opacitySpringsReverse} className="opacity-0">➔</a.div>
        <a.div style={springs}>TALK</a.div>
        <a.div style={opacitySprings}>&nbsp;•</a.div>
      </div>
    </div>
  );
};

export default MobileLetsTalk; 