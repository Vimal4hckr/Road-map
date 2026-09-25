import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RoadmapSection from "@/components/RoadmapSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <Navbar />

      <Hero />

      <RoadmapSection />
    </main>
  );
}