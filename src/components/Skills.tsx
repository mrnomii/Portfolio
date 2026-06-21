import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  Atom, // Used for React.js
  Wind, // Used for Tailwind
  Cpu, // Used for JS
  Code, // Used for HTML5
  Palette, // Used for CSS3
  Layout, // Used for Bootstrap
  Server, // Used for Node
  Terminal, // Used for Express
  Code2, // Used for Python
  Zap, // Used for Flask
  Database, // Used for MySQL
  HardDrive, // Used for MongoDB
  GitBranch, // Used for Git
  Github, // Used for GitHub
  Laptop, // Used for VS Code
  PenTool, // Used for Figma
  Activity
} from "lucide-react";
import { skillCategories } from "../data";
import { Skill } from "../types";

interface SkillsProps {
  isDarkMode: boolean;
}

// Icon mapper for lucide-react
const iconMap: { [key: string]: React.ComponentType<any> } = {
  ReactIcon: Atom,
  Wind: Wind,
  Cpu: Cpu,
  HtmlIcon: Code,
  CssIcon: Palette,
  Layout: Layout,
  Server: Server,
  Terminal: Terminal,
  Code2: Code2,
  Zap: Zap,
  Database: Database,
  HardDrive: HardDrive,
  GitBranch: GitBranch,
  Github: Github,
  Smartphone: Laptop,
  PenTool: PenTool,
};

export default function Skills({ isDarkMode }: SkillsProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background neon light sphere */}
      <div className="absolute top-[30%] left-[-10%] h-[20rem] w-[20rem] rounded-full bg-cyan-500/5 blur-[8rem] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className={`font-mono text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 ${
            isDarkMode ? "text-cyan-400" : "text-indigo-600"
          }`}>
            <Sparkles className="h-4.5 w-4.5" />
            Core Competency Matrix
          </h3>
          <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 ${
            isDarkMode ? "text-white" : "text-slate-900"
          }`}>
            Technical Skills
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skill categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {skillCategories.map((cat, catIdx) => (
            <div
              key={catIdx}
              className={`p-6 rounded-2xl border backdrop-blur-md flex flex-col h-full transition-shadow hover:shadow-lg ${
                isDarkMode
                  ? "bg-slate-900/40 border-white/5 hover:border-white/10 shadow-xl shadow-slate-950/20"
                  : "bg-white border-slate-200 hover:border-slate-300 shadow-sm"
              }`}
            >
              <h3 className={`text-base font-extrabold font-display border-b pb-3 mb-5 flex items-center gap-2 ${
                isDarkMode ? "text-white border-white/5" : "text-slate-900 border-slate-100"
              }`}>
                <span className={`h-2.5 w-2.5 rounded-full ${
                  catIdx === 0 ? "bg-cyan-400" : catIdx === 1 ? "bg-purple-400" : "bg-indigo-400"
                }`}></span>
                {cat.title}
              </h3>

              {/* Skills Progress list */}
              <div className="space-y-6 flex-grow">
                {cat.skills.map((skill, sIdx) => {
                  const IconComponent = iconMap[skill.icon] || Code;
                  const isHovered = hoveredSkill === skill.name;

                  return (
                    <div
                      key={sIdx}
                      className="group/item cursor-pointer"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {/* Name and Level Metadata */}
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2.5">
                          <div className={`p-1.5 rounded-lg border transition-colors ${
                            isHovered
                              ? isDarkMode
                                ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-400"
                                : "bg-indigo-50 border-indigo-200 text-indigo-700"
                              : isDarkMode
                              ? "bg-slate-800/40 border-white/5 text-slate-400"
                              : "bg-slate-50 border-slate-100 text-slate-500"
                          }`}>
                            <IconComponent className="h-4 w-4" />
                          </div>
                          <span className={`text-xs font-bold transition-colors ${
                            isDarkMode 
                              ? isHovered ? "text-white" : "text-slate-300" 
                              : isHovered ? "text-slate-950" : "text-slate-700"
                          }`}>
                            {skill.name}
                          </span>
                        </div>
                        <span className={`text-[10px] font-mono font-extrabold transition-colors ${
                          isDarkMode 
                            ? isHovered ? "text-cyan-400" : "text-slate-500" 
                            : isHovered ? "text-indigo-600" : "text-slate-400"
                        }`}>
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Track */}
                      <div className={`h-2 w-full rounded-full overflow-hidden p-[1px] ${
                        isDarkMode ? "bg-slate-950/80 border border-white/5" : "bg-slate-100 border border-slate-205"
                      }`}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className={`h-full rounded-full bg-gradient-to-r transition-all duration-300 ${
                            isHovered
                              ? "from-indigo-400 to-cyan-400"
                              : isDarkMode
                              ? "from-slate-700 to-slate-550"
                              : "from-slate-400 to-slate-500"
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
