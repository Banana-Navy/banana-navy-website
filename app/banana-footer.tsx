import Link from "next/link";
import type { Lang } from "./site-data";

const copy = {
  fr: {
    tagline: "Trusted voice agents & agentic systems",
    intro: "Nous concevons des agents vocaux sécurisés et des systèmes agentiques fiables, intégrés à vos opérations et maintenus dans le temps.",
    commitments: "Nos engagements",
    items: ["Disponible 24 h/24", "Protection anti-hallucination", "Sécurité et RGPD", "Bases de données complexes"],
    contact: "Contact",
    partners: "Programme & institutions partenaires",
    partnerText: "Banana Navy a été sélectionnée par la Défense belge dans le cadre du programme STRIKE IT pour le développement d'une technologie de communication vocale sécurisée et fiable.",
    legal: "Mentions légales", privacy: "Confidentialité",
  },
  nl: {
    tagline: "Trusted voice agents & agentic systems",
    intro: "We bouwen veilige voice agents en betrouwbare agentic systems, geïntegreerd in uw operations en onderhouden op lange termijn.",
    commitments: "Onze engagementen",
    items: ["24/7 beschikbaar", "Bescherming tegen hallucinaties", "Veiligheid en GDPR", "Complexe databronnen"],
    contact: "Contact",
    partners: "Programma & institutionele partners",
    partnerText: "Banana Navy werd geselecteerd door de Belgische Defensie binnen STRIKE IT voor de ontwikkeling van veilige en betrouwbare spraakcommunicatietechnologie.",
    legal: "Juridische informatie", privacy: "Privacy",
  },
  en: {
    tagline: "Trusted voice agents & agentic systems",
    intro: "We design secure voice agents and reliable agentic systems, integrated with your operations and maintained over time.",
    commitments: "Our commitments",
    items: ["Available 24/7", "Anti-hallucination protection", "Security and GDPR", "Complex knowledge sources"],
    contact: "Contact",
    partners: "Programme & institutional partners",
    partnerText: "Banana Navy was selected by the Belgian Defence through STRIKE IT to develop secure and reliable voice communication technology.",
    legal: "Legal notice", privacy: "Privacy",
  },
};

const commitmentIcons=["clock.png","lock.png","water-shield.png","folder.png"];

export default function BananaFooter({ lang }: { lang: Lang }) {
  const t=copy[lang];
  const base=process.env.NEXT_PUBLIC_BASE_PATH||"";
  const asset=(path:string)=>`${base}${path}`;
  return <footer id="site-footer" className="site-footer">
    <div className="footer-grid">
      <div className="footer-brand">
        <Link href={`/${lang}`} className="footer-mark" aria-label="Banana Navy"><img src={asset("/assets/banana-navy-logo-black.png")} alt="Banana Navy"/></Link>
        <div><h2>{t.tagline}</h2><p>{t.intro}</p></div>
      </div>
      <div className="footer-commitments">
        <h2 className="footer-kicker">{t.commitments}</h2>
        <ul>{t.items.map((label,i)=><li key={label}><span><img src={asset(`/icons/flood/${commitmentIcons[i]}`)} alt=""/></span><b>{label}</b></li>)}</ul>
      </div>
      <div className="footer-contact">
        <h2 className="footer-kicker">{t.contact}</h2>
        <address><strong>Marc-Antoine Cajot</strong><a href="tel:+32495277044">+32 495 27 70 44</a><a href="mailto:marc@banana-navy.com">marc@banana-navy.com</a><a href="https://www.banana-navy.ai">www.banana-navy.ai</a><span>Rue Antoine de Saint-Exupéry 2<br/>6041 Charleroi, Belgique</span></address>
      </div>
    </div>
    <div className="footer-partners">
      <div><p className="footer-kicker">{t.partners}</p><div className="footer-partner-logos"><img src={asset("/assets/partners/defence.png")} alt="Belgian Defence"/><img src={asset("/assets/partners/crest-royal.png")} alt="Belgian Defence crest"/><img src={asset("/assets/partners/strike-it.png")} alt="STRIKE IT"/><img src={asset("/assets/partners/cyberforce.png")} alt="Cyber Force"/></div></div>
      <p>{t.partnerText}</p>
    </div>
    <div className="footer-legal"><span>© {new Date().getFullYear()} Banana Navy</span><span>Banana Navy · AI systems studio · Charleroi, Belgium</span><div><a href="https://banana-navy.ai/mentions-legales/">{t.legal}</a><a href="https://banana-navy.ai/politique-confidentialite/">{t.privacy}</a></div></div>
  </footer>;
}
