"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Brain, 
  Code2, 
  Server, 
  Layers, 
  Cpu, 
  Sparkles, 
  Database, 
  Terminal, 
  CheckCircle,
  Zap
} from "lucide-react";
import TiltCard from "./TiltCard";

interface SkillItem {
  name: string;
  category: "ai" | "web" | "devops";
  level: string;
  accent: "blue" | "pink";
  highlight?: boolean;
}

export default function TechStackBento() {
  const [activeTab, setActiveTab] = useState<"all" | "ai" | "web" | "devops">("all");

  const skills: SkillItem[] = [
    // AI & Machine Learning
    { name: "Python", category: "ai", level: "Avançado", accent: "blue", highlight: true },
    { name: "Scikit-Learn", category: "ai", level: "Modelagem & Métricas", accent: "blue", highlight: true },
    { name: "XGBoost", category: "ai", level: "Gradient Boosting", accent: "pink" },
    { name: "LangChain", category: "ai", level: "Agentes & RAG", accent: "blue", highlight: true },
    { name: "Qdrant", category: "ai", level: "Vector Database", accent: "pink" },
    { name: "K-Means Clustering", category: "ai", level: "Pesquisa PIBIC", accent: "blue", highlight: true },
    { name: "NLP & Processamento de Texto", category: "ai", level: "Análise de Dificuldade", accent: "pink" },
    { name: "Pandas & NumPy", category: "ai", level: "Data Wrangling", accent: "blue" },

    // Web & Full-Stack
    { name: "TypeScript", category: "web", level: "Tipagem Estrita", accent: "blue", highlight: true },
    { name: "Next.js", category: "web", level: "App Router / SSR", accent: "pink", highlight: true },
    { name: "React", category: "web", level: "Hooks & Componentes", accent: "blue" },
    { name: "FastAPI", category: "web", level: "APIs Assíncronas Python", accent: "blue", highlight: true },
    { name: "Angular", category: "web", level: "Frontend SPA", accent: "pink" },
    { name: "Node.js", category: "web", level: "Runtime & Scripting", accent: "blue" },
    { name: "Tailwind CSS", category: "web", level: "Design Systems", accent: "pink" },
    { name: "PostgreSQL", category: "web", level: "Bancos Relacionais", accent: "blue" },

    // DevOps & Ferramentas
    { name: "Docker", category: "devops", level: "Contêineres & Imagens", accent: "blue", highlight: true },
    { name: "Linux / Ubuntu", category: "devops", level: "Ambiente Diário & CLI", accent: "pink" },
    { name: "Git & GitHub", category: "devops", level: "Versionamento & CI/CD", accent: "blue" },
    { name: "Vercel & Render", category: "devops", level: "Deploy & Cloud", accent: "pink" },
  ];

  const filteredSkills = activeTab === "all" ? skills : skills.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-600 border border-blue-200/60 text-xs font-mono font-medium mb-3">
            <Cpu className="w-3.5 h-3.5" />
            ARSENAL TÉCNICO
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Bento Grid de Habilidades
          </h2>
          <p className="text-slate-500 text-sm mt-1 max-w-xl">
            Stack tecnológica selecionada com rigor científico, performance e escalabilidade.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
          {[
            { id: "all", label: "Todas" },
            { id: "ai", label: "Inteligência Artificial & ML" },
            { id: "web", label: "Full-Stack Web" },
            { id: "devops", label: "DevOps & Cloud" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Bento Structure */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Featured Big Bento Card: AI & ML */}
        <TiltCard
          glowColor="blue"
          className="md:col-span-2 p-6 flex flex-col justify-between bg-gradient-to-br from-white via-white to-blue-50/40"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="p-3 rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-500/20">
                <Brain className="w-6 h-6" />
              </span>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-blue-100/80 text-blue-700 font-bold border border-blue-200">
                CORE FOCUS
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Artificial Intelligence &amp; Data Science
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Aplicação de aprendizado supervisionado e não-supervisionado, otimização de centróides no K-Means, classificação de padrões textuais e pipelines inteligentes com agentes autônomos.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
            {["Python", "Scikit-Learn", "K-Means", "LangChain", "Qdrant", "XGBoost", "NLP"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-xl bg-white border border-blue-200/70 text-slate-800 text-xs font-semibold shadow-sm hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </TiltCard>

        {/* Featured Big Bento Card: Full-Stack Engineering */}
        <TiltCard
          glowColor="pink"
          className="md:col-span-1 lg:col-span-2 p-6 flex flex-col justify-between bg-gradient-to-br from-white via-white to-pink-50/40"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="p-3 rounded-2xl bg-pink-500 text-white shadow-md shadow-pink-500/20">
                <Code2 className="w-6 h-6" />
              </span>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-pink-100/80 text-pink-700 font-bold border border-pink-200">
                SCALABLE WEB
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Modern Full-Stack &amp; APIs
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Interfaces modernas orientadas à experiência do usuário com Next.js, TypeScript e Tailwind, aliadas a backends performáticos em FastAPI e microsserviços.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
            {["TypeScript", "Next.js", "React", "FastAPI", "Tailwind CSS", "Node.js"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-xl bg-white border border-pink-200/70 text-slate-800 text-xs font-semibold shadow-sm hover:border-pink-500 hover:text-pink-600 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </TiltCard>

        {/* Skill Badges Flow Grid */}
        <div className="col-span-1 md:col-span-3 lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: index * 0.02 }}
              className={`p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm transition-all duration-300 group hover:-translate-y-1 ${
                skill.accent === "blue"
                  ? "hover:border-blue-400 hover:shadow-blue-500/10"
                  : "hover:border-pink-400 hover:shadow-pink-500/10"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-bold text-xs text-slate-900 group-hover:text-slate-950">
                  {skill.name}
                </span>
                <span
                  className={`w-2 h-2 rounded-full transition-transform group-hover:scale-125 ${
                    skill.accent === "blue" ? "bg-blue-600" : "bg-pink-500"
                  }`}
                />
              </div>
              <p className="text-[11px] text-slate-500 line-clamp-1">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
