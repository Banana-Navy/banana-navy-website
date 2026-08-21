import { absoluteUrl, pageUrl } from "./site-config";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-manrope" });

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${pageUrl()}#organization`,
  name: "Banana Navy",
  url: pageUrl(),
  logo: absoluteUrl("/assets/banana-navy-logo-black.png"),
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
};

export default function SiteShell({ lang, children }: Readonly<{ lang: string; children: React.ReactNode }>) {
  return (
    <html lang={lang} className={manrope.variable}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
