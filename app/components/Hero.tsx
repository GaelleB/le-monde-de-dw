"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.28, delayChildren: 0.5 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.3, ease: EASE } },
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: "var(--color-vert)" }}
    >

      {/* Personnage qui déborde en bas à droite */}
      <motion.div
        className="absolute -bottom-7.5 -right-5 w-55 h-67.5 sm:-bottom-12.5 sm:-right-10 sm:w-90 sm:h-110 lg:-bottom-20 lg:-right-15 lg:w-160 lg:h-195 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1, ease: "easeOut" }}
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

      {/* Contenu */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-8 pt-32 pb-24 flex flex-col gap-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >

        <motion.span
          className="text-xs uppercase tracking-[0.3em]"
          style={{ color: "var(--color-ivoire)", opacity: 0.4 }}
          variants={item}
        >
          Storyteller Stratégique
        </motion.span>

        <motion.p
          className="text-xl md:text-2xl font-light leading-relaxed pl-4 border-l-2"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--color-ivoire)",
            opacity: 0.7,
            borderColor: "var(--color-rouge)",
          }}
          variants={item}
        >
          Du contenu,<br />
          tout le monde en fait.
        </motion.p>

        <motion.h1
          className="text-[36px] sm:text-[52px] md:text-[68px] lg:text-[88px] font-black leading-none tracking-tight uppercase"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-ivoire)" }}
          variants={item}
        >
          Un récit cohérent,<br />
          <span style={{ color: "var(--color-rouge)" }}>beaucoup moins.</span>
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl lg:text-4xl"
          style={{ fontFamily: "var(--font-accent)", color: "var(--color-ivoire)", opacity: 0.65 }}
          variants={item}
        >
          On se retrouve de l'autre côté du miroir.
        </motion.p>

        <motion.div className="flex items-center gap-12 mt-2" variants={item}>
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

      </motion.div>
    </section>
  );
}
