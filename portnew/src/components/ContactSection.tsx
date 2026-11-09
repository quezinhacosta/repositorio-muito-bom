"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  ArrowUpRight, 
  Clock, 
  Sparkles,
  MapPin
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import confetti from "canvas-confetti";
import TiltCard from "./TiltCard";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");

  const email = "quezia.costa@unicap.br";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.8 },
        colors: ["#2563EB", "#EC4899", "#3B82F6", "#F472B6"],
      });
    } catch {
      // safe fallback
    }

    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject || `Contato via Portfólio - ${name || "Novo Contato"}`
    )}&body=${encodeURIComponent(
      `Nome: ${name}\n\nMensagem:\n${message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-600 border border-blue-200/60 text-xs font-mono font-medium mb-3">
          <Mail className="w-3.5 h-3.5" />
          START A CONVERSATION
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Vamos construir algo extraordinário?
        </h2>
        <p className="text-slate-500 text-sm sm:text-base mt-2">
          Seja para pesquisas científicas, oportunidades profissionais em Engenharia de IA ou projetos Full-Stack, estou sempre aberta a novas conexões.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info & 1-Click Copy */}
        <div className="lg:col-span-5 space-y-5">
          <TiltCard glowColor="both" className="p-7">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 block mb-2">
              Contato Rápido
            </span>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Cópia com 1 clique
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Clique no botão abaixo para copiar meu e-mail direto para a sua área de transferência ou utilize os canais diretos.
            </p>

            <button
              onClick={handleCopy}
              className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all group mb-4 active:scale-98"
            >
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-xl bg-white text-blue-600 border border-slate-200/80 shadow-sm">
                  <Mail className="w-4 h-4" />
                </span>
                <span className="font-mono text-xs text-slate-800 font-semibold truncate">
                  {email}
                </span>
              </div>

              <span className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors shadow-sm">
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500 group-hover:text-white" />
                    <span>Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar</span>
                  </>
                )}
              </span>
            </button>

            {/* Availability details */}
            <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-500">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" /> Fuso Horário
                </span>
                <span className="font-mono text-slate-700 font-medium">Recife / BRT (UTC-3)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" /> Localização
                </span>
                <span className="text-slate-700 font-medium">Recife, PE • Brasil</span>
              </div>
            </div>
          </TiltCard>

          {/* Direct Social Cards */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href="https://www.linkedin.com/in/quezia-costa-5195342b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-[#0A66C2] hover:shadow-md transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-2.5">
                <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                <span className="text-xs font-bold text-slate-800">LinkedIn</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://github.com/quezinhacosta"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-slate-900 hover:shadow-md transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-2.5">
                <GithubIcon className="w-4 h-4 text-slate-900" />
                <span className="text-xs font-bold text-slate-800">GitHub</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Column: Clean Interactive Message Form */}
        <div className="lg:col-span-7">
          <TiltCard glowColor="blue" className="p-7 md:p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Enviar uma Mensagem Direta
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Preencha os campos abaixo para abrir instantaneamente seu cliente de e-mail com a mensagem formatada.
            </p>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Seu Nome
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="ex: Alan Turing"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Assunto
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="ex: Projeto de IA / Oportunidade"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Mensagem
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escreva sua mensagem aqui com detalhes da proposta ou pesquisa..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-pink-600 text-white font-medium text-xs transition-all duration-300 shadow-sm shadow-slate-900/10 active:scale-98"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Disparar Mensagem</span>
              </button>
            </form>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
