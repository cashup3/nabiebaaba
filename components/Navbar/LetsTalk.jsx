import React from "react";
import Link from "next/link";
import { useSpring, a } from "@react-spring/web";

const LetsTalk = () => {
  const [springs, api] = useSpring(() => ({
    from:{x:0},
    x: -10,
  }));

  const [opacitySprings, opacityApi] = useSpring(() => ({
    opacity: 1,
    x:0,
  }));

  const [opacitySpringsReverse, opacityApiReverse] = useSpring(() => ({
    opacity: 0,
    x:-10,
  }));

  return (
    <Link
      href="/lets-talk"
      className="nav_btn_lg nav_btn_dark flex items-center justify-center hover:bg-brblue py-6 cursor-pointer transition-all duration-300 active:scale-95 no-underline"
      onMouseEnter={() => {
        api.start({  x: 20 });
        opacityApi.start({ opacity: 0, x: 5 });
        opacityApiReverse.start({ opacity: 1, x: 3 });
      }}
      onMouseLeave={() => {
        api.start({  x: 0 });
        opacityApi.start({ opacity: 1 , x:0});
        opacityApiReverse.start({ opacity: 0, x: -10 });
      }}
      role="button"
      tabIndex={0}
    >

      <a.div style={opacitySpringsReverse} className="opacity-0">➔</a.div>
      <a.div style={springs}>LET'S TALK &nbsp;</a.div>
      <a.div style={opacitySprings}>&nbsp;•&nbsp;</a.div>
    </Link>
  );
};

export default LetsTalk;
