"use client";

import { Mail, Heart, Sparkles, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-20 border-t border-slate-200/80 bg-white/60 backdrop-blur-md py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-blue-600 to-pink-500 flex items-center justify-center text-white text-xs font-bold">
              Q
            </div>
            <span className="font-bold text-slate-900 text-sm tracking-tight">
              Quezia Costa
            </span>
          </div>
          <p className="text-xs text-slate-500 max-w-sm">
            Engenharia de IA, Pesquisa em Machine Learning &amp; Desenvolvimento Full-Stack.
          </p>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/quezinhacosta"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/quezia-costa-5195342b3/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-slate-100 text-blue-600 hover:bg-blue-50 transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href="mailto:quezia.costa@unicap.br"
            className="p-2.5 rounded-full bg-slate-100 text-pink-600 hover:bg-pink-50 transition-colors"
            title="E-mail"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-slate-900 text-white text-xs font-medium hover:bg-blue-600 transition-colors shadow-sm ml-2"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Topo</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
        <span>© {new Date().getFullYear()} Quezia Costa. Todos os direitos reservados.</span>
        <span className="flex items-center gap-1">
          Feito com Next.js, Tailwind CSS &amp; Creative Engineering em Recife/PE
        </span>
      </div>
    </footer>
  );
}
