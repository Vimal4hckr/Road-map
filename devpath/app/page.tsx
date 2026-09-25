import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RoadmapSection from "@/components/RoadmapSection";
import SkillRoadmaps from "@/components/SkillRoadmaps";
import BeginnerSection from "@/components/BeginnerSection";
import GuideSection from "@/components/GuideSection";
import ProjectSection from "@/components/ProjectSection";
import AITutorSection from "@/components/AITutorSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      <Navbar />

      <Hero />

      <RoadmapSection />

      <SkillRoadmaps />

      <BeginnerSection />

      <GuideSection />

      <ProjectSection />

      <AITutorSection />

      <StatsSection />

      <Footer />

    </main>
  );
}