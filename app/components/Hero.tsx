import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "var(--color-bordeaux)" }}
    >
      {/* Texture halftone */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "url('/textures/halftone.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "300px",
        }}
      />

      {/* Personnage ancré en bas à droite */}
      <div className="absolute bottom-0 right-0 w-[480px] h-[600px] lg:w-[580px] lg:h-[720px] pointer-events-none">
        <Image
          src="/images/logo-character.png"
          alt="Le personnage DW"
          fill
          className="object-contain object-bottom"
          style={{ filter: "brightness(0) invert(1)", opacity: 0.15 }}
          priority
        />
      </div>

      {/* Contenu */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-24">
        <div className="max-w-2xl flex flex-col gap-8">

          <span
            className="text-2xl md:text-3xl"
            style={{ fontFamily: "var(--font-accent)", color: "var(--color-ivoire)", opacity: 0.75 }}
          >
            Sois la différence, et non l'indifférence
          </span>

          <h1
            className="text-5xl md:text-6xl lg:text-8xl font-black leading-none tracking-tight uppercase"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-ivoire)" }}
          >
            Ton histoire.<br />
            <span style={{ color: "var(--color-rouge)" }}>Ta différence.</span>
          </h1>

          <p
            className="text-lg font-light leading-relaxed max-w-md"
            style={{ fontFamily: "var(--font-body)", color: "var(--color-ivoire)", opacity: 0.8 }}
          >
            Crée un contenu qui te ressemble, gagne en visibilité et attire tes clients idéaux.
          </p>

          <a
            href="#contact"
            className="self-start px-8 py-4 text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-85"
            style={{ backgroundColor: "var(--color-rouge)", color: "var(--color-blanc)" }}
          >
            Commencer mon histoire
          </a>
        </div>
      </div>

    </section>
  );
}
