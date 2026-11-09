import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import InteractiveMeshBackground from "@/components/InteractiveMeshBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative selection:bg-blue-100 selection:text-blue-900">
        <SmoothScroll>
          <InteractiveMeshBackground />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
