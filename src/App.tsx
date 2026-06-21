import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Cpu,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Music2, // TikTok equivalent
} from "lucide-react";

// Components Imports
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleBg from "./components/ParticleBg";
import GithubContributions from "./components/GithubContributions";

// Links and Profile lists
import { socialLinks } from "./data";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingLog, setLoadingLog] = useState("Initializing workspace core...");

  // Manage Dark/Light theme class bindings on HTML element
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      root.style.backgroundColor = "#020617"; // Set background color to slate-950 for seamless rendering
    } else {
      root.classList.remove("dark");
      root.style.backgroundColor = "#f8fafc"; // Soft slate-50
    }
  }, [isDarkMode]);

  // Pre-loader percentage ticker
  useEffect(() => {
    const loadLogs = [
      "Initializing workspace core...",
      "Resolving glassmorphic layout definitions...",
      "Configuring Artificial Neural Network modules...",
      "Loading signature verification CNN weights...",
      "Coupling local index storage nodes...",
      "Compiling Creative Stack agency portals...",
      "Drawing HTML5 canvas floating particle routes...",
      "Welcome to Muhammad Noman Saeed's personal matrix!",
    ];

    let timer: NodeJS.Timeout;
    const updateProgress = () => {
      setLoadingProgress((prev) => {
        const increment = Math.floor(Math.random() * 12) + 4;
        const next = Math.min(prev + increment, 100);

        // Map logs dynamically to progress stages
        const logIdx = Math.min(
          Math.floor((next / 100) * loadLogs.length),
          loadLogs.length - 1
        );
        setLoadingLog(loadLogs[logIdx]);

        if (next === 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 900);
        }
        return next;
      });
    };

    timer = setInterval(updateProgress, 120);
    return () => clearInterval(timer);
  }, []);

  const handleSectionNavigation = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 70; // Header adjustment
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Icon mapper for floating side rail
  const floatingIcons: { [key: string]: React.ComponentType<any> } = {
    Linkedin: Linkedin,
    Instagram: Instagram,
    Facebook: Facebook,
    Music2: Music2,
    Github: Github,
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        // Premium Hacker-Style Coder Loading Screen
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-slate-950 px-4 select-none"
        >
          <div className="absolute inset-0 bg-radial-[circle_at_center,_var(--alpha-color)_0%,_transparent_65%] [--alpha-color:rgba(99,102,241,0.06)] pointer-events-none" />

          {/* Glowing loader widget */}
          <div className="relative text-center max-w-sm flex flex-col items-center gap-6">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 p-[1.5px] shadow-[0_0_30px_rgba(99,102,241,0.35)] animate-pulse">
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-slate-950">
                <Cpu className="h-6 w-6 text-cyan-400" />
              </div>
            </div>

            <div className="space-y-2 mt-4 text-center">
              <h1 className="font-display text-lg font-bold tracking-wider text-white uppercase">
                Preparing Sandbox Environment
              </h1>
              <p className="text-xs font-mono text-cyan-400 opacity-90">
                &gt; Muhammad Noman Saeed <span className="animate-pulse">|</span>
              </p>
            </div>

            <div className="w-64 h-1.5 bg-slate-900 border border-white/5 rounded-full overflow-hidden p-[1px] mt-2">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 rounded-full transition-all duration-150"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>

            <div className="flex flex-col gap-1 items-center font-mono">
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                {loadingProgress}%
              </span>
              <span className="text-[10px] text-slate-500 italic max-w-xs truncate">
                {loadingLog}
              </span>
            </div>
          </div>
        </motion.div>
      ) : (
        // Actual App Canvas
        <div
          key="actual-portfolio"
          className={`relative min-h-screen w-full overflow-hidden transition-colors duration-500 ${
            isDarkMode 
              ? "bg-slate-950 text-slate-100" 
              : "bg-slate-50 text-slate-900"
          }`}
        >
          {/* Responsive background floating canvas particle matrix */}
          <ParticleBg isDarkMode={isDarkMode} />

          {/* Navigation Bar */}
          <Navbar isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />

          {/* Floating Social Icons Rail (Hangs nicely on screen margins, hidden on mobile) */}
          <div className="hidden lg:flex fixed left-5 top-1/2 transform -translate-y-1/2 flex-col gap-4 z-40">
            {socialLinks.map((social) => {
              const SocketIcon = floatingIcons[social.iconName] || Github;
              return (
                <motion.a
                  key={social.platform}
                  whileHover={{ scale: 1.25, x: 4 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl border flex items-center justify-center shadow-lg transition-all ${
                    isDarkMode
                      ? "border-white/5 bg-slate-900/60 text-slate-400 backdrop-blur-md " + social.color
                      : "border-slate-200 bg-white text-slate-600 " + social.color
                  }`}
                  title={`Follow Noman Saeed on ${social.platform}`}
                >
                  <SocketIcon className="h-4.5 w-4.5" />
                </motion.a>
              );
            })}
          </div>

          <main id="applet-primary-layout" className="relative">
            {/* Sections */}
            <Hero isDarkMode={isDarkMode} onNavigate={handleSectionNavigation} />
            
            <div className="relative">
              <About isDarkMode={isDarkMode} />
              
              <div className="border-y border-white/[0.02]">
                <Education isDarkMode={isDarkMode} />
              </div>

              {/* GitHub Contributions segment - provides premium visual continuity right after education details */}
              <div className="py-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto">
                  <GithubContributions />
                </div>
              </div>

              <div className="border-t border-white/[0.02]">
                <Skills isDarkMode={isDarkMode} />
              </div>

              <div className="border-t border-white/[0.02]">
                <Projects isDarkMode={isDarkMode} />
              </div>

              <div className="border-t border-white/[0.02]">
                <Contact isDarkMode={isDarkMode} />
              </div>
            </div>
          </main>

          {/* Footer Branding Tier */}
          <Footer isDarkMode={isDarkMode} onNavigate={handleSectionNavigation} />
        </div>
      )}
    </AnimatePresence>
  );
}
