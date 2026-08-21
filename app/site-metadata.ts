import type { Metadata } from "next";
import { pageUrl, publicSiteUrl } from "./site-config";

const pagesBase = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const siteMetadata: Metadata = {
  metadataBase: new URL(`${publicSiteUrl}/`),
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
    canonical: pageUrl("/fr"),
    languages: { "fr-BE": pageUrl("/fr"), "nl-BE": pageUrl("/nl"), en: pageUrl("/en"), "x-default": pageUrl("/fr") },
  },
  openGraph: {
    type: "website",
    locale: "fr_BE",
    siteName: "Banana Navy",
    title: "Banana Navy — L'IA qui parle, agit et livre des résultats",
    description:
      "Voice AI, automatisation et logiciels sur mesure. Conçus à Charleroi, déployés en Belgique.",
  },
  icons: { icon: `${pagesBase}/favicon.png`, shortcut: `${pagesBase}/favicon.png` },
};
