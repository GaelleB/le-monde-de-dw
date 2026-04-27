"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    icon: "/icons/icone-boussole.png",
    title: "À compléter",
    description: "Description du service à renseigner par Guillaume.",
    cta: "En savoir plus",
  },
  {
    icon: "/icons/icone-cle.png",
    title: "À compléter",
    description: "Description du service à renseigner par Guillaume.",
    cta: "En savoir plus",
  },
  {
    icon: "/icons/icone-gemme.png",
    title: "À compléter",
    description: "Description du service à renseigner par Guillaume.",
    cta: "En savoir plus",
  },
];

function ServicesDesktop() {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useMotionValue(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const p = Math.max(0, Math.min(1, -el.getBoundingClientRect().top / el.offsetHeight));
      progress.set(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [progress]);

  const headerOp = useTransform(progress, [0.02, 0.16], [0, 1]);
  const card1Op  = useTransform(progress, [0.18, 0.36], [0, 1]);
  const card2Op  = useTransform(progress, [0.38, 0.56], [0, 1]);
  const card3Op  = useTransform(progress, [0.58, 0.76], [0, 1]);

  const cardOps = [card1Op, card2Op, card3Op];

  return (
    <div ref={ref} style={{ height: "360vh", position: "relative" }}>
      <div
        className="sticky top-20 flex flex-col px-8 pt-12 pb-8"
        style={{ height: "calc(100vh - 80px)", backgroundColor: "var(--color-vert)" }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
          <span
            className="absolute -right-8 top-1/2 -translate-y-1/2 font-black leading-none whitespace-nowrap uppercase"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(100px, 18vw, 260px)", color: "var(--color-ivoire)", opacity: 0.06 }}
          >
            Services
          </span>
        </div>
        <div className="max-w-7xl mx-auto w-full flex flex-col h-full">

          <motion.div
            className="flex flex-col gap-4 shrink-0 mb-10"
            style={{ opacity: headerOp }}
          >
            <span
              className="text-xs uppercase tracking-[0.3em]"
              style={{ color: "var(--color-blanc)" }}
            >
              02 — Services
            </span>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-ivoire)" }}
            >
              Ce que je fais<br />
              <span style={{ color: "var(--color-blanc)" }}>pour toi.</span>
            </h2>
          </motion.div>

          <div className="flex-1 grid grid-cols-3 gap-8 min-h-0">
            {services.map((s, i) => (
              <motion.div
                key={i}
                className="flex flex-col gap-6 p-8 border"
                style={{ borderColor: "var(--color-ivoire)", opacity: cardOps[i] }}
              >
                <div className="relative w-10 h-10 shrink-0">
                  <Image
                    src={s.icon}
                    alt={s.title}
                    fill
                    className="object-contain"
                    style={{ filter: "brightness(0) invert(1)", opacity: 0.7 }}
                    sizes="40px"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <h3
                    className="text-lg font-black uppercase tracking-tight"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-ivoire)" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-sm font-light leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", color: "var(--color-ivoire)" }}
                  >
                    {s.description}
                  </p>
                </div>

                <a
                  href="#contact"
                  aria-label={`${s.cta} — ${s.title}`}
                  className="self-start text-xs font-bold uppercase tracking-widest mt-auto pt-4 border-b pb-px transition-opacity hover:opacity-60"
                  style={{ color: "var(--color-blanc)", borderColor: "var(--color-blanc)" }}
                >
                  {s.cta} →
                </a>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" style={{ backgroundColor: "var(--color-vert)" }}>

      {/* Desktop scrollytelling */}
      <div className="hidden md:block">
        <ServicesDesktop />
      </div>

      {/* Mobile */}
      <div className="md:hidden relative" style={{ backgroundColor: "var(--color-vert)" }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
          <span
            className="absolute -right-8 top-1/2 -translate-y-1/2 font-black leading-none whitespace-nowrap uppercase"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(100px, 35vw, 260px)", color: "var(--color-ivoire)", opacity: 0.06 }}
          >
            Services
          </span>
        </div>
        <div className="max-w-7xl mx-auto px-8 py-24 flex flex-col gap-16">

          <div className="flex flex-col gap-6">
            <span
              className="text-xs uppercase tracking-[0.3em]"
              style={{ color: "var(--color-blanc)" }}
            >
              02 — Services
            </span>
            <h2
              className="text-4xl font-black uppercase leading-tight"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-ivoire)" }}
            >
              Ce que je fais<br />
              <span style={{ color: "var(--color-blanc)" }}>pour toi.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                className="flex flex-col gap-6 p-8 border"
                style={{ borderColor: "var(--color-ivoire)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.2, delay: i * 0.15, ease: EASE }}
              >
                <div className="relative w-10 h-10">
                  <Image
                    src={s.icon}
                    alt={s.title}
                    fill
                    className="object-contain"
                    style={{ filter: "brightness(0) invert(1)", opacity: 0.7 }}
                    sizes="40px"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <h3
                    className="text-lg font-black uppercase tracking-tight"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-ivoire)" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-sm font-light leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", color: "var(--color-ivoire)" }}
                  >
                    {s.description}
                  </p>
                </div>

                <a
                  href="#contact"
                  aria-label={`${s.cta} — ${s.title}`}
                  className="self-start text-xs font-bold uppercase tracking-widest mt-auto pt-4 border-b pb-px transition-opacity hover:opacity-60"
                  style={{ color: "var(--color-blanc)", borderColor: "var(--color-blanc)" }}
                >
                  {s.cta} →
                </a>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
