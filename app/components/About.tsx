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
      const p = Math.max(0, Math.min(1, -rect.top / el.offsetHeight));
      progress.set(p);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [progress]);

  // Titre — 4 lignes, légèrement compressées pour loger la 4e
  const line1Op  = useTransform(progress, [0.05, 0.12], [0, 1]);
  const line1Y   = useTransform(progress, [0.05, 0.12], [18, 0]);
  const line2Op  = useTransform(progress, [0.11, 0.18], [0, 1]);
  const line2Y   = useTransform(progress, [0.11, 0.18], [18, 0]);
  const line3Op  = useTransform(progress, [0.17, 0.24], [0, 1]);
  const line3Y   = useTransform(progress, [0.17, 0.24], [18, 0]);
  const line4Op  = useTransform(progress, [0.23, 0.30], [0, 1]);
  const line4Y   = useTransform(progress, [0.23, 0.30], [18, 0]);

  const sepOp      = useTransform(progress, [0.29, 0.37], [0, 1]);
  const photoOp    = useTransform(progress, [0.28, 0.42], [0, 1]);
  const photoScale = useTransform(progress, [0.28, 0.42], [1.04, 1]);
  const statsOp    = useTransform(progress, [0.38, 0.50], [0, 1]);

  // t1 splitté en deux phrases
  const t1Op  = useTransform(progress, [0.46, 0.57], [0, 1]);
  const t1bOp = useTransform(progress, [0.53, 0.63], [0, 1]);

  const t2Op  = useTransform(progress, [0.55, 0.66], [0, 1]);
  const t3Op  = useTransform(progress, [0.64, 0.75], [0, 1]);
  const t4Op  = useTransform(progress, [0.73, 0.86], [0, 1]);

  // Traits — échos du fil, bas en opacité
  const t1LineScaleX = useTransform(progress, [0.63, 0.96], [0, 1]);
  const t4LineScaleX = useTransform(progress, [0.86, 0.99], [0, 1]);
  const t1LineOp     = useTransform(t1bOp, [0, 1], [0, 0.38]);
  const t4LineOp     = useTransform(t4Op,  [0, 1], [0, 0.30]);

  // Emphasis pour la ScrollLine gauche
  const t1Emphasis = useTransform(progress, [0.46, 0.63, 0.75, 0.86], [0, 1, 1, 0]);
  const t4Emphasis = useTransform(progress, [0.73, 0.86, 0.96, 1.0],  [0, 1, 1, 0]);

  useEffect(() => {
    const dispatch = () => {
      const factor = Math.max(t1Emphasis.get(), t4Emphasis.get());
      window.dispatchEvent(new CustomEvent("line-emphasis", { detail: { factor } }));
    };
    const unsub1 = t1Emphasis.on("change", dispatch);
    const unsub2 = t4Emphasis.on("change", dispatch);
    return () => { unsub1(); unsub2(); };
  }, [t1Emphasis, t4Emphasis]);

  return (
    <div ref={ref} style={{ height: "500vh", position: "relative" }}>
      <div
        className="sticky top-20 overflow-hidden flex flex-col px-8 pt-12 pb-8"
        style={{ height: "calc(100vh - 80px)", backgroundColor: "var(--color-ivoire)" }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
          <span
            className="absolute -right-8 top-1/2 -translate-y-1/2 font-black leading-none whitespace-nowrap uppercase"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(100px, 18vw, 260px)", color: "var(--color-vert)", opacity: 0.06 }}
          >
            À Propos
          </span>
        </div>
        <div className="max-w-7xl mx-auto w-full flex flex-col h-full">

          <span
            className="text-xs uppercase tracking-[0.3em] mb-8 block shrink-0"
            style={{ color: "var(--color-noir)", opacity: 0.9 }}
          >
            01 — À propos
          </span>

          <h2
            className="text-4xl lg:text-5xl font-black uppercase leading-tight shrink-0"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-noir)" }}
          >
            <motion.span className="block" style={{ opacity: line1Op, y: line1Y }}>7 ans.</motion.span>
            <motion.span className="block" style={{ opacity: line2Op, y: line2Y }}>À produire du contenu.</motion.span>
            <motion.span className="block" style={{ opacity: line3Op, y: line3Y, color: "var(--color-vert)" }}>Encore.</motion.span>
            <motion.span className="block" style={{ opacity: line4Op, y: line4Y, color: "var(--color-vert)" }}>Et encore.</motion.span>
          </h2>

          <motion.div className="w-full h-px my-5 shrink-0" style={{ backgroundColor: "var(--color-noir)", opacity: sepOp }} />

          <div className="flex-1 grid grid-cols-2 gap-16 min-h-0">

            {/* Photo + stats */}
            <div className="flex flex-col gap-6 min-h-0">
              <motion.div
                className="relative w-full flex-1 min-h-0 overflow-hidden"
                style={{ opacity: photoOp, scale: photoScale }}
              >
                <Image src="/images/photo-profil.png" alt="Guillaume Michel" fill className="object-cover object-top" sizes="(max-width: 1280px) 45vw, 560px" />
              </motion.div>

              <motion.div className="flex gap-12 shrink-0" style={{ opacity: statsOp }}>
                <div>
                  <p className="text-[64px] font-black leading-none" style={{ fontFamily: "var(--font-display)", color: "var(--color-vert)" }}>7</p>
                  <p className="text-[10px] uppercase tracking-[0.25em] mt-2" style={{ color: "var(--color-noir)", opacity: 0.9 }}>ans d&apos;expérience</p>
                </div>
                <div>
                  <p className="text-[64px] font-black leading-none" style={{ fontFamily: "var(--font-display)", color: "var(--color-vert)" }}>10+</p>
                  <p className="text-[10px] uppercase tracking-[0.25em] mt-2" style={{ color: "var(--color-noir)", opacity: 0.9 }}>recommandations</p>
                </div>
              </motion.div>
            </div>

            {/* Texte */}
            <div className="flex flex-col justify-center gap-5">

              {/* Pivot — deux phrases séparées */}
              <div>
                <motion.p className="text-lg font-light leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "var(--color-noir)", opacity: t1Op }}>
                  Puis j&apos;ai compris.
                </motion.p>
                <motion.p className="text-lg font-light leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "var(--color-noir)", opacity: t1bOp }}>
                  Ce n&apos;était pas ça.
                </motion.p>
                <motion.div
                  className="h-px mt-2"
                  style={{
                    backgroundColor: "var(--color-rouge)",
                    scaleX: t1LineScaleX,
                    transformOrigin: "left center",
                    opacity: t1LineOp,
                  }}
                />
              </div>

              {/* Citation — avec respiration */}
              <motion.div className="pl-4 border-l-2" style={{ borderColor: "var(--color-rouge)", opacity: t2Op }}>
                <p className="text-sm font-light leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "var(--color-noir)" }}>
                  Les marques n&apos;ont pas besoin d&apos;écrire plus.
                </p>
                <p className="text-sm font-light leading-relaxed mt-3" style={{ fontFamily: "var(--font-body)", color: "var(--color-noir)" }}>
                  Un fil.<br />
                  Une voix.<br />
                  Un récit qui tienne.
                </p>
              </motion.div>

              <motion.p className="text-base font-black uppercase tracking-tight" style={{ fontFamily: "var(--font-display)", color: "var(--color-noir)", opacity: t3Op }}>
                Je structure.<br />Je relie.<br />Je donne une trajectoire.
              </motion.p>

              <div>
                <motion.p className="text-xl" style={{ fontFamily: "var(--font-accent)", color: "var(--color-vert)", opacity: t4Op }}>
                  Tu ne feras pas plus de bruit.<br />Tu donneras plus de sens.
                </motion.p>
                <motion.div
                  className="h-px mt-3"
                  style={{
                    backgroundColor: "var(--color-vert)",
                    scaleX: t4LineScaleX,
                    transformOrigin: "left center",
                    opacity: t4LineOp,
                  }}
                />
              </div>

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
      <div className="md:hidden relative" style={{ backgroundColor: "var(--color-ivoire)" }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
          <span
            className="absolute -right-8 top-1/2 -translate-y-1/2 font-black leading-none whitespace-nowrap uppercase"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(100px, 35vw, 260px)", color: "var(--color-vert)", opacity: 0.06 }}
          >
            À Propos
          </span>
        </div>
        <div className="w-full px-8 pt-24 pb-16 max-w-7xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] mb-8 block" style={{ color: "var(--color-noir)", opacity: 0.9 }}>
            01 — À propos
          </span>
          <motion.h2
            className="text-4xl font-black uppercase leading-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-noir)" }}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, ease: EASE }}
          >
            7 ans.<br />
            À produire du contenu.<br />
            <span style={{ color: "var(--color-vert)" }}>Encore.</span><br />
            <span style={{ color: "var(--color-vert)" }}>Et encore.</span>
          </motion.h2>
        </div>

        <div className="h-px w-full" style={{ backgroundColor: "var(--color-noir)", opacity: 0.1 }} />

        <div className="max-w-7xl mx-auto px-8 py-16 flex flex-col gap-8">
          <motion.div
            className="relative w-full aspect-4/5 overflow-hidden"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 1.3, ease: EASE }}
          >
            <Image src="/images/photo-profil.png" alt="Guillaume Michel" fill className="object-cover object-top" sizes="100vw" />
          </motion.div>

          <div className="flex gap-16">
            <div>
              <p className="text-[80px] font-black leading-none" style={{ fontFamily: "var(--font-display)", color: "var(--color-vert)" }}>7</p>
              <p className="text-[10px] uppercase tracking-[0.25em] mt-2" style={{ color: "var(--color-noir)", opacity: 0.9 }}>ans d&apos;expérience</p>
            </div>
            <div>
              <p className="text-[80px] font-black leading-none" style={{ fontFamily: "var(--font-display)", color: "var(--color-vert)" }}>10+</p>
              <p className="text-[10px] uppercase tracking-[0.25em] mt-2" style={{ color: "var(--color-noir)", opacity: 0.9 }}>recommandations</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.3, ease: EASE }}>
            <p className="text-xl font-light leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "var(--color-noir)" }}>
              Puis j&apos;ai compris.
            </p>
            <p className="text-xl font-light leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "var(--color-noir)" }}>
              Ce n&apos;était pas ça.
            </p>
          </motion.div>

          <motion.div className="pl-4 border-l-2" style={{ borderColor: "var(--color-rouge)" }}
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.3, delay: 0.1, ease: EASE }}>
            <p className="text-lg font-light leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "var(--color-noir)" }}>
              Les marques n&apos;ont pas besoin d&apos;écrire plus.
            </p>
            <p className="text-lg font-light leading-relaxed mt-3" style={{ fontFamily: "var(--font-body)", color: "var(--color-noir)" }}>
              Un fil.<br />
              Une voix.<br />
              Un récit qui tienne.
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
