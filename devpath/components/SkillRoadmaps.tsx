import {
  Braces,
  Code,
  Coffee,
  Database,
  GitBranch,
  Globe,
  Layers,
  Network,
  Package,
  Server,
  Terminal,
  Zap,
} from "lucide-react";

const skills = [
  { name: "JavaScript", icon: Braces },
  { name: "Python", icon: Terminal },
  { name: "Java", icon: Coffee },
  { name: "React", icon: Code },
  { name: "Node.js", icon: Server },
  { name: "SQL", icon: Database },
  { name: "Git", icon: GitBranch },
  { name: "HTML", icon: Globe },
  { name: "CSS", icon: Layers },
  { name: "Docker", icon: Package },
  { name: "System Design", icon: Network },
  { name: "TypeScript", icon: Zap },
];

export default function SkillRoadmaps() {
  return (
    <section className="border-b border-white/10 px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-gray-600">
            Master a Technology
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Skill-Based Roadmaps
          </h2>

          <p className="mt-3 max-w-xl text-gray-500">
            Focus on one technology and follow a structured path
            to master it from the fundamentals to advanced concepts.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <button
                key={skill.name}
                className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <Icon
                  size={25}
                  className="text-gray-500 transition group-hover:text-white"
                />

                <span className="text-sm text-gray-400 transition group-hover:text-white">
                  {skill.name}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}