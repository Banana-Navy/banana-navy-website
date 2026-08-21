import type { Lang, Localized } from "./site-data";

type LegalPage = {
  title: Localized;
  description: Localized;
  sections: Record<Lang, Array<[string, string]>>;
};

export const legalPages: Record<"legal" | "privacy", LegalPage> = {
  legal: {
    title: { fr: "Mentions légales", nl: "Juridische informatie", en: "Legal notice" },
    description: {
      fr: "Informations relatives à l'éditeur, à l'hébergement et à l'utilisation du site Banana Navy.",
      nl: "Informatie over de uitgever, hosting en het gebruik van de Banana Navy-website.",
      en: "Information about the publisher, hosting and use of the Banana Navy website.",
    },
    sections: {
      fr: [
        ["Éditeur", "Ce site est édité par Banana Navy, studio de systèmes IA établi Rue Antoine de Saint-Exupéry 2, 6041 Charleroi, Belgique."],
        ["Responsable et contact", "Marc-Antoine Cajot · marc@banana-navy.com · +32 495 27 70 44."],
        ["Hébergement", "Cette version du site est hébergée par GitHub Pages, un service opéré par GitHub, Inc."],
        ["Propriété intellectuelle", "Les textes, éléments graphiques, marques et créations présentés sur ce site restent la propriété de Banana Navy ou de leurs titulaires respectifs. Toute réutilisation substantielle nécessite une autorisation préalable."],
        ["Responsabilité", "Banana Navy veille à l'exactitude des informations publiées, sans pouvoir garantir qu'elles soient exhaustives à tout moment. Les contenus du Lab sont informatifs et ne remplacent pas un avis juridique, médical ou professionnel adapté."],
      ],
      nl: [
        ["Uitgever", "Deze website wordt uitgegeven door Banana Navy, een AI-systemenstudio gevestigd aan Rue Antoine de Saint-Exupéry 2, 6041 Charleroi, België."],
        ["Verantwoordelijke en contact", "Marc-Antoine Cajot · marc@banana-navy.com · +32 495 27 70 44."],
        ["Hosting", "Deze versie van de website wordt gehost via GitHub Pages, een dienst van GitHub, Inc."],
        ["Intellectuele eigendom", "Teksten, grafische elementen, merken en creaties op deze site blijven eigendom van Banana Navy of hun respectieve rechthebbenden. Voor substantieel hergebruik is voorafgaande toestemming vereist."],
        ["Aansprakelijkheid", "Banana Navy streeft naar correcte informatie, maar kan niet garanderen dat ze altijd volledig is. Lab-content is informatief en vervangt geen aangepast juridisch, medisch of professioneel advies."],
      ],
      en: [
        ["Publisher", "This website is published by Banana Navy, an AI systems studio located at Rue Antoine de Saint-Exupéry 2, 6041 Charleroi, Belgium."],
        ["Responsible contact", "Marc-Antoine Cajot · marc@banana-navy.com · +32 495 27 70 44."],
        ["Hosting", "This version of the website is hosted through GitHub Pages, a service operated by GitHub, Inc."],
        ["Intellectual property", "Texts, graphic elements, marks and creations on this website remain the property of Banana Navy or their respective owners. Substantial reuse requires prior permission."],
        ["Liability", "Banana Navy works to keep published information accurate but cannot guarantee it is complete at all times. Lab content is informational and does not replace tailored legal, medical or professional advice."],
      ],
    },
  },
  privacy: {
    title: { fr: "Confidentialité", nl: "Privacy", en: "Privacy" },
    description: {
      fr: "Comment Banana Navy traite les données personnelles liées à ce site et aux prises de contact.",
      nl: "Hoe Banana Navy persoonsgegevens verwerkt die verband houden met deze website en contactverzoeken.",
      en: "How Banana Navy handles personal data related to this website and direct enquiries.",
    },
    sections: {
      fr: [
        ["Données traitées", "Cette version ne contient ni formulaire ni outil d'analyse d'audience. Si vous nous contactez par e-mail ou téléphone, nous traitons les coordonnées et informations que vous choisissez de transmettre afin de répondre à votre demande."],
        ["Hébergement et journaux techniques", "GitHub Pages peut traiter des journaux techniques nécessaires à la sécurité et au fonctionnement du service. La police du site est auto-hébergée et ne déclenche pas de connexion vers un fournisseur de polices tiers."],
        ["Durée et destinataires", "Les échanges sont conservés pendant la durée nécessaire au suivi de la demande et aux obligations applicables. Ils ne sont pas vendus et ne sont partagés qu'avec les prestataires indispensables au service."],
        ["Vos droits", "Sous réserve des conditions du RGPD, vous pouvez demander l'accès, la rectification, l'effacement, la limitation ou l'opposition au traitement de vos données."],
        ["Contact", "Pour toute question ou demande relative à vos données : marc@banana-navy.com."],
      ],
      nl: [
        ["Verwerkte gegevens", "Deze versie bevat geen formulier of analysetool. Wanneer u ons per e-mail of telefoon contacteert, verwerken we de contactgegevens en informatie die u zelf verstrekt om uw vraag te beantwoorden."],
        ["Hosting en technische logs", "GitHub Pages kan technische logs verwerken die nodig zijn voor de veiligheid en werking van de dienst. Het lettertype wordt lokaal gehost en maakt geen verbinding met een externe fontleverancier."],
        ["Bewaartermijn en ontvangers", "Communicatie wordt bewaard zolang dat nodig is voor de opvolging en toepasselijke verplichtingen. Gegevens worden niet verkocht en alleen gedeeld met noodzakelijke dienstverleners."],
        ["Uw rechten", "Onder de voorwaarden van de GDPR kunt u toegang, correctie, verwijdering, beperking of bezwaar tegen de verwerking van uw gegevens vragen."],
        ["Contact", "Voor vragen of verzoeken over uw gegevens: marc@banana-navy.com."],
      ],
      en: [
        ["Data processed", "This version contains no form or audience analytics tool. If you contact us by email or telephone, we process the contact details and information you choose to provide so we can respond."],
        ["Hosting and technical logs", "GitHub Pages may process technical logs required for security and service operation. The site font is self-hosted and does not connect to a third-party font provider."],
        ["Retention and recipients", "Communications are retained only as long as required to follow up the enquiry and meet applicable obligations. Data is not sold and is shared only with providers necessary to deliver the service."],
        ["Your rights", "Subject to GDPR conditions, you may request access, correction, erasure, restriction of, or objection to the processing of your personal data."],
        ["Contact", "For any question or request about your personal data: marc@banana-navy.com."],
      ],
    },
  },
};
