"use client";

import { Check, CircleHelp } from "lucide-react";
import { useState } from "react";

import type { Lesson } from "@/data/lessons";

type Props = {
  lesson: Lesson;
  lessonKey: string;
};

export default function LessonContent({
  lesson,
  lessonKey,
}: Props) {
  const [selectedAnswers, setSelectedAnswers] =
    useState<Record<number, string>>({});

  const [completed, setCompleted] =
    useState(false);

  function selectAnswer(
    questionIndex: number,
    answer: string
  ) {
    setSelectedAnswers((current) => ({
      ...current,
      [questionIndex]: answer,
    }));
  }

  function finishLesson() {
    const allCorrect = lesson.quiz.every(
      (question, index) =>
        selectedAnswers[index] === question.answer
    );

    if (!allCorrect) {
      alert("Please answer all questions correctly.");
      return;
    }

    localStorage.setItem(
      `devpath-lesson-${lessonKey}`,
      "completed"
    );

    setCompleted(true);
  }

  return (
    <div className="space-y-10">

      {/* Lesson Content */}
      <section className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">

        <div className="mb-8">

          <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Lesson
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            {lesson.title}
          </h2>

          <p className="mt-3 text-slate-500">
            {lesson.description}
          </p>

        </div>

        <div className="space-y-5">

          {lesson.content.map((paragraph) => (
            <p
              key={paragraph}
              className="leading-8 text-slate-600"
            >
              {paragraph}
            </p>
          ))}

        </div>

      </section>

      {/* Code */}
      {lesson.code && (
        <section>

          <div className="mb-4">

            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Code Example
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Try it yourself
            </h2>

          </div>

          <pre className="overflow-x-auto rounded-2xl bg-slate-950 p-6 text-sm leading-7 text-slate-200 shadow-xl">
            <code>{lesson.code}</code>
          </pre>

        </section>
      )}

      {/* Quiz */}
      <section>

        <div className="mb-5 flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
            <CircleHelp
              size={19}
              className="text-blue-600"
            />
          </div>

          <div>

            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Knowledge Check
            </p>

            <h2 className="text-2xl font-bold text-slate-900">
              Quick Quiz
            </h2>

          </div>

        </div>

        <div className="space-y-6">

          {lesson.quiz.map((question, index) => {

            const selected =
              selectedAnswers[index];

            return (
              <div
                key={question.question}
                className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
              >

                <p className="font-semibold text-slate-900">
                  {index + 1}. {question.question}
                </p>

                <div className="mt-5 grid gap-3">

                  {question.options.map((option) => {

                    const isSelected =
                      selected === option;

                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() =>
                          selectAnswer(
                            index,
                            option
                          )
                        }
                        className={`rounded-xl border p-4 text-left text-sm font-medium transition ${
                          isSelected
                            ? "border-blue-500 bg-blue-50 text-blue-700"
                            : "border-slate-200 text-slate-600 hover:border-blue-300 hover:bg-blue-50"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}

                </div>

              </div>
            );
          })}

        </div>

        <button
          type="button"
          onClick={finishLesson}
          className={`mt-7 inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white transition ${
            completed
              ? "bg-green-600"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >

          <Check size={18} />

          {completed
            ? "Lesson Completed"
            : "Complete Lesson"}

        </button>

      </section>

    </div>
  );
}