import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { GitCommit, Star, ExternalLink, RefreshCw } from "lucide-react";

interface ContribCell {
  date: string;
  count: number;
  activity: string;
}

export default function GithubContributions() {
  const [hoveredCell, setHoveredCell] = useState<ContribCell | null>(null);
  const [activeTab, setActiveTab] = useState<"ai" | "web" | "all">("all");

  const contributionsData = useMemo(() => {
    const activities = [
      { type: "ai", desc: "Tuned TensorFlow CNN signature validation parameters" },
      { type: "ai", desc: "Implemented OpenCV geometric profile filter scaling" },
      { type: "web", desc: "Built glassmorphic layout cards in Tailwind CSS" },
      { type: "web", desc: "Refined dark mode toggle state management hooks" },
      { type: "web", desc: "Configured Express router middleware endpoint responses" },
      { type: "ai", desc: "Completed training epoch on neural network weights" },
      { type: "web", desc: "Optimized Canvas rendering loop on Particle background" },
      { type: "web", desc: "Wrote LocalStorage persistent contact message handler" },
    ];

    const data: ContribCell[] = [];
    const baseDate = new Date(2026, 4, 1); // Starting from May 1st, 2026

    for (let i = 0; i < 91; i++) {
      const currentDate = new Date(baseDate);
      currentDate.setDate(baseDate.getDate() + i);

      // Generate random count biased to look realistic
      let count = 0;
      const dayOfWeek = currentDate.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

      if (Math.random() > 0.3) {
        count = Math.floor(Math.random() * (isWeekend ? 3 : 8));
      }

      let actType = "web";
      let actDesc = "";
      if (count > 0) {
        const selectedAct = activities[Math.floor(Math.random() * activities.length)];
        actType = selectedAct.type;
        actDesc = selectedAct.desc;
      }

      data.push({
        date: currentDate.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
        count,
        activity: count > 0 ? `${count} commits: ${actDesc}` : "No contributions",
      });
    }
    return data;
  }, []);

  const totalCommits = contributionsData.reduce((acc, curr) => acc + curr.count, 0);
  const daysActive = contributionsData.filter((c) => c.count > 0).length;

  return (
    <div id="github-contributions-card" className="w-full rounded-2xl border border-white/10 bg-slate-900/45 p-6 backdrop-blur-md transition-shadow hover:shadow-lg hover:shadow-cyan-500/5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-4">
        <div>
          <h4 className="flex items-center gap-2 font-display text-lg font-bold text-white">
            <GitCommit className="h-5 w-5 text-emerald-400" />
            GitHub Contribution Activity
          </h4>
          <p className="text-xs text-slate-400">Interactive simulation of Noman's daily commits</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300">
          <div className="flex items-center gap-1.5 bg-slate-800/60 px-2.5 py-1 rounded-full border border-white/5">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            <span>{totalCommits} Commits Pushed</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-800/60 px-2.5 py-1 rounded-full border border-white/5">
            <RefreshCw className="h-3 w-3 text-cyan-400 animate-spin-slow" />
            <span>Active Rate: {Math.round((daysActive / 91) * 100)}%</span>
          </div>
        </div>
      </div>

      {/* Grid Container */}
      <div className="relative mt-2 overflow-x-auto pb-2 scrollbar-none">
        <div className="min-w-[560px] flex flex-col gap-1.5">
          {/* Day label helpers */}
          <div className="grid grid-cols-[repeat(13,1fr)] gap-1 text-[10px] font-mono text-slate-500 text-center select-none">
            <span>May Week 1</span>
            <span>May Week 2</span>
            <span>May Week 3</span>
            <span>May Week 4</span>
            <span>Jun Week 1</span>
            <span>Jun Week 2</span>
            <span>Jun Week 3</span>
            <span>Jun Week 4</span>
            <span>Jul Week 1</span>
            <span>Jul Week 2</span>
            <span>Jul Week 3</span>
            <span>Jul Week 4</span>
            <span>Current</span>
          </div>

          <div className="grid grid-flow-col grid-rows-7 gap-1.5">
            {contributionsData.map((cell, idx) => {
              // Color mapping based on commit counts
              let cellColor = "bg-slate-800/30 border border-white/[0.02]";
              if (cell.count > 0 && cell.count <= 2) cellColor = "bg-emerald-990/60 bg-emerald-950/70 shadow-sm border border-emerald-500/10";
              else if (cell.count > 2 && cell.count <= 4) cellColor = "bg-emerald-800/80 border border-emerald-500/20";
              else if (cell.count > 4 && cell.count <= 6) cellColor = "bg-emerald-600/90 shadow-[0_0_8px_rgba(16,185,129,0.3)] border border-emerald-400/40";
              else if (cell.count > 6) cellColor = "bg-emerald-400 border border-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.5)]";

              return (
                <div
                  key={idx}
                  className={`h-[15px] w-[15px] rounded-sm transition-all duration-150 cursor-pointer ${cellColor} hover:scale-125 hover:z-10`}
                  onMouseEnter={() => setHoveredCell(cell)}
                  onMouseLeave={() => setHoveredCell(null)}
                />
              );
            })}
          </div>
        </div>

        {/* Dynamic Activity Tooltip panel */}
        <div className="mt-4 border-t border-white/5 pt-3 flex items-center justify-between min-h-[42px]">
          {hoveredCell ? (
            <motion.div
              initial={{ opacity: 20, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs text-slate-200 font-mono flex items-center gap-2"
            >
              <span className="text-emerald-400 font-bold">&#8250;</span>
              <span className="text-slate-400">{hoveredCell.date}:</span>
              <span className="text-emerald-300 font-medium">{hoveredCell.activity}</span>
            </motion.div>
          ) : (
            <div className="text-xs text-slate-500 italic font-mono flex items-center gap-2">
              <span>&#8250; Hover over any box to view specific repository commit timelines.</span>
            </div>
          )}

          {/* Color Level Legend */}
          <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-mono select-none">
            <span>Less</span>
            <div className="h-3 w-3 rounded-sm bg-slate-800/30" />
            <div className="h-3 w-3 rounded-sm bg-emerald-900/60" />
            <div className="h-3 w-3 rounded-sm bg-emerald-700" />
            <div className="h-3 w-3 rounded-sm bg-emerald-400" />
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
}
