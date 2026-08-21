import "../globals.css";
import SiteShell from "../site-shell";
import { siteMetadata } from "../site-metadata";

export const metadata = siteMetadata;

const documentLanguages: Record<string, string> = {
  fr: "fr-BE",
  nl: "nl-BE",
  en: "en",
};

export default async function LanguageLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
  const { lang } = await params;
  return <SiteShell lang={documentLanguages[lang] || "fr-BE"}>{children}</SiteShell>;
}
