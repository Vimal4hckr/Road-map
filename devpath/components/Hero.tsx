import { ArrowRight, Search, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* Background decoration */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-100/70 blur-3xl" />

      <div className="absolute right-0 top-20 h-64 w-64 rounded-full bg-sky-100 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 py-24 text-center sm:py-32">

        {/* Badge */}
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">

          <Sparkles size={14} />

          Learn • Build • Grow

        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">

          Master Technology

          <br />

          <span className="text-blue-600">
            Step by Step.
          </span>

        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
          Follow structured learning roadmaps, master modern
          technologies, build real projects, and become
          job-ready.
        </p>

        {/* Search */}
        <div className="mx-auto mt-10 max-w-2xl">

          <div className="flex items-center rounded-2xl border border-blue-200 bg-white p-2 shadow-xl shadow-blue-100/60">

            <Search
              size={21}
              className="ml-3 shrink-0 text-blue-500"
            />

            <input
              type="text"
              placeholder="Search a roadmap, skill or technology..."
              className="w-full bg-transparent px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />

            <button className="hidden rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:block">
              Search
            </button>

          </div>

        </div>

        {/* Popular */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm">

          <span className="mr-2 text-slate-400">
            Popular:
          </span>

          {[
            "JavaScript",
            "Python",
            "React",
            "Java",
            "AI / ML",
          ].map((item) => (
            <button
              key={item}
              className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-blue-600 transition hover:border-blue-200 hover:bg-blue-100"
            >
              {item}
            </button>
          ))}

        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">

          <a
            href="/roadmaps"
            className="group flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
          >
            Explore Roadmaps

            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />

          </a>

          <button className="rounded-xl border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50">
            How It Works
          </button>

        </div>

      </div>

    </section>
  );
}