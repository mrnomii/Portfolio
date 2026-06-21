import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, Eye, Mail, MessageSquare, ExternalLink } from "lucide-react";
import { developerProfile } from "../data";

interface HeroProps {
  isDarkMode: boolean;
  onNavigate: (id: string) => void;
}

export default function Hero({ isDarkMode, onNavigate }: HeroProps) {
  const [typedText, setTypedText] = useState("");
  const fullRoles = [
    "Full Stack Developer",
    "Web Application Designer",
    "BS Artificial Intelligence Student"
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullRole = fullRoles[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentFullRole.substring(0, typedText.length - 1));
      }, 35);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentFullRole.substring(0, typedText.length + 1));
      }, 75);
    }

    if (!isDeleting && typedText === currentFullRole) {
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % fullRoles.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  // Handle fake resume download with beautiful notification callback
  const handleDownloadCV = () => {
    const alertDiv = document.createElement("div");
    alertDiv.className = "fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-xl bg-slate-900 border border-emerald-500/20 px-4 py-3 text-xs text-white shadow-xl backdrop-blur-md animate-fade-in";
    alertDiv.innerHTML = `
      <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
      <span>Muhammad Noman's CV requested. Starting localized compilation...</span>
    `;
    document.body.appendChild(alertDiv);
    
    // Simulate compilation, download triggered
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "data:text/plain;charset=utf-8," + encodeURIComponent("CV of Muhammad Noman Saeed - BS AI & Full Stack Developer - Contact: muhammadnomansaeed62@gmail.com, 03261619179");
      link.setAttribute("download", "Muhammad_Noman_Saeed_CV.txt");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      alertDiv.className = "fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-xl bg-slate-900 border border-emerald-400/50 px-4 py-3 text-xs text-white shadow-xl backdrop-blur-md";
      alertDiv.innerHTML = `
        <span class="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
        <span>CV file compiled and download completed successfully!</span>
      `;
      setTimeout(() => alertDiv.remove(), 3500);
    }, 1500);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-[20%] left-[10%] h-[25rem] w-[25rem] rounded-full bg-indigo-500/10 blur-[8rem] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] h-[20rem] w-[20rem] rounded-full bg-cyan-500/10 blur-[7rem] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Branding Block */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-3"
            >
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border ${
                isDarkMode 
                  ? "bg-slate-900/60 border-indigo-500/20 text-cyan-400 shadow-[0_0_15px_rgba(129,140,248,0.05)]" 
                  : "bg-indigo-50 border-indigo-100 text-indigo-700"
              }`}>
                <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
                Available for Projects
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight"
            >
              <span className={isDarkMode ? "text-white" : "text-slate-900"}>Hi, I'm </span>
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                {developerProfile.name}
              </span>
            </motion.h1>

            {/* Dynamic Typing Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-10 sm:h-12 flex items-center justify-center lg:justify-start mt-3"
            >
              <h2 className="text-lg sm:text-2xl font-mono font-medium text-slate-400">
                <span className={isDarkMode ? "text-cyan-400" : "text-indigo-600"}>&gt; </span>
                <span>{typedText}</span>
                <span className="animate-pulse font-light text-cyan-400">|</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`mt-4 text-base sm:text-lg max-w-xl self-center lg:self-start leading-relaxed ${
                isDarkMode ? "text-slate-300" : "text-slate-650"
              }`}
            >
              {developerProfile.tagline} Currently pursuing BS Artificial Intelligence (5th Semester) and translating complex patterns into responsive code paradigms.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => onNavigate("projects")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-violet-600 sm:hover:from-indigo-500 sm:hover:to-violet-500 text-white rounded-xl font-medium shadow-md shadow-indigo-600/20 active:scale-95 transition-all text-sm cursor-pointer"
              >
                <Eye className="h-4 w-4" />
                View Projects
              </button>

              <button
                onClick={() => onNavigate("contact")}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 border rounded-xl font-medium active:scale-95 transition-all text-sm cursor-pointer ${
                  isDarkMode
                    ? "border-white/10 bg-white/5 hover:bg-white/10 text-white"
                    : "border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800"
                }`}
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </button>

              <button
                onClick={handleDownloadCV}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 border rounded-xl font-medium active:scale-95 transition-all text-sm cursor-pointer ${
                  isDarkMode
                    ? "border-cyan-500/20 bg-slate-900 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400/40"
                    : "border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                }`}
              >
                <Download className="h-4 w-4 animate-bounce" />
                Download CV
              </button>
            </motion.div>
          </div>

          {/* Profile Picture Block */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="relative group cursor-pointer"
            >
              {/* Outer halo animations */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 opacity-60 blur-md group-hover:opacity-90 transition duration-1000 group-hover:duration-200" />
              
              <div className={`relative aspect-square w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 p-1 ${
                isDarkMode ? "bg-slate-950 border-white/10" : "bg-white border-slate-200"
              }`}>
                <img
                  src={developerProfile.avatar}
                  alt={developerProfile.name}
                  className="w-full h-full object-cover rounded-xl grayscale-[15%] group-hover:grayscale-0 transition-all duration-500 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Info Overlay frame on avatar hover */}
                <div className="absolute inset-x-2 bottom-2 bg-slate-950/85 backdrop-blur-md rounded-xl p-3 border border-white/10 transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white text-xs font-bold font-display">{developerProfile.name}</p>
                      <p className="text-cyan-400 text-[10px] font-mono">Creative Stack Member</p>
                    </div>
                    <span className="text-[10px] bg-indigo-500/25 text-indigo-300 px-2 py-0.5 rounded-full font-mono">
                      FSD, PK
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
