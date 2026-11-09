"use client";

import { motion } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  Terminal, 
  Brain, 
  Binary, 
  Layers, 
  ExternalLink,
  Mail
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import TiltCard from "./TiltCard";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-16 flex flex-col justify-center items-center px-4 md:px-8 max-w-7xl mx-auto"
    >
      {/* Availability Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-slate-200/90 shadow-sm backdrop-blur-md"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <span className="text-xs font-medium text-slate-700">
          Disponível para novos desafios em <strong className="text-blue-600 font-semibold">Engenharia de IA</strong> &amp; <strong className="text-pink-600 font-semibold">Full-Stack</strong>
        </span>
      </motion.div>

      {/* Main Impact Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.1] mb-6">
          Engenharia de IA, <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-500 bg-clip-text text-transparent">
            Machine Learning
          </span>{" "}
          &amp; Software.
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
          Olá! Sou <span className="font-semibold text-slate-900">Quezia Costa</span>. Graduanda em Ciência da Computação, pesquisadora <strong className="text-blue-600 font-medium">PIBIC</strong> em otimização de clusterização (K-Means) e desenvolvedora focada em transformar dados e inteligência artificial em soluções digitais de alto impacto.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
          <a
            href="#projects"
            className="group flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 text-white font-medium text-sm hover:bg-gradient-to-r hover:from-blue-600 hover:to-pink-600 transition-all duration-300 shadow-md shadow-slate-900/10 hover:shadow-blue-500/25 active:scale-98"
          >
            <span>Explorar Projetos &amp; Modelos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="https://www.linkedin.com/in/quezia-costa-5195342b3/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-slate-800 font-medium text-sm border border-slate-200/90 hover:border-blue-400 hover:text-blue-600 transition-all duration-300 shadow-sm hover:shadow-md active:scale-98"
          >
            <LinkedinIcon className="w-4 h-4 text-blue-600" />
            <span>Conectar no LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>

          <a
            href="https://github.com/quezinhacosta"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white text-slate-700 font-medium text-sm border border-slate-200/90 hover:border-pink-400 hover:text-pink-600 transition-all duration-300 shadow-sm hover:shadow-md active:scale-98"
          >
            <GithubIcon className="w-4 h-4" />
            <span>@quezinhacosta</span>
          </a>
        </div>
      </motion.div>

      {/* TeamCamp-style Interactive Metric Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {/* Metric 1 */}
        <TiltCard glowColor="blue" className="p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
              <Brain className="w-5 h-5" />
            </span>
            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
              PIBIC • ML
            </span>
          </div>
          <div className="text-2xl font-bold text-slate-900 tracking-tight">K-Means</div>
          <p className="text-xs text-slate-500 mt-1 leading-snug">
            Pesquisa científica em otimização de centróides &amp; análise de complexidade linguística.
          </p>
        </TiltCard>

        {/* Metric 2 */}
        <TiltCard glowColor="pink" className="p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="p-2.5 rounded-xl bg-pink-50 text-pink-600 border border-pink-100">
              <Sparkles className="w-5 h-5" />
            </span>
            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-pink-50 text-pink-700 border border-pink-200">
              UNICAP / FASA
            </span>
          </div>
          <div className="text-2xl font-bold text-slate-900 tracking-tight">Centro de IA</div>
          <p className="text-xs text-slate-500 mt-1 leading-snug">
            Engenharia de IA, desenvolvimento com agentes, LLMs e soluções corporativas inteligentes.
          </p>
        </TiltCard>

        {/* Metric 3 */}
        <TiltCard glowColor="blue" className="p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
              <Binary className="w-5 h-5" />
            </span>
            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200">
              Matemática
            </span>
          </div>
          <div className="text-2xl font-bold text-slate-900 tracking-tight">Cálculo 1</div>
          <p className="text-xs text-slate-500 mt-1 leading-snug">
            Monitora acadêmica: rigor teórico em limites, derivadas e base quantitativa para Data Science.
          </p>
        </TiltCard>

        {/* Metric 4 */}
        <TiltCard glowColor="both" className="p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
              <Terminal className="w-5 h-5" />
            </span>
            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
              Full-Stack
            </span>
          </div>
          <div className="text-2xl font-bold text-slate-900 tracking-tight">Modern Web</div>
          <p className="text-xs text-slate-500 mt-1 leading-snug">
            Next.js, TypeScript, Python (FastAPI/Scikit-learn), Tailwind e arquitetura conteinerizada com Docker.
          </p>
        </TiltCard>
      </motion.div>
    </section>
  );
}
