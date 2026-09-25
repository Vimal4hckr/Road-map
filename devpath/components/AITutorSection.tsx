import { ArrowRight, Bot, MessageCircle, Sparkles } from "lucide-react";

export default function AITutorSection() {
  return (
    <section id="ai-tutor" className="border-b border-white/10 px-6 py-24">
      <div className="mx-auto max-w-5xl">

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12">

          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/[0.04] blur-3xl" />

          <div className="relative">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
              <Bot size={24} />
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-500">
              <Sparkles size={14} />
              AI Powered Learning
            </div>

            <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-5xl">
              Your Personal
              <br />
              <span className="text-gray-500">
                AI Learning Tutor.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-gray-400">
              Ask questions, get explanations, debug your code,
              create learning plans and understand difficult
              concepts with an AI tutor designed for developers.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <button className="flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black hover:bg-gray-200">
                Try AI Tutor
                <ArrowRight size={16} />
              </button>

              <button className="flex items-center justify-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm text-gray-300 hover:bg-white/5">
                <MessageCircle size={16} />
                Learn More
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}