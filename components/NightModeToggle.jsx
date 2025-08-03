import React, { useEffect, useState } from "react";

const NightModeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      aria-label="Toggle night mode"
      onClick={() => setDark((d) => !d)}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 hover:bg-white hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 shadow-sm"
    >
      {dark ? (
        // Sun icon
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41"/></svg>
      ) : (
        // Moon icon
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>
      )}
    </button>
  );
};

export default NightModeToggle; 