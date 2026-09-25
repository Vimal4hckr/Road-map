import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Clock3,
} from "lucide-react";

import type { Roadmap } from "@/data/roadmaps";

type Props = {
  roadmap: Roadmap;
};

export default function RoadmapCard({ roadmap }: Props) {
  return (
    <Link
      href={`/roadmaps/${roadmap.slug}`}
      className="group block rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100"
    >
      <div className="flex items-start justify-between">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
          <BookOpen
            size={20}
            className="text-blue-600"
          />
        </div>

        <ArrowUpRight
          size={18}
          className="text-slate-300 transition group-hover:text-blue-600"
        />

      </div>

      <div className="mt-6">

        <div className="flex flex-wrap gap-2">

          <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-medium text-blue-600">
            {roadmap.category}
          </span>

          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-500">
            {roadmap.level}
          </span>

        </div>

        <h3 className="mt-4 text-lg font-bold text-slate-900">
          {roadmap.title}
        </h3>

        <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
          {roadmap.description}
        </p>

        <div className="mt-5 flex items-center gap-4 border-t border-blue-100 pt-5 text-xs text-slate-400">

          <span className="flex items-center gap-1.5">
            <BookOpen size={14} />
            {roadmap.topics} topics
          </span>

          <span className="flex items-center gap-1.5">
            <Clock3 size={14} />
            {roadmap.duration}
          </span>

        </div>

      </div>
    </Link>
  );
}