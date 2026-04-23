import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-league-spartan",
});

export const metadata: Metadata = {
  title: "Le Monde de DW",
  description: "Crée un contenu qui te ressemble, gagne en visibilité et attire tes clients idéaux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${leagueSpartan.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
