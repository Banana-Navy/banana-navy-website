import { Manrope } from "next/font/google";
import "./globals.css";
import NotFoundContent from "./not-found-content";

const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-manrope" });

export default function GlobalNotFound() {
  return (
    <html lang="fr-BE" className={manrope.variable}>
      <body><NotFoundContent /></body>
    </html>
  );
}
