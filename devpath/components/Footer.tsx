import {
  ArrowUpRight,
  Globe,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-14">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">

            <div className="flex items-center gap-2 text-xl font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black">
                D
              </span>

              <span>
                Dev<span className="text-slate-500">Path</span>
              </span>
            </div>

            <p className="mt-5 max-w-md text-sm leading-6 text-slate-500">
              A structured learning platform for developers.
              Learn the right skills, build real projects,
              and grow your technology career.
            </p>

            {/* Social / External Links */}
            <div className="mt-6 flex gap-3">

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-500 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
                aria-label="Website"
              >
                <Globe size={17} />
              </a>

              <a
                href="mailto:hello@devpath.dev"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-500 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
                aria-label="Email"
              >
                <Mail size={17} />
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-500 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
                aria-label="External link"
              >
                <ArrowUpRight size={17} />
              </a>

            </div>

          </div>

          {/* Platform */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Platform
            </h3>

            <div className="mt-5 space-y-3 text-sm text-slate-500">

              <a
                className="block transition hover:text-white"
                href="#roadmaps"
              >
                Roadmaps
              </a>

              <a
                className="block transition hover:text-white"
                href="#guides"
              >
                Guides
              </a>

              <a
                className="block transition hover:text-white"
                href="#projects"
              >
                Projects
              </a>

              <a
                className="block transition hover:text-white"
                href="#ai-tutor"
              >
                AI Tutor
              </a>

            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Resources
            </h3>

            <div className="mt-5 space-y-3 text-sm text-slate-500">

              <a
                className="block transition hover:text-white"
                href="#"
              >
                About
              </a>

              <a
                className="block transition hover:text-white"
                href="#"
              >
                Community
              </a>

              <a
                className="block transition hover:text-white"
                href="#"
              >
                Documentation
              </a>

              <a
                className="block transition hover:text-white"
                href="#"
              >
                Contact
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col justify-between gap-4 pt-8 text-xs text-gray-600 sm:flex-row">

          <p>
            © 2026 DevPath. All rights reserved.
          </p>

          <div className="flex gap-5">

            <a
              href="#"
              className="transition hover:text-gray-400"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition hover:text-gray-400"
            >
              Terms
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}