"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Info } from "lucide-react";
import { ProjectItem } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectThumbnail } from "./project-thumbnail";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  onViewDetails: (project: ProjectItem) => void;
}

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={`${className} fill-current`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function ProjectCard({ project, index, onViewDetails }: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      className="group relative rounded-2xl bg-white/80 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/[0.08] hover:border-purple-500/40 backdrop-blur-xl p-5 sm:p-6 shadow-md dark:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-purple-500/10 via-blue-500/5 to-transparent rounded-bl-full pointer-events-none opacity-40 dark:opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Project Thumbnail with Zoom on Hover */}
        <div className="mb-5">
          <ProjectThumbnail project={project} />
        </div>

        {/* Category & Badge */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <Badge variant="accent" withDot={false}>
            {project.category}
          </Badge>
          <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            0{index + 1}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-200">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-5 leading-relaxed">
          {project.description}
        </p>

        {/* Technology Stack Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-950/70 border border-zinc-200 dark:border-white/[0.06] text-[11px] font-mono text-zinc-700 dark:text-zinc-300 select-none"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons Row */}
      <div className="pt-4 border-t border-zinc-200 dark:border-white/[0.06] flex flex-wrap items-center justify-between gap-2.5">
        {/* Primary View Details Button */}
        <Button
          variant="secondary"
          size="sm"
          onClick={() => onViewDetails(project)}
          icon={<Info className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />}
          iconPosition="left"
          className="flex-1 sm:flex-initial hover:border-purple-500/50"
        >
          View Details
        </Button>

        {/* Conditional GitHub & Live Demo buttons */}
        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              href={project.githubUrl}
              icon={<GithubIcon className="w-3.5 h-3.5" />}
              aria-label={`View ${project.title} GitHub repository`}
            >
              Code
            </Button>
          )}

          {project.liveDemoUrl && (
            <Button
              variant="primary"
              size="sm"
              href={project.liveDemoUrl}
              icon={<ExternalLink className="w-3.5 h-3.5" />}
              iconPosition="right"
              aria-label={`View ${project.title} live demo`}
            >
              Demo
            </Button>
          )}

          {!project.githubUrl && !project.liveDemoUrl && (
            <button
              type="button"
              onClick={() => onViewDetails(project)}
              className="inline-flex items-center gap-1 text-xs font-mono text-zinc-500 hover:text-purple-600 dark:text-zinc-400 dark:hover:text-purple-300 transition-colors py-1.5 px-2 cursor-pointer"
            >
              <span>Explore</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}
