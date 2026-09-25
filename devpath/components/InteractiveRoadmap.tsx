"use client";

import {
  BookOpen,
  Check,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import { useEffect, useState } from "react";

import type { RoadmapNode } from "@/data/roadmapDetails";

type Props = {
  nodes: RoadmapNode[];
  roadmapSlug: string;
};

export default function InteractiveRoadmap({
  nodes,
  roadmapSlug,
}: Props) {
  const storageKey = `devpath-progress-${roadmapSlug}`;

  const [selectedNode, setSelectedNode] = useState<string | null>(
    null
  );

  const [completed, setCompleted] = useState<string[]>([]);

  // Load saved progress
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);

    if (saved) {
      try {
        setCompleted(JSON.parse(saved));
      } catch {
        setCompleted([]);
      }
    }
  }, [storageKey]);

  // Save progress
  useEffect(() => {
    localStorage.setItem(
      storageKey,
      JSON.stringify(completed)
    );
  }, [completed, storageKey]);

  function toggleComplete(id: string) {
    setCompleted((current) => {
      if (current.includes(id)) {
        return current.filter((item) => item !== id);
      }

      return [...current, id];
    });
  }

  const progress =
    nodes.length === 0
      ? 0
      : Math.round(
          (completed.length / nodes.length) * 100
        );

  return (
    <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-xl shadow-blue-100/50 sm:p-10">

      {/* Progress Header */}
      <div className="mb-10 rounded-2xl bg-blue-50 p-5">

        <div className="flex items-center justify-between gap-4">

          <div>
            <p className="text-sm font-bold text-slate-900">
              Your Progress
            </p>

            <p className="mt-1 text-xs text-slate-500">
              {completed.length} of {nodes.length} topics completed
            </p>
          </div>

          <div className="text-xl font-bold text-blue-600">
            {progress}%
          </div>

        </div>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-blue-100">

          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      {/* Roadmap */}
      <div className="relative mx-auto max-w-4xl">

        {/* Desktop connecting line */}
        <div className="absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-1 -translate-x-1/2 rounded-full bg-blue-100 md:block" />

        <div className="space-y-10">

          {nodes.map((node, index) => {
            const isCompleted = completed.includes(node.id);
            const isSelected = selectedNode === node.id;

            return (
              <div key={node.id} className="relative">

                <div className="grid items-center gap-6 md:grid-cols-[1fr_80px_1fr]">

                  {/* Left */}
                  <div className="hidden md:block">

                    {index % 2 === 0 && (
                      <NodeCard
                        node={node}
                        selected={isSelected}
                        completed={isCompleted}
                        roadmapSlug={roadmapSlug}
                        onToggle={() =>
                          setSelectedNode(
                            isSelected ? null : node.id
                          )
                        }
                        onComplete={() =>
                          toggleComplete(node.id)
                        }
                      />
                    )}

                  </div>

                  {/* Center */}
                  <div className="relative z-10 flex justify-center">

                    <button
                      type="button"
                      onClick={() =>
                        toggleComplete(node.id)
                      }
                      title="Mark topic complete"
                      className={`flex h-16 w-16 items-center justify-center rounded-full border-4 bg-white shadow-lg transition hover:scale-105 ${
                        isCompleted
                          ? "border-green-500 bg-green-50 text-green-600"
                          : node.type === "milestone"
                            ? "border-blue-600 text-blue-600"
                            : "border-blue-200 text-blue-600"
                      }`}
                    >

                      {isCompleted ? (
                        <Check size={25} />
                      ) : (
                        <span className="text-lg font-bold">
                          {index + 1}
                        </span>
                      )}

                    </button>

                  </div>

                  {/* Right */}
                  <div className="hidden md:block">

                    {index % 2 !== 0 && (
                      <NodeCard
                        node={node}
                        selected={isSelected}
                        completed={isCompleted}
                        roadmapSlug={roadmapSlug}
                        onToggle={() =>
                          setSelectedNode(
                            isSelected ? null : node.id
                          )
                        }
                        onComplete={() =>
                          toggleComplete(node.id)
                        }
                      />
                    )}

                  </div>

                </div>

                {/* Mobile */}
                <div className="mt-5 md:hidden">

                  <NodeCard
                    node={node}
                    selected={isSelected}
                    completed={isCompleted}
                    roadmapSlug={roadmapSlug}
                    onToggle={() =>
                      setSelectedNode(
                        isSelected ? null : node.id
                      )
                    }
                    onComplete={() =>
                      toggleComplete(node.id)
                    }
                  />

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </div>
  );
}

type NodeCardProps = {
  node: RoadmapNode;
  selected: boolean;
  completed: boolean;
  roadmapSlug: string;
  onToggle: () => void;
  onComplete: () => void;
};

function NodeCard({
  node,
  selected,
  completed,
  roadmapSlug,
  onToggle,
  onComplete,
}: NodeCardProps) {
  return (
    <div
      className={`rounded-2xl border bg-white p-5 transition ${
        completed
          ? "border-green-200 bg-green-50/40"
          : selected
            ? "border-blue-400 shadow-lg shadow-blue-100"
            : "border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100"
      }`}
    >

      {/* Header */}
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 text-left"
      >

        <div>

          <div className="flex flex-wrap items-center gap-2">

            <h3 className="font-bold text-slate-900">
              {node.title}
            </h3>

            {node.type === "milestone" && (
              <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold uppercase text-blue-600">
                Milestone
              </span>
            )}

          </div>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            {node.description}
          </p>

        </div>

        <span className="shrink-0 text-slate-400">

          {selected ? (
            <ChevronUp size={18} />
          ) : (
            <ChevronDown size={18} />
          )}

        </span>

      </button>

      {/* Expanded */}
      {selected && (
        <div className="mt-5 border-t border-blue-100 pt-5">

          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-blue-600">
            What you need to learn
          </p>

          <div className="flex flex-wrap gap-2">

            {node.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-medium text-blue-700"
              >
                {topic}
              </span>
            ))}

          </div>

          <div className="mt-5 flex flex-wrap gap-2">

            <a
              href={`/learn/${roadmapSlug}/${node.id}`}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-700"
            >
              <BookOpen size={14} />
              Learn Topic
            </a>

            <button
              type="button"
              onClick={onComplete}
              className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold transition ${
                completed
                  ? "bg-green-100 text-green-700 hover:bg-green-200"
                  : "border border-blue-200 text-blue-600 hover:bg-blue-50"
              }`}
            >
              <Check size={14} />

              {completed
                ? "Completed"
                : "Mark Complete"}
            </button>

          </div>

        </div>
      )}

    </div>
  );
}