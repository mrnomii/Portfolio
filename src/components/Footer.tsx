import React from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  Linkedin,
  Instagram,
  Facebook,
  Music2, // TikTok Lucide icon equivalent
  Github,
  Heart,
  ChevronUp,
} from "lucide-react";
import { socialLinks } from "../data";

interface FooterProps {
  isDarkMode: boolean;
  onNavigate: (id: string) => void;
}

// Icon mapper for lucide-react in footer social circles
const iconMap: { [key: string]: React.ComponentType<any> } = {
  Linkedin: Linkedin,
  Instagram: Instagram,
  Facebook: Facebook,
  Music2: Music2,
  Github: Github,
};

export default function Footer({ isDarkMode, onNavigate }: FooterProps) {
  const footerLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Education", id: "education" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="main-footer-container"
      className={`relative pt-16 pb-8 border-t transition-all ${
        isDarkMode
          ? "bg-slate-950 border-white/5 text-slate-400"
          : "bg-slate-50 border-slate-200 text-slate-600"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Upper tier layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/[0.04] items-start">
          
          {/* Logo & Agency brand note */}
          <div className="col-span-1 md:col-span-4 space-y-4 text-center md:text-left">
            <button
              onClick={() => onNavigate("home")}
              className="inline-flex items-center gap-2 font-display text-lg font-bold tracking-tight text-white focus:outline-none cursor-pointer"
            >
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 p-[1px] shadow-sm shadow-indigo-505/10">
                <div className={`flex h-full w-full items-center justify-center rounded-lg bg-slate-950 ${!isDarkMode ? "bg-indigo-50" : ""}`}>
                  <Sparkles className="h-4 w-4 text-cyan-400 animate-pulse" />
                </div>
              </div>
              <span className={`bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent transition-colors ${!isDarkMode ? "from-slate-900 via-indigo-950 to-indigo-600" : ""}`}>
                Muhammad Noman Saeed
              </span>
            </button>
            <p className="text-xs leading-relaxed text-slate-400 max-w-xs mx-auto md:mx-0">
              Pursuing technical heights in Artificial Intelligence (5th Semester) and translating complex backend states into state-of-the-art web systems.
            </p>
          </div>

          {/* Quick Section links */}
          <div className="col-span-1 md:col-span-4 flex flex-col items-center justify-center space-y-3">
            <h4 className={`text-xs font-mono uppercase tracking-widest ${isDarkMode ? "text-slate-350" : "text-slate-800"}`}>
              Navigation Links
            </h4>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 max-w-xs">
              {footerLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`text-xs font-mono transition-colors hover:text-cyan-400 cursor-pointer ${
                    isDarkMode ? "text-slate-400" : "text-slate-650"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social Platforms triggers */}
          <div className="col-span-1 md:col-span-4 flex flex-col items-center md:items-end justify-center space-y-4">
            <h4 className={`text-xs font-mono uppercase tracking-widest ${isDarkMode ? "text-slate-350" : "text-slate-800"}`}>
              Social Profiles
            </h4>
            
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const IconComponent = iconMap[social.iconName] || Github;
                return (
                  <motion.a
                    whileHover={{ scale: 1.15, y: -2 }}
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-xl border flex items-center justify-center transition-all ${
                      isDarkMode 
                        ? "border-white/5 bg-slate-900 text-slate-400 " + social.color
                        : "border-slate-200 bg-white text-slate-600 " + social.color
                    }`}
                    title={social.platform}
                  >
                    <IconComponent className="h-4.5 w-4.5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Lower tier footer */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-center">
          
          <p className="text-[10.5px] font-mono tracking-wide text-slate-500">
            &copy; 2026 Muhammad Noman Saeed &mdash; Full Stack Developer | Member of Creative Stack Agency
          </p>

          <div className="flex items-center justify-center gap-4">
            <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-red-510 fill-red-510 animate-pulse" /> using React & Tailwind
            </span>

            <button
              onClick={handleScrollToTop}
              className={`p-2.5 rounded-xl border cursor-pointer hover:scale-105 active:scale-95 transition-all ${
                isDarkMode 
                  ? "border-white/5 bg-slate-900 text-slate-300 hover:text-white" 
                  : "border-slate-200 bg-white text-slate-700 hover:text-indigo-600"
              }`}
              title="Return to peak"
            >
              <ChevronUp className="h-4 w-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
