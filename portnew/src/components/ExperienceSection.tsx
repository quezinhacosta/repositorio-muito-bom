"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  GraduationCap, 
  Presentation, 
  Award, 
  ExternalLink, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react";
import { LinkedinIcon } from "./Icons";
import TiltCard from "./TiltCard";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Pesquisadora de Iniciação Científica (PIBIC)",
      organization: "UNICAP • Universidade Católica de Pernambuco",
      period: "2023 - Presente",
      tag: "Pesquisa & Machine Learning",
      tagColor: "blue",
      description:
        "Pesquisa avançada em Machine Learning voltada para algoritmos de clusterização (otimização de K-Means) e desenvolvimento de tecnologia assistiva para crianças com dislexia, combinando linguística computacional e IA aplicada.",
      highlights: [
        "Desenvolvimento do projeto Derivoz para apoio educacional a disléxicos",
        "Algoritmos de classificação de complexidade textual em língua portuguesa",
        "Investigação de funções de convergência e métricas de silhueta no K-Means",
      ],
    },
    {
      role: "Estagiária em Engenharia de IA & Full-Stack",
      organization: "Centro de Inteligência Artificial da FASA / UNICAP",
      period: "2024 - Presente",
      tag: "Engenharia de IA",
      tagColor: "pink",
      description:
        "Desenvolvimento de agentes de inteligência artificial generativa, automação de fluxos corporativos, integração de LLMs e construção de aplicações web completas em arquiteturas modernas.",
      highlights: [
        "Construção de pipelines RAG e bancos vetoriais com Qdrant",
        "Desenvolvimento de backends resilientes em Python (FastAPI)",
        "Design de interfaces interativas e responsivas com Next.js e TypeScript",
      ],
    },
    {
      role: "Palestrante na Semana da Computação",
      organization: "UNICAP",
      period: "Edições Recentes",
      tag: "Comunidade & Palestras",
      tagColor: "blue",
      description:
        "Ministrou duas palestras sobre desenvolvimento web moderno, boas práticas de front-end, introdução a frameworks reativos e trajetória acadêmica e profissional em Ciência da Computação.",
      highlights: [
        "Mais de 100 alunos e entusiastas impactados",
        "Mentoria técnica sobre HTML, CSS avançado e ecossistema JavaScript",
      ],
    },
    {
      role: "Monitora de Cálculo 1",
      organization: "Departamento de Ciência da Computação • UNICAP",
      period: "Período Letivo",
      tag: "Fundamentos Matemáticos",
      tagColor: "pink",
      description:
        "Aulas de reforço e monitoria prática para ingressantes do curso de Ciência da Computação em temas cruciais: matemática básica, limites, derivadas e fundamentos de otimização matemática.",
      highlights: [
        "Elaboração de listas comentadas e resolução interativa de problemas",
        "Ponte direta entre raciocínio analítico abstrato e algoritmos de ML",
      ],
    },
    {
      role: "Participação em Hackathons & Competições de Inovação",
      organization: "Ecossistema Tech & Inovação",
      period: "Projetos Intensivos",
      tag: "Hackathon & Inovação",
      tagColor: "blue",
      description:
        "Desenvolvimento ágil de soluções sob pressão com equipes multidisciplinares, prototipagem rápida de MVPs e validação de produtos tecnológicos.",
      highlights: [
        "Projetos Padawan ON e ferramentas de impacto social",
        "Desenvolvimento colaborativo com Git flow e arquiteturas distribuídas",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-pink-50 text-pink-600 border border-pink-200/60 text-xs font-mono font-medium mb-3">
          <Briefcase className="w-3.5 h-3.5" />
          TRAJETÓRIA PROFISSIONAL
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Experiências &amp; Conexão Profissional
        </h2>
        <p className="text-slate-500 text-sm sm:text-base mt-2">
          Vivência prática combinando rigor de pesquisa científica acadêmica e engenharia de software no mercado.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Timeline of Experiences (2 cols) */}
        <div className="lg:col-span-2 space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <TiltCard
                glowColor={exp.tagColor === "blue" ? "blue" : "pink"}
                className="p-6 md:p-7"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span
                    className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${
                      exp.tagColor === "blue"
                        ? "bg-blue-50 text-blue-700 border-blue-200"
                        : "bg-pink-50 text-pink-700 border-pink-200"
                    }`}
                  >
                    {exp.tag}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-slate-900">
                  {exp.role}
                </h3>
                <div className="text-sm font-medium text-slate-600 mb-3 flex items-center gap-1.5">
                  <span className="text-blue-600 font-semibold">{exp.organization}</span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-slate-100">
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Dedicated LinkedIn Showcase Card */}
        <div className="lg:sticky lg:top-24 space-y-6">
          <TiltCard glowColor="both" className="p-7">
            <div className="flex items-center justify-between mb-5">
              <span className="p-3 rounded-2xl bg-[#0A66C2]/10 text-[#0A66C2]">
                <LinkedinIcon className="w-6 h-6" />
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                CONEXÕES ABERTAS
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Vamos nos conectar no LinkedIn?
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Acompanhe minhas publicações sobre avanços em Machine Learning, artigos científicos, atualizações de projetos e novidades sobre tecnologia.
            </p>

            {/* Profile Preview Card inside */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/40 border border-slate-200/80 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-pink-500 flex items-center justify-center text-white font-bold text-base shadow-md">
                  QC
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Quezia Costa</h4>
                  <p className="text-[11px] text-slate-500 line-clamp-1">
                    AI Engineer • ML Researcher • Full-Stack Dev
                  </p>
                  <p className="text-[10px] text-blue-600 font-medium flex items-center gap-1 mt-0.5">
                    <MapPin className="w-2.5 h-2.5" /> Recife, Pernambuco, Brasil
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-center pt-2 border-t border-slate-200/60 text-xs">
                <div className="p-2 rounded-lg bg-white/80 border border-slate-100">
                  <span className="block font-bold text-slate-900">UNICAP</span>
                  <span className="text-[10px] text-slate-400">Ciência da Computação</span>
                </div>
                <div className="p-2 rounded-lg bg-white/80 border border-slate-100">
                  <span className="block font-bold text-slate-900">FASA</span>
                  <span className="text-[10px] text-slate-400">Centro de IA</span>
                </div>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/quezia-costa-5195342b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-medium text-xs transition-colors shadow-md shadow-[#0A66C2]/20 group"
            >
              <span>Acessar perfil completo no LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </TiltCard>

          {/* Quick Academic Badge */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-3">
            <span className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600">
              <GraduationCap className="w-5 h-5" />
            </span>
            <div>
              <div className="text-xs font-bold text-slate-900">Bacharelado em Ciência da Computação</div>
              <div className="text-[11px] text-slate-500">Universidade Católica de Pernambuco (UNICAP)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
