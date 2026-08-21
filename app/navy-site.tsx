"use client";

import { useState } from "react";
import Link from "next/link";

type Lang = "fr" | "nl" | "en";

const copy = {
  fr: {
    nav: ["Expertise", "STRIKE IT", "Méthode", "Équipe"], cta: "Parlons de votre projet",
    eyebrow: "VOICE AI · AGENTS · AUTOMATISATION",
    title: <>L&apos;IA qui ne fait pas que parler.<br/><em>Elle agit.</em></>,
    intro: "Nous concevons des agents vocaux et des systèmes IA sur mesure qui comprennent, décident et exécutent — intégrés à vos outils, mesurables et prêts pour la production.",
    primary: "Découvrir notre approche", secondary: "Voir STRIKE IT",
    proof: "CONÇU À CHARLEROI · DÉPLOYÉ EN BELGIQUE",
    stats: [["24/7", "disponibilité"], ["3", "langues natives"], ["100%", "sur mesure"]],
    servicesKicker: "NOTRE EXPERTISE", servicesTitle: "Une intelligence qui écoute, comprend et agit.",
    servicesIntro: "Du premier échange à l'action métier, nous construisons toute la chaîne. Pas un wrapper vocal. Un système fiable, observable et connecté.",
    services: [
      ["01", "Agents vocaux IA", "Appels entrants et sortants naturels, multilingues et disponibles en continu. Support, qualification, prise de rendez-vous et communication critique."],
      ["02", "Agents IA & RAG", "Des assistants qui travaillent avec vos données, utilisent vos outils et gardent une trace de chaque action."],
      ["03", "Logiciels sur mesure", "Applications, plateformes et API conçues autour de vos opérations réelles — pas autour d'un produit générique."],
      ["04", "Automatisation", "CRM, ERP, téléphonie et workflows reliés pour supprimer les tâches répétitives sans perdre le contrôle."],
    ],
    customKicker: "100% SUR MESURE", customTitle: <>Votre organisation n&apos;est pas standard.<br/>Votre IA ne devrait pas l&apos;être.</>,
    customText: "Nous partons du terrain, de vos contraintes et de vos systèmes. Chaque agent est conçu pour votre vocabulaire, vos règles, vos niveaux d'escalade et vos objectifs. Vous gardez la maîtrise du produit, des données et de la roadmap.",
    strikeKicker: "CAS PHARE · STRIKE IT 2026", strikeTitle: "Voice Bot Navy. Communiquer quand tout le reste vacille.",
    strikeText: "Avec Sirris, Banana Navy développe pour la Défense belge une solution de communication de crise robuste et résiliente face aux cyberattaques, avec une trajectoire vers la souveraineté technologique.",
    strikeLink: "Découvrir le projet", pillars: [["Résilient", "Continuité des communications en situation dégradée."], ["Sécurisé", "Architecture pensée contre les menaces vocales et cyber."], ["Souverain", "Une trajectoire technologique sous contrôle belge et européen."]],
    integrateKicker: "INTÉGRATION SANS FRICTION", integrateTitle: "Vos systèmes restent. L'intelligence circule.",
    integrateText: "Nos agents se connectent à votre CRM, ERP, téléphonie, bases documentaires et outils métier. Les données utiles arrivent au bon moment, les actions sont tracées et les humains reprennent la main quand il le faut.",
    guards: ["Écosystème connecté", "Conforme RGPD & AI Act", "Guardrails et sécurité", "Mesure de performance"],
    teamKicker: "LE STUDIO", teamTitle: "Une petite équipe. Une responsabilité complète.", teamText: "Stratégie, design, ingénierie IA et déploiement réunis à Charleroi. Nous livrons, mesurons et maintenons ce que nous construisons.",
    team: [["Marc-Antoine", "Strategy & Product"], ["Omer", "Engineering & AI"], ["Svetlana", "Creative & Experience"]],
    contactKicker: "VOTRE PROCHAIN AGENT EST PEUT-ÊTRE DÉJÀ EN TRAIN D'ÉCOUTER", contactTitle: "Press 1 for a demo. Ou dites simplement bonjour.", contactText: "Parlez-nous de vos appels, de vos opérations ou du système que vous voulez enfin faire fonctionner.", contactButton: "Démarrer la conversation",
    missing: "VISUEL À FOURNIR", missingTitle: "Démonstration Voice AI", missingText: "Interface ou scène réelle montrant un agent vocal Banana Navy en action.", footer: "Studio IA · Charleroi, Belgique",
  },
  nl: {
    nav: ["Expertise", "STRIKE IT", "Methode", "Team"], cta: "Bespreek uw project", eyebrow: "VOICE AI · AGENTEN · AUTOMATISERING", title: <>AI die niet alleen praat.<br/><em>Ze handelt.</em></>, intro: "Wij bouwen op maat gemaakte spraakagenten en AI-systemen die begrijpen, beslissen en uitvoeren — geïntegreerd, meetbaar en productieklaar.", primary: "Onze aanpak", secondary: "Bekijk STRIKE IT", proof: "ONTWORPEN IN CHARLEROI · INGEZET IN BELGIË", stats: [["24/7", "beschikbaar"], ["3", "native talen"], ["100%", "maatwerk"]], servicesKicker: "ONZE EXPERTISE", servicesTitle: "Intelligentie die luistert, begrijpt en handelt.", servicesIntro: "Van het eerste gesprek tot de bedrijfsactie bouwen wij de hele keten. Geen voice wrapper, wel een betrouwbaar en verbonden systeem.", services: [["01", "AI-spraakagenten", "Natuurlijke meertalige inkomende en uitgaande gesprekken voor support, kwalificatie en kritieke communicatie."], ["02", "AI-agenten & RAG", "Assistenten die met uw gegevens en tools werken en elke actie traceerbaar maken."], ["03", "Maatwerksoftware", "Apps, platforms en API's ontworpen rond uw echte processen."], ["04", "Automatisering", "CRM, ERP, telefonie en workflows verbonden zonder controleverlies."]], customKicker: "100% MAATWERK", customTitle: <>Uw organisatie is niet standaard.<br/>Uw AI dus ook niet.</>, customText: "We vertrekken van uw realiteit, systemen en regels. Elke agent krijgt uw taal, escalatielogica en doelen. U behoudt controle over product, data en roadmap.", strikeKicker: "FLAGSHIP CASE · STRIKE IT 2026", strikeTitle: "Voice Bot Navy. Communicatie wanneer alles wankelt.", strikeText: "Samen met Sirris ontwikkelt Banana Navy voor de Belgische Defensie een robuuste crisiscommunicatieoplossing met een traject naar technologische soevereiniteit.", strikeLink: "Ontdek het project", pillars: [["Veerkrachtig", "Continuïteit in verstoorde omstandigheden."], ["Veilig", "Ontworpen tegen voice- en cyberdreigingen."], ["Soeverein", "Belgische en Europese technologische controle."]], integrateKicker: "NAADLOZE INTEGRATIE", integrateTitle: "Uw systemen blijven. Intelligentie stroomt.", integrateText: "Onze agenten verbinden CRM, ERP, telefonie, kennisbanken en bedrijfstools. Acties zijn traceerbaar en mensen nemen over wanneer nodig.", guards: ["Verbonden ecosysteem", "GDPR & AI Act ready", "Guardrails en security", "Performantiemeting"], teamKicker: "DE STUDIO", teamTitle: "Een klein team. Volledige verantwoordelijkheid.", teamText: "Strategie, design, AI-engineering en deployment samen in Charleroi.", team: [["Marc-Antoine", "Strategy & Product"], ["Omer", "Engineering & AI"], ["Svetlana", "Creative & Experience"]], contactKicker: "UW VOLGENDE AGENT LUISTERT MISSCHIEN AL", contactTitle: "Press 1 for a demo. Of zeg gewoon hallo.", contactText: "Vertel ons over uw gesprekken, processen of het systeem dat eindelijk moet werken.", contactButton: "Start het gesprek", missing: "BEELD NODIG", missingTitle: "Voice AI-demonstratie", missingText: "Interface of realistische scène van een Banana Navy-spraakagent in actie.", footer: "AI-studio · Charleroi, België",
  },
  en: {
    nav: ["Expertise", "STRIKE IT", "Method", "Team"], cta: "Discuss your project", eyebrow: "VOICE AI · AGENTS · AUTOMATION", title: <>AI that doesn&apos;t just talk.<br/><em>It acts.</em></>, intro: "We build custom voice agents and AI systems that understand, decide and execute — integrated with your tools, measurable and production-ready.", primary: "Explore our approach", secondary: "See STRIKE IT", proof: "DESIGNED IN CHARLEROI · DEPLOYED IN BELGIUM", stats: [["24/7", "availability"], ["3", "native languages"], ["100%", "custom-built"]], servicesKicker: "OUR EXPERTISE", servicesTitle: "Intelligence that listens, understands and acts.", servicesIntro: "From the first exchange to the business action, we build the full chain. Not a voice wrapper. A reliable, observable and connected system.", services: [["01", "Voice AI agents", "Natural multilingual inbound and outbound calls for support, qualification, scheduling and critical communication."], ["02", "AI agents & RAG", "Assistants that work with your data, use your tools and leave a trace of every action."], ["03", "Custom software", "Applications, platforms and APIs designed around your actual operations."], ["04", "Automation", "CRM, ERP, telephony and workflows connected without giving up control."]], customKicker: "100% CUSTOM", customTitle: <>Your organisation isn&apos;t standard.<br/>Your AI shouldn&apos;t be either.</>, customText: "We start from your field reality, constraints and systems. Every agent is designed for your language, rules, escalation levels and goals. You retain control of the product, data and roadmap.", strikeKicker: "FLAGSHIP CASE · STRIKE IT 2026", strikeTitle: "Voice Bot Navy. Communication when everything else falters.", strikeText: "With Sirris, Banana Navy is developing a cyber-resilient crisis communication solution for the Belgian Defence, with a path towards technological sovereignty.", strikeLink: "Discover the project", pillars: [["Resilient", "Communication continuity in degraded conditions."], ["Secure", "Designed against voice and cyber threats."], ["Sovereign", "A path under Belgian and European control."]], integrateKicker: "SEAMLESS INTEGRATION", integrateTitle: "Your systems stay. Intelligence flows.", integrateText: "Our agents connect to CRM, ERP, telephony, knowledge bases and business tools. Actions are traceable and humans take over when needed.", guards: ["Connected ecosystem", "GDPR & AI Act ready", "Guardrails & security", "Performance measurement"], teamKicker: "THE STUDIO", teamTitle: "A small team. End-to-end responsibility.", teamText: "Strategy, design, AI engineering and deployment, together in Charleroi.", team: [["Marc-Antoine", "Strategy & Product"], ["Omer", "Engineering & AI"], ["Svetlana", "Creative & Experience"]], contactKicker: "YOUR NEXT AGENT MAY ALREADY BE LISTENING", contactTitle: "Press 1 for a demo. Or just say hello.", contactText: "Tell us about your calls, operations or the system you finally want to make work.", contactButton: "Start the conversation", missing: "VISUAL NEEDED", missingTitle: "Voice AI demonstration", missingText: "Interface or real-life scene showing a Banana Navy voice agent in action.", footer: "AI studio · Charleroi, Belgium",
  },
};

export default function NavySite({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const assetBase = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const asset = (path: string) => `${assetBase}${path}`;
  const [menuOpen, setMenuOpen] = useState(false);
  const [cookieVisible, setCookieVisible] = useState(true);
  return <main>
    <header className="topbar">
      <Link href={`/${lang}`} className="brand" aria-label="Banana Navy home"><img src={asset("/assets/banana-navy-logo.png")} alt="Banana Navy"/></Link>
      <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
        <a href="#expertise">{t.nav[0]}</a><a href="#strike-it">{t.nav[1]}</a><a href="#method">{t.nav[2]}</a><a href="#team">{t.nav[3]}</a>
      </nav>
      <div className="header-actions"><div className="langs">{(["fr","nl","en"] as Lang[]).map(l => <Link className={l===lang?"active":""} key={l} href={`/${l}`}>{l.toUpperCase()}</Link>)}</div><a className="pill" href="mailto:marc@banana-navy.com">{t.cta} ↗</a><button className="menu" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Menu">{menuOpen?"×":"≡"}</button></div>
    </header>

    <section className="hero">
      <div className="signal" aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/><i/><i/></div>
      <div className="hero-inner"><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p className="hero-copy">{t.intro}</p><div className="hero-actions"><a className="button blue" href="#expertise">{t.primary} ↓</a><a className="text-link" href="#strike-it">{t.secondary} ↘</a></div></div>
      <div className="proofline"><span>{t.proof}</span><div>{t.stats.map(([n,l])=><div key={l}><strong>{n}</strong><small>{l}</small></div>)}</div></div>
    </section>

    <section className="section services" id="expertise"><div className="section-head"><p className="eyebrow">{t.servicesKicker}</p><h2>{t.servicesTitle}</h2><p>{t.servicesIntro}</p></div><div className="service-list">{t.services.map(([n,title,text])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p><b>↗</b></article>)}</div></section>

    <section className="custom" id="method"><div className="placeholder"><div className="wave-mini"><i/><i/><i/><i/><i/><i/><i/></div><span>{t.missing}</span><h3>{t.missingTitle}</h3><p>{t.missingText}</p><code>VISUAL 01 · 16:10 · 2400 × 1500 px</code></div><div className="custom-copy"><p className="eyebrow">{t.customKicker}</p><h2>{t.customTitle}</h2><p>{t.customText}</p><a href="mailto:marc@banana-navy.com" className="text-link">{t.cta} ↗</a></div></section>

    <section className="strike" id="strike-it"><div className="strike-image"><img src={asset("/assets/strikeit/kickoff.webp")} alt="STRIKE IT 2026 kickoff at A6K"/><img className="strike-logo" src={asset("/assets/strikeit/logo.webp")} alt="STRIKE IT"/></div><div className="strike-copy"><p className="eyebrow">{t.strikeKicker}</p><h2>{t.strikeTitle}</h2><p>{t.strikeText}</p><a href="https://banana-navy.ai/lab/use-cases/voicebotnavy-strikeit/" className="button dark">{t.strikeLink} ↗</a><div className="partner-logos"><img src={asset("/assets/strikeit/defense.png")} alt="Belgian Defence"/><img src={asset("/assets/strikeit/rhid.png")} alt="RHID"/><img src={asset("/assets/strikeit/cybercommand.png")} alt="Cyber Command"/></div></div><div className="pillars">{t.pillars.map(([title,text])=><div key={title}><h3>{title}</h3><p>{text}</p></div>)}</div></section>

    <section className="integration"><div className="section-head"><p className="eyebrow">{t.integrateKicker}</p><h2>{t.integrateTitle}</h2><p>{t.integrateText}</p></div><div className="orbit" aria-label="Connected systems"><div className="core"><img src={asset("/favicon.png")} alt=""/><span>VOICE AI</span></div>{["CRM","ERP","TEL","RAG","API","BI"].map((x,i)=><span key={x} style={{"--i":i} as React.CSSProperties}>{x}</span>)}</div><div className="guards">{t.guards.map((x,i)=><div key={x}><b>0{i+1}</b><span>{x}</span><i>✓</i></div>)}</div></section>

    <section className="team section" id="team"><div className="section-head"><p className="eyebrow">{t.teamKicker}</p><h2>{t.teamTitle}</h2><p>{t.teamText}</p></div><div className="team-grid">{t.team.map(([name,role],i)=><article key={name}><img src={asset(["/assets/team/marc-antoine.webp","/assets/team/omer.webp","/assets/team/svetlana.webp"][i])} alt={`${name}, Banana Navy`}/><div><h3>{name}</h3><p>{role}</p></div></article>)}</div></section>

    <section className="clients"><p>SELECTED EXPERIENCE</p><div>{["belfius-logo.png","sncb-logo.png","ores-logo.png","defense-logo.png","pharmalys-logo.png","exype-logo.png"].map(x=><img key={x} src={asset(`/assets/clients/${x}`)} alt="Client reference"/>)}</div></section>
    <section className="contact"><p className="eyebrow">{t.contactKicker}</p><h2>{t.contactTitle}</h2><p>{t.contactText}</p><a href="mailto:marc@banana-navy.com" className="button blue">{t.contactButton} ↗</a></section>
    <footer><img src={asset("/assets/banana-navy-logo.png")} alt="Banana Navy"/><p>{t.footer}</p><div><a href="mailto:marc@banana-navy.com">marc@banana-navy.com</a><a href="tel:+32495277044">+32 495 27 70 44</a><a href="https://www.linkedin.com/company/banananavy/">LinkedIn ↗</a></div><small>© {new Date().getFullYear()} Banana Navy</small></footer>
    {cookieVisible && <div className="cookie"><span>We use essential cookies only.</span><button onClick={()=>setCookieVisible(false)}>OK</button></div>}
  </main>;
}
