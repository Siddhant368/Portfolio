"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Code2,
  Download,
  FolderGit2,
  Home,
  Mail,
  Menu,
  User,
  X,
} from "lucide-react";
import { NAV_ITEMS } from "@/data/portfolio-data";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getNavIcon = (iconName: string, className = "w-5 h-5") => {
    switch (iconName) {
      case "home":
        return <Home className={className} />;
      case "about":
        return <User className={className} />;
      case "skills":
        return <Code2 className={className} />;
      case "projects":
        return <FolderGit2 className={className} />;
      case "contact":
        return <Mail className={className} />;
      default:
        return <Home className={className} />;
    }
  };

  return (
    <>
      {/* =========================================================================
          1. DESKTOP & TABLET: LEFT-SIDE FLOATING DOCK (Top & Bottom Rounded with Icons)
          ========================================================================= */}
      <aside
        aria-label="Sidebar Navigation"
        className="hidden md:flex fixed left-4 lg:left-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center select-none"
      >
        <nav className="relative flex flex-col items-center py-4 px-2.5 rounded-full bg-white/90 dark:bg-zinc-950/85 backdrop-blur-2xl border border-zinc-200/80 dark:border-white/[0.1] shadow-xl dark:shadow-[0_0_30px_rgba(0,0,0,0.8)] shadow-purple-950/10 dark:shadow-purple-950/20">
          {/* Top Logo / Avatar Item */}
          <Link
            href="#home"
            className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-tr from-purple-600 to-blue-600 text-white font-bold text-sm shadow-md shadow-purple-500/30 transition-transform duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 mb-2"
            aria-label="Siddhant - Back to Top"
          >
            <span>S</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white absolute bottom-1.5 right-1.5 ring-2 ring-zinc-950 dark:ring-zinc-950" />

            {/* Hover Tooltip to the Right */}
            <span className="pointer-events-none absolute left-full ml-3.5 px-3 py-1.5 rounded-xl bg-zinc-900/95 text-white text-xs font-semibold border border-white/[0.1] shadow-2xl backdrop-blur-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-1 group-hover:translate-x-0 z-50">
              Siddhant Singh Rajput
            </span>
          </Link>

          {/* Divider */}
          <div className="w-5 h-[1px] bg-zinc-200 dark:bg-white/[0.1] my-1" />

          {/* Navigation Icon Items */}
          <ul className="flex flex-col items-center gap-2 my-1">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={`group relative flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                      isActive
                        ? "bg-purple-600/15 dark:bg-purple-600/25 text-purple-600 dark:text-purple-300 border border-purple-500/30 dark:border-purple-500/40 shadow-sm dark:shadow-[0_0_15px_rgba(168,85,247,0.35)]"
                        : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-white/[0.08]"
                    }`}
                  >
                    {getNavIcon(item.iconName)}

                    {/* Active side indicator pip */}
                    {isActive && (
                      <span className="absolute -right-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_6px_rgba(168,85,247,0.8)]" />
                    )}

                    {/* Right Flyout Tooltip */}
                    <span className="pointer-events-none absolute left-full ml-3.5 px-3 py-1.5 rounded-xl bg-zinc-900/95 text-white text-xs font-medium border border-white/[0.1] shadow-2xl backdrop-blur-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-1 group-hover:translate-x-0 z-50 flex items-center gap-1.5">
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                      )}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Divider */}
          <div className="w-5 h-[1px] bg-zinc-200 dark:bg-white/[0.1] my-1" />

          {/* Resume Download Icon CTA */}
          <a
            href="/resume.pdf"
            download="Siddhant_Singh_Rajput_Resume.pdf"
            aria-label="Download Resume"
            className="group relative flex items-center justify-center w-11 h-11 rounded-full text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-white bg-zinc-100/80 dark:bg-zinc-900/80 hover:bg-purple-600/10 dark:hover:bg-purple-600/20 border border-zinc-200/80 dark:border-white/[0.08] hover:border-purple-500/40 transition-all duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 mt-1 mb-2"
          >
            <Download className="w-4 h-4 text-purple-600 dark:text-purple-400 transition-transform group-hover:translate-y-0.5" />

            {/* Right Flyout Tooltip */}
            <span className="pointer-events-none absolute left-full ml-3.5 px-3 py-1.5 rounded-xl bg-zinc-900/95 text-purple-300 text-xs font-semibold border border-purple-500/30 shadow-2xl backdrop-blur-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-1 group-hover:translate-x-0 z-50">
              Download Resume (PDF)
            </span>
          </a>

          {/* Theme Toggle (Light / Dark) */}
          <ThemeToggle tooltipPosition="right" />
        </nav>
      </aside>

      {/* =========================================================================
          2. MOBILE: TOP BAR WITH LOGO, RESUME CTA, THEME TOGGLE & DRAWER
          ========================================================================= */}
      <header className="md:hidden sticky top-0 z-50 w-full bg-white/90 dark:bg-zinc-950/85 backdrop-blur-xl border-b border-zinc-200/80 dark:border-white/[0.08] transition-colors">
        <Container>
          <div className="flex items-center justify-between h-16">
            {/* Mobile Brand Logo */}
            <Link
              href="#home"
              className="group flex items-center gap-1.5 text-lg font-bold tracking-tight text-zinc-900 dark:text-white focus:outline-none"
            >
              <span>Siddhant</span>
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 inline-block" />
            </Link>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2">
              <ThemeToggle className="w-9 h-9" tooltipPosition="bottom" />

              <a
                href="/resume.pdf"
                download="Siddhant_Singh_Rajput_Resume.pdf"
                className="p-2 rounded-xl text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white bg-zinc-100/90 dark:bg-zinc-900/80 border border-zinc-200 dark:border-white/[0.08] text-xs font-medium flex items-center gap-1.5"
                aria-label="Download Resume"
              >
                <Download className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>Resume</span>
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                className="p-2 rounded-xl text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white bg-zinc-100/90 dark:bg-zinc-900/80 border border-zinc-200 dark:border-white/[0.08] focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </Container>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-zinc-200 dark:border-white/[0.08] bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl px-6 py-6 shadow-2xl flex flex-col gap-3">
            <ul className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-purple-600/15 dark:bg-purple-600/20 text-purple-600 dark:text-purple-300 border border-purple-500/30"
                          : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/[0.06]"
                      }`}
                    >
                      {getNavIcon(item.iconName, "w-4 h-4 text-purple-600 dark:text-purple-400")}
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="pt-3 border-t border-zinc-200 dark:border-white/[0.06]">
              <Button
                variant="primary"
                size="md"
                href="/resume.pdf"
                download="Siddhant_Singh_Rajput_Resume.pdf"
                icon={<Download className="w-4 h-4" />}
                className="w-full justify-center text-xs"
                onClick={() => setMobileMenuOpen(false)}
              >
                Download Resume (PDF)
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
