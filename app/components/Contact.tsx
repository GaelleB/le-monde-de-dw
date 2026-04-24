import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--color-vert)" }}
    >
      {/* Personnage miroir — bas gauche */}
      <div className="absolute -bottom-7.5 -left-5 w-557h-67.sm:-bottom-12.5sm:-left-10m:wsm:w-90h-[440px] lg:-bottom-20llg:-left-15wlg:w-160h-[780px] pointer-events-none" style={{ transform: "scaleX(-1)" }}>
        <Image
          src="/images/logo-character.png"
          alt=""
          fill
          className="object-contain object-bottom"
          style={{ filter: "brightness(0) invert(1)", opacity: 0.12 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-32 flex flex-col gap-12">

        {/* Label */}
        <span
          className="text-xs uppercase tracking-[0.3em]"
          style={{ color: "var(--color-ivoire)", opacity: 0.4 }}
        >
          04 — Contact
        </span>

        {/* Accroche */}
        <div className="flex flex-col gap-6 max-w-3xl">
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
            Tu veux arrêter de communiquer et commencer à incarner quelque chose de clair ?
            Parlons-en.
          </p>
        </div>

        {/* Séparateur */}
        <div className="w-12 h-px" style={{ backgroundColor: "var(--color-ivoire)", opacity: 0.25 }} />

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
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
        </div>

        {/* Signature */}
        <p
          className="text-2xl md:text-3xl mt-8"
          style={{ fontFamily: "var(--font-accent)", color: "var(--color-ivoire)", opacity: 0.5 }}
        >
          On se retrouve de l&apos;autre côté du miroir.
        </p>

      </div>
    </section>
  );
}
