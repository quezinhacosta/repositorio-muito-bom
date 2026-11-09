import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import InteractiveMeshBackground from "@/components/InteractiveMeshBackground";

export const metadata: Metadata = {
  title: "Quezia's",
  description: "Portfólio de Quezia Costa — Engenharia de IA, Pesquisadora em Machine Learning (PIBIC) & Desenvolvedora Full-Stack.",
  keywords: [
    "Quezia Costa",
    "Inteligência Artificial",
    "Machine Learning",
    "K-Means",
    "PIBIC",
    "Full-Stack",
    "Next.js",
    "Python",
    "Data Science",
  ],
  authors: [{ name: "Quezia Costa" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className="h-full antialiased font-sans"
    >
      <body className="min-h-full flex flex-col relative selection:bg-blue-100 selection:text-blue-900 bg-[#F8F9FA] text-slate-900">
        <SmoothScroll>
          <InteractiveMeshBackground />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
