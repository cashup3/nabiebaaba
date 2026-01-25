"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";

const LetsTalkPage = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("Toronto, ON");

  const phoneNumber = "+15149293511";
  const whatsappNumber = "15149293511";
  const whatsappMessage = encodeURIComponent(
    `Hi KNOB Studio,%0A%0A${message || "I'd like to start a project."}%0A%0AName: ${name || "N/A"}%0AEmail: ${email || "N/A"}%0ALocation: ${location || "N/A"}`
  );

  const mailtoLink = `mailto:info@knobstud.com?subject=${encodeURIComponent(
    "Let's Talk - Project Request"
  )}&body=${encodeURIComponent(
    `Message:\n${message || "I'd like to start a project."}\n\nName: ${
      name || "N/A"
    }\nEmail: ${email || "N/A"}\nLocation: ${location || "N/A"}\n`
  )}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2F4FB] via-white to-[#EEF1F8] dark:from-black dark:via-[#0B0F1A] dark:to-black text-gray-900 dark:text-white">
      <Navbar />
      <div className="relative overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8">
        {/* Space-inspired backdrop */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-20 w-[28rem] h-[28rem] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(147,197,253,0.35),transparent_60%)] blur-3xl" />
          <div className="absolute -bottom-40 -left-24 w-[30rem] h-[30rem] rounded-full bg-[radial-gradient(circle_at_60%_40%,rgba(196,181,253,0.3),transparent_60%)] blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.55)_1px,transparent_1px)] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:26px_26px] opacity-40" />
          <div className="absolute inset-0 space-stars space-stars-slow" />
          <div className="absolute inset-0 space-stars space-stars-fast opacity-60" />
          <div className="absolute inset-0 space-stars space-stars-dense opacity-40" />
          <div className="absolute inset-x-0 top-12 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent dark:via-white/10" />
          <div className="space-orbit orbit-one" />
          <div className="space-orbit orbit-two" />
          <div className="space-orbit orbit-three" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.35em] text-gray-500 dark:text-gray-400">
                <span className="w-8 h-px bg-gray-400 dark:bg-gray-600" />
                Mission Control
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Let&apos;s Talk
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300">
                Send your project details and we&apos;ll respond quickly. You can
                also reach us directly by WhatsApp or phone.
              </p>

              <div className="relative overflow-hidden rounded-2xl border border-gray-200/70 dark:border-gray-800/80 bg-white/70 dark:bg-white/5 backdrop-blur-xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/50 dark:ring-white/10">
                <div className="pointer-events-none absolute -top-10 right-12 h-24 w-24 rounded-full bg-gradient-to-br from-white to-blue-100 dark:from-white/15 dark:to-white/5 shadow-[0_20px_45px_rgba(0,0,0,0.18)]" />
                <div className="pointer-events-none absolute -bottom-10 left-10 h-20 w-20 rounded-[2.2rem] border border-white/60 dark:border-white/15 shadow-[0_18px_40px_rgba(0,0,0,0.2)]" />
                <div className="pointer-events-none absolute top-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full border border-white/40 dark:border-white/10" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@email.com"
                      className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs sm:text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Location
                    </label>
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    >
                      <option>Toronto, ON</option>
                      <option>Los Angeles, CA</option>
                      <option>Montreal, QC</option>
                      <option>New York City, NY</option>
                      <option>Atlanta, GA</option>
                      <option>Vancouver, BC</option>
                      <option>Chicago, IL</option>
                      <option>Calgary, AB</option>
                      <option>Austin, TX</option>
                      <option>London, UK</option>
                      <option>Paris, FR</option>
                      <option>Seoul, KR</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-xs sm:text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Tell us about your project
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your request here..."
                    rows={5}
                    className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={mailtoLink}
                    className="inline-flex items-center justify-center bg-gray-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-md shadow-black/10 dark:shadow-black/30"
                  >
                    Send Request
                  </a>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border border-gray-900/90 dark:border-white text-gray-900 dark:text-white px-6 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
                  >
                    WhatsApp Message
                  </a>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="inline-flex items-center justify-center border border-gray-300/80 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold text-sm sm:text-base hover:border-gray-900 dark:hover:border-white transition-colors"
                  >
                    Call Us
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-full min-h-[360px] overflow-hidden rounded-2xl border border-gray-200/70 dark:border-gray-800/80 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(59,130,246,0.18),transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_15%,rgba(59,130,246,0.22),transparent_55%)]" />
                <div className="absolute -top-8 -left-8 h-40 w-40 rounded-full bg-gradient-to-br from-white to-blue-100 dark:from-white/15 dark:to-white/5 shadow-[0_25px_60px_rgba(0,0,0,0.18)]" />
                <div className="absolute top-24 right-10 h-20 w-20 rounded-[2rem] bg-gradient-to-br from-indigo-100 to-white dark:from-white/15 dark:to-white/5 shadow-[0_18px_40px_rgba(0,0,0,0.16)] rotate-12" />
                <div className="absolute bottom-20 left-10 h-28 w-28 rounded-full bg-gradient-to-br from-white to-gray-100 dark:from-white/12 dark:to-white/4 shadow-[0_22px_50px_rgba(0,0,0,0.2)]" />
                <div className="absolute bottom-10 right-10 h-10 w-28 rounded-full border border-gray-200/80 dark:border-white/20 shadow-[0_14px_30px_rgba(0,0,0,0.12)]" />

                <div className="relative p-6 sm:p-7 space-y-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-gray-500 dark:text-gray-400 mb-2">
                      Contact Coordinates
                    </p>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      We work across film, brand, and digital. Share your mission
                      and we&apos;ll chart the path.
                    </p>
                  </div>
                  <div className="space-y-3 text-sm sm:text-base">
                    <div className="flex items-center justify-between rounded-full border border-gray-200/80 dark:border-gray-800/80 px-4 py-2.5 bg-white/70 dark:bg-white/5">
                      <span className="text-gray-600 dark:text-gray-300">
                        Email
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        info@knobstud.com
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-full border border-gray-200/80 dark:border-gray-800/80 px-4 py-2.5 bg-white/70 dark:bg-white/5">
                      <span className="text-gray-600 dark:text-gray-300">
                        WhatsApp
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        +1 514 929 3511
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-full border border-gray-200/80 dark:border-gray-800/80 px-4 py-2.5 bg-white/70 dark:bg-white/5">
                      <span className="text-gray-600 dark:text-gray-300">
                        Phone
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        +1 514 929 3511
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .space-stars {
          background-image:
            radial-gradient(rgba(255, 255, 255, 0.7) 1px, transparent 1px),
            radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px);
          background-size: 120px 120px, 220px 220px;
          background-position: 0 0, 60px 60px;
          filter: blur(0.2px);
          animation: starDrift 60s linear infinite;
        }
        .space-stars-fast {
          background-size: 80px 80px, 160px 160px;
          animation-duration: 35s;
        }
        .space-stars-dense {
          background-size: 140px 140px, 240px 240px;
          animation-duration: 85s;
        }
        .space-orbit {
          position: absolute;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 9999px;
          box-shadow: 0 0 40px rgba(255, 255, 255, 0.06);
          animation: orbitSpin 48s linear infinite;
        }
        .orbit-one {
          width: 520px;
          height: 520px;
          top: -120px;
          right: -160px;
        }
        .orbit-two {
          width: 360px;
          height: 360px;
          bottom: -140px;
          left: -120px;
          animation-duration: 36s;
        }
        .orbit-three {
          width: 240px;
          height: 240px;
          top: 120px;
          left: 25%;
          animation-duration: 28s;
        }
        @keyframes orbitSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes starDrift {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-120px, -60px, 0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .space-stars,
          .space-orbit {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default LetsTalkPage;
