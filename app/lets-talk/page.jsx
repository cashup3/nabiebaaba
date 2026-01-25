"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";

const LetsTalkPage = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const phoneNumber = "+15149293511";
  const whatsappNumber = "15149293511";
  const whatsappMessage = encodeURIComponent(
    `Hi KNOB Studio,%0A%0A${message || "I'd like to start a project."}%0A%0AName: ${name || "N/A"}%0AEmail: ${email || "N/A"}`
  );

  const mailtoLink = `mailto:info@knobstud.com?subject=${encodeURIComponent(
    "Let's Talk - Project Request"
  )}&body=${encodeURIComponent(
    `Message:\n${message || "I'd like to start a project."}\n\nName: ${
      name || "N/A"
    }\nEmail: ${email || "N/A"}\n`
  )}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F1FA] via-white to-[#F0F1FA] dark:from-black dark:via-gray-900 dark:to-black text-gray-900 dark:text-white">
      <Navbar />
      <div className="relative overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        {/* Subtle 3D-inspired background accents */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-gradient-to-br from-white/70 to-transparent dark:from-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-br from-gray-200/60 to-transparent dark:from-white/5 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400 mb-4">
              <span className="w-6 h-px bg-gray-400 dark:bg-gray-600" />
              Project Request
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Let&apos;s Talk
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300">
              Send us your request and we&apos;ll get back to you quickly. You can
              also reach us on WhatsApp or by phone.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-10">
            <div className="relative bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-gray-200/70 dark:border-gray-800/80 rounded-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/50 dark:ring-white/10">
              <div className="pointer-events-none absolute inset-x-6 -top-px h-px bg-gradient-to-r from-transparent via-white/70 to-transparent dark:via-white/20" />
              <div className="pointer-events-none absolute -top-6 left-8 w-14 h-14 rounded-2xl bg-gradient-to-br from-white to-gray-100 dark:from-white/20 dark:to-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.15)] rotate-6" />
              <div className="pointer-events-none absolute -bottom-10 right-8 w-20 h-20 rounded-full bg-gradient-to-br from-gray-200 to-white dark:from-white/10 dark:to-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.2)] -rotate-6" />

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

            <div className="relative">
              <div className="relative h-full min-h-[340px] overflow-hidden rounded-2xl border border-gray-200/70 dark:border-gray-800/80 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_60%)]" />
                <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br from-white to-gray-200 dark:from-white/20 dark:to-white/5 shadow-[0_25px_60px_rgba(0,0,0,0.18)]" />
                <div className="absolute top-20 right-8 w-20 h-20 rounded-[2rem] bg-gradient-to-br from-gray-100 to-white dark:from-white/15 dark:to-white/5 shadow-[0_18px_40px_rgba(0,0,0,0.16)] rotate-12" />
                <div className="absolute bottom-16 left-12 w-28 h-28 rounded-full bg-gradient-to-br from-white to-gray-100 dark:from-white/12 dark:to-white/4 shadow-[0_22px_50px_rgba(0,0,0,0.2)]" />
                <div className="absolute bottom-10 right-10 w-32 h-10 rounded-full border border-gray-200/80 dark:border-white/20 shadow-[0_14px_30px_rgba(0,0,0,0.12)]" />

                <div className="relative p-6 sm:p-7">
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-500 dark:text-gray-400 mb-4">
                    Direct Contact
                  </p>
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
    </div>
  );
};

export default LetsTalkPage;
