"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowUp, Heart } from "lucide-react";
import { Container } from "@/components/ui/container";
import { CONTACT_INFO, NAV_ITEMS } from "@/data/portfolio-data";

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

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
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

const emptySubscribe = () => () => {};

export function Footer() {
  const currentYear = useSyncExternalStore(
    emptySubscribe,
    () => new Date().getFullYear(),
    () => 2026
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full border-t border-zinc-200 dark:border-white/[0.08] bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl pt-16 pb-12 relative transition-colors duration-200">
      <Container>
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-200 dark:border-white/[0.06] items-start">
          {/* Brand & Role */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link
              href="#home"
              className="group flex items-center gap-1.5 text-xl font-bold tracking-tight text-zinc-900 dark:text-white mb-3"
            >
              <span>Siddhant</span>
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 inline-block group-hover:scale-125 transition-transform duration-300" />
            </Link>

            <p className="text-sm text-purple-600 dark:text-purple-300/90 font-medium mb-3">
              Full Stack Developer
            </p>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-sm">
              Engineering modern, scalable, and user-friendly web applications with clean code, modern frameworks, and thoughtful design systems.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-4">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200 block py-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Profiles & Back to Top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between h-full gap-6">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-4 md:text-right">
                Connect
              </h4>
              <div className="flex items-center gap-2.5">
                <a
                  href={CONTACT_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/[0.08] hover:border-purple-500/40 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={CONTACT_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/[0.08] hover:border-blue-500/40 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Back To Top Button */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900/90 border border-zinc-200 dark:border-white/[0.08] hover:border-purple-500/40 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shadow-sm"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Attributions */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            &copy; {currentYear}{" "}
            <span className="text-zinc-800 dark:text-zinc-300 font-medium">
              Siddhant Singh Rajput
            </span>
            . All rights reserved.
          </p>

          <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400">
            <span>Built with passion &amp; modern web technologies</span>
            <Heart className="w-3.5 h-3.5 text-purple-500 fill-purple-500" />
          </div>
        </div>
      </Container>
    </footer>
  );
}
