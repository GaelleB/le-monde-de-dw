import Image from "next/image";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/guillaume-michel-storyteller-strategique/",
  },
  {
    label: "Substack",
    href: "https://guillaumemichelstorytelling.substack.com/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/lemondededw/",
  },
  {
    label: "TikTok",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{ backgroundColor: "var(--color-noir)" }}
    >
      <div className="max-w-7xl mx-auto px-8 py-16 flex flex-col gap-12">

        {/* Logo + tagline */}
        <div className="flex flex-col gap-5">
          <Image
            src="/images/logo-black.svg"
            alt="Le Monde de DW"
            width={220}
            height={100}
            className="w-48 h-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <p
            className="text-xl md:text-2xl"
            style={{ fontFamily: "var(--font-accent)", color: "var(--color-ivoire)", opacity: 0.75 }}
          >
            Sois la différence, et non l'indifférence.
          </p>
        </div>

        {/* Séparateur */}
        <div className="w-full h-px" style={{ backgroundColor: "var(--color-ivoire)", opacity: 0.1 }} />

        {/* Bas de footer */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          {/* Réseaux */}
          <nav className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-8 gap-y-4 sm:gap-8">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest transition-opacity hover:opacity-60"
                style={{
                  color: s.href === "#" ? "var(--color-ivoire)" : "var(--color-ivoire)",
                  opacity: s.href === "#" ? 0.25 : 0.7,
                }}
              >
                {s.label}{s.href === "#" && " ↗"}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p
            className="text-xs uppercase tracking-widest"
            style={{ color: "var(--color-ivoire)", opacity: 0.25 }}
          >
            © {new Date().getFullYear()} Le Monde de DW
          </p>

        </div>
      </div>
    </footer>
  );
}
