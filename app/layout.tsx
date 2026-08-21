import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://banana-navy.ai"),
  title: {
    default: "Banana Navy | Voice AI & automatisation en Belgique",
    template: "%s | Banana Navy",
  },
  description:
    "Studio IA à Charleroi spécialisé en voicebots, agents vocaux, logiciels sur mesure et automatisation pour les entreprises en Belgique.",
  keywords: [
    "voicebot Belgique",
    "agent vocal IA Wallonie",
    "intelligence artificielle Charleroi",
    "automatisation IA Belgique",
    "Voice AI",
    "Banana Navy",
  ],
  alternates: {
    canonical: "/fr",
    languages: { "fr-BE": "/fr", "nl-BE": "/nl", en: "/en" },
  },
  openGraph: {
    type: "website",
    locale: "fr_BE",
    siteName: "Banana Navy",
    title: "Banana Navy — L'IA qui parle, agit et livre des résultats",
    description:
      "Voice AI, automatisation et logiciels sur mesure. Conçus à Charleroi, déployés en Belgique.",
  },
  icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Organization", "ProfessionalService"],
            name: "Banana Navy",
            url: "https://banana-navy.ai/",
            logo: "https://banana-navy.ai/assets/banana-navy-logo.png",
            email: "marc@banana-navy.com",
            telephone: "+32495277044",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rue Antoine de Saint-Exupéry 2",
              addressLocality: "Gosselies",
              addressRegion: "Wallonie",
              postalCode: "6041",
              addressCountry: "BE",
            },
            areaServed: ["Wallonie", "Bruxelles", "Belgique"],
            knowsAbout: ["Voice AI", "Voicebots", "AI agents", "Automation", "Custom software"],
            sameAs: ["https://www.linkedin.com/company/banananavy/"],
          }),
        }}
      />
    </html>
  );
}
