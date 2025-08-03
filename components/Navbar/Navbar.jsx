"use client";

import React, { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import { Trail } from "./TrailText";

import LetsTalk from "./LetsTalk";
import MenuButton from "./MenuButton";
import MobileMenuButton from "./MobileMenuButton";
import Link from "next/link";
import MusicButton from "./MusicButton";
import Image from "next/image";
import NightModeToggle from "../NightModeToggle";

function Navbar() {
  const [rotate, setRotate] = useSpring(() => ({
    transform: `rotate(0deg)`,
    config: { tension: 300, friction: 20, mass: 1 },
  }));

  const [open, set] = useState(false);
  useEffect(() => {
    set(true);
  }, []);

  return (
    <>
      {/* Navbar small screen */}
      <div className="fixed top-0 left-0 z-50 w-full py-4 sm:py-6 lg:hidden px-4 sm:px-6">
        <div className="flex items-center justify-between w-full font-extrabold pb-2">
          <div className="tracking-wider font-extrabold text-2xl sm:text-3xl cursor-pointer">
            <Link href="/"><Image src={'/smatik_logo.png'} width={'80'} height={'80'} className="sm:w-[100px] sm:h-[100px] dark:invert dark:brightness-0 dark:contrast-200"/></Link>
          </div>
          <div className="flex items-center gap-2">
            <NightModeToggle />
            <MobileMenuButton />
          </div>
        </div>
      </div>

      {/* Navbar large screen */}
      <div className="fixed top-0 left-0 w-full px-8 lg:px-20 z-50">
        <div className="items-start justify-between hidden lg:flex pt-10 lg:pt-14 pb-8 lg:pb-10">
          <div className="tracking-wider font-AeonikMedium text-3xl lg:text-4xl">
            <Link href="/"><Image src={'/smatik_logo.png'} width={'180'} height={'90'} className="lg:w-[200px] lg:h-[100px] dark:invert dark:brightness-0 dark:contrast-200"/></Link>
          </div>
          <div className="hidden lg:flex items-center justify-around font-AeonikMedium">
            <Trail open={open} className="flex">
              <MusicButton />
              <LetsTalk />
              <NightModeToggle />
              <MenuButton />
            </Trail>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
