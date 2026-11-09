"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Brain, 
  BookOpen, 
  Layers, 
  Code2, 
  ArrowUpRight 
} from "lucide-react";
import { GithubIcon } from "./Icons";
import TiltCard from "./TiltCard";

interface ProjectItem {
  id: string;
  title: string;
  category: "research" | "ai-project" | "fullstack";
  badge: string;
  accent: "blue" | "pink";
  description: string;
  tags: string[];
  metrics?: string;
  githubUrl?: string;
  demoUrl?: string;
}

export default function ProjectsResearch() {
  const [filter, setFilter] = useState<"all" | "research" | "ai-project" | "fullstack">("all");

  const items: ProjectItem[] = [
    {
      id: "kmeans-research",
      title: "Otimização de K-Means & Clusterização de Alta Dimensionalidade",
      category: "research",
      badge: "Iniciação Científica (PIBIC)",
      accent: "blue",
      description:
        "Pesquisa científica focada na heurística de inicialização de centróides, redução de inércia e aceleração da convergência do algoritmo K-Means aplicado a bases de dados complexas.",
      tags: ["Python", "Scikit-Learn", "Matemática Aplicada", "Clusterização", "NumPy"],
      metrics: "Otimização de convergência e métricas de silhueta",
      githubUrl: "https://github.com/quezinhacosta/algoritmo-analisador-palavras",
    },
    {
      id: "derivoz",
      title: "Derivoz • IA Educacional & Tecnologia Assistiva para Dislexia",
      category: "research",
      badge: "Pesquisa & Impacto Social",
      accent: "pink",
      description:
        "Ecossistema de aprendizado adaptativo baseado em inteligência artificial para auxiliar crianças no processo de alfabetização, diagnosticando dificuldades fonéticas e estimulando a leitura.",
      tags: ["Python", "IA Educacional", "NLP", "Acessibilidade", "Mobile"],
      metrics: "Reconhecimento fonético e suporte adaptativo",
      githubUrl: "https://github.com/quezinhacosta/Derivoz",
    },
    {
      id: "jarvis-ai",
      title: "Jarvis AI • Assistente Autônomo com LLMs",
      category: "ai-project",
      badge: "Engenharia de IA",
      accent: "blue",
      description:
        "Assistente virtual com inteligência artificial generativa, pipelines de reasoning, integração de ferramentas e memória contextual persistente para automação de tarefas cotidianas.",
      tags: ["Python", "LLMs", "LangChain", "Prompt Engineering", "FastAPI"],
      metrics: "Interação contextual em linguagem natural",
      githubUrl: "https://github.com/quezinhacosta/JarvisIA",
    },
    {
      id: "vitai",
      title: "vitAI • Sistema Preditivo & Análise Inteligente",
      category: "ai-project",
      badge: "IA & Recomendação",
      accent: "pink",
      description:
        "Plataforma inteligente focada em modelagem de dados preditivos, recomendação e extração de insights por meio de técnicas supervisionadas e grafos bipartidos.",
      tags: ["Machine Learning", "Python", "Grafos Bipartidos", "Recomendação"],
      metrics: "Alta acurácia preditiva e rankings personalizados",
      githubUrl: "https://github.com/quezinhacosta",
    },
    {
      id: "deritiva",
      title: "Deritiva • Cálculo Computacional & Exploração Matemática",
      category: "fullstack",
      badge: "Matemática & Web",
      accent: "blue",
      description:
        "Aplicação interativa voltada para a visualização gráfica e resolução passo-a-passo de derivadas, limites e taxas de variação, unindo didática à engenharia de software.",
      tags: ["TypeScript", "Next.js", "Cálculo 1", "Visualização Matemática", "Tailwind"],
      metrics: "Gráficos reativos e visualização em tempo real",
      githubUrl: "https://github.com/quezinhacosta",
    },
    {
      id: "padawan-on",
      title: "Padawan ON • Plataforma Full-Stack de Gestão",
      category: "fullstack",
      badge: "Full-Stack Web",
      accent: "pink",
      description:
        "Aplicação web full-stack completa com arquitetura limpa, autenticação segura, banco de dados relacional e interface moderna para coordenação ágil de times.",
      tags: ["TypeScript", "React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      metrics: "Arquitetura MVC robusta e banco estruturado",
      githubUrl: "https://github.com/quezinhacosta/padawan-projeto",
    },
  ];

  const filteredItems = filter === "all" ? items : items.filter((i) => i.category === filter);

  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-600 border border-blue-200/60 text-xs font-mono font-medium mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            RESEARCH &amp; SOFTWARE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Portfólio em Destaque &amp; Pesquisas
          </h2>
          <p className="text-slate-500 text-sm mt-1 max-w-xl">
            Projetos que unem o rigor da iniciação científica ao desenvolvimento de produtos digitais robustos.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex-wrap">
          {[
            { id: "all", label: "Todos" },
            { id: "research", label: "Pesquisas (ML)" },
            { id: "ai-project", label: "IA & LLMs" },
            { id: "fullstack", label: "Full-Stack Web" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                filter === tab.id
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
          >
            <TiltCard
              glowColor={project.accent}
              className="p-6 h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${
                      project.accent === "blue"
                        ? "bg-blue-50 text-blue-700 border-blue-200"
                        : "bg-pink-50 text-pink-700 border-pink-200"
                    }`}
                  >
                    {project.badge}
                  </span>
                  {project.category === "research" ? (
                    <BookOpen className="w-4 h-4 text-blue-600" />
                  ) : (
                    <Code2 className="w-4 h-4 text-pink-600" />
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                {project.metrics && (
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60 mb-4 text-[11px] text-slate-700 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span className="font-medium">{project.metrics}</span>
                  </div>
                )}
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-slate-100">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-mono font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-medium text-xs transition-colors shadow-sm"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Ver Código</span>
                    </a>
                  )}

                  <a
                    href={project.githubUrl || "https://github.com/quezinhacosta"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2.5 rounded-xl bg-white border border-slate-200 hover:border-pink-400 hover:text-pink-600 text-slate-700 transition-colors shadow-sm"
                    title="Detalhes do projeto"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
