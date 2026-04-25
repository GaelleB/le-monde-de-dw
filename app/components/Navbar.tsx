"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "À propos",     href: "#a-propos" },
  { label: "Services",     href: "#services" },
  { label: "Témoignages",  href: "#temoignages" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          paddingBlock: scrolled ? "12px" : "20px",
          backgroundColor: scrolled ? "rgba(27, 27, 27, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="shrink-0" onClick={() => setMenuOpen(false)}>
            <Image
              src="/images/logo-black.svg"
              alt="Le Monde de DW"
              width={180}
              height={90}
              className="w-32 h-auto"
              style={{ filter: "brightness(0) invert(1)" }}
              priority
            />
          </Link>

          {/* Liens desktop */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium uppercase tracking-widest transition-opacity hover:opacity-60"
                  style={{ color: "var(--color-ivoire)" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA desktop */}
          <a
            href="#contact"
            className="hidden md:inline-flex px-6 py-3 text-xs font-bold uppercase tracking-widest transition-opacity hover:opacity-85"
            style={{ backgroundColor: "var(--color-rouge)", color: "var(--color-blanc)" }}
          >
            Prendre contact
          </a>

          {/* Hamburger mobile */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.25 w-8 h-8 shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <span
              className="block w-full h-px transition-all duration-300"
              style={{
                backgroundColor: "var(--color-ivoire)",
                transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block w-full h-px transition-all duration-300"
              style={{
                backgroundColor: "var(--color-ivoire)",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-full h-px transition-all duration-300"
              style={{
                backgroundColor: "var(--color-ivoire)",
                transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
              }}
            />
          </button>

        </div>
      </nav>

      {/* Menu mobile overlay */}
      <div
        className="fixed inset-0 z-40 flex flex-col justify-center px-8 transition-opacity duration-300 md:hidden"
        style={{
          backgroundColor: "var(--color-noir)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        <nav className="flex flex-col gap-8 pt-24">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-4xl font-black uppercase tracking-tight"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-ivoire)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="self-start mt-4 px-8 py-4 text-xs font-bold uppercase tracking-widest"
            style={{ backgroundColor: "var(--color-rouge)", color: "var(--color-blanc)" }}
          >
            Prendre contact
          </a>
        </nav>
      </div>
    </>
  );
}
