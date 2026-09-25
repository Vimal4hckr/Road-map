import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveRoadmap from "@/components/InteractiveRoadmap";

import { roadmapDetails } from "@/data/roadmapDetails";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function RoadmapPage({ params }: Props) {
  const { slug } = await params;

  const roadmap = roadmapDetails[slug];

  if (!roadmap) {
    return (
      <main className="min-h-screen bg-white">

        <Navbar />

        <div className="mx-auto max-w-3xl px-6 py-32 text-center">

          <h1 className="text-4xl font-bold text-slate-900">
            Roadmap Not Found
          </h1>

          <p className="mt-4 text-slate-500">
            The roadmap you're looking for doesn't exist.
          </p>

          <Link
            href="/roadmaps"
            className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Back to Roadmaps
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">

      <Navbar />

      {/* Header */}
      <section className="border-b border-blue-100 bg-gradient-to-b from-blue-50 to-white">

        <div className="mx-auto max-w-7xl px-6 py-10">

          <Link
            href="/roadmaps"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600"
          >
            <ArrowLeft size={16} />
            All Roadmaps
          </Link>

          <div className="mt-10 max-w-4xl">

            <div className="flex flex-wrap gap-2">

              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                {roadmap.level}
              </span>

              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-500 shadow-sm ring-1 ring-blue-100">
                Career Roadmap
              </span>

            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
              {roadmap.title}
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-500 sm:text-lg">
              {roadmap.description}
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-3">

              <div className="flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-4 py-3 shadow-sm">

                <BookOpen
                  size={17}
                  className="text-blue-600"
                />

                <span className="text-sm font-medium text-slate-700">
                  {roadmap.topics} Topics
                </span>

              </div>

              <div className="flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-4 py-3 shadow-sm">

                <Clock3
                  size={17}
                  className="text-blue-600"
                />

                <span className="text-sm font-medium text-slate-700">
                  {roadmap.duration}
                </span>

              </div>

              <div className="flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-4 py-3 shadow-sm">

                <CheckCircle2
                  size={17}
                  className="text-blue-600"
                />

                <span className="text-sm font-medium text-slate-700">
                  Interactive
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Roadmap */}
      <section className="bg-slate-50 px-6 py-16">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              Learning Path
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              Your Roadmap
            </h2>

            <p className="mt-2 text-slate-500">
              Click a topic to explore what you need to learn.
              Click the numbered circle to mark it complete.
            </p>

          </div>

          <InteractiveRoadmap nodes={roadmap.nodes} />

        </div>

      </section>

      <Footer />

    </main>
  );
}