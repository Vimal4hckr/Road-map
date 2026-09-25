import {
  ArrowRight,
  BookOpen,
  Code2,
  Laptop,
} from "lucide-react";

const beginnerPaths = [
  {
    title: "Computer Science",
    description:
      "Start with programming fundamentals, algorithms, data structures and computer science basics.",
    icon: BookOpen,
  },
  {
    title: "Web Development",
    description:
      "Learn HTML, CSS, JavaScript and build your first websites from scratch.",
    icon: Code2,
  },
  {
    title: "Programming",
    description:
      "Understand programming logic, variables, functions, loops and problem solving.",
    icon: Laptop,
  },
];

export default function BeginnerSection() {
  return (
    <section className="border-b border-blue-100 bg-gradient-to-b from-blue-50 to-white px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-gray-600">
            Starting From Zero
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Beginner Roadmaps
          </h2>

          <p className="mt-3 max-w-xl text-slate-500">
            No previous experience? Start here and build your
            foundation step by step.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {beginnerPaths.map((path) => {
            const Icon = path.icon;

            return (
              <div
                key={path.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:border-white/20 hover:bg-white/[0.04]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Icon size={22} className="text-gray-300" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {path.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {path.description}
                </p>

                <button className="mt-6 flex items-center gap-2 text-sm text-gray-400 transition group-hover:text-white">
                  Start learning
                  <ArrowRight size={15} />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}