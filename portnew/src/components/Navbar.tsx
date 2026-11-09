"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Sparkles, Code2, Briefcase, Cpu, FolderGit2, Mail } from "lucide-react";
import confetti from "canvas-confetti";

export default function Navbar() {
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["hero", "github", "experience", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("quezia.costa@unicap.br");
    setCopied(true);

    try {
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.1, x: 0.8 },
        colors: ["#2563EB", "#EC4899", "#60A5FA", "#F472B6"],
      });
    } catch {
      // safe fallback
    }

    setTimeout(() => setCopied(false), 2400);
  };

  const navLinks = [
    { name: "Início", href: "#hero", id: "hero", icon: Sparkles },
    { name: "Live GitHub", href: "#github", id: "github", icon: FolderGit2 },
    { name: "Experiências", href: "#experience", id: "experience", icon: Briefcase },
    { name: "Stack", href: "#skills", id: "skills", icon: Cpu },
    { name: "Projetos", href: "#projects", id: "projects", icon: Code2 },
    { name: "Contato", href: "#contact", id: "contact", icon: Mail },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-6 pointer-events-none">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto flex items-center justify-between gap-2 md:gap-6 px-3.5 py-2.5 rounded-full border transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl border-slate-200/90 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.08),0_4px_12px_-4px_rgba(37,99,235,0.06)]"
            : "bg-white/70 backdrop-blur-md border-slate-200/60 shadow-[0_6px_20px_-6px_rgba(0,0,0,0.04)]"
        }`}
      >
        {/* Brand / Monogram */}
        <a
          href="#hero"
          className="flex items-center gap-2 px-2.5 py-1 text-sm font-semibold tracking-tight text-slate-900 group"
        >
          <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-pink-500 text-white font-mono text-xs shadow-sm shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <span>Q</span>
            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border border-white" />
          </div>
          <span className="hidden sm:inline font-bold">
            Quezia<span className="text-pink-500 font-serif italic text-xs ml-0.5">.ai</span>
          </span>
        </a>

        {/* Navigation Items */}
        <div className="flex items-center gap-1 md:gap-1.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-2.5 py-1.5 rounded-full text-xs md:text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-50 to-pink-50 border border-blue-200/50 -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <link.icon className="w-3.5 h-3.5 opacity-70 hidden lg:inline" />
                  {link.name}
                </span>
              </a>
            );
          })}
        </div>

        {/* 1-Click Copy Email CTA Button */}
        <div className="flex items-center pl-1 md:pl-2 border-l border-slate-200/80">
          <button
            onClick={copyEmail}
            title="Copiar e-mail com 1 clique"
            className="group relative flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-pink-600 transition-all duration-300 shadow-sm shadow-slate-900/10 active:scale-95"
          >
            <AnimatePresence mode="wait" initial={false}>
              {copied ? (
                <motion.span
                  key="copied"
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.6, opacity: 0 }}
                  className="flex items-center gap-1.5 text-emerald-300 font-semibold"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Copiado!</span>
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.6, opacity: 0 }}
                  className="flex items-center gap-1.5"
                >
                  <Copy className="w-3.5 h-3.5 text-pink-300 group-hover:text-white transition-colors" />
                  <span className="hidden sm:inline">Copiar E-mail</span>
                  <span className="sm:hidden">E-mail</span>
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>
    </header>
  );
}
