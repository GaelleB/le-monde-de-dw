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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo-black.svg"
            alt="Le Monde de DW"
            width={180}
            height={90}
            className="w-36 h-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </Link>

        {/* Liens */}
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

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex px-6 py-3 text-xs font-bold uppercase tracking-widest transition-opacity hover:opacity-85"
          style={{ backgroundColor: "var(--color-rouge)", color: "var(--color-blanc)" }}
        >
          Prendre contact
        </a>

      </div>
    </nav>
  );
}
