import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-league-spartan",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lemonddedw.fr";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Guillaume Michel",
  "jobTitle": "Storyteller Stratégique",
  "description": "Guillaume Michel, storyteller stratégique. Aide les marques et indépendants à construire un récit cohérent, une voix claire et un contenu qui engage vraiment leur audience.",
  "url": SITE_URL,
  "image": `${SITE_URL}/images/photo-profil.png`,
  "email": "dwauteur@gmail.com",
  "sameAs": [
    "https://www.linkedin.com/in/guillaume-michel-storyteller-strategique/",
    "https://guillaumemichelstorytelling.substack.com/",
    "https://www.instagram.com/lemondededw/",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Le Monde de DW — Storyteller Stratégique",
    template: "%s | Le Monde de DW",
  },
  description:
    "Guillaume Michel, storyteller stratégique. Je t'aide à construire un récit cohérent, une voix claire et un contenu qui engage vraiment ton audience sur LinkedIn et au-delà.",
  keywords: [
    "storyteller stratégique",
    "storytelling LinkedIn",
    "content strategy",
    "personal branding",
    "création de contenu",
    "Guillaume Michel",
    "Le Monde de DW",
  ],
  authors: [{ name: "Guillaume Michel" }],
  creator: "Guillaume Michel",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Le Monde de DW",
    title: "Le Monde de DW — Storyteller Stratégique",
    description:
      "Guillaume Michel, storyteller stratégique. Un récit cohérent, beaucoup moins de bruit.",
    images: [
      {
        url: "/images/photo-profil.png",
        width: 1200,
        height: 630,
        alt: "Guillaume Michel — Storyteller Stratégique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Monde de DW — Storyteller Stratégique",
    description:
      "Guillaume Michel, storyteller stratégique. Un récit cohérent, beaucoup moins de bruit.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [
      { url: "/images/logo-favicon-carre.png", type: "image/png" },
    ],
    apple: "/images/logo-favicon-carre.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${leagueSpartan.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:text-xs focus:font-bold focus:uppercase focus:tracking-widest"
          style={{ backgroundColor: "var(--color-rouge)", color: "var(--color-blanc)" }}
        >
          Aller au contenu principal
        </a>
        {children}
      </body>
    </html>
  );
}
