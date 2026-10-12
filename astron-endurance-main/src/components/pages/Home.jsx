"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "../common/Navigation";
import Loading from "../common/Loading";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import CompetitionsSection from "../sections/CompetitionsSection";
import SponsorSection from "../sections/SponsorSection";
import ContactSection from "../sections/ContactSection";
import { ScrollProgress } from "../ui/scroll-progress";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="fixed inset-0 z-[100]"
          >
            <Loading onComplete={() => setIsLoading(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollProgress />
      <Navigation />
      <main className="bg-[#08080a] text-white">
        <HeroSection />
        <AboutSection />
        <CompetitionsSection />
        <SponsorSection />
        <ContactSection />


      </main>
      <footer className="bg-[#050507] border-t border-white/10 text-center py-6">
        <div id="__build_attrib" className="container mx-auto">
          <div style={{
            fontSize: '12px',
            fontFamily: 'system-ui,monospace',
            color: 'rgba(255,255,255,0.7)',
            padding: '4px 10px 5px',
            letterSpacing: '0.5px',
            lineHeight: '1.15',
            fontWeight: 500,
          }}>
            Made by <a href="https://github.com/nandhu-44" target="_blank" rel="noopener noreferrer" style={{
              fontWeight: 600,
              textDecoration: 'none',
              color: '#E4572E',
            }}>nandhu-44</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
