"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

export default function FullScreenLoader({
  title = "KNOB STUDIO",
  lines = [
    "we can give you the world",
    "but there are other planets too",
  ],
  revealIntervalMs = 350,
}) {
  const wordsPerLine = useMemo(() => lines.map((l) => l.trim().split(/\s+/)), [lines]);
  const totalWords = useMemo(() => wordsPerLine.reduce((acc, arr) => acc + arr.length, 0), [wordsPerLine]);
  const [wordIndex, setWordIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setWordIndex((idx) => (idx + 1 <= totalWords ? idx + 1 : totalWords));
    }, revealIntervalMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [totalWords, revealIntervalMs]);

  let remaining = wordIndex;
  const visibleCounts = wordsPerLine.map((arr) => {
    const count = Math.max(0, Math.min(arr.length, remaining));
    remaining = Math.max(0, remaining - count);
    return count;
  });

  return (
    <div className="w-screen h-screen text-white flex flex-col items-center justify-center px-4 relative overflow-hidden bg-black">
      {/* Space background with animated star layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-60" id="stars-1"></div>
        <div className="absolute inset-0 opacity-60" id="stars-2"></div>
        <div className="absolute inset-0 opacity-60" id="stars-3"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>
      </div>

      {/* Title */}
      <div className="relative z-10 text-center -mt-8 sm:-mt-12 mb-6">
        <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-widest [font-variation-settings:'opsz'_32] font-[var(--font-playfair)]">
          {title}
        </h1>
      </div>

      {/* Animated lines, word by word */}
      <div className="relative z-10 text-center space-y-3 sm:space-y-4 font-[var(--font-space-grotesk)]">
        {wordsPerLine.map((words, lineIdx) => (
          <p key={lineIdx} className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-gray-200/90 font-medium tracking-wide">
            {words.slice(0, visibleCounts[lineIdx]).map((w, i) => (
              <span key={i} className="inline-block mr-2 animate-fade-in-up" style={{ animationDelay: `${i * 40}ms` }}>
                {w}
              </span>
            ))}
            {visibleCounts[lineIdx] < words.length && (
              <span className="inline-block w-2 h-5 align-baseline bg-white/60 animate-pulse ml-1"></span>
            )}
          </p>
        ))}
      </div>

      {/* Minimal loader hint at bottom */}
      <div className="relative z-10 mt-8">
        <div className="w-40 sm:w-56 md:w-72 h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full" style={{ animation: "loading 2s ease-in-out infinite" }}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        @keyframes drift {
          0% { transform: translateY(0); }
          100% { transform: translateY(-2000px); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 400ms ease forwards;
          opacity: 0;
          transform: translateY(6px);
        }
        @keyframes fadeInUp {
          to { opacity: 1; transform: translateY(0); }
        }
        /* Starfields made with layered radial-gradients and animated drift */
        #stars-1 {
          background: radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.9), transparent 60%),
                      radial-gradient(1px 1px at 100px 80px, rgba(255,255,255,0.7), transparent 60%),
                      radial-gradient(2px 2px at 250px 120px, rgba(255,255,255,0.8), transparent 60%),
                      radial-gradient(1px 1px at 320px 200px, rgba(255,255,255,0.7), transparent 60%),
                      radial-gradient(2px 2px at 560px 340px, rgba(255,255,255,0.8), transparent 60%);
          background-size: 600px 600px;
          animation: drift 120s linear infinite;
        }
        #stars-2 {
          background: radial-gradient(1px 1px at 60px 40px, rgba(255,255,255,0.6), transparent 60%),
                      radial-gradient(2px 2px at 200px 160px, rgba(255,255,255,0.8), transparent 60%),
                      radial-gradient(1px 1px at 360px 240px, rgba(255,255,255,0.6), transparent 60%),
                      radial-gradient(2px 2px at 520px 300px, rgba(255,255,255,0.9), transparent 60%),
                      radial-gradient(1px 1px at 580px 520px, rgba(255,255,255,0.7), transparent 60%);
          background-size: 600px 600px;
          animation: drift 160s linear infinite;
        }
        #stars-3 {
          background: radial-gradient(1px 1px at 40px 520px, rgba(255,255,255,0.6), transparent 60%),
                      radial-gradient(2px 2px at 180px 420px, rgba(255,255,255,0.8), transparent 60%),
                      radial-gradient(1px 1px at 340px 500px, rgba(255,255,255,0.6), transparent 60%),
                      radial-gradient(2px 2px at 460px 100px, rgba(255,255,255,0.9), transparent 60%),
                      radial-gradient(1px 1px at 640px 260px, rgba(255,255,255,0.7), transparent 60%);
          background-size: 600px 600px;
          animation: drift 200s linear infinite;
        }
      `}</style>
    </div>
  );
}

