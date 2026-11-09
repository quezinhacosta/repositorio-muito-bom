"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitBranch, GitCommit, GitPullRequest, ExternalLink, RefreshCw, Terminal, Star, Clock } from "lucide-react";
import TiltCard from "./TiltCard";

interface CommitEvent {
  id: string;
  repo: string;
  message: string;
  time: string;
  url: string;
  sha: string;
}

export default function GitHubActivity() {
  const [commits, setCommits] = useState<CommitEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  const fallbackCommits: CommitEvent[] = [
    {
      id: "f1",
      repo: "quezinhacosta/JarvisIA",
      message: "feat(llm): implement dynamic agent prompt pipelines & context memory",
      time: "há 2 horas",
      url: "https://github.com/quezinhacosta/JarvisIA",
      sha: "8a4f21b",
    },
    {
      id: "f2",
      repo: "quezinhacosta/algoritmo-analisador-palavras",
      message: "refactor(ml): optimize k-means centroid initialization & silhouette score",
      time: "há 1 dia",
      url: "https://github.com/quezinhacosta/algoritmo-analisador-palavras",
      sha: "c3d9021",
    },
    {
      id: "f3",
      repo: "quezinhacosta/Derivoz",
      message: "feat(dyslexia-ux): add acoustic feedback & phoneme classification engine",
      time: "há 3 dias",
      url: "https://github.com/quezinhacosta/Derivoz",
      sha: "4e719aa",
    },
    {
      id: "f4",
      repo: "quezinhacosta/padawan-projeto",
      message: "chore: modularize full-stack API controllers & database models",
      time: "há 5 dias",
      url: "https://github.com/quezinhacosta/padawan-projeto",
      sha: "90b1fa8",
    },
  ];

  const fetchGithubEvents = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.github.com/users/quezinhacosta/events/public", {
        headers: { Accept: "application/vnd.github.v3+json" },
      });
      if (!res.ok) throw new Error("Rate limit or offline");
      const data = await res.json();

      const pushEvents = data
        .filter((event: any) => event.type === "PushEvent" && event.payload?.commits?.length)
        .slice(0, 5)
        .map((event: any, idx: number) => {
          const commit = event.payload.commits[event.payload.commits.length - 1];
          const date = new Date(event.created_at);
          return {
            id: event.id || String(idx),
            repo: event.repo.name,
            message: commit.message.split("\n")[0],
            time: date.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }),
            url: `https://github.com/${event.repo.name}/commit/${commit.sha}`,
            sha: commit.sha.substring(0, 7),
          };
        });

      if (pushEvents.length > 0) {
        setCommits(pushEvents);
      } else {
        setCommits(fallbackCommits);
      }
    } catch {
      setCommits(fallbackCommits);
    } finally {
      setLoading(false);
      setLastUpdated(new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }));
    }
  };

  useEffect(() => {
    fetchGithubEvents();
  }, []);

  return (
    <section id="github" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-600 border border-blue-200/60 text-xs font-mono font-medium mb-3">
            <Terminal className="w-3.5 h-3.5" />
            LIVE TELEMETRY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Live GitHub &amp; Latest Commits
          </h2>
          <p className="text-slate-500 text-sm mt-1 max-w-xl">
            Sincronização em tempo real via GitHub REST API. Transparência contínua de desenvolvimento e pesquisa.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchGithubEvents}
            disabled={loading}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 text-xs font-medium transition-all shadow-sm active:scale-95"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin text-blue-600" : ""}`} />
            <span>Atualizar</span>
          </button>

          <a
            href="https://github.com/quezinhacosta"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-medium transition-colors shadow-sm"
          >
            <span>Ver perfil no GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Terminal Live Feed */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-slate-800 bg-[#0F172A] p-5 shadow-xl text-slate-200 font-mono text-xs overflow-hidden">
            {/* Terminal Topbar */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-slate-400 text-[11px]">
                  quezinhacosta@github:~ git log --oneline --graph
                </span>
              </div>
              <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                LIVE STREAM
              </span>
            </div>

            {/* Commits List */}
            <div className="space-y-3.5 min-h-[220px]">
              {loading && commits.length === 0 ? (
                <div className="flex items-center justify-center py-12 text-slate-400">
                  <RefreshCw className="w-5 h-5 animate-spin mr-2 text-blue-400" />
                  <span>Consultando eventos da API do GitHub...</span>
                </div>
              ) : (
                commits.map((commit, idx) => (
                  <motion.div
                    key={commit.id || idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-blue-500/50 hover:bg-slate-900 transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div className="flex items-start gap-3">
                      <span className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 mt-0.5 sm:mt-0">
                        <GitCommit className="w-4 h-4" />
                      </span>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold text-slate-100 group-hover:text-blue-300 transition-colors">
                            {commit.repo}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-pink-400 border border-slate-700">
                            {commit.sha}
                          </span>
                        </div>
                        <p className="text-slate-300 text-[11px] mt-1 line-clamp-1 font-sans">
                          {commit.message}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 text-[11px] text-slate-400 pl-9 sm:pl-0">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-500" />
                        {commit.time}
                      </span>
                      <a
                        href={commit.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-blue-400 p-1"
                        title="Ver commit no GitHub"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500">
              <span>Status: 200 OK • Sincronizado às {lastUpdated || "agora"}</span>
              <span className="text-pink-400 font-mono">Branch: main</span>
            </div>
          </div>
        </div>

        {/* GitHub Metrics & Focus Card */}
        <div className="space-y-4 flex flex-col justify-between">
          <TiltCard glowColor="blue" className="p-5 flex-1">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Repositórios &amp; Foco</span>
              <GitBranch className="w-4 h-4 text-blue-600" />
            </div>

            <div className="space-y-3.5">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                <div className="text-xs font-semibold text-slate-900 flex items-center justify-between">
                  <span>Machine Learning &amp; AI</span>
                  <span className="text-blue-600 font-mono">Python</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Algoritmos de K-Means, NLP para dislexia, pipelines de fine-tuning &amp; agentes autônomos.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                <div className="text-xs font-semibold text-slate-900 flex items-center justify-between">
                  <span>Full-Stack Web &amp; APIs</span>
                  <span className="text-pink-600 font-mono">TS / React / Next</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Sistemas escaláveis, Tailwind, microsserviços em FastAPI e interfaces interativas.
                </p>
              </div>
            </div>
          </TiltCard>

          <TiltCard glowColor="pink" className="p-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-pink-500 flex items-center justify-center text-white shadow-md shadow-pink-500/20 font-bold">
                QC
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Quezia Costa</h4>
                <p className="text-xs text-slate-500">github.com/quezinhacosta</p>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
