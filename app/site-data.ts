export type Lang = "fr" | "nl" | "en";
export type Localized = Record<Lang, string>;

export const languages: Lang[] = ["fr", "nl", "en"];
export const tr = (value: Localized, lang: Lang) => value[lang];

export type ServiceLeaf = {
  slug: string;
  name: Localized;
  summary: Localized;
  outcomes: Record<Lang, string[]>;
};

export type ServiceCategory = {
  slug: string;
  name: string;
  layer: Localized;
  summary: Localized;
  leaves: ServiceLeaf[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "agentic-systems",
    name: "Agentic Systems",
    layer: { fr: "Orchestration", nl: "Orkestratie", en: "Orchestration" },
    summary: {
      fr: "Des systèmes multi-agents qui analysent, décident, utilisent vos outils et escaladent à un humain au bon moment.",
      nl: "Multi-agentsystemen die analyseren, beslissen, uw tools gebruiken en op het juiste moment naar een mens escaleren.",
      en: "Multi-agent systems that analyse, decide, use your tools and escalate to a human at the right moment.",
    },
    leaves: [
      { slug: "multi-agent-workflows", name: { fr: "Workflows multi-agents", nl: "Multi-agent workflows", en: "Multi-agent workflows" }, summary: { fr: "Plusieurs agents spécialisés collaborent sur une même mission avec une validation finale.", nl: "Gespecialiseerde agents werken samen aan één opdracht met een finale validatie.", en: "Specialised agents collaborate on one mission with a final validation step." }, outcomes: { fr: ["Rôles et responsabilités explicites", "Exécution parallèle", "Validation humaine configurable"], nl: ["Duidelijke rollen", "Parallelle uitvoering", "Instelbare menselijke validatie"], en: ["Explicit roles", "Parallel execution", "Configurable human validation"] } },
      { slug: "ai-orchestration", name: { fr: "Orchestration IA", nl: "AI-orkestratie", en: "AI orchestration" }, summary: { fr: "Un chef d'orchestre route chaque demande vers le modèle, l'outil ou l'équipe adéquate.", nl: "Een orkestrator stuurt elke aanvraag naar het juiste model, tool of team.", en: "An orchestrator routes each request to the right model, tool or team." }, outcomes: { fr: ["Routage par intention", "Fallbacks contrôlés", "Traçabilité de bout en bout"], nl: ["Intentierouting", "Gecontroleerde fallbacks", "End-to-end traceerbaarheid"], en: ["Intent routing", "Controlled fallbacks", "End-to-end traceability"] } },
      { slug: "business-ai-infrastructure", name: { fr: "Infrastructure IA", nl: "AI-infrastructuur", en: "Business AI infrastructure" }, summary: { fr: "Le socle RAG, modèles, évaluations, logs et sécurité pour industrialiser l'IA.", nl: "De RAG-, model-, evaluatie-, log- en beveiligingslaag om AI te industrialiseren.", en: "The RAG, model, evaluation, logging and security foundation for production AI." }, outcomes: { fr: ["Architecture modulaire", "Hébergement européen", "Évaluations continues"], nl: ["Modulaire architectuur", "Europese hosting", "Continue evaluaties"], en: ["Modular architecture", "European hosting", "Continuous evaluations"] } },
    ],
  },
  {
    slug: "voice-agents",
    name: "Voice Agents",
    layer: { fr: "Communication", nl: "Communicatie", en: "Communication" },
    summary: { fr: "Des agents vocaux naturels, multilingues et connectés à vos opérations réelles.", nl: "Natuurlijke, meertalige spraakagenten verbonden met uw echte processen.", en: "Natural multilingual voice agents connected to your real operations." },
    leaves: [
      { slug: "ai-receptionist", name: { fr: "Réceptionniste IA", nl: "AI-receptionist", en: "AI receptionist" }, summary: { fr: "Accueil 24/7, qualification, transfert et prise de rendez-vous sans menu rigide.", nl: "24/7 onthaal, kwalificatie, doorschakeling en afspraken zonder star menu.", en: "24/7 reception, qualification, transfer and scheduling without rigid menus." }, outcomes: { fr: ["Décroché immédiat", "FR, NL et EN", "Transfert avec contexte"], nl: ["Onmiddellijk antwoord", "FR, NL en EN", "Doorschakeling met context"], en: ["Immediate answer", "FR, NL and EN", "Context-rich transfer"] } },
      { slug: "ai-sales-agent", name: { fr: "Agent commercial IA", nl: "AI-salesagent", en: "AI sales agent" }, summary: { fr: "Qualification et relance de leads avec mise à jour automatique du CRM.", nl: "Leadkwalificatie en follow-up met automatische CRM-updates.", en: "Lead qualification and follow-up with automatic CRM updates." }, outcomes: { fr: ["Qualification homogène", "Relances au bon moment", "Pipeline CRM propre"], nl: ["Consistente kwalificatie", "Tijdige follow-up", "Schoon CRM-pipeline"], en: ["Consistent qualification", "Timely follow-up", "Clean CRM pipeline"] } },
      { slug: "ai-support-agent", name: { fr: "Agent support IA", nl: "AI-supportagent", en: "AI support agent" }, summary: { fr: "Résolution des demandes fréquentes et escalade intelligente des cas sensibles.", nl: "Oplossing van veelvoorkomende vragen en slimme escalatie van gevoelige dossiers.", en: "Resolution of frequent requests and intelligent escalation of sensitive cases." }, outcomes: { fr: ["Support continu", "Réponses sourcées", "Escalade responsable"], nl: ["Continue support", "Onderbouwde antwoorden", "Verantwoorde escalatie"], en: ["Continuous support", "Grounded answers", "Responsible escalation"] } },
    ],
  },
  {
    slug: "automations",
    name: "Automations",
    layer: { fr: "Opérations", nl: "Operations", en: "Operations" },
    summary: { fr: "Des workflows fiables qui relient CRM, ERP, téléphonie, documents et équipes.", nl: "Betrouwbare workflows die CRM, ERP, telefonie, documenten en teams verbinden.", en: "Reliable workflows connecting CRM, ERP, telephony, documents and teams." },
    leaves: [
      { slug: "crm-automation", name: { fr: "Automatisation CRM", nl: "CRM-automatisering", en: "CRM automation" }, summary: { fr: "Enrichissement, scoring, attribution et relance sans ressaisie manuelle.", nl: "Verrijking, scoring, toewijzing en opvolging zonder handmatige invoer.", en: "Enrichment, scoring, assignment and follow-up without manual re-entry." }, outcomes: { fr: ["Données plus propres", "Temps de réponse réduit", "Reporting fiable"], nl: ["Schonere data", "Kortere responstijd", "Betrouwbare rapportage"], en: ["Cleaner data", "Faster response", "Reliable reporting"] } },
      { slug: "lead-routing", name: { fr: "Routage des leads", nl: "Lead routing", en: "Lead routing" }, summary: { fr: "Chaque opportunité est qualifiée puis envoyée au bon interlocuteur avec son contexte.", nl: "Elke opportuniteit wordt gekwalificeerd en met context naar de juiste persoon gestuurd.", en: "Every opportunity is qualified and sent to the right owner with context." }, outcomes: { fr: ["SLA mesurables", "Aucune demande oubliée", "Règles métier explicites"], nl: ["Meetbare SLA's", "Geen aanvraag vergeten", "Expliciete businessregels"], en: ["Measurable SLAs", "No missed request", "Explicit business rules"] } },
      { slug: "onboarding-systems", name: { fr: "Onboarding automatisé", nl: "Geautomatiseerde onboarding", en: "Onboarding systems" }, summary: { fr: "Documents, contrôles, rappels et activation coordonnés dans un parcours unique.", nl: "Documenten, controles, reminders en activatie gecoördineerd in één traject.", en: "Documents, checks, reminders and activation coordinated in one journey." }, outcomes: { fr: ["Parcours cohérent", "Moins d'erreurs", "Visibilité temps réel"], nl: ["Consistent traject", "Minder fouten", "Realtime zichtbaarheid"], en: ["Consistent journey", "Fewer errors", "Real-time visibility"] } },
    ],
  },
  {
    slug: "create",
    name: "Create",
    layer: { fr: "Interface", nl: "Interface", en: "Interface" },
    summary: { fr: "Des sites et applications IA-ready, lisibles par les humains comme par les moteurs.", nl: "AI-ready websites en apps, leesbaar voor mensen én zoekmachines.", en: "AI-ready websites and applications, readable by people and machines." },
    leaves: [
      { slug: "ai-ready-websites", name: { fr: "Sites IA-ready", nl: "AI-ready websites", en: "AI-ready websites" }, summary: { fr: "Performance, contenu structuré, conversion et intégrations dès la conception.", nl: "Performance, gestructureerde content, conversie en integraties vanaf het ontwerp.", en: "Performance, structured content, conversion and integrations by design." }, outcomes: { fr: ["Core Web Vitals", "Structure sémantique", "Conversion mesurable"], nl: ["Core Web Vitals", "Semantische structuur", "Meetbare conversie"], en: ["Core Web Vitals", "Semantic structure", "Measurable conversion"] } },
      { slug: "conversion-systems", name: { fr: "Systèmes de conversion", nl: "Conversiesystemen", en: "Conversion systems" }, summary: { fr: "Le site, le CRM et les automatisations forment un seul parcours mesurable.", nl: "Website, CRM en automatiseringen vormen één meetbaar traject.", en: "Website, CRM and automations become one measurable journey." }, outcomes: { fr: ["Friction réduite", "Attribution claire", "Expérimentation continue"], nl: ["Minder frictie", "Duidelijke attributie", "Continue experimenten"], en: ["Reduced friction", "Clear attribution", "Continuous experimentation"] } },
    ],
  },
  {
    slug: "seo",
    name: "SEO & GEO",
    layer: { fr: "Découverte", nl: "Discovery", en: "Discovery" },
    summary: { fr: "Une architecture pour être compris par Google et cité correctement par les moteurs IA.", nl: "Een architectuur om door Google begrepen en door AI-zoekmachines correct geciteerd te worden.", en: "An architecture designed for Google visibility and accurate citation by AI search engines." },
    leaves: [
      { slug: "geo-optimization", name: { fr: "Optimisation GEO", nl: "GEO-optimalisatie", en: "GEO optimisation" }, summary: { fr: "Contenus explicites, entités cohérentes et réponses faciles à citer par les IA.", nl: "Duidelijke content, consistente entiteiten en antwoorden die AI gemakkelijk kan citeren.", en: "Explicit content, consistent entities and answers AI engines can cite." }, outcomes: { fr: ["Entités cohérentes", "Réponses citables", "Sources transparentes"], nl: ["Consistente entiteiten", "Citeerbare antwoorden", "Transparante bronnen"], en: ["Consistent entities", "Citable answers", "Transparent sources"] } },
      { slug: "technical-seo", name: { fr: "SEO technique", nl: "Technische SEO", en: "Technical SEO" }, summary: { fr: "Indexabilité, performance, maillage, hreflang, canonicals et données structurées.", nl: "Indexeerbaarheid, performance, interne links, hreflang, canonicals en structured data.", en: "Indexability, performance, internal linking, hreflang, canonicals and structured data." }, outcomes: { fr: ["Crawl propre", "Balises cohérentes", "Aucune duplication de langue"], nl: ["Schone crawl", "Consistente tags", "Geen taalduplicatie"], en: ["Clean crawl", "Consistent tags", "No language duplication"] } },
      { slug: "local-seo", name: { fr: "SEO local Belgique", nl: "Lokale SEO België", en: "Local SEO Belgium" }, summary: { fr: "Présence locale utile pour Charleroi, la Wallonie, Bruxelles et la Belgique.", nl: "Een relevante lokale aanwezigheid voor Charleroi, Wallonië, Brussel en België.", en: "Useful local presence for Charleroi, Wallonia, Brussels and Belgium." }, outcomes: { fr: ["Signaux locaux fiables", "Contenu régional utile", "Mesure dans Search Console"], nl: ["Betrouwbare lokale signalen", "Nuttige regionale content", "Meting in Search Console"], en: ["Reliable local signals", "Useful regional content", "Search Console measurement"] } },
      { slug: "schema-markup", name: { fr: "Données structurées", nl: "Structured data", en: "Schema markup" }, summary: { fr: "Organization, Service, Article, FAQ et Breadcrumb alignés sur le contenu visible.", nl: "Organization, Service, Article, FAQ en Breadcrumb afgestemd op zichtbare content.", en: "Organization, Service, Article, FAQ and Breadcrumb aligned with visible content." }, outcomes: { fr: ["Schema.org valide", "Graphe d'entités cohérent", "Maintenance centralisée"], nl: ["Geldige schema.org", "Consistente entity graph", "Centraal onderhoud"], en: ["Valid schema.org", "Consistent entity graph", "Central maintenance"] } },
    ],
  },
];

export type LabArticle = { slug: string; title: Localized; excerpt: Localized; topic: string; date: string };
export const labArticles: LabArticle[] = [
  { slug: "ai-act-belgium", topic: "Governance", date: "2026-08-12", title: { fr: "AI Act en Belgique : ce que les PME doivent préparer", nl: "AI Act in België: wat kmo's moeten voorbereiden", en: "The EU AI Act in Belgium: what SMEs should prepare" }, excerpt: { fr: "Une lecture opérationnelle des obligations, de la documentation et des responsabilités.", nl: "Een operationele kijk op verplichtingen, documentatie en verantwoordelijkheden.", en: "An operational view of obligations, documentation and responsibilities." } },
  { slug: "voice-agents-for-real-estate", topic: "Voice AI", date: "2026-07-28", title: { fr: "Agents vocaux IA pour l'immobilier", nl: "AI-spraakagenten voor vastgoed", en: "Voice AI agents for real estate" }, excerpt: { fr: "Qualifier, planifier et relancer sans perdre la qualité de la relation.", nl: "Kwalificeren, plannen en opvolgen zonder relatiekwaliteit te verliezen.", en: "Qualify, schedule and follow up without sacrificing relationship quality." } },
  { slug: "voice-agents-for-healthcare", topic: "Voice AI", date: "2026-07-15", title: { fr: "Voice AI dans la santé : utilité, limites et sécurité", nl: "Voice AI in de zorg: nut, grenzen en veiligheid", en: "Voice AI in healthcare: value, limits and safety" }, excerpt: { fr: "Les cas où l'agent aide vraiment, et ceux qui exigent immédiatement un humain.", nl: "Waar een agent echt helpt en wanneer meteen een mens nodig is.", en: "Where an agent genuinely helps and where a human is immediately required." } },
  { slug: "how-to-appear-in-chatgpt-results", topic: "GEO", date: "2026-06-30", title: { fr: "Comment apparaître dans les réponses de ChatGPT", nl: "Hoe verschijnen in ChatGPT-antwoorden", en: "How to appear in ChatGPT answers" }, excerpt: { fr: "Ce que GEO peut améliorer, ce qu'il ne garantit pas et comment mesurer les progrès.", nl: "Wat GEO kan verbeteren, niet garandeert en hoe vooruitgang te meten.", en: "What GEO can improve, what it cannot guarantee and how to measure progress." } },
  { slug: "why-most-ai-pocs-fail", topic: "Strategy", date: "2026-06-12", title: { fr: "Pourquoi la plupart des POC IA échouent", nl: "Waarom de meeste AI-POC's mislukken", en: "Why most AI proofs of concept fail" }, excerpt: { fr: "Le fossé entre démonstration convaincante et système maintenable en production.", nl: "De kloof tussen een overtuigende demo en een onderhoudbaar productiesysteem.", en: "The gap between an impressive demo and a maintainable production system." } },
  { slug: "n8n-vs-make-vs-zapier", topic: "Automation", date: "2026-05-24", title: { fr: "n8n, Make ou Zapier : choisir sans dogme", nl: "n8n, Make of Zapier: kiezen zonder dogma", en: "n8n, Make or Zapier: choosing without dogma" }, excerpt: { fr: "Un choix fondé sur les données, le contrôle, la complexité et la maintenance.", nl: "Een keuze op basis van data, controle, complexiteit en onderhoud.", en: "A choice based on data, control, complexity and maintenance." } },
  { slug: "what-is-an-agentic-system", topic: "Agentic", date: "2026-05-02", title: { fr: "Qu'est-ce qu'un système agentique ?", nl: "Wat is een agentic system?", en: "What is an agentic system?" }, excerpt: { fr: "Des agents, des outils, un état, des règles et surtout des limites explicites.", nl: "Agents, tools, state, regels en vooral duidelijke grenzen.", en: "Agents, tools, state, rules and, above all, explicit boundaries." } },
];

export const locations = ["charleroi", "brussels", "liege", "namur", "mons", "antwerpen", "gent", "mechelen", "knokke", "oostende"] as const;
export const locationNames: Record<(typeof locations)[number], string> = { charleroi: "Charleroi", brussels: "Bruxelles / Brussel", liege: "Liège", namur: "Namur", mons: "Mons", antwerpen: "Antwerpen", gent: "Gent", mechelen: "Mechelen", knokke: "Knokke", oostende: "Oostende" };

export const allPublicRoutes = () => {
  const routes: string[][] = [["expertise"], ["approach"], ["lab"], ["locations"], ["team"], ["faq"]];
  for (const category of serviceCategories) {
    routes.push([category.slug]);
    for (const leaf of category.leaves) routes.push([category.slug, leaf.slug]);
  }
  for (const article of labArticles) routes.push(["lab", article.slug]);
  for (const location of locations) routes.push(["locations", location]);
  return routes;
};
