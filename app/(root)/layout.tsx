import "../globals.css";
import SiteShell from "../site-shell";
import { siteMetadata } from "../site-metadata";

export const metadata = siteMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteShell lang="fr-BE">{children}</SiteShell>;
}
