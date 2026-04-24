"use client";

import { motion } from "framer-motion";

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

export default function Testimonials() {
  return (
    <section
      id="temoignages"
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--color-ivoire)" }}
    >
      {/* Label */}
      <div className="max-w-7xl mx-auto px-8 pt-24 pb-12">
        <motion.span
          className="text-xs uppercase tracking-[0.3em]"
          style={{ color: "var(--color-noir)", opacity: 0.4 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          03 — Témoignages
        </motion.span>
      </div>

      {/* Citation vedette */}
      <motion.div
        className="max-w-7xl mx-auto px-8 pb-4"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.4, ease: EASE }}
      >
        <div
          className="relative overflow-hidden p-10 md:p-14"
          style={{ backgroundColor: "var(--color-vert)" }}
        >
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: "url('/textures/halftone.png')",
              backgroundRepeat: "repeat",
              backgroundSize: "300px",
            }}
          />

          <div className="relative z-10 flex flex-col gap-6 max-w-3xl">
            <span
              className="text-8xl font-black"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-rouge)", lineHeight: 0.8 }}
            >
              "
            </span>
            <p
              className="text-2xl md:text-3xl font-light leading-relaxed"
              style={{ fontFamily: "var(--font-body)", color: "var(--color-ivoire)" }}
            >
              {featured.quote}
            </p>
            <div className="flex flex-col gap-1 mt-2">
              <p
                className="text-sm font-bold uppercase tracking-widest"
                style={{ color: "var(--color-rouge)" }}
              >
                {featured.name}
              </p>
              <p
                className="text-xs uppercase tracking-widest"
                style={{ color: "var(--color-ivoire)", opacity: 0.45 }}
              >
                {featured.title}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 3 citations secondaires */}
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="flex flex-col gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, delay: i * 0.22, ease: EASE }}
            >
              <p
                className="text-base font-light leading-loose"
                style={{ fontFamily: "var(--font-body)", color: "var(--color-noir)", opacity: 0.8 }}
              >
                "{t.quote}"
              </p>
              <div
                className="pt-6 border-t"
                style={{ borderColor: "var(--color-noir)", borderOpacity: 0.15 }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "var(--color-rouge)" }}
                >
                  {t.name}
                </p>
                <p
                  className="text-xs uppercase tracking-widest mt-1"
                  style={{ color: "var(--color-noir)", opacity: 0.4 }}
                >
                  {t.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
