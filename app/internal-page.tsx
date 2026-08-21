import Link from "next/link";
import { labArticles, locationNames, locations, serviceCategories, tr, type Lang } from "./site-data";
import BananaFooter from "./banana-footer";

const ui = {
  fr: { expertise: "Expertise", approach: "Approche", lab: "Lab", locations: "Belgique", team: "Équipe", faq: "FAQ", contact: "Parlons de votre projet", back: "Retour", discover: "Découvrir", related: "À explorer aussi", outcomes: "Ce que le système doit produire", method: "Notre règle de conception", methodText: "On commence par le besoin métier et les cas limites. On choisit ensuite les modèles et les outils, avec des évaluations, des logs et un fallback humain explicite.", ctaTitle: "Un système utile commence par une conversation précise.", ctaText: "Expliquez-nous ce qui prend du temps, où l'information se perd et ce qui doit rester sous contrôle.", all: "Tout voir" },
  nl: { expertise: "Expertise", approach: "Aanpak", lab: "Lab", locations: "België", team: "Team", faq: "FAQ", contact: "Bespreek uw project", back: "Terug", discover: "Ontdek", related: "Ook te ontdekken", outcomes: "Wat het systeem moet opleveren", method: "Onze ontwerpregel", methodText: "We starten met de businessbehoefte en de uitzonderingen. Daarna kiezen we modellen en tools, met evaluaties, logs en een expliciete menselijke fallback.", ctaTitle: "Een nuttig systeem begint met een precies gesprek.", ctaText: "Vertel ons waar tijd verloren gaat, waar informatie verdwijnt en wat onder uw controle moet blijven.", all: "Alles bekijken" },
  en: { expertise: "Expertise", approach: "Approach", lab: "Lab", locations: "Belgium", team: "Team", faq: "FAQ", contact: "Discuss your project", back: "Back", discover: "Discover", related: "Explore next", outcomes: "What the system should deliver", method: "Our design rule", methodText: "We start with the business need and edge cases. Only then do we choose models and tools, with evaluations, logs and an explicit human fallback.", ctaTitle: "A useful system starts with a precise conversation.", ctaText: "Tell us where time is lost, where information disappears and what must remain under your control.", all: "View all" },
};

function Header({ lang }: { lang: Lang }) {
  const t = ui[lang];
  return <header className="topbar inner-topbar">
    <Link href={`/${lang}`} className="wordmark" aria-label="Banana Navy home">BANANA <i>NAVY</i></Link>
    <nav className="nav inner-nav" aria-label="Main navigation">
      <Link href={`/${lang}/expertise`}>{t.expertise}</Link><Link href={`/${lang}/approach`}>{t.approach}</Link><Link href={`/${lang}/lab`}>{t.lab}</Link><Link href={`/${lang}/locations`}>{t.locations}</Link><Link href={`/${lang}/team`}>{t.team}</Link>
    </nav>
    <div className="header-actions"><div className="langs">{(["fr","nl","en"] as Lang[]).map(l=><Link className={l===lang?"active":""} href={`/${l}`} key={l}>{l.toUpperCase()}</Link>)}</div><a className="pill" href="mailto:marc@banana-navy.com">{t.contact} ↗</a></div>
  </header>;
}

function Cta({ lang }: { lang: Lang }) { const t=ui[lang]; return <section className="page-cta"><h2>{t.ctaTitle}</h2><p>{t.ctaText}</p><a className="button blue" href="mailto:marc@banana-navy.com">{t.contact} ↗</a></section>; }

const labels = {
  expertise: { fr: "Systèmes IA modulaires", nl: "Modulaire AI-systemen", en: "Modular AI systems" },
  approach: { fr: "Notre approche", nl: "Onze aanpak", en: "Our approach" },
  lab: { fr: "Banana Navy Lab", nl: "Banana Navy Lab", en: "Banana Navy Lab" },
  locations: { fr: "IA en Belgique", nl: "AI in België", en: "AI in Belgium" },
  team: { fr: "Le studio", nl: "De studio", en: "The studio" },
  faq: { fr: "Questions fréquentes", nl: "Veelgestelde vragen", en: "Frequently asked questions" },
};

const intros = {
  expertise: { fr: "Cinq couches reliées pour transformer l'IA en opérations fiables : communication, automatisation, découverte, interface et orchestration.", nl: "Vijf verbonden lagen om AI om te zetten in betrouwbare operations: communicatie, automatisering, discovery, interface en orkestratie.", en: "Five connected layers that turn AI into reliable operations: communication, automation, discovery, interface and orchestration." },
  approach: { fr: "Nous ne vendons pas une boîte noire. Chaque projet est découpé en modules compréhensibles, remplaçables et mesurables.", nl: "We verkopen geen black box. Elk project bestaat uit begrijpelijke, vervangbare en meetbare modules.", en: "We do not sell a black box. Every project is divided into understandable, replaceable and measurable modules." },
  lab: { fr: "Analyses pratiques sur les agents vocaux, l'automatisation, la gouvernance, le SEO et le GEO — écrites à partir du terrain.", nl: "Praktische analyses over voice agents, automatisering, governance, SEO en GEO — geschreven vanuit de praktijk.", en: "Practical analysis of voice agents, automation, governance, SEO and GEO — written from delivery experience." },
  locations: { fr: "Une équipe basée à Charleroi, active partout en Belgique avec une compréhension concrète des réalités FR, NL et EN.", nl: "Een team uit Charleroi, actief in heel België en vertrouwd met de FR-, NL- en EN-realiteit.", en: "A Charleroi-based team working across Belgium with practical FR, NL and EN capability." },
  team: { fr: "Stratégie, ingénierie et IA dans une équipe compacte qui assume le système du cadrage à la production.", nl: "Strategie, engineering en AI in een compact team dat verantwoordelijkheid neemt van scope tot productie.", en: "Strategy, engineering and AI in a compact team responsible from scoping through production." },
  faq: { fr: "Des réponses directes sur les délais, les données, la sécurité, l'intégration et la manière dont nous travaillons.", nl: "Directe antwoorden over timing, data, veiligheid, integratie en onze manier van werken.", en: "Direct answers about timing, data, security, integration and how we work." },
};

const faqs = {
  fr: [["Combien de temps faut-il pour un premier agent ?","Un prototype fonctionnel ciblé peut être disponible en quelques jours. Une mise en production dépend des intégrations, des tests, de la sécurité et du niveau de risque."],["Travaillez-vous avec nos outils existants ?","Oui. Nous privilégions l'intégration à votre CRM, ERP, téléphonie et bases documentaires plutôt que leur remplacement."],["Où sont hébergées les données ?","L'architecture et la localisation sont choisies avec vous. Les options européennes et les contraintes de souveraineté font partie du cadrage."],["Un humain peut-il reprendre la main ?","Oui. Les règles d'escalade et les cas où l'agent doit s'arrêter sont définis explicitement."],["Pouvez-vous garantir un classement SEO ou une citation par ChatGPT ?","Non. Nous pouvons améliorer l'indexabilité, la clarté sémantique et la citabilité. Les performances réelles se mesurent dans Search Console et les outils de suivi, sans garantie artificielle."]],
  nl: [["Hoe lang duurt een eerste agent?","Een gericht functioneel prototype kan binnen enkele dagen klaar zijn. Productie hangt af van integraties, tests, veiligheid en risiconiveau."],["Werken jullie met onze bestaande tools?","Ja. We integreren liever met uw CRM, ERP, telefonie en kennisbanken dan ze te vervangen."],["Waar worden gegevens gehost?","Architectuur en locatie worden samen gekozen. Europese hosting en soevereiniteitsvereisten maken deel uit van de scope."],["Kan een mens overnemen?","Ja. Escalatieregels en situaties waarin de agent moet stoppen worden expliciet vastgelegd."],["Garanderen jullie SEO-ranking of ChatGPT-citaties?","Nee. We verbeteren indexeerbaarheid, semantische duidelijkheid en citeerbaarheid. Echte prestaties worden zonder kunstmatige garanties gemeten."]],
  en: [["How long does a first agent take?","A focused working prototype can be available in days. Production timing depends on integrations, testing, security and risk level."],["Do you work with existing tools?","Yes. We favour integration with your CRM, ERP, telephony and knowledge bases over replacement."],["Where is data hosted?","Architecture and location are chosen with you. European hosting and sovereignty constraints are part of scoping."],["Can a human take over?","Yes. Escalation rules and conditions under which the agent must stop are defined explicitly."],["Can you guarantee SEO rankings or ChatGPT citations?","No. We improve indexability, semantic clarity and citability. Actual performance must be measured without artificial guarantees."]],
};

export function getPageInfo(lang: Lang, slug: string[]) {
  const first=slug[0], second=slug[1];
  if (first==="expertise") return { title: labels.expertise[lang], description: intros.expertise[lang], type:"expertise" };
  if (first==="approach") return { title: labels.approach[lang], description: intros.approach[lang], type:"approach" };
  if (first==="lab" && !second) return { title: labels.lab[lang], description: intros.lab[lang], type:"lab" };
  if (first==="locations" && !second) return { title: labels.locations[lang], description: intros.locations[lang], type:"locations" };
  if (first==="team") return { title: labels.team[lang], description: intros.team[lang], type:"team" };
  if (first==="faq") return { title: labels.faq[lang], description: intros.faq[lang], type:"faq" };
  const category=serviceCategories.find(x=>x.slug===first);
  if (category && !second) return { title:category.name, description:tr(category.summary,lang), type:"category", category };
  const leaf=category?.leaves.find(x=>x.slug===second);
  if (category && leaf) return { title:tr(leaf.name,lang), description:tr(leaf.summary,lang), type:"service", category, leaf };
  const article=first==="lab"?labArticles.find(x=>x.slug===second):undefined;
  if (article) return { title:tr(article.title,lang), description:tr(article.excerpt,lang), type:"article", article };
  const location=first==="locations"?locations.find(x=>x===second):undefined;
  if (location) return { title:`Banana Navy · ${locationNames[location]}`, description: lang==="fr"?`Agents vocaux, automatisation et systèmes IA pour les entreprises à ${locationNames[location]} et dans sa région.`:lang==="nl"?`Voice agents, automatisering en AI-systemen voor bedrijven in ${locationNames[location]} en omgeving.`:`Voice agents, automation and AI systems for organisations in ${locationNames[location]} and the surrounding region.`, type:"location", location };
  return null;
}

export default function InternalPage({ lang, slug }: { lang: Lang; slug: string[] }) {
  const t=ui[lang], info=getPageInfo(lang,slug);
  if (!info) return null;
  const path=`/${lang}/${slug.join("/")}`;
  const assetBase=process.env.NEXT_PUBLIC_BASE_PATH||"";
  return <main className="internal-page" lang={lang}><Header lang={lang}/>
    <section className="page-hero"><div className="breadcrumb"><Link href={`/${lang}`}>Banana Navy</Link><span>/</span><span>{info.title}</span></div><p className="eyebrow">{slug[0].replaceAll("-"," ")}</p><h1>{info.title}</h1><p>{info.description}</p></section>

    {info.type==="expertise" && <section className="content-section"><div className="category-grid">{serviceCategories.map((category,i)=><Link href={`/${lang}/${category.slug}`} className="category-card" key={category.slug}><img className="category-icon" src={`${assetBase}/icons/flood/${["tasks.png","phone.png","sync.png","smartphone.png","search.png"][i]}`} alt=""/><span>0{i+1} · {tr(category.layer,lang)}</span><h2>{category.name}</h2><p>{tr(category.summary,lang)}</p><b>{t.discover} ↗</b></Link>)}</div></section>}

    {info.type==="category" && info.category && <section className="content-section"><div className="leaf-grid">{info.category.leaves.map((leaf,i)=><Link href={`${path}/${leaf.slug}`} className="leaf-card" key={leaf.slug}><img className="category-icon" src={`${assetBase}/icons/flood/${["gear.png","chat.png","analytics.png","folder.png"][i%4]}`} alt=""/><span>0{i+1}</span><h2>{tr(leaf.name,lang)}</h2><p>{tr(leaf.summary,lang)}</p><b>↗</b></Link>)}</div></section>}

    {info.type==="service" && info.category && info.leaf && <><section className="content-section split-content"><div><p className="eyebrow">{t.outcomes}</p><h2>{tr(info.leaf.name,lang)}</h2></div><ul className="outcome-list">{info.leaf.outcomes[lang].map(x=><li key={x}>{x}<i>✓</i></li>)}</ul></section><section className="method-band"><span>01</span><div><p className="eyebrow">{t.method}</p><h2>{t.methodText}</h2></div></section><section className="content-section"><p className="eyebrow">{t.related}</p><div className="link-row">{info.category.leaves.filter(x=>x.slug!==info.leaf?.slug).map(x=><Link href={`/${lang}/${info.category?.slug}/${x.slug}`} key={x.slug}>{tr(x.name,lang)} ↗</Link>)}</div></section></>}

    {info.type==="approach" && <section className="content-section"><div className="layers-list">{serviceCategories.map((category,i)=><article key={category.slug}><b>0{i+1}</b><span>{tr(category.layer,lang)}</span><h2>{category.name}</h2><p>{tr(category.summary,lang)}</p><Link href={`/${lang}/${category.slug}`}>↗</Link></article>)}</div></section>}

    {info.type==="lab" && <section className="content-section"><div className="article-grid">{labArticles.map(article=><Link href={`/${lang}/lab/${article.slug}`} className="article-card" key={article.slug}><span>{article.topic} · {article.date}</span><h2>{tr(article.title,lang)}</h2><p>{tr(article.excerpt,lang)}</p><b>{t.discover} ↗</b></Link>)}</div></section>}

    {info.type==="article" && info.article && <article className="article-body"><div className="article-meta"><span>{info.article.topic}</span><time>{info.article.date}</time><span>Banana Navy Lab</span></div><h2>{info.description}</h2><p>{lang==="fr"?"La bonne question n'est pas de savoir si la technologie est impressionnante, mais si elle produit une amélioration observable sans déplacer le risque ailleurs.":lang==="nl"?"De juiste vraag is niet of de technologie indrukwekkend is, maar of ze een meetbare verbetering oplevert zonder het risico te verplaatsen.":"The right question is not whether the technology is impressive, but whether it creates an observable improvement without moving risk elsewhere."}</p><h3>{t.method}</h3><p>{t.methodText}</p><div className="article-callout"><b>Banana Navy principle</b><p>{lang==="fr"?"Livrer petit, mesurer en conditions réelles, documenter les limites, puis étendre ce qui fonctionne.":lang==="nl"?"Klein leveren, meten in echte omstandigheden, grenzen documenteren en daarna uitbreiden wat werkt.":"Ship small, measure in real conditions, document limits, then expand what works."}</p></div><Link href={`/${lang}/lab`} className="text-link">← {t.back} · {t.lab}</Link></article>}

    {info.type==="locations" && <section className="content-section"><div className="location-grid">{locations.map(location=><Link href={`/${lang}/locations/${location}`} key={location}><span>BE</span><h2>{locationNames[location]}</h2><b>↗</b></Link>)}</div></section>}

    {info.type==="location" && info.location && <><section className="content-section split-content"><div><p className="eyebrow">{locationNames[info.location]} · Belgium</p><h2>{lang==="fr"?"Une expertise locale, une architecture sans frontières.":lang==="nl"?"Lokale expertise, een architectuur zonder grenzen.":"Local expertise, architecture without borders."}</h2></div><p className="large-copy">{info.description} {lang==="fr"?"Nous intervenons à distance ou sur site, avec des parcours et des agents adaptés aux réalités linguistiques belges.":lang==="nl"?"We werken remote of ter plaatse, met flows en agents aangepast aan de Belgische taalrealiteit.":"We work remotely or on site, with journeys and agents adapted to Belgium's linguistic reality."}</p></section><section className="content-section"><div className="link-row"><Link href={`/${lang}/voice-agents`}>Voice Agents ↗</Link><Link href={`/${lang}/automations`}>Automations ↗</Link><Link href={`/${lang}/seo/local-seo`}>Local SEO ↗</Link></div></section></>}

    {info.type==="team" && <section className="content-section"><div className="team-grid expanded-team">{[["Marc-Antoine","Strategy & Product","/assets/team/marc-antoine.webp"],["Omer","Engineering & AI","/assets/team/omer.webp"],["Svetlana","Engineering & AI","/assets/team/svetlana.webp"]].map(([name,role,img])=><article key={name}><img src={`${process.env.NEXT_PUBLIC_BASE_PATH||""}${img}`} alt={`${name}, Banana Navy`}/><div><h2>{name}</h2><p>{role}</p></div></article>)}</div></section>}

    {info.type==="faq" && <section className="content-section faq-list">{faqs[lang].map(([q,a],i)=><details key={q}><summary><span>0{i+1}</span>{q}<b>+</b></summary><p>{a}</p></details>)}</section>}
    <Cta lang={lang}/><BananaFooter lang={lang}/>
  </main>;
}
