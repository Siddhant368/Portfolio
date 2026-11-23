"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Copy,
  Download,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { CONTACT_INFO } from "@/data/portfolio-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
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

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={`${className} fill-current`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46V10.9M7.86 6.5a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
    </svg>
  );
}

export function ContactInfoCard() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col justify-between h-full space-y-8"
    >
      <div>
        {/* Availability Status Badge */}
        <div className="mb-6">
          <Badge variant="success">{CONTACT_INFO.availability}</Badge>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white mb-4 tracking-tight">
          Let&apos;s talk about your next big project.
        </h3>

        <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
          Whether you have an upcoming project, freelance opportunity, or full-time position in mind, feel free to reach out. I am always open to exploring modern technical challenges.
        </p>

        {/* Info Grid */}
        <div className="space-y-4 mb-8">
          {/* Email Item */}
          <div className="p-4 rounded-xl bg-white/80 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/[0.08] backdrop-blur-md flex items-center justify-between gap-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                  Email
                </span>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              aria-label="Copy email address"
              className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-zinc-800/60 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-white/[0.06] transition-colors cursor-pointer"
              title="Copy email address"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Location Item */}
          <div className="p-4 rounded-xl bg-white/80 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/[0.08] backdrop-blur-md flex items-center gap-3 shadow-sm">
            <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                Location
              </span>
              <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {CONTACT_INFO.location}
              </span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <span className="block text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">
            Connect on Professional Networks
          </span>
          <div className="flex items-center gap-3">
            <a
              href={CONTACT_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-xl bg-white/80 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/[0.08] hover:border-purple-500/40 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white backdrop-blur-md transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href={CONTACT_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-xl bg-white/80 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/[0.08] hover:border-blue-500/40 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white backdrop-blur-md transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Resume Download CTA */}
      <div className="pt-6 border-t border-zinc-200 dark:border-white/[0.06]">
        <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-100/60 via-white to-white dark:from-purple-900/20 dark:via-zinc-900/60 dark:to-zinc-900/40 border border-purple-500/20 backdrop-blur-xl shadow-sm">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-700 dark:text-purple-300 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Looking for full qualifications?</span>
          </div>
          <h4 className="text-base font-bold text-zinc-900 dark:text-white mb-3">
            Download Complete Curriculum Vitae
          </h4>
          <Button
            variant="secondary"
            size="md"
            href={CONTACT_INFO.resumeUrl}
            download="Siddhant_Singh_Rajput_Resume.pdf"
            icon={<Download className="w-4 h-4 text-purple-400" />}
            iconPosition="left"
            className="w-full justify-center hover:border-purple-500/50"
          >
            Download Resume (PDF)
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
