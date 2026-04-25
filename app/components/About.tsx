"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as const;

function AboutDesktop() {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useMotionValue(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      // progress 0 = section top at viewport top
      // progress 1 = section bottom at viewport top (section fully scrolled past)
      const p = Math.max(0, Math.min(1, -rect.top / el.offsetHeight));
      progress.set(p);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [progress]);

  const line1Op  = useTransform(progress, [0.05, 0.14], [0, 1]);
  const line1Y   = useTransform(progress, [0.05, 0.14], [18, 0]);
  const line2Op  = useTransform(progress, [0.13, 0.22], [0, 1]);
  const line2Y   = useTransform(progress, [0.13, 0.22], [18, 0]);
  const line3Op  = useTransform(progress, [0.21, 0.30], [0, 1]);
  const line3Y   = useTransform(progress, [0.21, 0.30], [18, 0]);
  const sepOp    = useTransform(progress, [0.29, 0.37], [0, 1]);
  const photoOp    = useTransform(progress, [0.28, 0.42], [0, 1]);
  const photoScale = useTransform(progress, [0.28, 0.42], [1.04, 1]);
  const statsOp  = useTransform(progress, [0.38, 0.50], [0, 1]);
  const t1Op     = useTransform(progress, [0.46, 0.57], [0, 1]);
  const t2Op     = useTransform(progress, [0.55, 0.66], [0, 1]);
  const t3Op     = useTransform(progress, [0.64, 0.75], [0, 1]);
  const t4Op     = useTransform(progress, [0.73, 0.86], [0, 1]);

  return (
    <div ref={ref} style={{ height: "500vh", position: "relative" }}>
      <div
        className="sticky top-20 overflow-hidden flex flex-col px-8 pt-12 pb-8"
        style={{ height: "calc(100vh - 80px)" }}
        style={{ backgroundColor: "var(--color-ivoire)" }}
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col h-full">

          <span
            className="text-xs uppercase tracking-[0.3em] mb-8 block shrink-0"
            style={{ color: "var(--color-noir)", opacity: 0.35 }}
          >
            01 — À propos
          </span>

          <h2
            className="text-5xl lg:text-6xl font-black uppercase leading-tight shrink-0"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-noir)" }}
          >
            <motion.span className="block" style={{ opacity: line1Op, y: line1Y }}>J'ai passé 7 ans</motion.span>
            <motion.span className="block" style={{ opacity: line2Op, y: line2Y }}>à produire du contenu.</motion.span>
            <motion.span className="block" style={{ opacity: line3Op, y: line3Y, color: "var(--color-vert)" }}>Beaucoup de contenu.</motion.span>
          </h2>

          <motion.div className="w-full h-px my-8 shrink-0" style={{ backgroundColor: "var(--color-noir)", opacity: sepOp }} />

          <div className="flex-1 grid grid-cols-2 gap-16 min-h-0">

            {/* Photo + stats */}
            <div className="flex flex-col gap-6">
              <motion.div
                className="relative w-full overflow-hidden"
                style={{ height: "42vh", opacity: photoOp, scale: photoScale }}
              >
                <Image src="/images/photo-profil.png" alt="Guillaume Michel" fill className="object-cover object-top" sizes="(max-width: 1280px) 45vw, 560px" />
              </motion.div>

              <motion.div className="flex gap-12" style={{ opacity: statsOp }}>
                <div>
                  <p className="text-[64px] font-black leading-none" style={{ fontFamily: "var(--font-display)", color: "var(--color-vert)" }}>7</p>
                  <p className="text-[10px] uppercase tracking-[0.25em] mt-2" style={{ color: "var(--color-noir)", opacity: 0.45 }}>ans d'expérience</p>
                </div>
                <div>
                  <p className="text-[64px] font-black leading-none" style={{ fontFamily: "var(--font-display)", color: "var(--color-vert)" }}>10+</p>
                  <p className="text-[10px] uppercase tracking-[0.25em] mt-2" style={{ color: "var(--color-noir)", opacity: 0.45 }}>recommandations</p>
                </div>
              </motion.div>
            </div>

            {/* Texte */}
            <div className="flex flex-col justify-center gap-7">
              <motion.p className="text-lg font-light leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "var(--color-noir)", opacity: t1Op }}>
                Puis j'ai compris que ce n'était pas le problème.
              </motion.p>

              <motion.div className="pl-4 border-l-2" style={{ borderColor: "var(--color-rouge)", opacity: t2Op }}>
                <p className="text-sm font-light leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "var(--color-noir)", opacity: 0.8 }}>
                  La plupart des marques n'ont pas besoin d'écrire plus.<br />
                  Elles ont besoin d'un fil. D'une voix. D'un récit qui tienne.
                </p>
              </motion.div>

              <motion.p className="text-base font-black uppercase tracking-tight" style={{ fontFamily: "var(--font-display)", color: "var(--color-noir)", opacity: t3Op }}>
                Je structure.<br />Je relie.<br />Je donne une trajectoire.
              </motion.p>

              <motion.p className="text-xl" style={{ fontFamily: "var(--font-accent)", color: "var(--color-vert)", opacity: t4Op }}>
                Tu ne feras pas plus de bruit.<br />Tu donneras plus de sens.
              </motion.p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div id="a-propos">

      {/* Desktop */}
      <div className="hidden md:block">
        <AboutDesktop />
      </div>

      {/* Mobile */}
      <div className="md:hidden" style={{ backgroundColor: "var(--color-ivoire)" }}>
        <div className="w-full px-8 pt-24 pb-16 max-w-7xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] mb-8 block" style={{ color: "var(--color-noir)", opacity: 0.35 }}>
            01 — À propos
          </span>
          <h2 className="text-4xl font-black uppercase leading-tight" style={{ fontFamily: "var(--font-display)", color: "var(--color-noir)" }}>
            J'ai passé 7 ans<br />
            à produire du contenu.<br />
            <span style={{ color: "var(--color-vert)" }}>Beaucoup de contenu.</span>
          </h2>
        </div>

        <div className="h-px w-full" style={{ backgroundColor: "var(--color-noir)", opacity: 0.1 }} />

        <div className="max-w-7xl mx-auto px-8 py-16 flex flex-col gap-8">
          <motion.div
            className="relative w-full aspect-[4/5] overflow-hidden"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 1.3, ease: EASE }}
          >
            <Image src="/images/photo-profil.png" alt="Guillaume Michel" fill className="object-cover object-top" sizes="100vw" />
          </motion.div>

          <div className="flex gap-16">
            <div>
              <p className="text-[80px] font-black leading-none" style={{ fontFamily: "var(--font-display)", color: "var(--color-vert)" }}>7</p>
              <p className="text-[10px] uppercase tracking-[0.25em] mt-2" style={{ color: "var(--color-noir)", opacity: 0.45 }}>ans d'expérience</p>
            </div>
            <div>
              <p className="text-[80px] font-black leading-none" style={{ fontFamily: "var(--font-display)", color: "var(--color-vert)" }}>10+</p>
              <p className="text-[10px] uppercase tracking-[0.25em] mt-2" style={{ color: "var(--color-noir)", opacity: 0.45 }}>recommandations</p>
            </div>
          </div>

          <motion.p className="text-xl font-light leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "var(--color-noir)" }}
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.3, ease: EASE }}>
            Puis j'ai compris que ce n'était pas le problème.
          </motion.p>

          <motion.div className="pl-4 border-l-2" style={{ borderColor: "var(--color-rouge)" }}
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.3, delay: 0.1, ease: EASE }}>
            <p className="text-lg font-light leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "var(--color-noir)", opacity: 0.8 }}>
              La plupart des marques n'ont pas besoin d'écrire plus.<br />
              Elles ont besoin d'un fil. D'une voix. D'un récit qui tienne.
            </p>
          </motion.div>

          <motion.p className="text-xl font-black uppercase tracking-tight" style={{ fontFamily: "var(--font-display)", color: "var(--color-noir)" }}
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.3, ease: EASE }}>
            Je structure.<br />Je relie.<br />Je donne une trajectoire.
          </motion.p>

          <motion.p className="text-2xl" style={{ fontFamily: "var(--font-accent)", color: "var(--color-vert)" }}
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.3, ease: EASE }}>
            Tu ne feras pas plus de bruit.<br />Tu donneras plus de sens.
          </motion.p>
        </div>
      </div>

    </div>
  );
}
