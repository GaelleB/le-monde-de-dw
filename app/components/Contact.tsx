"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--color-vert)" }}
    >
      {/* Personnage miroir — bas gauche */}
      <div className="absolute -bottom-7.5 -left-5 w-55 h-67.5 sm:-bottom-12.5 sm:-left-10 sm:w-90 sm:h-110 lg:-bottom-20 lg:-left-15 lg:w-160 lg:h-195 pointer-events-none" style={{ transform: "scaleX(-1)" }}>
        <Image
          src="/images/logo-character.png"
          alt=""
          fill
          className="object-contain object-bottom"
          style={{ filter: "brightness(0) invert(1)", opacity: 0.12 }}
          sizes="(max-width: 640px) 220px, (max-width: 1024px) 360px, 640px"
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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-none"
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
            style={{
              borderColor: "var(--color-ivoire)",
              color: "var(--color-ivoire)",
            }}
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
    </section>
  );
}
