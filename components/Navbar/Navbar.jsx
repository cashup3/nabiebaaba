"use client";

import React, { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import { Trail } from "./TrailText";
import { usePathname } from "next/navigation";

import LetsTalk from "./LetsTalk";
import MenuButton from "./MenuButton";
import MobileMenuButton from "./MobileMenuButton";
import MobileLetsTalk from "./MobileLetsTalk";
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
  const [showLogo, setShowLogo] = useState(true);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    set(true);
  }, []);

  // Hide logo when scrolling down on home page (throttled for performance)
  useEffect(() => {
    if (!isHomePage) {
      setShowLogo(false);
      return;
    }

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          // Hide logo after scrolling past 100px
          setShowLogo(scrollY < 100);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  return (
    <>
      {/* Navbar small screen */}
      <div className="fixed top-0 left-0 z-50 w-full py-4 sm:py-6 lg:hidden px-4 sm:px-6">
        <div className="flex items-center justify-between w-full font-extrabold pb-2">
          {showLogo && isHomePage && (
          <div className="tracking-wider font-extrabold text-2xl sm:text-3xl cursor-pointer">
            <Link href="/"><Image src={'/smatik_logo.png'} width={60} height={60} priority alt="KNOB Studio Logo" className="sm:w-[80px] sm:h-[80px] dark:invert dark:brightness-0 dark:contrast-200"/></Link>
          </div>
          )}
          {!showLogo && isHomePage && <div></div>}
          <div className="flex items-center gap-2">
            <MobileLetsTalk />
            <NightModeToggle />
            <MobileMenuButton />
          </div>
        </div>
      </div>

      {/* Navbar large screen */}
      <div className="fixed top-0 left-0 w-full px-8 lg:px-20 z-50">
        <div className="items-start justify-between hidden lg:flex pt-10 lg:pt-14 pb-8 lg:pb-10">
          {showLogo && isHomePage && (
          <div className="tracking-wider font-AeonikMedium text-3xl lg:text-4xl">
            <Link href="/"><Image src={'/smatik_logo.png'} width={120} height={60} priority alt="KNOB Studio Logo" className="lg:w-[140px] lg:h-[70px] dark:invert dark:brightness-0 dark:contrast-200"/></Link>
          </div>
          )}
          {!showLogo && isHomePage && <div></div>}
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
