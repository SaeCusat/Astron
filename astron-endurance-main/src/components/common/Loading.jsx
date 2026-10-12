"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Volume2, VolumeX, FastForward } from "lucide-react";

/**
 * Loading component for Astron Endurance.
 * Plays background video clip (from /intro.mp4 or /loading.mp4) while the
 * Astron Endurance logo and typography slowly brighten from fade with solar energy glow.
 */
const Loading = ({ onComplete }) => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  // Primary video source is /intro.mp4, with fallback to /loading.mp4
  const videoSrc = "/intro.mp4";

  useEffect(() => {
    // Fallback timer if video is missing or very long
    // If onComplete is passed, trigger it smoothly after completion
    const maxTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 4500);

    return () => {
      clearTimeout(maxTimer);
    };
  }, [onComplete]);

  // Handle video progress and end
  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setProgress((current / duration) * 100);
    }
  };

  const handleVideoEnded = () => {
    setProgress(100);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 400);
  };

  const handleVideoCanPlay = () => {
    setVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  };

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleSkip = () => {
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <div
      className="fixed inset-0 w-screen h-screen z-[100] overflow-hidden bg-[#070709] flex items-center justify-center select-none"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* Background Video */}
      {!videoError && (
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          muted={isMuted}
          playsInline
          preload="auto"
          onCanPlay={handleVideoCanPlay}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleVideoEnded}
          onError={() => setVideoError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? "opacity-70 scale-100" : "opacity-0 scale-105"
            }`}
        />
      )}

      {/* Fallback Cinematic Nebula / Solar flare background if no video file exists yet */}
      {(!videoLoaded || videoError) && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(228,87,46,0.18)_0%,rgba(7,7,9,0.95)_70%)]" />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#E4572E]/20 via-[#FF9F1C]/15 to-transparent blur-3xl pointer-events-none"
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.4, 0.8, 0.4],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      )}

      {/* Dark Vignette & Gradient Overlays for high-contrast cinematic depth */}
      <div className="absolute inset-0 bg-radial-vignette from-black/20 via-black/55 to-[#070709]/95 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-[#070709]/80 pointer-events-none" />

      {/* Top Bar with Skip Intro & Audio Controls */}
      <div className="absolute top-6 right-6 z-50 flex items-center gap-3">
        {videoLoaded && (
          <button
            onClick={toggleSound}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white backdrop-blur-md border border-white/10 transition-all duration-300 hover:scale-105"
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        )}
        <button
          onClick={handleSkip}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white font-orbitron-semi text-xs tracking-wider backdrop-blur-md border border-white/10 transition-all duration-300 hover:scale-105"
        >
          <span>SKIP INTRO</span>
          <FastForward size={14} className="text-[#E4572E]" />
        </button>
      </div>

      {/* Center Content: Logo Slowly Brightening from Fade */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-2xl">
        {/* Solar Halo glow pulsing behind logo */}
        <motion.div
          className="absolute w-56 h-56 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-[#E4572E]/40 via-[#FF9F1C]/30 to-[#FFD700]/20 blur-3xl pointer-events-none"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: [0, 0.4, 0.85, 1],
            scale: [0.7, 0.9, 1.1, 1.2],
          }}
          transition={{
            duration: 3.2,
            times: [0, 0.3, 0.7, 1],
            ease: "easeOut",
          }}
        />

        {/* LOGO: Slowly brightens from fade */}
        <motion.div
          className="relative w-36 h-36 md:w-52 md:h-52 mb-6"
          initial={{
            opacity: 0,
            scale: 0.82,
            filter: "brightness(0) blur(6px) drop-shadow(0 0 0px rgba(228,87,46,0))",
          }}
          animate={{
            opacity: [0, 0.3, 0.75, 1],
            scale: [0.82, 0.92, 1, 1.05],
            filter: [
              "brightness(0.1) blur(6px) drop-shadow(0 0 0px rgba(228,87,46,0))",
              "brightness(0.5) blur(2px) drop-shadow(0 0 15px rgba(228,87,46,0.5))",
              "brightness(1.1) blur(0px) drop-shadow(0 0 35px rgba(228,87,46,0.85))",
              "brightness(1.35) blur(0px) drop-shadow(0 0 50px rgba(228,87,46,1)) drop-shadow(0 0 80px rgba(255,159,28,0.6))",
            ],
          }}
          transition={{
            duration: 3.0,
            times: [0, 0.25, 0.65, 1],
            ease: "easeInOut",
          }}
        >
          <Image
            src="/astron_logo_icon.svg"
            alt="Astron Endurance Logo"
            fill
            priority
            className="object-contain"
          />
        </motion.div>

        {/* Typography: ASTRON ENDURANCE */}
        <div className="flex flex-col items-center">
          <motion.h1
            className="font-airstrike-bold text-[clamp(2.8rem,9vw,5.5rem)] leading-none text-white tracking-wider"
            style={{ letterSpacing: "0.08em" }}
            initial={{
              opacity: 0,
              y: 20,
              filter: "brightness(0.2)",
            }}
            animate={{
              opacity: [0, 0.3, 0.8, 1],
              y: [20, 10, 0, 0],
              filter: [
                "brightness(0.2) drop-shadow(0 0 0px rgba(228,87,46,0))",
                "brightness(0.6) drop-shadow(0 0 10px rgba(228,87,46,0.3))",
                "brightness(1.0) drop-shadow(0 0 25px rgba(228,87,46,0.7))",
                "brightness(1.25) drop-shadow(0 0 40px rgba(228,87,46,0.9))",
              ],
            }}
            transition={{
              duration: 2.8,
              delay: 0.3,
              times: [0, 0.3, 0.7, 1],
              ease: "easeOut",
            }}
          >
            ASTRON
          </motion.h1>

          <motion.span
            className="font-orbitron-semi text-[clamp(1.1rem,3vw,2.2rem)] text-[#E4572E] tracking-[0.38em] mt-1 font-semibold"
            initial={{ opacity: 0, y: 15 }}
            animate={{
              opacity: [0, 0.4, 0.85, 1],
              y: [15, 8, 0, 0],
              textShadow: [
                "0 0 0px rgba(228,87,46,0)",
                "0 0 10px rgba(228,87,46,0.4)",
                "0 0 20px rgba(228,87,46,0.8)",
                "0 0 30px rgba(228,87,46,1)",
              ],
            }}
            transition={{
              duration: 2.6,
              delay: 0.6,
              times: [0, 0.3, 0.7, 1],
              ease: "easeOut",
            }}
          >
            ENDURANCE
          </motion.span>
        </div>

        {/* Solar Horizon Divider Beam */}
        <motion.div
          className="h-[2px] bg-gradient-to-r from-transparent via-[#E4572E] to-transparent my-6 shadow-[0_0_15px_rgba(228,87,46,1)]"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "280px", opacity: 1 }}
          transition={{ duration: 2.2, delay: 0.8, ease: "easeOut" }}
        />

        {/* Progress Bar */}
        <div className="w-72 md:w-88 mt-2 flex flex-col items-center">
          {/* Progress Track */}
          <div className="relative w-full h-1 bg-white/10 rounded-full overflow-hidden border border-white/5">
            <motion.div
              className="h-full bg-gradient-to-r from-[#E4572E] via-[#FF9F1C] to-[#FFD700] rounded-full shadow-[0_0_10px_rgba(228,87,46,0.8)]"
              initial={{ width: "0%" }}
              animate={{ width: progress > 0 ? `${progress}%` : "100%" }}
              transition={
                progress > 0
                  ? { duration: 0.15, ease: "linear" }
                  : { duration: 3.0, ease: "easeInOut" }
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
