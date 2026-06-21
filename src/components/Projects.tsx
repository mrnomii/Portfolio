import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ExternalLink,
  Github,
  FolderGit2,
  X,
  Sparkles,
  Layers,
  Globe,
  Info,
  ChevronRight,
} from "lucide-react";
import { projectsList } from "../data";
import { Project } from "../types";

interface ProjectsProps {
  isDarkMode: boolean;
}

export default function Projects({ isDarkMode }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "AI & Web Integration", "Full Stack", "Frontend"];

  const filteredProjects = selectedCategory === "All"
    ? projectsList
    : projectsList.filter((proj) => proj.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Glow node */}
      <div className="absolute bottom-[10%] right-[5%] h-[22rem] w-[22rem] rounded-full bg-indigo-500/5 blur-[8rem] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className={`font-mono text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 ${
            isDarkMode ? "text-cyan-400" : "text-indigo-600"
          }`}>
            <FolderGit2 className="h-4.5 w-4.5" />
            Creative Portfolio Showcases
          </h3>
          <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 ${
            isDarkMode ? "text-white" : "text-slate-900"
          }`}>
            Featured Projects
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filter Menu */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold tracking-wide rounded-full transition-all focus:outline-none cursor-pointer border ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-indigo-600 to-cyan-500 border-transparent text-white shadow-md shadow-indigo-600/15"
                  : isDarkMode
                  ? "border-white/5 bg-slate-900/40 text-slate-400 hover:text-white hover:bg-slate-900/80 hover:border-white/10"
                  : "border-slate-200 bg-slate-50 text-slate-600 hover:text-slate-950 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                whileHover={{ y: -6 }}
                className={`group rounded-2xl overflow-hidden border backdrop-blur-md flex flex-col h-full transition-all ${
                  isDarkMode
                    ? "bg-slate-900/45 border-white/5 shadow-xl shadow-slate-950/40 hover:border-indigo-500/20"
                    : "bg-white border-slate-200 shadow-md shadow-slate-100/40 hover:border-indigo-300"
                }`}
              >
                {/* Project Image Frame */}
                <div className="relative aspect-video overflow-hidden border-b border-white/5 flex-shrink-0 cursor-pointer" onClick={() => setSelectedProject(project)}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full backdrop-blur-md transition-all cursor-pointer"
                      title="View Project Specifications"
                    >
                      <Info className="h-5 w-5" />
                    </button>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full backdrop-blur-md transition-all cursor-pointer"
                      title="Access Live Repository"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>

                  {/* Category Tag overlay */}
                  <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-[10px] font-mono tracking-wider font-extrabold text-cyan-400 px-3 py-1 rounded-full border border-white/10 select-none">
                    {project.category}
                  </span>
                </div>

                {/* Card Info Details */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className={`text-xl font-extrabold font-display leading-snug group-hover:text-indigo-400 transition-colors ${
                      isDarkMode ? "text-white" : "text-slate-900"
                    }`}>
                      {project.title}
                    </h3>
                    <p className={`text-xs mt-2.5 leading-relaxed ${
                      isDarkMode ? "text-slate-400" : "text-slate-650"
                    }`}>
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/[0.04]">
                    {/* Tags List */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-[10px] font-mono tracking-wide px-2.5 py-0.5 rounded-full ${
                            isDarkMode
                              ? "bg-slate-850 text-slate-400 border border-white/[0.03]"
                              : "bg-slate-100 text-slate-600 border border-slate-200"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className={`text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all cursor-pointer ${
                          isDarkMode ? "text-cyan-400" : "text-indigo-600"
                        }`}
                      >
                        Learn More <ChevronRight className="h-3.5 w-3.5" />
                      </button>

                      <div className="ml-auto flex items-center gap-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2 rounded-lg border transition-all cursor-pointer ${
                            isDarkMode
                              ? "border-white/5 bg-slate-900 text-slate-300 hover:text-white"
                              : "border-slate-200 bg-slate-50 text-slate-700 hover:text-slate-900"
                          }`}
                          title="View Source on GitHub"
                        >
                          <Github className="h-4.5 w-4.5" />
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2 rounded-lg border transition-all cursor-pointer ${
                            isDarkMode
                              ? "border-cyan-500/20 bg-slate-900 text-cyan-400 hover:bg-cyan-500/10"
                              : "border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                          }`}
                          title="Live Demo"
                        >
                          <Globe className="h-4.5 w-4.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Modal Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className={`relative w-full max-w-2xl rounded-2xl border overflow-hidden shadow-2xl ${
                  isDarkMode ? "bg-slate-900 border-white/10" : "bg-white border-slate-200"
                }`}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className={`absolute top-4 right-4 z-10 p-2 rounded-full border cursor-pointer hover:scale-105 active:scale-95 transition-all ${
                    isDarkMode 
                      ? "bg-slate-950/80 border-white/10 text-slate-400 hover:text-white hover:bg-slate-950" 
                      : "bg-slate-100 border-slate-200 text-slate-650 hover:text-slate-900"
                  }`}
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Modal Visual Banner */}
                <div className="relative aspect-video w-full">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 bg-indigo-600 text-white font-mono text-[10px] tracking-wider uppercase font-bold px-3 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                </div>

                {/* Content Panel */}
                <div className="p-6">
                  <h3 className={`text-2xl font-extrabold font-display ${
                    isDarkMode ? "text-white" : "text-slate-900"
                  }`}>
                    {selectedProject.title}
                  </h3>

                  <p className={`text-xs mt-3 leading-relaxed ${
                    isDarkMode ? "text-slate-300" : "text-slate-705"
                  }`}>
                    {selectedProject.longDescription || selectedProject.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-white/[0.04]">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-[10px] font-mono tracking-wide px-3 py-1 rounded-full ${
                            isDarkMode
                              ? "bg-slate-800 text-cyan-300 border border-white/[0.03]"
                              : "bg-indigo-50 text-indigo-700 border border-slate-200"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="text-[10px] font-mono text-slate-500">
                        <span>Project ID: Noman.{selectedProject.id}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 px-4 py-2 border rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            isDarkMode
                              ? "border-white/10 bg-slate-950 text-slate-300 hover:text-white"
                              : "border-slate-200 bg-slate-50 text-slate-700 hover:text-slate-900"
                          }`}
                        >
                          <Github className="h-4 w-4" /> View Source
                        </a>
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-cyan-500 sm:hover:from-indigo-500 sm:hover:to-cyan-400 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-600/10 active:scale-95 transition-all cursor-pointer"
                        >
                          <Globe className="h-4 w-4" /> Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
