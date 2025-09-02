"use client";
import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <CompetitionsSection />
        <SponsorSection />
        <ContactSection />
      </main>
      <footer className="bg-gray-900 text-center py-4">
        <div id="__build_attrib" className="container mx-auto">
          <div style={{
            fontSize: '12px',
            fontFamily: 'system-ui,monospace',
            color: 'rgba(255,255,255,0.82)',
            padding: '4px 10px 5px',
            letterSpacing: '0.5px',
            lineHeight: '1.15',
            fontWeight: 500,
          }}>
            Made by <a href="https://github.com/nandhu-44" target="_blank" rel="noopener noreferrer" style={{
              fontWeight: 600,
              textDecoration: 'none',
              color: '#fff',
            }}>nandhu-44</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
