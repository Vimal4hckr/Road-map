"use client";

import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import type { RoadmapNode } from "@/data/roadmapDetails";

type Props = {
  nodes: RoadmapNode[];
};

export default function InteractiveRoadmap({ nodes }: Props) {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const [completed, setCompleted] = useState<string[]>([]);

  function toggleComplete(id: string) {
    setCompleted((current) => {
      if (current.includes(id)) {
        return current.filter((item) => item !== id);
      }

      return [...current, id];
    });
  }

  return (
    <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-xl shadow-blue-100/50 sm:p-10">

      {/* Progress */}
      <div className="mb-10 rounded-2xl bg-blue-50 p-5">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm font-semibold text-slate-900">
              Your Progress
            </p>

            <p className="mt-1 text-xs text-slate-500">
              {completed.length} of {nodes.length} topics completed
            </p>
          </div>

          <div className="text-lg font-bold text-blue-600">
            {Math.round((completed.length / nodes.length) * 100)}%
          </div>

        </div>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-blue-100">

          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-500"
            style={{
              width: `${(completed.length / nodes.length) * 100}%`,
            }}
          />

        </div>

      </div>

      {/* Roadmap */}
      <div className="relative mx-auto max-w-3xl">

        {/* Vertical line */}
        <div className="absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-1 -translate-x-1/2 rounded-full bg-blue-100 md:block" />

        <div className="space-y-10">

          {nodes.map((node, index) => {

            const isCompleted = completed.includes(node.id);
            const isSelected = selectedNode === node.id;

            return (
              <div
                key={node.id}
                className="relative"
              >

                {/* Connector */}
                {index !== nodes.length - 1 && (
                  <div className="mx-auto h-10 w-1 bg-blue-100 md:hidden" />
                )}

                <div className="grid items-center gap-6 md:grid-cols-[1fr_70px_1fr]">

                  {/* Left */}
                  <div
                    className={`hidden md:block ${
                      index % 2 === 0
                        ? "text-right"
                        : ""
                    }`}
                  >
                    {index % 2 === 0 && (
                      <NodeCard
                        node={node}
                        selected={isSelected}
                        completed={isCompleted}
                        onClick={() =>
                          setSelectedNode(
                            isSelected ? null : node.id
                          )
                        }
                      />
                    )}
                  </div>

                  {/* Center */}
                  <div className="relative z-10 flex justify-center">

                    <button
                      onClick={() =>
                        toggleComplete(node.id)
                      }
                      className={`flex h-16 w-16 items-center justify-center rounded-full border-4 bg-white shadow-lg transition ${
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
                  <div>
                    {index % 2 !== 0 ? (
                      <NodeCard
                        node={node}
                        selected={isSelected}
                        completed={isCompleted}
                        onClick={() =>
                          setSelectedNode(
                            isSelected ? null : node.id
                          )
                        }
                      />
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </div>

                </div>

                {/* Mobile */}
                <div className="mt-5 md:hidden">

                  <NodeCard
                    node={node}
                    selected={isSelected}
                    completed={isCompleted}
                    onClick={() =>
                      setSelectedNode(
                        isSelected ? null : node.id
                      )
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
  onClick: () => void;
};

function NodeCard({
  node,
  selected,
  completed,
  onClick,
}: NodeCardProps) {
  return (
    <div
      className={`rounded-2xl border bg-white p-5 shadow-sm transition ${
        completed
          ? "border-green-200 bg-green-50/40"
          : selected
            ? "border-blue-400 shadow-lg shadow-blue-100"
            : "border-blue-100 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100"
      }`}
    >

      <button
        onClick={onClick}
        className="flex w-full items-start justify-between gap-4 text-left"
      >

        <div>

          <div className="flex items-center gap-2">

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

      {selected && (
        <div className="mt-5 border-t border-blue-100 pt-5">

          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-blue-600">
            Topics
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

        </div>
      )}

      {completed && (
        <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-green-600">
          <Check size={14} />
          Completed
        </div>
      )}

    </div>
  );
}