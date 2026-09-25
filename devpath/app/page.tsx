import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <Navbar />

      <section className="flex min-h-[calc(100vh-64px)] items-center justify-center px-6">
        <div className="text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
            DevPath
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Master Your
            <br />
            <span className="text-gray-500">Tech Career.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Follow structured technology roadmaps, build real projects,
            practice your skills, and grow from beginner to professional.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200">
              Explore Roadmaps
            </button>

            <button className="rounded-lg border border-white/15 px-6 py-3 font-medium text-gray-300 transition hover:bg-white/5 hover:text-white">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}