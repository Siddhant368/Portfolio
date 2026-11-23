"use client";

import { motion } from "framer-motion";
import { Database, Layout, Server, Wrench } from "lucide-react";
import { SkillCategory } from "@/types";

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

export function SkillCard({ category, index }: SkillCardProps) {
  const getCategoryIcon = (iconName: SkillCategory["iconName"]) => {
    switch (iconName) {
      case "frontend":
        return <Layout className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case "backend":
        return <Server className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case "database":
        return <Database className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case "tools":
        return <Wrench className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  const getAccentGradient = (iconName: SkillCategory["iconName"]) => {
    switch (iconName) {
      case "frontend":
        return "from-purple-500/15 via-transparent to-transparent";
      case "backend":
        return "from-blue-500/15 via-transparent to-transparent";
      case "database":
        return "from-cyan-500/15 via-transparent to-transparent";
      case "tools":
        return "from-emerald-500/15 via-transparent to-transparent";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative rounded-2xl bg-white/80 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/[0.08] hover:border-purple-500/40 backdrop-blur-xl p-6 sm:p-7 shadow-md dark:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      {/* Top radial ambient glow */}
      <div
        className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${getAccentGradient(
          category.iconName
        )} opacity-40 dark:opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      <div>
        {/* Card Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-white/[0.06] group-hover:scale-105 transition-transform duration-300 shadow-xs">
            {getCategoryIcon(category.iconName)}
          </div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Category 0{index + 1}
          </span>
        </div>

        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 tracking-tight group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-200">
          {category.title}
        </h3>

        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
          {category.description}
        </p>

        {/* Skills Pills List */}
        <div className="flex flex-wrap gap-2 pt-2">
          {category.skills.map((skill) => (
            <motion.span
              key={skill}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-950/70 border border-zinc-200/80 dark:border-white/[0.08] hover:border-purple-500/40 text-xs font-medium text-zinc-800 dark:text-zinc-200 hover:text-purple-600 dark:hover:text-white transition-all duration-200 shadow-xs select-none cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-purple-400/80 mr-2 inline-block" />
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Bottom Counter Bar */}
      <div className="pt-6 mt-6 border-t border-zinc-200 dark:border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-zinc-500">
        <span>{category.skills.length} core technologies</span>
        <span className="group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
          Ready for production →
        </span>
      </div>
    </motion.div>
  );
}
