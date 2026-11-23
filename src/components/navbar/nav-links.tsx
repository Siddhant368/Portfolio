"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/data/portfolio-data";

interface NavLinksProps {
  className?: string;
  itemClassName?: string;
  onItemClick?: () => void;
}

export function NavLinks({
  className = "",
  itemClassName = "",
  onItemClick,
}: NavLinksProps) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ul className={`flex items-center gap-1 ${className}`}>
      {NAV_ITEMS.map((item) => {
        const sectionId = item.href.replace("#", "");
        const isActive = activeSection === sectionId;

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onItemClick}
              className={`relative px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 block ${
                isActive
                  ? "text-white bg-white/[0.08]"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.04]"
              } ${itemClassName}`}
            >
              {item.label}
              {isActive && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
