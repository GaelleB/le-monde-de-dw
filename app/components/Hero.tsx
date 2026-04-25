"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

function HeroDesktop() {
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

  const intro1Op  = useTransform(progress, [0.0,  0.12], [0, 0.7]);
  const intro2Op  = useTransform(progress, [0.10, 0.22], [0, 0.7]);
  const intro3Op  = useTransform(progress, [0.20, 0.32], [0, 0.7]);
  const h1Line1Op = useTransform(progress, [0.30, 0.46], [0, 1]);
  const h1Line2Op = useTransform(progress, [0.44, 0.60], [0, 1]);
  const accentOp  = useTransform(progress, [0.58, 0.72], [0, 0.65]);
  const ctaOp     = useTransform(progress, [0.70, 0.84], [0, 1]);
  const charOp    = useTransform(progress, [0.0,  0.20], [0, 1]);

  return (
    <div ref={ref} style={{ height: "400vh", position: "relative" }}>
      <div
        className="sticky top-20 flex flex-col"
        style={{ height: "calc(100vh - 80px)", backgroundColor: "var(--color-vert)" }}
      >
        {/* Inner wrapper — position:relative for the absolute character */}
        <div className="relative h-full flex flex-col">

        {/* Character — overflows intentionally, no overflow-hidden */}
        <motion.div
          className="absolute -bottom-7.5 -right-5 w-55 h-67.5 lg:-bottom-20 lg:-right-15 lg:w-160 lg:h-195 pointer-events-none"
          style={{ opacity: charOp }}
        >
          <Image
            src="/images/logo-character.png"
            alt="Le personnage DW"
            fill
            className="object-contain object-bottom"
            style={{ filter: "brightness(0) invert(1)", opacity: 0.12 }}
            priority
            sizes="(max-width: 640px) 220px, (max-width: 1024px) 360px, 640px"
          />
        </motion.div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex flex-col gap-10 h-full justify-center">

          <span
            className="text-xs uppercase tracking-[0.3em]"
            style={{ color: "var(--color-ivoire)", opacity: 0.4 }}
          >
            Guillaume Michel - Storyteller Stratégique
          </span>

          <div className="flex flex-col">
            <motion.p
              className="text-xl md:text-2xl font-light leading-relaxed pl-4 border-l-2"
              style={{ fontFamily: "var(--font-body)", color: "var(--color-ivoire)", borderColor: "var(--color-rouge)", opacity: intro1Op }}
            >
              Tu publies.
            </motion.p>
            <motion.p
              className="text-xl md:text-2xl font-light leading-relaxed pl-4 border-l-2"
              style={{ fontFamily: "var(--font-body)", color: "var(--color-ivoire)", borderColor: "var(--color-rouge)", opacity: intro2Op }}
            >
              Encore.
            </motion.p>
            <motion.p
              className="text-xl md:text-2xl font-light leading-relaxed pl-4 border-l-2"
              style={{ fontFamily: "var(--font-body)", color: "var(--color-ivoire)", borderColor: "var(--color-rouge)", opacity: intro3Op }}
            >
              Et ça s&apos;accumule.
            </motion.p>
          </div>

          <h1
            className="text-[36px] sm:text-[52px] md:text-[68px] lg:text-[88px] font-black leading-none tracking-tight uppercase"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-ivoire)" }}
          >
            <motion.span className="block" style={{ opacity: h1Line1Op }}>Un récit cohérent,</motion.span>
            <motion.span className="block" style={{ opacity: h1Line2Op, color: "var(--color-rouge)" }}>beaucoup moins.</motion.span>
          </h1>

          <motion.p
            className="text-2xl md:text-3xl lg:text-4xl"
            style={{ fontFamily: "var(--font-accent)", color: "var(--color-ivoire)", opacity: accentOp }}
          >
            On se retrouve de l&apos;autre côté du miroir.
          </motion.p>

          <motion.div className="flex items-center gap-12 mt-2" style={{ opacity: ctaOp }}>
            <a
              href="#contact"
              className="px-8 py-4 text-xs font-bold uppercase tracking-widest transition-opacity hover:opacity-80"
              style={{ backgroundColor: "var(--color-rouge)", color: "var(--color-blanc)" }}
            >
              Commencer le récit
            </a>
            <span
              className="text-xs uppercase tracking-widest hidden md:block"
              style={{ color: "var(--color-ivoire)", opacity: 0.35 }}
            >
              Défiler ↓
            </span>
          </motion.div>

        </div>
        </div>{/* end inner relative wrapper */}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" style={{ backgroundColor: "var(--color-vert)" }}>

      {/* Desktop scrollytelling */}
      <div className="hidden md:block">
        <HeroDesktop />
      </div>

      {/* Mobile — time-based animations */}
      <div
        className="md:hidden relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ backgroundColor: "var(--color-vert)" }}
      >
        <div className="absolute -bottom-7.5 -right-5 w-55 h-67.5 pointer-events-none">
          <Image
            src="/images/logo-character.png"
            alt="Le personnage DW"
            fill
            className="object-contain object-bottom"
            style={{ filter: "brightness(0) invert(1)", opacity: 0.12 }}
            priority
            sizes="220px"
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pt-32 pb-24 flex flex-col gap-10">

          <motion.span
            className="text-xs uppercase tracking-[0.3em]"
            style={{ color: "var(--color-ivoire)", opacity: 0.4 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
          >
            Guillaume Michel - Storyteller Stratégique
          </motion.span>

          <motion.div
            className="flex flex-col pl-4 border-l-2"
            style={{ borderColor: "var(--color-rouge)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.3, delay: 0.5, ease: EASE }}
          >
            <p className="text-xl font-light leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "var(--color-ivoire)", opacity: 0.7 }}>
              Tu publies.<br />Encore.<br />Et ça s&apos;accumule.
            </p>
          </motion.div>

          <motion.h1
            className="text-[36px] font-black leading-none tracking-tight uppercase"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-ivoire)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.3, delay: 0.8, ease: EASE }}
          >
            Un récit cohérent,<br />
            <span style={{ color: "var(--color-rouge)" }}>beaucoup moins.</span>
          </motion.h1>

          <motion.p
            className="text-2xl"
            style={{ fontFamily: "var(--font-accent)", color: "var(--color-ivoire)", opacity: 0.65 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.65 }}
            transition={{ duration: 1.3, delay: 1.1, ease: EASE }}
          >
            On se retrouve de l&apos;autre côté du miroir.
          </motion.p>

          <motion.div
            className="flex items-center gap-12 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.3, delay: 1.4, ease: EASE }}
          >
            <a
              href="#contact"
              className="px-8 py-4 text-xs font-bold uppercase tracking-widest transition-opacity hover:opacity-80"
              style={{ backgroundColor: "var(--color-rouge)", color: "var(--color-blanc)" }}
            >
              Commencer le récit
            </a>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
