import {
  ArrowRight,
  BarChart3,
  Cloud,
  ShoppingCart,
  Smartphone,
} from "lucide-react";

const projects = [
  {
    title: "Weather Application",
    level: "Beginner",
    description:
      "Build a weather application using an API and display real-time weather information.",
    icon: Cloud,
  },
  {
    title: "Expense Tracker",
    level: "Beginner",
    description:
      "Create an application to manage income, expenses and financial summaries.",
    icon: BarChart3,
  },
  {
    title: "E-Commerce Platform",
    level: "Intermediate",
    description:
      "Build a complete online store with products, cart, authentication and payments.",
    icon: ShoppingCart,
  },
  {
    title: "Social Media App",
    level: "Advanced",
    description:
      "Build a social platform with users, posts, comments, likes and real-time features.",
    icon: Smartphone,
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="border-b border-white/10 px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gray-600">
            Build Real Things
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Practice With Projects
          </h2>

          <p className="mt-3 max-w-xl text-gray-500">
            Turn what you learn into practical projects that
            strengthen your portfolio and your skills.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <Icon
                  size={25}
                  className="text-gray-500 transition group-hover:text-white"
                />

                <div className="mt-6 text-xs uppercase tracking-wider text-gray-600">
                  {project.level}
                </div>

                <h3 className="mt-2 font-semibold">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {project.description}
                </p>

                <button className="mt-6 flex items-center gap-2 text-sm text-gray-400 hover:text-white">
                  View project
                  <ArrowRight size={15} />
                </button>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}