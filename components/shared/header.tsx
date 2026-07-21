"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "./container";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  // { href: "#blog", label: "Blog" },
  { href: "#projects", label: "Projects" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    // initialize active from the URL hash if present
    if (typeof window !== "undefined") {
      setActive(window.location.hash || null);

      const onHashChange = () => setActive(window.location.hash || null);
      window.addEventListener("hashchange", onHashChange);
      return () => window.removeEventListener("hashchange", onHashChange);
    }
    return;
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <Container className="flex h-20 min-h-[5rem] items-center justify-between gap-4">
        <Link
          href="/"
          className="font-semibold uppercase tracking-[0.32em] text-sm text-white transition hover:text-white/80"
        >
          portfolio
        </Link>

        <div className="flex flex-1 items-center justify-end gap-4">
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  `transition hover:text-white ${active === item.href ? "bg-white/10 rounded-full px-4 py-2 text-white" : ""}`
                }
                onClick={() => setActive(item.href)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/resume.pdf"
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/10"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </Link>
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {menuOpen ? (
        <nav className="md:hidden border-t border-white/10 bg-black/95 px-6 pb-5 pt-4">
          <div className="flex flex-col gap-3 text-sm text-white/80">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-2xl border border-white/10 px-4 py-3 transition hover:border-white/20 hover:bg-white/5 hover:text-white ${
                  active === item.href ? "bg-white/10 text-white" : ""
                }`}
                onClick={() => {
                  setMenuOpen(false);
                  setActive(item.href);
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 px-4 py-3 text-white transition hover:border-white/20 hover:bg-white/5"
              onClick={() => setMenuOpen(false)}
            >
              Download CV
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
