"use client";

import React, { useEffect, useState } from "react";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  ChevronDown,
  Play,
  Rocket,
  Sparkles,
  Star,
  Target,
  Trophy,
  Zap,
} from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  const achievements = [
    {
      label: "Kerala Rank",
      value: "#1",
      icon: Trophy,
      color: "from-yellow-500 to-amber-600",
    },
    {
      label: "All India Rank",
      value: "#9",
      icon: Star,
      color: "from-purple-500 to-pink-600",
    },
    {
      label: "Team Members",
      value: "50+",
      icon: Zap,
      color: "from-blue-500 to-cyan-600",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 sm:pt-28 bg-[#08080a] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-10 overflow-hidden">
        <picture className="w-full h-full block">
          <source
            srcSet="/images/astron_images/image-9.jpeg"
            media="(min-width: 640px)"
          />
          <img
            src="/images/astron_images/image-9.jpeg"
            alt="Astron Endurance Team"
            className="w-full h-full object-cover object-center scale-105 lg:scale-100 transition-transform duration-[1500ms] ease-out opacity-90 contrast-105 brightness-100"
            loading="eager"
          />
        </picture>
        <div className="absolute inset-0 bg-black/30 lg:bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08080a]/80 via-transparent to-[#08080a]" />
      </div>
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-6xl mx-auto w-full">
        <div className="mb-6 sm:mb-8">
          <h1 className="leading-none mb-3 sm:mb-4">
            <span className="block font-airstrike-bold tracking-tight text-[clamp(2.75rem,13vw,13rem)] text-[#E4572E] drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              ASTRON
            </span>
            <span className="block font-orbitron-semi tracking-wide text-[clamp(1.35rem,5.5vw,15rem)] text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              ENDURANCE
            </span>
          </h1>
        </div>

        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-base sm:text-xl lg:text-2xl text-white mb-3 sm:mb-4 drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)] font-medium">
            Engineering Tomorrow&apos;s Mobility
          </h2>

          <div className="flex flex-row flex-wrap items-center justify-center gap-2.5 sm:gap-6 text-xs sm:text-base md:text-lg">
            <span className="text-[#E4572E] flex items-center gap-1.5 sm:gap-2 drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)] font-semibold">
              <Zap size={18} className="sm:w-5 sm:h-5" />
              Electric
            </span>
            <span className="text-gray-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">•</span>
            <span className="text-[#E4572E] flex items-center gap-1.5 sm:gap-2 drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)] font-semibold">
              <Target size={18} className="sm:w-5 sm:h-5" />
              Innovative
            </span>
            <span className="text-gray-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">•</span>
            <span className="text-[#E4572E] flex items-center gap-1.5 sm:gap-2 drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)] font-semibold">
              <Award size={18} className="sm:w-5 sm:h-5" />
              Sustainable
            </span>
          </div>
        </motion.div>

        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-8 sm:mb-12 text-gray-100 leading-relaxed px-3 sm:px-4 rounded-xl py-2 drop-shadow-[0_3px_10px_rgba(0,0,0,0.95)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          From solar-powered innovation to electric excellence - we&apos;re building
          the future of sustainable mobility, one competition at a time.
        </motion.p>

        <motion.div
          className="flex justify-center items-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="#about" scroll={true}>
              <Button
                size="lg"
                className="bg-[#E4572E] hover:bg-[#E74D24] text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full shadow hover:shadow-lg transition-all duration-300 flex items-center gap-2.5 sm:gap-3"
              >
                <span>Explore Our Journey</span>
                <ArrowRight size={18} className="sm:w-5 sm:h-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
