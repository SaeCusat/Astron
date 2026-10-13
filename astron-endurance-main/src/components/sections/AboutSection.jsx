"use client";

import React from "react";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Lightbulb, Target, Trophy, Users, Zap } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Kerala Rank 1",
      description: "Top position in ESVC 2025",
      color: "from-yellow-500 to-amber-600",
    },
    {
      icon: Award,
      title: "AIR 9",
      description: "All India Rank in ESVC 2025",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Target,
      title: "AIR 50",
      description: "All India Rank in BAJA 2026",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: Users,
      title: "50+ Members",
      description: "Diverse team of engineers",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Lightbulb,
      title: "Founded 2024",
      description: "Latest addition to SOE CUSAT",
      color: "from-purple-500 to-violet-600",
    },
  ];

  const stats = [
    { number: "1000+", label: "Hours of R&D", delay: 0.2 },
    { number: "50+", label: "Team Members", delay: 0.4 },
    { number: "2", label: "Major Competitions", delay: 0.6 },
    { number: "1", label: "Kerala Rank", delay: 0.8 },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-[#0d0e13] relative flex items-center justify-center py-14 sm:py-20 border-y border-white/10"
    >
      <div className="container mx-auto px-4 sm:px-8 py-10 sm:py-16">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-airstrike-bold text-white mb-4 sm:mb-6">
            About Astron Endurance
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-[#E4572E] mx-auto rounded-full mb-6 sm:mb-8 shadow-[0_0_12px_rgba(228,87,46,0.8)]" />
          <p className="text-base sm:text-lg md:text-xl font-orbitron-semi text-gray-300 max-w-4xl mx-auto px-2">
            Founded in 2024 by SOE CUSAT students, Astron Endurance is driven by
            a vision of solar-powered mobility. We compete in national
            competitions with innovative electric vehicles, pushing the
            boundaries of sustainable transportation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-16 max-w-4xl mx-auto h-full">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-airstrike-bold text-[#E4572E] mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm md:text-base font-orbitron-semi text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12 sm:mb-16 items-stretch">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group h-full"
            >
              <Card className="relative overflow-hidden border border-white/10 shadow-2xl hover:shadow-[0_0_25px_rgba(228,87,46,0.25)] transition-all duration-500 bg-zinc-900/90 backdrop-blur-md hover:bg-zinc-800/90 hover:border-[#E4572E]/50 hover:cursor-pointer group-hover:-translate-y-2 group-hover:scale-[1.02] h-full flex flex-col">
                <div className="h-1.5 bg-gradient-to-r from-[#E4572E] to-[#FF9F1C]" />

                <CardContent className="p-5 sm:p-6 text-center flex flex-col flex-1">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-[#E4572E] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#E4572E]/30">
                    <achievement.icon size={28} className="text-white sm:w-8 sm:h-8" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-airstrike-bold text-white mb-2 sm:mb-3 group-hover:text-[#E4572E] transition-colors duration-300">
                    {achievement.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-orbitron-semi text-gray-300 leading-relaxed mb-3 sm:mb-4">
                    {achievement.description}
                  </p>

                  <div className="mt-auto" />
                  <div className="w-12 h-0.5 bg-[#E4572E] mx-auto mt-3 sm:mt-4 group-hover:w-16 transition-all duration-300 rounded-full" />
                </CardContent>

              </Card>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Card className="relative max-w-4xl mx-auto bg-zinc-900/90 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden hover:border-[#E4572E]/40 hover:bg-zinc-800/90 transition-all duration-500">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <Target size={36} className="text-[#E4572E] mr-3 sm:mr-4 sm:w-12 sm:h-12" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-airstrike-bold text-white">
                  Our Mission
                </h3>
              </div>
              <p className="text-sm sm:text-base md:text-lg font-orbitron-semi text-gray-300 leading-relaxed">
                To revolutionize sustainable mobility through innovative
                engineering solutions, inspiring the next generation of
                eco-conscious transportation while competing at the highest
                levels of national and international competitions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
