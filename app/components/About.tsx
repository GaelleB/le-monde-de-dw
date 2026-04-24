import Image from "next/image";

export default function About() {
  return (
    <section
      id="a-propos"
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--color-ivoire)" }}
    >
      {/* Bloc accroche — pleine largeur */}
      <div
        className="w-full px-8 pt-24 pb-16 max-w-7xl mx-auto"
      >
        <span
          className="text-xs uppercase tracking-[0.3em] mb-8 block"
          style={{ color: "var(--color-noir)", opacity: 0.35 }}
        >
          02 — À propos
        </span>

        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-noir)" }}
        >
          J'ai passé 7 ans<br />
          à produire du contenu.<br />
          <span style={{ color: "var(--color-vert)" }}>Beaucoup de contenu.</span>
        </h2>
      </div>

      {/* Séparateur */}
      <div className="w-full h-px max-w-7xl mx-auto px-8">
        <div className="h-px w-full" style={{ backgroundColor: "var(--color-noir)", opacity: 0.1 }} />
      </div>

      {/* Deux colonnes — photo + texte */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Colonne photo */}
        <div className="flex flex-col gap-8">
          <div className="relative w-full aspect-[4/5] overflow-hidden">
            <Image
              src="/images/photo-profil.png"
              alt="Guillaume Michel"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Stat */}
          <div className="flex gap-16">
            <div>
              <p
                className="text-[80px] font-black leading-none"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-vert)" }}
              >
                7
              </p>
              <p
                className="text-[10px] uppercase tracking-[0.25em] mt-2"
                style={{ color: "var(--color-noir)", opacity: 0.45 }}
              >
                ans d'expérience
              </p>
            </div>
            <div>
              <p
                className="text-[80px] font-black leading-none"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-vert)" }}
              >
                10+
              </p>
              <p
                className="text-[10px] uppercase tracking-[0.25em] mt-2"
                style={{ color: "var(--color-noir)", opacity: 0.45 }}
              >
                recommandations
              </p>
            </div>
          </div>
        </div>

        {/* Colonne texte */}
        <div className="flex flex-col gap-10 lg:pt-4">

          <p
            className="text-xl md:text-2xl font-light leading-relaxed"
            style={{ fontFamily: "var(--font-body)", color: "var(--color-noir)" }}
          >
            Puis j'ai compris que ce n'était pas le problème.
          </p>

          <div
            className="flex flex-col gap-4 pl-4 border-l-2"
            style={{ borderColor: "var(--color-rouge)" }}
          >
            <p
              className="text-lg font-light leading-relaxed"
              style={{ fontFamily: "var(--font-body)", color: "var(--color-noir)", opacity: 0.8 }}
            >
              La plupart des marques n'ont pas besoin d'écrire plus.<br />
              Elles ont besoin d'un fil. D'une voix. D'un récit qui tienne.
            </p>
          </div>

          <p
            className="text-xl md:text-2xl font-black uppercase tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-noir)" }}
          >
            Je structure.<br />
            Je relie.<br />
            Je donne une trajectoire.
          </p>

          <p
            className="text-2xl md:text-3xl"
            style={{ fontFamily: "var(--font-accent)", color: "var(--color-vert)" }}
          >
            Tu ne feras pas plus de bruit.<br />
            Tu donneras plus de sens.
          </p>

        </div>
      </div>

    </section>
  );
}
