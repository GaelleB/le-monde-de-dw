"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

function ContactDesktop() {
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

  const labelOp  = useTransform(progress, [0.02, 0.12], [0, 0.4]);
  const h2L1Op   = useTransform(progress, [0.10, 0.22], [0, 1]);
  const h2L2Op   = useTransform(progress, [0.20, 0.32], [0, 1]);
  const p1Op     = useTransform(progress, [0.30, 0.42], [0, 0.7]);
  const p2Op     = useTransform(progress, [0.40, 0.52], [0, 0.7]);
  const p3Op     = useTransform(progress, [0.50, 0.62], [0, 0.7]);
  const sepOp    = useTransform(progress, [0.52, 0.60], [0, 1]);
  const btnsOp   = useTransform(progress, [0.58, 0.70], [0, 1]);
  const accentOp = useTransform(progress, [0.68, 0.80], [0, 0.5]);
  const charOp   = useTransform(progress, [0.0,  0.22], [0, 1]);

  return (
    <div ref={ref} style={{ height: "280vh", position: "relative" }}>
      <div
        className="sticky top-20 flex flex-col px-8"
        style={{ height: "calc(100vh - 80px)", backgroundColor: "var(--color-vert)" }}
      >
        {/* Inner wrapper — position:relative for the absolute character */}
        <div className="relative h-full flex flex-col">

        {/* Character — overflows intentionally, mirrored */}
        <motion.div
          className="absolute -bottom-7.5 -left-5 w-55 h-67.5 lg:-bottom-20 lg:-left-15 lg:w-160 lg:h-195 pointer-events-none"
          style={{ opacity: charOp, scaleX: -1 }}
        >
          <Image
            src="/images/logo-character.png"
            alt=""
            fill
            className="object-contain object-bottom"
            style={{ filter: "brightness(0) invert(1)", opacity: 0.12 }}
            sizes="(max-width: 640px) 220px, (max-width: 1024px) 360px, 640px"
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col gap-8 h-full justify-center">

          <motion.span
            className="text-xs uppercase tracking-[0.3em]"
            style={{ color: "var(--color-ivoire)", opacity: labelOp }}
          >
            04 — Contact
          </motion.span>

          <div className="flex flex-col gap-5 max-w-3xl">
            <h2
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black uppercase leading-none"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-ivoire)" }}
            >
              <motion.span className="block" style={{ opacity: h2L1Op }}>Ton récit</motion.span>
              <motion.span className="block" style={{ opacity: h2L2Op, color: "var(--color-rouge)" }}>commence ici.</motion.span>
            </h2>

            <div className="flex flex-col" style={{ fontFamily: "var(--font-body)" }}>
              <motion.p
                className="text-xl font-light leading-relaxed max-w-md"
                style={{ color: "var(--color-ivoire)", opacity: p1Op }}
              >
                Tu veux arrêter de communiquer.
              </motion.p>
              <motion.p
                className="text-xl font-light leading-relaxed max-w-md"
                style={{ color: "var(--color-ivoire)", opacity: p2Op }}
              >
                Commencer à incarner quelque chose de clair.
              </motion.p>
              <motion.p
                className="text-xl font-light leading-relaxed max-w-md"
                style={{ color: "var(--color-ivoire)", opacity: p3Op }}
              >
                Parlons.
              </motion.p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
          <motion.div className="w-12 h-px" style={{ backgroundColor: "var(--color-ivoire)", opacity: sepOp }} />

          <motion.div className="flex flex-col sm:flex-row gap-4" style={{ opacity: btnsOp }}>
            <a
              href="https://calendly.com/dwauteur/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-center transition-opacity hover:opacity-85"
              style={{ backgroundColor: "var(--color-rouge)", color: "var(--color-blanc)" }}
            >
              Prendre rendez-vous
            </a>
            <a
              href="mailto:dwauteur@gmail.com"
              className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-center border transition-opacity hover:opacity-60"
              style={{ borderColor: "var(--color-ivoire)", color: "var(--color-ivoire)" }}
            >
              Envoyer un message
            </a>
          </motion.div>
          </div>{/* end separator+buttons group */}

          <motion.p
            className="text-2xl"
            style={{ fontFamily: "var(--font-accent)", color: "var(--color-ivoire)", opacity: accentOp }}
          >
            On se retrouve de l&apos;autre côté du miroir.
          </motion.p>

        </div>
        </div>{/* end inner relative wrapper */}
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" style={{ backgroundColor: "var(--color-vert)" }}>

      {/* Desktop scrollytelling */}
      <div className="hidden md:block">
        <ContactDesktop />
      </div>

      {/* Mobile */}
      <div className="md:hidden relative overflow-hidden" style={{ backgroundColor: "var(--color-vert)" }}>
        <div className="absolute -bottom-7.5 -left-5 w-55 h-67.5 pointer-events-none" style={{ transform: "scaleX(-1)" }}>
          <Image
            src="/images/logo-character.png"
            alt=""
            fill
            className="object-contain object-bottom"
            style={{ filter: "brightness(0) invert(1)", opacity: 0.12 }}
            sizes="220px"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-32 flex flex-col gap-12">

          <motion.span
            className="text-xs uppercase tracking-[0.3em]"
            style={{ color: "var(--color-ivoire)", opacity: 0.4 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, ease: EASE }}
          >
            04 — Contact
          </motion.span>

          <motion.div
            className="flex flex-col gap-6 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.4, ease: EASE }}
          >
            <h2
              className="text-4xl sm:text-5xl font-black uppercase leading-none"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-ivoire)" }}
            >
              Ton récit<br />
              <span style={{ color: "var(--color-rouge)" }}>commence ici.</span>
            </h2>

            <p
              className="text-xl font-light leading-relaxed max-w-md"
              style={{ fontFamily: "var(--font-body)", color: "var(--color-ivoire)", opacity: 0.7 }}
            >
              Tu veux arrêter de communiquer.<br />
              Commencer à incarner quelque chose de clair.<br />
              Parlons.
            </p>
          </motion.div>

          <div className="w-12 h-px" style={{ backgroundColor: "var(--color-ivoire)", opacity: 0.25 }} />

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, delay: 0.2, ease: EASE }}
          >
            <a
              href="https://calendly.com/dwauteur/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-center transition-opacity hover:opacity-85"
              style={{ backgroundColor: "var(--color-rouge)", color: "var(--color-blanc)" }}
            >
              Prendre rendez-vous
            </a>
            <a
              href="mailto:dwauteur@gmail.com"
              className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-center border transition-opacity hover:opacity-60"
              style={{ borderColor: "var(--color-ivoire)", color: "var(--color-ivoire)" }}
            >
              Envoyer un message
            </a>
          </motion.div>

          <motion.p
            className="text-2xl md:text-3xl mt-8"
            style={{ fontFamily: "var(--font-accent)", color: "var(--color-ivoire)", opacity: 0.5 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.5, delay: 0.3, ease: EASE }}
          >
            On se retrouve de l&apos;autre côté du miroir.
          </motion.p>

        </div>
      </div>

    </section>
  );
}
