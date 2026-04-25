"use client";

import { useEffect } from "react";

export default function JumpHandler() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const section = document.getElementById(hash.slice(1));
      if (!section) return;

      e.preventDefault();

      // Desktop: saute au dernier moment où le sticky est encore entièrement dans le viewport
      // = section.offsetTop + sectionHeight - viewportHeight
      // Mobile: saute au début de la section
      const isDesktop = window.innerWidth >= 768;
      const targetY = isDesktop && section.offsetHeight > window.innerHeight
        ? section.offsetTop + section.offsetHeight - window.innerHeight
        : Math.max(0, section.offsetTop - 80);

      window.scrollTo({ top: targetY, behavior: "instant" });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
