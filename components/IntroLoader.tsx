"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export function IntroLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("aic-intro-loaded");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (hasLoaded || prefersReducedMotion) {
      setIsVisible(false);
      setShouldRender(false);
      return;
    }

    setShouldRender(true);
    document.body.style.overflow = "hidden";

    // Short delay as requested: 1250ms total
    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("aic-intro-loaded", "true");
    }, 1250);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  const textLetters = Array.from("AI Community Lucknow");

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 14, stiffness: 200 },
    },
  };

  if (!shouldRender) return null;

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = "";
        window.dispatchEvent(new Event("resize"));
      }}
    >
      {isVisible && (
        <motion.div
          key="intro-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 bg-[#0B0B10] z-[99999] flex flex-col items-center justify-center pointer-events-auto select-none"
        >
          {/* Animated Logo Icon */}
          <div className="mb-6 relative flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="w-24 h-24 text-accent stroke-current"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Parabolic Arch */}
              <motion.path
                d="M 20 85 Q 50 15 80 85"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />

              {/* Dashed Crossbar */}
              <motion.path
                d="M 35 60 L 65 60"
                strokeWidth="1.5"
                strokeDasharray="2 2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.3, duration: 0.45 }}
              />

              {/* Vertical Center Line */}
              <motion.path
                d="M 50 15 L 50 85"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.4, duration: 0.45 }}
              />

              {/* Top Center Node */}
              <motion.circle
                cx="50"
                cy="15"
                r="3.5"
                fill="currentColor"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.65, type: "spring", stiffness: 240 }}
              />

              {/* Left Arch Node */}
              <motion.circle
                cx="35"
                cy="60"
                r="3"
                fill="currentColor"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.75, type: "spring", stiffness: 240 }}
              />

              {/* Right Arch Node */}
              <motion.circle
                cx="65"
                cy="60"
                r="3"
                fill="currentColor"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.75, type: "spring", stiffness: 240 }}
              />
            </svg>
          </div>

          {/* Staggered Animated Community Title */}
          <motion.div
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.02, delayChildren: 0.35 },
              },
            }}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center px-4"
          >
            {textLetters.map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="font-display text-lg md:text-xl font-bold tracking-wider text-fg"
                style={{ marginRight: char === " " ? "8px" : "2px" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
