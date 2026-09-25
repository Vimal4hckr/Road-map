const stats = [
  {
    value: "50+",
    label: "Learning Roadmaps",
  },
  {
    value: "500+",
    label: "Learning Topics",
  },
  {
    value: "100+",
    label: "Practical Projects",
  },
  {
    value: "1000+",
    label: "Learning Resources",
  },
];

export default function StatsSection() {
  return (
    <section className="border-b border-white/10 px-6 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">

        {stats.map((stat) => (
          <div key={stat.label} className="text-center">

            <div className="text-3xl font-bold sm:text-4xl">
              {stat.value}
            </div>

            <div className="mt-2 text-sm text-gray-600">
              {stat.label}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}