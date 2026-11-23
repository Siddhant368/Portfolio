"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { NavLinks } from "./nav-links";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onToggle, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div className="md:hidden">
      {/* Hamburger Trigger Button */}
      <button
        type="button"
        onClick={onToggle}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="p-2.5 rounded-xl text-zinc-300 hover:text-white bg-zinc-900/80 border border-zinc-800/80 hover:border-zinc-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Overlay & Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={onClose}
              className="fixed inset-0 top-[73px] bg-black/70 backdrop-blur-md z-40"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-[73px] left-0 right-0 z-50 bg-zinc-950/95 border-b border-zinc-800/80 backdrop-blur-2xl shadow-2xl px-6 py-6"
            >
              <div className="flex flex-col gap-6">
                <NavLinks
                  className="flex-col !items-stretch gap-2"
                  itemClassName="!py-3 !px-4 text-base rounded-xl"
                  onItemClick={onClose}
                />

                <div className="pt-4 border-t border-zinc-800/80 flex flex-col gap-3">
                  <Button
                    variant="primary"
                    size="md"
                    href="/resume.pdf"
                    download="Siddhant_Singh_Rajput_Resume.pdf"
                    icon={<Download className="w-4 h-4" />}
                    className="w-full justify-center"
                    onClick={onClose}
                  >
                    Download Resume
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
