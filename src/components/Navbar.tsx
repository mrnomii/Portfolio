import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Sparkles, MonitorUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ isDarkMode, toggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Education", id: "education" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 70; // Header height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <nav
      id="main-navigation-bar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/70 border-b border-white/5 backdrop-blur-md shadow-lg"
          : "bg-transparent border-b border-transparent"
      } ${!isDarkMode && scrolled ? "bg-white/80 border-slate-200" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Branding */}
          <div className="flex items-center">
            <button
              onClick={() => handleNavClick("home")}
              className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-white focus:outline-none cursor-pointer"
            >
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 p-[1px] shadow-md shadow-indigo-500/15">
                <div className={`flex h-full w-full items-center justify-center rounded-lg bg-slate-900 transition-colors ${!isDarkMode ? "bg-indigo-50" : ""}`}>
                  <Sparkles className="h-4 w-4 text-cyan-400" />
                </div>
              </div>
              <span className={`bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent transition-colors ${!isDarkMode ? "from-slate-900 via-indigo-950 to-indigo-600" : ""}`}>
                Noman Saeed
              </span>
            </button>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3 py-2 text-xs font-medium tracking-wide transition-colors duration-200 rounded-md focus:outline-none cursor-pointer ${
                    activeSection === link.id
                      ? isDarkMode
                        ? "text-cyan-400"
                        : "text-indigo-600"
                      : isDarkMode
                      ? "text-slate-300 hover:text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg border transition-all cursor-pointer ${
                isDarkMode
                  ? "border-white/10 bg-slate-900/60 text-yellow-400 hover:bg-slate-800"
                  : "border-slate-200 bg-slate-100 text-slate-800 hover:bg-slate-200"
              }`}
              aria-label="Toggle visual theme"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                isDarkMode
                  ? "border-white/10 bg-slate-900/60 text-yellow-500"
                  : "border-slate-200 bg-slate-100 text-slate-800"
              }`}
            >
              {isDarkMode ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                isDarkMode
                  ? "border-white/10 bg-slate-905 text-slate-300 hover:text-white"
                  : "border-slate-200 bg-slate-100 text-slate-605"
              }`}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden overflow-hidden border-b transition-all ${
              isDarkMode ? "bg-slate-950/95 border-white/5" : "bg-white/95 border-slate-200"
            }`}
          >
            <div className="space-y-1 px-4 py-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? isDarkMode
                        ? "bg-slate-900/85 text-cyan-400 border-l-2 border-cyan-400"
                        : "bg-indigo-50 text-indigo-600 border-l-2 border-indigo-600"
                      : isDarkMode
                      ? "text-slate-300 hover:bg-slate-900/50 hover:text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
