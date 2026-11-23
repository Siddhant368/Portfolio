"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, CheckCircle2, Code2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { CERTIFICATIONS_DATA, EXPERIENCE_DATA } from "@/data/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-28 overflow-hidden">
      <Container>
        {/* Section Heading */}
        <SectionHeading
          badge="Career &amp; Credentials"
          badgeVariant="accent"
          title="Experience &amp;"
          gradientText="Certifications."
          description="Practical industry internship experience alongside technical credentials and professional training."
        />

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Work Experience */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-zinc-700 dark:text-zinc-300 uppercase font-mono">
              <Briefcase className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>Professional Experience</span>
            </div>

            {EXPERIENCE_DATA.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl bg-white/80 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/[0.08] hover:border-purple-500/40 backdrop-blur-xl p-6 sm:p-7 shadow-md dark:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Top corner gradient glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full pointer-events-none" />

                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <Badge variant="accent">{exp.type}</Badge>
                </div>

                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-200">
                  {exp.role}
                </h3>

                <p className="text-sm font-medium text-purple-700 dark:text-purple-400 mb-4">
                  {exp.company}
                </p>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="pt-4 border-t border-zinc-200 dark:border-white/[0.05] flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-950/70 border border-zinc-200 dark:border-white/[0.06] text-xs font-mono text-zinc-700 dark:text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-zinc-700 dark:text-zinc-300 uppercase font-mono">
              <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Certifications &amp; Training</span>
            </div>

            <div className="flex flex-col gap-4">
              {CERTIFICATIONS_DATA.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="group relative rounded-2xl bg-white/80 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/[0.08] hover:border-blue-500/40 backdrop-blur-xl p-5 sm:p-6 shadow-sm dark:shadow-lg transition-all duration-300 flex items-center justify-between gap-4 overflow-hidden"
                >
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <Award className="w-5 h-5" />
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-zinc-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-200">
                        {cert.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                        <span>{cert.issuer}</span>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 hidden sm:block">
                    <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-white/[0.06] text-xs font-mono text-zinc-700 dark:text-zinc-300">
                      {cert.badgeText}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
