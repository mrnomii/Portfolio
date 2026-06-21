import { motion } from "motion/react";
import { User, Cpu, Award, Users, BookOpen, Briefcase, BadgeCheck, CheckCircle2, Sparkles } from "lucide-react";
import { developerProfile, creativeStackAgency } from "../data";

interface AboutProps {
  isDarkMode: boolean;
}

export default function About({ isDarkMode }: AboutProps) {
  const highlights = [
    {
      icon: Cpu,
      title: "AI Specialist",
      desc: "Deeply engaged in Artificial Intelligence theoretical & practical subsets in BS Artificial Intelligence.",
      color: "text-purple-400 border-purple-500/10 bg-purple-500/5",
    },
    {
      icon: Users,
      title: "Agency Member",
      desc: "Proud Member of Creative Stack Agency, contributing to real-world development solutions.",
      color: "text-cyan-400 border-cyan-500/10 bg-cyan-500/5",
    },
    {
      icon: Award,
      title: "Responsive Web Dev",
      desc: "Specializing in robust, fluid, responsive full stack websites that increase engagement rates.",
      color: "text-indigo-400 border-indigo-500/10 bg-indigo-500/5",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className={`font-mono text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 ${
            isDarkMode ? "text-cyan-400" : "text-indigo-600"
          }`}>
            <User className="h-4.5 w-4.5" />
            Biographical Profile
          </h3>
          <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 ${
            isDarkMode ? "text-white" : "text-slate-900"
          }`}>
            About Me
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Narrative & Highlights Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Detailed Narrative Biography Block */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className={`p-8 rounded-2xl border backdrop-blur-md ${
              isDarkMode 
                ? "bg-slate-900/40 border-white/5 shadow-xl shadow-slate-900/40" 
                : "bg-slate-50 border-slate-200/80 shadow-md shadow-slate-100"
            }`}>
              <h4 className={`text-xl font-bold font-display flex items-center gap-2 mb-4 ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}>
                <BookOpen className="h-5 w-5 text-indigo-400" />
                Engineering Better Solutions
              </h4>
              <p className={`text-sm sm:text-base leading-relaxed ${
                isDarkMode ? "text-slate-300" : "text-slate-700"
              }`}>
                {developerProfile.bio}
              </p>
              <p className={`text-sm leading-relaxed mt-4 ${
                isDarkMode ? "text-slate-400" : "text-slate-600"
              }`}>
                Combining analytical thinking from artificial neural network layouts with the pixel-perfect layouts of front-end engineering allows me to produce websites that aren't just pretty faces, but highly responsive, intelligent software assets. Let's form creative bonds to launch your next project!
              </p>

              {/* Status Indicators */}
              <div className="mt-8 grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Current Affiliation</p>
                  <p className={`text-sm font-bold mt-1 ${isDarkMode ? "text-cyan-300" : "text-indigo-700"}`}>
                    Creative Stack Agency
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Educational Focus</p>
                  <p className={`text-sm font-bold mt-1 ${isDarkMode ? "text-cyan-300" : "text-indigo-700"}`}>
                    Artificial Intelligence
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Info Grid (Bento style cards) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-1 gap-6">
            {highlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`p-6 rounded-2xl border transition-all ${
                    isDarkMode
                      ? "bg-slate-900/35 border-white/5 hover:border-slate-800"
                      : "bg-white border-slate-200 hover:border-slate-300 shadow-sm"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl border ${item.color} flex-shrink-0`}>
                      <IconComp className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className={`text-base font-bold font-display ${
                        isDarkMode ? "text-white" : "text-slate-900"
                      }`}>
                        {item.title}
                      </h4>
                      <p className={`text-xs mt-1.5 leading-relaxed ${
                        isDarkMode ? "text-slate-400" : "text-slate-650"
                      }`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Premium Creative Stack Agency Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-16"
        >
          <div className={`p-1 sm:p-[1px] rounded-3xl bg-gradient-to-r ${
            isDarkMode ? "from-indigo-500/30 via-cyan-400/30 to-purple-500/30" : "from-indigo-100 via-slate-200 to-cyan-100"
          }`}>
            <div className={`rounded-[23px] p-6 sm:p-10 backdrop-blur-xl ${
              isDarkMode 
                ? "bg-slate-950/90 shadow-2xl shadow-cyan-950/10" 
                : "bg-white shadow-xl shadow-slate-100"
            }`}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                {/* Agency Left Info & Stats */}
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`px-3 py-1 text-xs font-mono font-bold tracking-wider rounded-full border flex items-center gap-1.5 ${
                      isDarkMode 
                        ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" 
                        : "bg-indigo-50 text-indigo-700 border-indigo-200"
                    }`}>
                      <Briefcase className="h-3.5 w-3.5 animate-pulse" />
                      Official Agency Member
                    </span>
                    <span className={`px-3 py-1 text-xs font-mono font-bold tracking-wider rounded-full border flex items-center gap-1.5 ${
                      isDarkMode 
                        ? "bg-purple-500/10 text-purple-400 border-purple-500/20" 
                        : "bg-purple-50 text-purple-700 border-purple-200"
                    }`}>
                      <Sparkles className="h-3.5 w-3.5" />
                      Tech Co-Strategist
                    </span>
                  </div>

                  <h3 className={`font-display text-2xl sm:text-3xl font-extrabold tracking-tight ${
                    isDarkMode ? "text-white" : "text-slate-900"
                  }`}>
                    {creativeStackAgency.name}
                  </h3>
                  
                  <p className={`text-sm font-medium mt-2 leading-relaxed italic ${
                    isDarkMode ? "text-slate-400" : "text-slate-550"
                  }`}>
                    "{creativeStackAgency.tagline}"
                  </p>

                  <div className="h-px bg-slate-800/10 dark:bg-slate-200/5 my-6" />

                  {/* Noman's Exclusive Role & Description */}
                  <div className="mb-6">
                    <h4 className={`text-base font-bold font-display flex items-center gap-2 mb-2 ${
                      isDarkMode ? "text-cyan-300" : "text-indigo-800"
                    }`}>
                      <BadgeCheck className="h-5 w-5 text-emerald-400" />
                      Role: {creativeStackAgency.roleTitle}
                    </h4>
                    <p className={`text-sm sm:text-base leading-relaxed ${
                      isDarkMode ? "text-slate-300" : "text-slate-705"
                    }`}>
                      {creativeStackAgency.roleDescription}
                    </p>
                  </div>

                  <div className="mb-8">
                    <p className={`text-xs sm:text-sm leading-relaxed ${
                      isDarkMode ? "text-slate-400" : "text-slate-600"
                    }`}>
                      {creativeStackAgency.aboutAgency}
                    </p>
                  </div>

                  {/* Agency Key Stats Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {creativeStackAgency.keyStats.map((stat, i) => (
                      <div 
                        key={i} 
                        className={`p-4 rounded-xl border text-center transition-all ${
                          isDarkMode 
                            ? "bg-slate-905 border-white/5 hover:border-cyan-500/20 shadow-inner" 
                            : "bg-slate-50 border-slate-100 hover:border-indigo-100 shadow-sm"
                        }`}
                      >
                        <p className={`text-2xl sm:text-3xl font-extrabold font-display bg-gradient-to-r bg-clip-text text-transparent ${
                          isDarkMode ? "from-cyan-400 to-indigo-400" : "from-indigo-600 to-cyan-500"
                        }`}>
                          {stat.value}
                        </p>
                        <p className="text-[10px] font-mono font-medium uppercase tracking-wider text-slate-500 mt-1">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Agency Services Display */}
                <div className="lg:col-span-5 h-full flex flex-col justify-between">
                  <div className={`p-6 sm:p-8 rounded-2xl border h-full ${
                    isDarkMode 
                      ? "bg-slate-905/60 border-white/5 shadow-xl" 
                      : "bg-slate-50 border-slate-200/80 shadow-md"
                  }`}>
                    <h4 className={`text-lg font-bold font-display flex items-center gap-2 mb-6 ${
                      isDarkMode ? "text-white" : "text-slate-900"
                    }`}>
                      Core Agency Services
                    </h4>
                    
                    <ul className="space-y-4">
                      {creativeStackAgency.coreServices.map((service, index) => (
                        <motion.li 
                          key={index}
                          whileHover={{ x: 4 }}
                          className="flex items-start gap-3 group"
                        >
                          <span className={`mt-0.5 flex items-center justify-center p-1 rounded-md transition-colors ${
                            isDarkMode 
                              ? "bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20" 
                              : "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100"
                          }`}>
                            <CheckCircle2 className="h-4 w-4" />
                          </span>
                          <span className={`text-sm font-medium transition-colors ${
                            isDarkMode ? "text-slate-300 group-hover:text-cyan-300" : "text-slate-700 group-hover:text-indigo-800"
                          }`}>
                            {service}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Collaborative Footer Citation */}
                    <div className={`mt-8 pt-6 border-t font-mono text-[11px] leading-relaxed text-center ${
                      isDarkMode ? "border-slate-800/60 text-slate-500" : "border-slate-200 text-slate-500"
                    }`}>
                      "We combine coding skillsets with top branding models to unlock extraordinary client growth."
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
