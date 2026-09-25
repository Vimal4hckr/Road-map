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
      className="border-y border-blue-100 bg-blue-50/50 px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              Career Paths
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Role-Based Roadmaps
            </h2>

            <p className="mt-3 max-w-xl text-slate-500">
              Choose a career path and follow a structured journey
              from beginner to professional.
            </p>
          </div>

          <a
            href="/roadmaps"
            className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            View all roadmaps
            <ArrowUpRight size={16} />
          </a>

        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {roadmaps.map((roadmap) => {
            const Icon = roadmap.icon;

            return (
              <a
                href="/roadmaps"
                key={roadmap.title}
                className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100"
              >

                <div className="flex items-start justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                    <Icon
                      size={22}
                      className="text-blue-600"
                    />
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-slate-300 transition group-hover:text-blue-600"
                  />

                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-900">
                  {roadmap.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {roadmap.description}
                </p>

                <div className="mt-6 font-semibold text-blue-600">
                  Explore roadmap →
                </div>

              </a>
            );
          })}

        </div>

      </div>
    </section>
  );
}