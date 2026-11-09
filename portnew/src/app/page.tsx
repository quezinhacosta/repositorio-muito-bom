import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GitHubActivity from "@/components/GitHubActivity";
import ExperienceSection from "@/components/ExperienceSection";
import TechStackBento from "@/components/TechStackBento";
import ProjectsResearch from "@/components/ProjectsResearch";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <GitHubActivity />
        <ExperienceSection />
        <TechStackBento />
        <ProjectsResearch />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
