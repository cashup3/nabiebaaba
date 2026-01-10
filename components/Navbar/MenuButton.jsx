import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { a, useSpring } from "@react-spring/web";
import Menu from "./Menu";

const MenuButton = () => {
  const [isOpen, open] = useState(false);
  const pathname = usePathname();
  const offset = 10;

  const [dots, dotsApi] = useSpring(() => ({
    from: { transform: `rotate(0deg)` },
  }));

  const handleMouseEnter = () => {
    dotsApi.start({ transform: `rotate(90deg)` });
    setBgColor("white");
  };
  const handleMouseLeave = () => {
    if (!isOpen) {
      setBgColor("#E3E5EE");
      dotsApi.start({ transform: `rotate(0deg)` });
    }
  };

  const [menu, menuApi] = useSpring(() => ({
    from: { y: offset, opacity: 1 },
  }));

  const [close, closeApi] = useSpring(() => ({
    from: { y: offset, opacity: 0 },
  }));

  const handleClick = (newOpenState) => {
    const shouldBeOpen = newOpenState !== undefined ? newOpenState : !isOpen;
    // setBgColor(shouldBeOpen ? "white" : "#E3E5EE");
    menuApi.stop();
    closeApi.stop();
    menuApi.start({
      y: shouldBeOpen ? offset : -offset,
      opacity: shouldBeOpen ? 1 : 0,
    });

    closeApi.start({
      y: shouldBeOpen ? -offset : offset,
      opacity: shouldBeOpen ? 1 : 0,
    });
  };

  // Close menu when route changes (only on actual pathname change, not on mount)
  const prevPathnameRef = useRef(pathname);
  useEffect(() => {
    // Only close if pathname actually changed (not just on initial mount)
    if (prevPathnameRef.current !== pathname && prevPathnameRef.current !== null && isOpen) {
      handleClick(false);
      open(false);
      dotsApi.start({ transform: `rotate(0deg)` });
    }
    prevPathnameRef.current = pathname;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]); // Only depend on pathname to avoid unnecessary re-renders

  const [bgColor, setBgColor] = useState("#E3E5EE");

  const ref = useRef();
  const handleWindowClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      handleClick(false);
      open(false);
      dotsApi.start({ transform: `rotate(0deg)` });
    }
  };

  const handleLinkClick = () => {
    if (isOpen) {
      handleClick(false);
      open(false);
      dotsApi.start({ transform: `rotate(0deg)` });
    }
  };

  return (
    <>
      <Menu open={isOpen} onOutsideClick={handleWindowClick} onLinkClick={handleLinkClick} />
      <div
        className="nav_btn_lg py-6 flex items-center justify-center cursor-pointer"
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ backgroundColor: bgColor }}
        onClick={(e) => {
          e.stopPropagation(); // Prevent event from bubbling to Menu's outside click handler
          const newState = !isOpen;
          open(newState);
          handleClick(newState);
        }}
      >
        <div className="flex flex-col h-6 items-center justify-center">
          <a.div style={menu}>MENU&nbsp;&nbsp;</a.div>
          <a.div style={close}>CLOSE&nbsp;&nbsp;</a.div>
        </div>
        <a.div style={dots}>•&nbsp;•</a.div>
      </div>
    </>
  );
};

export default MenuButton;
