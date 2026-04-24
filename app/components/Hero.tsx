import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: "var(--color-vert)" }}
    >

      {/* Personnage qui déborde en bas à droite */}
      <div className="absolute bottom-[-80px] right-[-60px] w-[520px] h-[640px] lg:w-[640px] lg:h-[780px] pointer-events-none">
        <Image
          src="/images/logo-character.png"
          alt="Le personnage DW"
          fill
          className="object-contain object-bottom"
          style={{ filter: "brightness(0) invert(1)", opacity: 0.12 }}
          priority
        />
      </div>

      {/* Contenu */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pt-32 pb-24 flex flex-col gap-10">

        {/* Label éditorial */}
        <span
          className="text-xs uppercase tracking-[0.3em]"
          style={{ color: "var(--color-ivoire)", opacity: 0.4 }}
        >
          Storyteller Stratégique
        </span>

        {/* Intro — petit, léger, avec accent gauche */}
        <p
          className="text-xl md:text-2xl font-light leading-relaxed pl-4 border-l-2"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--color-ivoire)",
            opacity: 0.7,
            borderColor: "var(--color-rouge)",
          }}
        >
          Du contenu,<br />
          tout le monde en fait.
        </p>

        {/* Titre principal */}
        <h1
          className="text-[52px] md:text-[68px] lg:text-[88px] font-black leading-none tracking-tight uppercase"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-ivoire)" }}
        >
          Un récit cohérent,<br />
          <span style={{ color: "var(--color-rouge)" }}>beaucoup moins.</span>
        </h1>

        {/* Signature Arkipelago */}
        <p
          className="text-2xl md:text-3xl lg:text-4xl"
          style={{ fontFamily: "var(--font-accent)", color: "var(--color-ivoire)", opacity: 0.65 }}
        >
          On se retrouve de l'autre côté du miroir.
        </p>

        {/* CTA + scroll hint */}
        <div className="flex items-center gap-12 mt-2">
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
        </div>

      </div>
    </section>
  );
}
