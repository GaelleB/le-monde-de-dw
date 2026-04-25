"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const featured = {
  quote:
    "Écrire un bon post, ce n'est pas juste balancer une idée bien tournée. C'est raconter une histoire qui accroche et qui marque. Guillaume m'a aidé à revoir complètement ma façon d'écrire et à créer des contenus qui engagent réellement mon audience.",
  name: "Kévin de Blasiis",
  title: "Préparateur Physique",
};

const testimonials = [
  {
    quote:
      "Il écoute vraiment, comprend vite, et transforme ce que tu n'arrives pas à formuler en quelque chose de cohérent et utile. Pas de bla-bla, juste un fil directeur qui fait sens.",
    name: "Noémie Boidin",
    title: "Office Manager indépendante",
  },
  {
    quote:
      "Il a analysé avec précision mes contenus, pointé les axes d'amélioration et m'a donné des conseils concrets pour rendre mes accroches plus percutantes. Ses retours étaient clairs, pertinents et immédiatement actionnables.",
    name: "Vanessa Cauchois",
    title: "CEO & Experte en délégation",
  },
  {
    quote:
      "Un esprit vif qui relève rapidement et efficacement les besoins. Nous avons relancé ensemble la communication de nos marques. Un travail d'équipe tout en autonomie.",
    name: "Sabrina Renaudat",
    title: 'Fondatrice "Le Jardin de Gabriel"',
  },
];

function TestimonialsDesktop() {
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

  const sepOp       = useTransform(progress, [0.02, 0.09], [0, 1]);
  const featuredOp  = useTransform(progress, [0.07, 0.22], [0, 1]);
  const t1Op        = useTransform(progress, [0.25, 0.38], [0, 1]);
  const t2Op        = useTransform(progress, [0.37, 0.50], [0, 1]);
  const t3Op        = useTransform(progress, [0.49, 0.62], [0, 1]);

  return (
    <div ref={ref} style={{ height: "500vh", position: "relative" }}>
      <div
        className="sticky top-20 overflow-hidden flex flex-col px-8 pt-12 pb-8"
        style={{ height: "calc(100vh - 80px)", backgroundColor: "var(--color-ivoire)" }}
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col h-full">

          {/* Label */}
          <span
            className="text-xs uppercase tracking-[0.3em] mb-6 block shrink-0"
            style={{ color: "var(--color-noir)", opacity: 0.4 }}
          >
            03 — Témoignages
          </span>

          {/* Séparateur */}
          <motion.div
            className="w-full h-px mb-8 shrink-0"
            style={{ backgroundColor: "var(--color-noir)", opacity: sepOp }}
          />

          {/* Encadré vedette */}
          <motion.div
            className="relative overflow-hidden p-10 shrink-0"
            style={{ backgroundColor: "var(--color-vert)", opacity: featuredOp }}
          >
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{ backgroundImage: "url('/textures/halftone.png')", backgroundRepeat: "repeat", backgroundSize: "300px" }}
            />
            <div className="relative z-10 flex flex-col gap-4 max-w-3xl">
              <span
                className="text-7xl font-black"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-rouge)", lineHeight: 0.8 }}
              >
                "
              </span>
              <p
                className="text-xl lg:text-2xl font-light leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "var(--color-ivoire)" }}
              >
                {featured.quote}
              </p>
              <div className="flex flex-col gap-1 mt-2">
                <p className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--color-rouge)" }}>{featured.name}</p>
                <p className="text-xs uppercase tracking-widest" style={{ color: "var(--color-ivoire)", opacity: 0.45 }}>{featured.title}</p>
              </div>
            </div>
          </motion.div>

          {/* 3 citations secondaires */}
          <div className="flex-1 grid grid-cols-3 gap-12 mt-10 min-h-0">
            {[
              { op: t1Op, t: testimonials[0] },
              { op: t2Op, t: testimonials[1] },
              { op: t3Op, t: testimonials[2] },
            ].map(({ op, t }) => (
              <motion.div key={t.name} className="flex flex-col gap-5" style={{ opacity: op }}>
                <p
                  className="text-sm font-light leading-loose"
                  style={{ fontFamily: "var(--font-body)", color: "var(--color-noir)", opacity: 0.8 }}
                >
                  "{t.quote}"
                </p>
                <div className="pt-5 border-t" style={{ borderColor: "var(--color-noir)", opacity: 1 }}>
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--color-rouge)" }}>{t.name}</p>
                  <p className="text-xs uppercase tracking-widest mt-1" style={{ color: "var(--color-noir)", opacity: 0.4 }}>{t.title}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <div id="temoignages">

      {/* Desktop scrollytelling */}
      <div className="hidden md:block">
        <TestimonialsDesktop />
      </div>

      {/* Mobile */}
      <div className="md:hidden" style={{ backgroundColor: "var(--color-ivoire)" }}>
        <div className="max-w-7xl mx-auto px-8 pt-24 pb-12">
          <span className="text-xs uppercase tracking-[0.3em]" style={{ color: "var(--color-noir)", opacity: 0.4 }}>
            03 — Témoignages
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-8 pb-4">
          <div className="relative overflow-hidden p-10" style={{ backgroundColor: "var(--color-vert)" }}>
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{ backgroundImage: "url('/textures/halftone.png')", backgroundRepeat: "repeat", backgroundSize: "300px" }}
            />
            <div className="relative z-10 flex flex-col gap-6 max-w-3xl">
              <span className="text-8xl font-black" style={{ fontFamily: "var(--font-display)", color: "var(--color-rouge)", lineHeight: 0.8 }}>"</span>
              <p className="text-2xl font-light leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "var(--color-ivoire)" }}>{featured.quote}</p>
              <div className="flex flex-col gap-1 mt-2">
                <p className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--color-rouge)" }}>{featured.name}</p>
                <p className="text-xs uppercase tracking-widest" style={{ color: "var(--color-ivoire)", opacity: 0.45 }}>{featured.title}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="grid grid-cols-1 gap-16">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="flex flex-col gap-6"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.15, ease: EASE }}
              >
                <p className="text-base font-light leading-loose" style={{ fontFamily: "var(--font-body)", color: "var(--color-noir)", opacity: 0.8 }}>
                  "{t.quote}"
                </p>
                <div className="pt-6 border-t" style={{ borderColor: "var(--color-noir)" }}>
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--color-rouge)" }}>{t.name}</p>
                  <p className="text-xs uppercase tracking-widest mt-1" style={{ color: "var(--color-noir)", opacity: 0.4 }}>{t.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
