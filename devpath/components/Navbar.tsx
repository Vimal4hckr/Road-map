"use client";

import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080808]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black">
            D
          </span>

          <span>
            Dev<span className="text-gray-400">Path</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          <a
            href="#roadmaps"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Roadmaps
          </a>

          <a
            href="#guides"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Guides
          </a>

          <a
            href="#projects"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Projects
          </a>

          <a
            href="#ai-tutor"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            AI Tutor
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <button className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-white/10 hover:text-white">
            <Search size={18} />
          </button>

          <button className="rounded-lg border border-white/15 px-4 py-2 text-sm text-gray-300 transition hover:border-white/30 hover:bg-white/5 hover:text-white">
            Login
          </button>

          <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-gray-200">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-300 hover:bg-white/10 md:hidden"
        >
          {mobileMenu ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenu && (
        <div className="border-t border-white/10 bg-[#080808] px-4 py-5 md:hidden">
          <nav className="flex flex-col gap-4">
            <a
              href="#roadmaps"
              onClick={() => setMobileMenu(false)}
              className="text-gray-300 hover:text-white"
            >
              Roadmaps
            </a>

            <a
              href="#guides"
              onClick={() => setMobileMenu(false)}
              className="text-gray-300 hover:text-white"
            >
              Guides
            </a>

            <a
              href="#projects"
              onClick={() => setMobileMenu(false)}
              className="text-gray-300 hover:text-white"
            >
              Projects
            </a>

            <a
              href="#ai-tutor"
              onClick={() => setMobileMenu(false)}
              className="text-gray-300 hover:text-white"
            >
              AI Tutor
            </a>

            <div className="flex gap-3 border-t border-white/10 pt-4">
              <button className="flex-1 rounded-lg border border-white/15 px-4 py-2 text-sm text-gray-300">
                Login
              </button>

              <button className="flex-1 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black">
                Get Started
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}