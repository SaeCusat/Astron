"use client";

import React from "react";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  CheckCircle,
  MapPin,
  Star,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

const CompetitionsSection = () => {
  const competitions = [
    {
      title: "SAE EBAJA",
      subtitle: "Electric All-Terrain Vehicle Competition",
      description:
        "A rigorous competition featuring virtual simulations, static evaluations, dynamic performance tests, and endurance challenges. Teams design and build electric ATVs that can handle various terrains while maintaining efficiency and performance.",
      image: "/comps/sae-baja.jpg",
      status: "Active",
      date: "2025",
      location: "National Level",
      achievements: [
        "AIR 50 (BAJA 2026)",
        "Design Excellence",
        "Performance Testing",
        "Innovation Award",
      ],
      features: [
        "Virtual Simulation",
        "Static Design",
        "Dynamic Testing",
        "Endurance Challenge",
      ],
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-900/20 to-red-900/20",
    },
    {
      title: "FMAE BSVC",
      subtitle: "Bharat Solar Vehicle Challenge",
      description:
        "Inspired by the World Solar Challenge, this competition focuses on energy efficiency and solar-powered mobility. Teams create vehicles that can travel maximum distance using only solar energy, emphasizing sustainability and innovation.",
      image: "/comps/fmae-bsvc.jpg",
      status: "Upcoming",
      date: "2025",
      location: "Pan India",
      achievements: [
        "Solar Efficiency",
        "Range Optimization",
        "Sustainability",
      ],
      features: [
        "Solar Technology",
        "Energy Efficiency",
        "Long Distance",
        "Eco-Friendly",
      ],
      color: "from-blue-500 to-cyan-600",
      bgColor: "from-blue-900/20 to-cyan-900/20",
    },
  ];

  const stats = [
    {
      icon: Trophy,
      number: "2",
      label: "Major Competitions",
      description: "Active participation",
      color: "from-yellow-500 to-amber-600",
    },
    {
      icon: Star,
      number: "1st",
      label: "Kerala Rank",
      description: "ESVC 2025",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Target,
      number: "9th",
      label: "All India Rank",
      description: "ESVC 2025",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Zap,
      number: "100%",
      label: "Electric Focus",
      description: "Sustainable technology",
      color: "from-purple-500 to-violet-600",
    },
  ];

  return (
    <section id="competitions" className="min-h-screen bg-[#08080a] py-14 sm:py-20">
      <div className="container mx-auto px-4 sm:px-8 py-10 sm:py-16">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-airstrike-bold text-white mb-4 sm:mb-6">
            Our Competitions
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-[#E4572E] mx-auto rounded-full mb-6 sm:mb-8 shadow-[0_0_12px_rgba(228,87,46,0.8)]" />
          <p className="text-base sm:text-lg md:text-xl font-orbitron-semi text-gray-300 max-w-4xl mx-auto px-2">
            We participate in prestigious national competitions, showcasing our
            innovation in electric and solar-powered vehicle technologies.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group"
            >
              <Card className="relative h-full overflow-hidden border border-white/10 shadow-2xl hover:shadow-[0_0_20px_rgba(228,87,46,0.25)] transition-all duration-500 bg-zinc-900/90 backdrop-blur-sm hover:bg-zinc-800/90 hover:border-[#E4572E]/50 group-hover:scale-[1.02]">
                <CardContent className="p-3.5 sm:p-4 text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-full bg-[#E4572E] flex items-center justify-center shadow-lg shadow-[#E4572E]/40">
                    <stat.icon size={20} className="text-white sm:w-6 sm:h-6" />
                  </div>
                  <div className="text-xl sm:text-2xl font-airstrike-bold text-white mb-0.5 sm:mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm font-orbitron-semi text-gray-300 mb-0.5 sm:mb-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] sm:text-xs text-gray-400">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {competitions.map((competition, index) => (
            <div
              key={index}
              className="group"
            >
              <Card className="relative h-full overflow-hidden border border-white/10 shadow-2xl hover:shadow-[0_0_25px_rgba(228,87,46,0.25)] transition-all duration-500 bg-zinc-900/90 backdrop-blur-sm hover:bg-zinc-800/90 hover:border-[#E4572E]/50 group-hover:scale-[1.02]">
                <div className="h-1.5 bg-gradient-to-r from-[#E4572E] to-[#FF9F1C]" />

                <CardContent className="p-0">
                  <div className="relative h-48 sm:h-64 overflow-hidden">
                    <img
                      src={competition.image}
                      alt={competition.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute top-4 right-4">
                      <Badge
                        variant={competition.status === "Active"
                          ? "default"
                          : "secondary"}
                        className={`${
                          competition.status === "Active"
                            ? "bg-green-600 hover:bg-green-700"
                            : "bg-yellow-600 hover:bg-yellow-700"
                        } text-white border-0 font-orbitron-semi text-xs`}
                      >
                        {competition.status}
                      </Badge>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-4 text-white text-xs sm:text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} className="sm:w-4 sm:h-4" />
                          <span className="font-orbitron-semi">
                            {competition.date}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} className="sm:w-4 sm:h-4" />
                          <span className="font-orbitron-semi">
                            {competition.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-airstrike-bold text-white mb-2 group-hover:text-[#E4572E] transition-colors duration-300">
                      {competition.title}
                    </h3>
                    <h4 className="text-base sm:text-lg font-orbitron-semi text-gray-400 mb-3 sm:mb-4">
                      {competition.subtitle}
                    </h4>
                    <p className="text-sm font-orbitron-semi text-gray-300 leading-relaxed mb-5 sm:mb-6">
                      {competition.description}
                    </p>

                    <div className="mb-5 sm:mb-6">
                      <h5 className="text-xs sm:text-sm font-airstrike-bold text-white mb-3 uppercase tracking-wide">
                        Competition Features
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {competition.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-xs sm:text-sm text-gray-300"
                          >
                            <CheckCircle
                              size={14}
                              className="text-green-400 flex-shrink-0"
                            />
                            <span className="font-orbitron-semi">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-xs sm:text-sm font-airstrike-bold text-white mb-3 uppercase tracking-wide">
                        Key Focus Areas
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {competition.achievements.map((achievement, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="border-gray-600 text-gray-300 hover:bg-gray-800 font-orbitron-semi text-xs"
                          >
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div
                      className={`w-16 h-0.5 bg-gradient-to-r ${competition.color} mt-5 sm:mt-6 group-hover:w-24 transition-all duration-300 rounded-full`}
                    />
                  </div>
                </CardContent>

              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <Card className="relative max-w-2xl mx-auto border-0 overflow-hidden bg-gray-900/95 backdrop-blur-sm shadow-2xl hover:bg-gray-800/95 transition-all duration-500">
            <div className="h-2 bg-[#E4572E]" />
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#E4572E] flex items-center justify-center shadow-lg mr-3 sm:mr-4">
                  <Trophy size={24} className="text-white sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-airstrike-bold text-white tracking-wide">
                  Join Our Journey
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-300 font-orbitron-semi">
                Follow our competition journey and witness innovation in
                sustainable mobility
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CompetitionsSection;
