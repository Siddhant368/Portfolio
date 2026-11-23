"use client";

import { motion } from "framer-motion";
import { BookOpen, CheckCircle2, GraduationCap, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { EDUCATION_DATA } from "@/data/portfolio-data";

export function Education() {
  return (
    <section id="education" className="relative py-20 md:py-28 overflow-hidden">
      <Container>
        {/* Section Heading */}
        <SectionHeading
          badge="Academic Background"
          badgeVariant="accent"
          title="Education"
          gradientText="Timeline."
          description="My academic foundation in computer science and engineering principles."
        />

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Glowing Timeline Line */}
          <div className="absolute left-4 sm:left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500/50 to-transparent" />

          {/* Timeline Item */}
          <div className="relative flex items-start gap-6 sm:gap-10">
            {/* Timeline Node Icon */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative z-10 shrink-0 w-8 sm:w-16 h-8 sm:h-16 rounded-2xl bg-white dark:bg-zinc-900 border border-purple-500/30 dark:border-purple-500/40 backdrop-blur-xl flex items-center justify-center shadow-lg dark:shadow-[0_0_20px_rgba(168,85,247,0.25)]"
            >
              <GraduationCap className="w-4 sm:w-8 h-4 sm:h-8 text-purple-600 dark:text-purple-400" />
            </motion.div>

            {/* Timeline Card Content */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex-1 group relative rounded-2xl bg-white/80 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/[0.08] hover:border-purple-500/40 backdrop-blur-xl p-6 sm:p-8 shadow-md dark:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Top gradient accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-purple-500/10 via-blue-500/5 to-transparent rounded-bl-full pointer-events-none" />

              {/* Status & College Pill */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <Badge variant="success">{EDUCATION_DATA.status}</Badge>

                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  <MapPin className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  <span>College: {EDUCATION_DATA.college}</span>
                </div>
              </div>

              {/* Degree Title */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-200">
                {EDUCATION_DATA.degree}
              </h3>

              {/* College & Department */}
              <p className="text-sm font-medium text-purple-700 dark:text-purple-300/90 mb-4">
                {EDUCATION_DATA.college} • {EDUCATION_DATA.field}
              </p>

              {/* Description */}
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                Pursuing comprehensive studies in software engineering, computational algorithms, and system design. Actively applying theoretical foundations to modern full-stack web applications.
              </p>

              {/* Coursework & Highlights */}
              <div className="pt-5 border-t border-zinc-200 dark:border-white/[0.06]">
                <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  <BookOpen className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>Core Academic Focus</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {EDUCATION_DATA.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
