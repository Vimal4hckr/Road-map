import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  Code2,
  ExternalLink,
  Layers3,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { topicDetails } from "@/data/topicDetails";

type Props = {
  params: Promise<{
    roadmap: string;
    topic: string;
  }>;
};

export default async function TopicPage({
  params,
}: Props) {
  const { roadmap, topic } = await params;

  const data = topicDetails[topic];

  if (!data) {
    return (
      <main className="min-h-screen bg-white">

        <Navbar />

        <section className="px-6 py-32 text-center">

          <h1 className="text-4xl font-bold text-slate-900">
            Topic Not Found
          </h1>

          <p className="mt-4 text-slate-500">
            This learning topic does not exist yet.
          </p>

          <Link
            href={`/roadmaps/${roadmap}`}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            <ArrowLeft size={17} />
            Back to Roadmap
          </Link>

        </section>

        <Footer />

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">

      <Navbar />

      {/* Header */}
      <section className="border-b border-blue-100 bg-gradient-to-b from-blue-50 to-white">

        <div className="mx-auto max-w-6xl px-6 py-12">

          <Link
            href={`/roadmaps/${roadmap}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600"
          >
            <ArrowLeft size={16} />
            Back to Roadmap
          </Link>

          <div className="mt-10">

            <div className="flex flex-wrap gap-2">

              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                {data.difficulty}
              </span>

              <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-500 shadow-sm ring-1 ring-blue-100">
                {data.estimatedTime}
              </span>

            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
              {data.title}
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-500">
              {data.description}
            </p>

          </div>

        </div>

      </section>

      {/* Main */}
      <section className="px-6 py-16">

        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_300px]">

          {/* Content */}
          <div className="space-y-10">

            {/* Concepts */}
            <section>

              <div className="mb-5 flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <BookOpen
                    size={19}
                    className="text-blue-600"
                  />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Fundamentals
                  </p>

                  <h2 className="text-2xl font-bold text-slate-900">
                    What you need to learn
                  </h2>
                </div>

              </div>

              <div className="grid gap-3 sm:grid-cols-2">

                {data.concepts.map((concept) => (
                  <div
                    key={concept}
                    className="flex items-center gap-3 rounded-xl border border-blue-100 bg-white p-4 shadow-sm"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-blue-600"
                    />

                    <span className="text-sm font-medium text-slate-700">
                      {concept}
                    </span>
                  </div>
                ))}

              </div>

            </section>

            {/* Subtopics */}
            <section>

              <div className="mb-5 flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <Layers3
                    size={19}
                    className="text-blue-600"
                  />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Learning Modules
                  </p>

                  <h2 className="text-2xl font-bold text-slate-900">
                    Topics
                  </h2>
                </div>

              </div>

              <div className="space-y-4">

                {data.subtopics.map((item, index) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100"
                  >

                    <div className="flex gap-4">

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
                        {index + 1}
                      </div>

                      <div>

                        <h3 className="font-bold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          {item.description}
                        </p>

                      </div>

                    </div>

                  </article>
                ))}

              </div>

            </section>

            {/* Practice */}
            <section>

              <div className="mb-5">

                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Build
                </p>

                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  Practice Projects
                </h2>

                <p className="mt-2 text-slate-500">
                  Apply what you learned by building these projects.
                </p>

              </div>

              <div className="grid gap-3 sm:grid-cols-2">

                {data.practice.map((project) => (
                  <div
                    key={project}
                    className="rounded-xl border border-blue-100 bg-blue-50/50 p-5"
                  >

                    <div className="flex items-center gap-3">

                      <Code2
                        size={18}
                        className="text-blue-600"
                      />

                      <span className="text-sm font-semibold text-slate-700">
                        {project}
                      </span>

                    </div>

                  </div>
                ))}

              </div>

            </section>

            {/* Resources */}
            <section>

              <div className="mb-5">

                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Resources
                </p>

                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  Recommended Resources
                </h2>

              </div>

              <div className="space-y-3">

                {data.resources.map((resource) => (
                  <div
                    key={resource.title}
                    className="flex items-center justify-between rounded-xl border border-blue-100 bg-white p-5 shadow-sm"
                  >

                    <div>

                      <p className="font-semibold text-slate-900">
                        {resource.title}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {resource.type}
                      </p>

                    </div>

                    <ExternalLink
                      size={17}
                      className="text-blue-500"
                    />

                  </div>
                ))}

              </div>

            </section>

          </div>

          {/* Sidebar */}
          <aside>

            <div className="sticky top-24 rounded-2xl border border-blue-100 bg-white p-6 shadow-lg shadow-blue-100/40">

              <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Topic Overview
              </p>

              <h3 className="mt-3 text-xl font-bold text-slate-900">
                {data.title}
              </h3>

              <div className="mt-6 space-y-4">

                <div className="flex items-center gap-3">

                  <BookOpen
                    size={17}
                    className="text-blue-600"
                  />

                  <div>
                    <p className="text-xs text-slate-400">
                      Difficulty
                    </p>

                    <p className="text-sm font-semibold">
                      {data.difficulty}
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-3">

                  <Clock3
                    size={17}
                    className="text-blue-600"
                  />

                  <div>
                    <p className="text-xs text-slate-400">
                      Estimated time
                    </p>

                    <p className="text-sm font-semibold">
                      {data.estimatedTime}
                    </p>
                  </div>

                </div>

              </div>

              <button className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">

                Mark Topic Complete

                <CheckCircle2 size={17} />

              </button>

              <Link
                href={`/roadmaps/${roadmap}`}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-blue-200 px-5 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                Back to Roadmap
                <ArrowRight size={16} />
              </Link>

            </div>

          </aside>

        </div>

      </section>

      <Footer />

    </main>
  );
}