import {
  ArrowUpRight,
  BookOpen,
  FileCode2,
  Lightbulb,
  Terminal,
} from "lucide-react";

const guides = [
  {
    title: "JavaScript Fundamentals",
    description:
      "Understand variables, functions, arrays, objects and modern JavaScript.",
    category: "JavaScript",
    icon: FileCode2,
  },
  {
    title: "Git & GitHub Guide",
    description:
      "Learn version control, branches, commits, pull requests and collaboration.",
    category: "Git",
    icon: Terminal,
  },
  {
    title: "System Design Basics",
    description:
      "Learn how scalable software systems are designed and architected.",
    category: "System Design",
    icon: Lightbulb,
  },
  {
    title: "Programming Fundamentals",
    description:
      "Build strong programming fundamentals before moving into frameworks.",
    category: "Programming",
    icon: BookOpen,
  },
];

export default function GuideSection() {
  return (
    <section id="guides" className="border-b border-white/10 px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gray-600">
              Learn Something New
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Developer Guides
            </h2>

            <p className="mt-3 max-w-xl text-gray-500">
              Practical explanations that help you understand
              the technologies behind modern software.
            </p>
          </div>

          <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white">
            View all guides
            <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {guides.map((guide) => {
            const Icon = guide.icon;

            return (
              <article
                key={guide.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/20 hover:bg-white/[0.04]"
              >
                <div className="flex items-start justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Icon size={20} className="text-gray-400" />
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-gray-600 transition group-hover:text-white"
                  />

                </div>

                <div className="mt-6 text-xs uppercase tracking-wider text-gray-600">
                  {guide.category}
                </div>

                <h3 className="mt-2 text-lg font-semibold">
                  {guide.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {guide.description}
                </p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}