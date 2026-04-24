import Image from "next/image";

const services = [
  {
    icon: "/icons/icone-boussole.png",
    title: "À compléter",
    description: "Description du service à renseigner par Guillaume.",
    cta: "En savoir plus",
  },
  {
    icon: "/icons/icone-cle.png",
    title: "À compléter",
    description: "Description du service à renseigner par Guillaume.",
    cta: "En savoir plus",
  },
  {
    icon: "/icons/icone-gemme.png",
    title: "À compléter",
    description: "Description du service à renseigner par Guillaume.",
    cta: "En savoir plus",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--color-vert)" }}
    >
      <div className="max-w-7xl mx-auto px-8 py-24 flex flex-col gap-16">

        {/* Label + titre */}
        <div className="flex flex-col gap-6">
          <span
            className="text-xs uppercase tracking-[0.3em]"
            style={{ color: "var(--color-ivoire)", opacity: 0.4 }}
          >
            02 — Services
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-ivoire)" }}
          >
            Ce que je fais<br />
            <span style={{ color: "var(--color-rouge)" }}>pour toi.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="flex flex-col gap-6 p-8 border"
              style={{ borderColor: "var(--color-ivoire)", opacity: 1, borderOpacity: 0.15 }}
            >
              <div className="relative w-10 h-10">
                <Image
                  src={s.icon}
                  alt={s.title}
                  fill
                  className="object-contain"
                  style={{ filter: "brightness(0) invert(1)", opacity: 0.7 }}
                />
              </div>

              <div className="flex flex-col gap-3">
                <h3
                  className="text-lg font-black uppercase tracking-tight"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-ivoire)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm font-light leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "var(--color-ivoire)", opacity: 0.65 }}
                >
                  {s.description}
                </p>
              </div>

              <a
                href="#contact"
                className="self-start text-xs font-bold uppercase tracking-widest mt-auto pt-4 border-b pb-px transition-opacity hover:opacity-60"
                style={{ color: "var(--color-rouge)", borderColor: "var(--color-rouge)" }}
              >
                {s.cta} →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
