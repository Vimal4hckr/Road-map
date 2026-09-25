"use client";

import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
            D
          </span>

          <span>
            Dev<span className="text-blue-600">Path</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">

          <a
            href="/roadmaps"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Roadmaps
          </a>

          <a
            href="#guides"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Guides
          </a>

          <a
            href="#projects"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Projects
          </a>

          <a
            href="#ai-tutor"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            AI Tutor
          </a>

        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-3 md:flex">

          <button className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-blue-50 hover:text-blue-600">
            <Search size={18} />
          </button>

          <button className="rounded-lg border border-blue-200 px-4 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-50">
            Login
          </button>

          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700">
            Get Started
          </button>

        </div>

        {/* Mobile */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-600 md:hidden"
        >
          {mobileMenu ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="border-t border-blue-100 bg-white px-4 py-5 md:hidden">

          <nav className="flex flex-col gap-4">

            <a
              href="/roadmaps"
              onClick={() => setMobileMenu(false)}
              className="font-medium text-slate-600 hover:text-blue-600"
            >
              Roadmaps
            </a>

            <a
              href="#guides"
              onClick={() => setMobileMenu(false)}
              className="font-medium text-slate-600 hover:text-blue-600"
            >
              Guides
            </a>

            <a
              href="#projects"
              onClick={() => setMobileMenu(false)}
              className="font-medium text-slate-600 hover:text-blue-600"
            >
              Projects
            </a>

            <a
              href="#ai-tutor"
              onClick={() => setMobileMenu(false)}
              className="font-medium text-slate-600 hover:text-blue-600"
            >
              AI Tutor
            </a>

            <div className="flex gap-3 border-t border-blue-100 pt-4">

              <button className="flex-1 rounded-lg border border-blue-200 px-4 py-2 text-sm font-medium text-blue-600">
                Login
              </button>

              <button className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white">
                Get Started
              </button>

            </div>

          </nav>

        </div>
      )}
    </header>
  );
}