import { motion } from "motion/react";
import { GraduationCap, Calendar, Award, Building, Landmark } from "lucide-react";
import { educationTimeline } from "../data";

interface EducationProps {
  isDarkMode: boolean;
}

export default function Education({ isDarkMode }: EducationProps) {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background glow node */}
      <div className="absolute top-[40%] right-[-10%] h-[20rem] w-[20rem] rounded-full bg-violet-600/5 blur-[8rem] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className={`font-mono text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 ${
            isDarkMode ? "text-cyan-400" : "text-indigo-600"
          }`}>
            <GraduationCap className="h-4.5 w-4.5" />
            Academic Chronicles
          </h3>
          <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 ${
            isDarkMode ? "text-white" : "text-slate-900"
          }`}>
            My Education
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Style Core Layout */}
        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Vertical axis spacer line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-indigo-500/80 via-purple-500/40 to-cyan-400/20 transform sm:-translate-x-1/2" />

          <div className="space-y-12">
            {educationTimeline.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div key={idx} className="relative flex flex-col sm:flex-row items-start sm:justify-between group">
                  {/* Timeline bullet node */}
                  <div className="absolute left-4 sm:left-1/2 h-6 w-6 rounded-full bg-slate-950 border-2 border-indigo-400 transform -translate-x-1/2 flex items-center justify-center z-10 shadow-lg shadow-indigo-500/20 group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300">
                    <div className="h-2 w-2 rounded-full bg-indigo-500 group-hover:bg-cyan-400" />
                  </div>

                  {/* Left Side Content Container (even/odd configuration) */}
                  <div className={`w-full sm:w-[45%] pl-10 sm:pl-0 ${isEven ? "sm:text-right sm:order-1" : "sm:order-2"}`}>
                    <motion.div
                      whileHover={{ y: -3 }}
                      className={`p-6 rounded-2xl border backdrop-blur-md transition-all ${
                        isDarkMode
                          ? "bg-slate-900/40 border-white/5 hover:border-indigo-500/20"
                          : "bg-white border-slate-200 shadow-sm hover:border-indigo-200"
                      }`}
                    >
                      {/* Duration Tag */}
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase mb-3 ${
                        isDarkMode ? "bg-slate-800 text-cyan-300" : "bg-indigo-50 text-indigo-700"
                      }`}>
                        <Calendar className="h-3 w-3" />
                        {item.duration}
                      </div>

                      {/* Semester Banner for currently active degree */}
                      {item.semester && (
                        <span className={`ml-2 inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-mono font-bold uppercase ${
                          isDarkMode ? "bg-purple-500/20 text-purple-300 border border-purple-500/10" : "bg-purple-50 text-purple-800 border border-purple-100"
                        }`}>
                          <Award className="h-3 w-3 text-purple-400" />
                          {item.semester}
                        </span>
                      )}

                      <h3 className={`text-lg font-extrabold font-display ${
                        isDarkMode ? "text-white" : "text-slate-900"
                      }`}>
                        {item.degree}
                      </h3>

                      {/* Institution label */}
                      <div className={`mt-1 text-xs font-semibold flex items-center gap-1 justify-start ${
                        isEven ? "sm:justify-end" : ""
                      } ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                        <Landmark className="h-3.5 w-3.5 text-indigo-400" />
                        {item.institution}
                      </div>

                      <p className={`mt-3 text-xs leading-relaxed ${
                        isDarkMode ? "text-slate-300" : "text-slate-650"
                      }`}>
                        {item.description}
                      </p>

                      {/* Core Achievements bullet points */}
                      {item.achievements && item.achievements.length > 0 && (
                        <ul className={`mt-4 space-y-1.5 text-[11px] text-slate-400 ${
                          isEven ? "sm:text-right" : "text-left"
                        }`}>
                          {item.achievements.map((ach, achIdx) => (
                            <li key={achIdx} className="flex gap-2 items-start justify-start sm:justify-start">
                              <span className={`text-indigo-400 mt-0.5 flex-shrink-0 ${
                                isEven ? "sm:order-2" : ""
                              }`}>&#8250;</span>
                              <span className={`${
                                isDarkMode ? "text-slate-450" : "text-slate-600"
                              } ${isEven ? "sm:order-1" : ""}`}>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  </div>

                  {/* Spacer for structure balancing */}
                  <div className="hidden sm:block w-[45%] sm:order-2" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
