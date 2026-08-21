import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NavySite from "../navy-site";
import { pageUrl } from "../site-config";

const languages = ["fr", "nl", "en"] as const;
type Lang = (typeof languages)[number];

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const titles: Record<string, string> = {
    fr: "Agents vocaux IA & automatisation en Belgique",
    nl: "AI-spraakagenten & automatisering in België",
    en: "Voice AI agents & automation in Belgium",
  };
  const descriptions: Record<string, string> = {
    fr: "Banana Navy conçoit des voicebots, agents IA et logiciels sur mesure à Charleroi pour les entreprises en Wallonie et en Belgique.",
    nl: "Banana Navy bouwt voicebots, AI-agenten en maatwerksoftware in Charleroi voor bedrijven in Wallonië en België.",
    en: "Banana Navy builds voicebots, AI agents and custom software in Charleroi for organisations across Wallonia and Belgium.",
  };
  return {
    title: titles[lang] ?? titles.fr,
    description: descriptions[lang] ?? descriptions.fr,
    alternates: { canonical: pageUrl(`/${lang}`), languages: { "fr-BE": pageUrl("/fr"), "nl-BE": pageUrl("/nl"), en: pageUrl("/en"), "x-default": pageUrl("/fr") } },
    openGraph: { title: titles[lang] ?? titles.fr, description: descriptions[lang] ?? descriptions.fr, type: "website", locale: lang === "fr" ? "fr_BE" : lang === "nl" ? "nl_BE" : "en_GB" },
  };
}

export default async function LanguagePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!languages.includes(lang as Lang)) notFound();
  return <NavySite lang={lang as Lang} />;
}
