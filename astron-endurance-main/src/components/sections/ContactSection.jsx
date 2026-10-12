"use client";

import React, { useState } from "react";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Award, Crown, Instagram, Linkedin, Mail, Phone, User } from "lucide-react";
import Image from "next/image";

const LeadershipCard = ({ contact }) => {
  const [imageError, setImageError] = useState(false);
  const showImage = Boolean(contact.image && !imageError);

  return (
    <div className="bg-zinc-900/90 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#E4572E]/50 hover:bg-zinc-800/90 transition-all duration-500 group hover:shadow-[0_0_22px_rgba(228,87,46,0.25)] flex flex-col items-center text-center h-full">
      {/* Photo / Avatar - Square Profile Frame */}
      <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl relative mb-4 overflow-hidden border-2 border-[#E4572E]/60 shadow-[0_0_15px_rgba(228,87,46,0.3)] group-hover:scale-105 group-hover:border-[#E4572E] group-hover:shadow-[0_0_25px_rgba(228,87,46,0.5)] transition-all duration-300 bg-zinc-800/80 flex items-center justify-center">
        {showImage ? (
          <img
            src={contact.image}
            alt={contact.name}
            className="w-full h-full object-cover"
            style={{ objectPosition: contact.imagePosition || "center 20%" }}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 text-white">
            <contact.icon className="w-10 h-10 text-[#E4572E] mb-2 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-xs font-orbitron-semi tracking-widest text-gray-300 font-bold">
              {contact.initials}
            </span>
          </div>
        )}
      </div>

      {/* Name */}
      <h4 className="text-lg md:text-xl font-orbitron-semi text-white mb-1.5 group-hover:text-[#E4572E] transition-colors duration-300">
        {contact.name}
      </h4>

      {/* Role */}
      <span className="inline-block px-3 py-1 rounded-full text-xs font-orbitron-semi bg-[#E4572E]/15 text-[#E4572E] border border-[#E4572E]/30 mb-4 tracking-wider uppercase">
        {contact.role}
      </span>

      {/* Phone Link */}
      <div className="mt-auto pt-2 w-full">
        <a
          href={`tel:${contact.phone.replace(/\s/g, "")}`}
          className="inline-flex items-center justify-center gap-2 px-3 py-2.5 w-full rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#E4572E]/50 hover:bg-[#E4572E]/10 text-gray-300 hover:text-white font-orbitron-semi text-xs sm:text-sm transition-all duration-300 hover:cursor-pointer group/btn"
        >
          <Phone className="w-4 h-4 text-[#E4572E] group-hover/btn:scale-110 transition-transform duration-300" />
          <span>{contact.phone}</span>
        </a>
      </div>
    </div>
  );
};

const ContactSection = () => {
  const teamContacts = [
    {
      name: "Prof BIJU N",
      role: "FACULTY ADVISOR",
      phone: "+91 94962 15993",
      image: "/team/HEADS/BIJU_SIR.png",
      imagePosition: "center 15%",
      initials: "BN",
      icon: Crown,
      gradient: "from-purple-500 to-indigo-600",
      accent: "text-purple-400",
    },
    {
      name: "Prof SHEENA K M",
      role: "FACULTY ADVISOR",
      phone: "+91 94959 70110",
      image: "/team/HEADS/SHEENA.png",
      imagePosition: "center 15%",
      initials: "SK",
      icon: Crown,
      gradient: "from-purple-500 to-indigo-600",
      accent: "text-purple-400",
    },
    {
      name: "ASHWIN P A",
      role: "TEAM CAPTAIN",
      phone: "+91 77368 62142",
      image: "/team/HEADS/AHWIN.png",
      imagePosition: "center 20%",
      initials: "AP",
      icon: Award,
      gradient: "from-[#E4572E] to-[#E74D24]",
      accent: "text-[#E4572E]",
    },
    {
      name: "SREERAM V M",
      role: "VICE CAPTAIN",
      phone: "+91 79945 98799",
      image: "/team/HEADS/SREERAM.png",
      imagePosition: "center 15%",
      initials: "SV",
      icon: User,
      gradient: "from-emerald-500 to-teal-600",
      accent: "text-emerald-400",
    },
  ];

  const socialLinks = [
    {
      platform: "LinkedIn",
      handle: "Astron Endurance",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/astron-endurance/",
      gradient: "from-blue-600 to-cyan-600",
      bgGlow: "shadow-blue-500/25",
    },
    {
      platform: "Instagram",
      handle: "@astron.endurance",
      icon: Instagram,
      url: "https://instagram.com/astron.endurance",
      gradient: "from-pink-500 to-purple-600",
      bgGlow: "shadow-pink-500/25",
    },
    {
      platform: "Email",
      handle: "astronendurance@gmail.com",
      icon: Mail,
      url: "mailto:astronendurance@gmail.com",
      gradient: "from-blue-500 to-cyan-600",
      bgGlow: "shadow-blue-500/25",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#08080a] flex items-center justify-center py-20"
    >
      <ScrollProgress className="z-50" />
      <div className="container mx-auto px-6 sm:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-airstrike-bold text-white mb-6">
            Get In Touch
          </h2>
          <div className="w-32 h-1 bg-[#E4572E] mx-auto rounded-full mb-8 shadow-[0_0_12px_rgba(228,87,46,0.8)]" />
          <p className="text-lg md:text-xl font-orbitron-semi text-gray-300 max-w-3xl mx-auto">
            Drive innovation forward. Partner with Astron Endurance.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-orbitron-semi text-white text-center mb-12">
              Leadership Team
            </h3>

            {/* Responsive grid for 4 leadership contacts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamContacts.map((contact, index) => (
                <LeadershipCard key={index} contact={contact} />
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-orbitron-semi text-white mb-12">
              Connect With Us
            </h3>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center flex-wrap">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target={link.url.startsWith("mailto:") ? "_self" : "_blank"}
                  rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="flex text-sm lg:text-base items-center gap-4 w-full sm:w-auto bg-zinc-900/90 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-[#E4572E]/50 hover:bg-zinc-800/90 transition-all duration-500 group hover:shadow-[0_0_20px_rgba(228,87,46,0.25)] min-w-[280px] hover:cursor-pointer"
                >
                  <div className="w-12 h-12 bg-[#E4572E] rounded-full flex items-center justify-center transition-transform duration-300 shadow-lg shadow-[#E4572E]/30">
                    <link.icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="text-left">
                    <p className="text-[#E4572E] font-orbitron-semi text-sm">
                      {link.platform}
                    </p>
                    <p className="text-white font-orbitron-semi">
                      {link.handle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="text-center mt-16 p-8 bg-zinc-900/90 backdrop-blur-sm rounded-2xl border border-white/10">
            <p className="text-gray-300 font-orbitron-semi text-lg mb-6">
              Ready to join our journey towards sustainable mobility?
            </p>
            <a
              href="mailto:astronendurance@gmail.com"
              className="inline-flex items-center gap-3 bg-[#E4572E] hover:bg-[#E74D24] text-white font-orbitron-semi px-8 py-4 rounded-full transition-all duration-300 hover:cursor-pointer hover:scale-105 active:scale-95 shadow-lg shadow-[#E4572E]/30"
            >
              <Mail className="w-5 h-5" />
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
