import {
  ArrowUpRight,
  Brain,
  Code2,
  Database,
  Layers3,
  Server,
  Settings2,
} from "lucide-react";

const roadmaps = [
  {
    title: "Frontend Developer",
    description:
      "Learn HTML, CSS, JavaScript, React and modern frontend development.",
    icon: Code2,
  },
  {
    title: "Backend Developer",
    description:
      "Master APIs, databases, authentication, servers and backend systems.",
    icon: Server,
  },
  {
    title: "Full Stack Developer",
    description:
      "Build complete applications from frontend to backend and deployment.",
    icon: Layers3,
  },
  {
    title: "AI / ML Engineer",
    description:
      "Learn machine learning, deep learning, AI systems and modern AI tools.",
    icon: Brain,
  },
  {
    title: "Data Scientist",
    description:
      "Learn Python, statistics, data analysis and machine learning.",
    icon: Database,
  },
  {
    title: "DevOps Engineer",
    description:
      "Master Linux, Docker, Kubernetes, CI/CD and cloud infrastructure.",
    icon: Settings2,
  },
];

export default function RoadmapSection() {
  return (
    <section
      id="roadmaps"
      className="border-b border-white/10 px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-gray-600">
              Career Paths
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Role-Based Roadmaps
            </h2>

            <p className="mt-3 max-w-xl text-gray-500">
              Choose a career path and follow a structured journey
              from beginner to professional.
            </p>
          </div>

          <button className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-white">
            View all roadmaps
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {roadmaps.map((roadmap) => {
            const Icon = roadmap.icon;

            return (
              <div
                key={roadmap.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
              >
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Icon
                      size={21}
                      className="text-gray-300"
                    />
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-gray-600 transition group-hover:text-white"
                  />
                </div>

                <h3 className="text-lg font-semibold">
                  {roadmap.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {roadmap.description}
                </p>

                <div className="mt-6 text-sm text-gray-400 transition group-hover:text-white">
                  Explore roadmap →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}