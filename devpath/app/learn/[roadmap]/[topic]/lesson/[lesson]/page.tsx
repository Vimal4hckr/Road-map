import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Clock3,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LessonContent from "@/components/LessonContent";

import { lessons } from "@/data/lessons";

type Props = {
  params: Promise<{
    roadmap: string;
    topic: string;
    lesson: string;
  }>;
};

export default async function LessonPage({
  params,
}: Props) {
  const { roadmap, topic, lesson } = await params;

  const topicLessons = lessons[topic] || [];

  const lessonIndex = topicLessons.findIndex(
    (item) => item.id === lesson
  );

  const currentLesson = topicLessons[lessonIndex];

  if (!currentLesson) {
    return (
      <main className="min-h-screen bg-white">

        <Navbar />

        <section className="px-6 py-32 text-center">

          <h1 className="text-4xl font-bold text-slate-900">
            Lesson Not Found
          </h1>

          <p className="mt-4 text-slate-500">
            This lesson has not been created yet.
          </p>

          <Link
            href={`/learn/${roadmap}/${topic}`}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white"
          >
            <ArrowLeft size={17} />
            Back to Topic
          </Link>

        </section>

        <Footer />

      </main>
    );
  }

  const previousLesson =
    lessonIndex > 0
      ? topicLessons[lessonIndex - 1]
      : null;

  const nextLesson =
    lessonIndex < topicLessons.length - 1
      ? topicLessons[lessonIndex + 1]
      : null;

  return (
    <main className="min-h-screen bg-slate-50">

      <Navbar />

      {/* Header */}
      <section className="border-b border-blue-100 bg-white">

        <div className="mx-auto max-w-6xl px-6 py-10">

          <Link
            href={`/learn/${roadmap}/${topic}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600"
          >
            <ArrowLeft size={16} />
            Back to {topic}
          </Link>

          <div className="mt-8">

            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Lesson {lessonIndex + 1} of{" "}
              {topicLessons.length}
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
              {currentLesson.title}
            </h1>

            <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">

              <Clock3 size={16} />

              {currentLesson.duration}

            </div>

          </div>

          {/* Progress */}
          <div className="mt-8">

            <div className="h-2 overflow-hidden rounded-full bg-blue-100">

              <div
                className="h-full rounded-full bg-blue-600"
                style={{
                  width: `${
                    ((lessonIndex + 1) /
                      topicLessons.length) *
                    100
                  }%`,
                }}
              />

            </div>

          </div>

        </div>

      </section>

      {/* Lesson */}
      <section className="px-6 py-12">

        <div className="mx-auto max-w-6xl">

          <LessonContent
            lesson={currentLesson}
            lessonKey={`${roadmap}-${topic}-${lesson}`}
          />

          {/* Navigation */}
          <div className="mt-12 flex flex-col justify-between gap-4 sm:flex-row">

            {previousLesson ? (
              <Link
                href={`/learn/${roadmap}/${topic}/lesson/${previousLesson.id}`}
                className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50"
              >
                <ArrowLeft size={16} />
                Previous Lesson
              </Link>
            ) : (
              <div />
            )}

            {nextLesson ? (
              <Link
                href={`/learn/${roadmap}/${topic}/lesson/${nextLesson.id}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Next Lesson
                <ArrowRight size={16} />
              </Link>
            ) : (
              <Link
                href={`/learn/${roadmap}/${topic}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-700"
              >
                Finish Topic
                <ArrowRight size={16} />
              </Link>
            )}

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}