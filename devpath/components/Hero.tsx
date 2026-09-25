import { ArrowRight, Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.08),transparent_35%)]" />

      <div className="relative mx-auto max-w-5xl px-6 py-24 text-center sm:py-32">

        <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
          Learn • Build • Grow
        </div>

        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Learn Technology
          <br />
          <span className="text-gray-500">
            Without Getting Lost.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
          Follow structured learning roadmaps, master new technologies,
          build real projects, and become job-ready.
        </p>

        {/* Search */}
        <div className="mx-auto mt-10 max-w-2xl">
          <div className="flex items-center rounded-xl border border-white/15 bg-white/[0.04] p-2 shadow-2xl backdrop-blur">
            <Search
              size={22}
              className="ml-3 shrink-0 text-gray-500"
            />

            <input
              type="text"
              placeholder="Search a roadmap, skill or technology..."
              className="w-full bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600"
            />

            <button className="hidden rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-gray-200 sm:block">
              Search
            </button>
          </div>
        </div>

        {/* Popular */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm">
          <span className="mr-2 text-gray-600">
            Popular:
          </span>

          {["JavaScript", "Python", "React", "Java", "AI / ML"].map(
            (item) => (
              <button
                key={item}
                className="rounded-full border border-white/10 px-3 py-1.5 text-gray-400 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                {item}
              </button>
            )
          )}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <button className="group flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-gray-200">
            Explore Roadmaps

            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>

          <button className="rounded-lg border border-white/15 px-6 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/5 hover:text-white">
            How It Works
          </button>
        </div>
      </div>
    </section>
  );
}