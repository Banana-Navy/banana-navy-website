import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InternalPage, { faqs, getPageInfo } from "../../internal-page";
import { pageUrl } from "../../site-config";
import { allPublicRoutes, isIndexableRoute, languages, type Lang } from "../../site-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return languages.flatMap(lang => allPublicRoutes().map(slug => ({ lang, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string[] }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!languages.includes(lang as Lang)) return {};
  const info=getPageInfo(lang as Lang,slug);
  if (!info) return {};
  const route=slug.join("/");
  const canonical=pageUrl(`/${lang}/${route}`);
  return {
    title: info.title,
    description: info.description,
    robots: { index:isIndexableRoute(slug), follow:true },
    alternates: { canonical, languages:{ "fr-BE":pageUrl(`/fr/${route}`), "nl-BE":pageUrl(`/nl/${route}`), en:pageUrl(`/en/${route}`), "x-default":pageUrl(`/fr/${route}`) } },
    openGraph:{ title:info.title, description:info.description, type:info.type==="article"?"article":"website", locale:lang==="fr"?"fr_BE":lang==="nl"?"nl_BE":"en_GB", url:canonical },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string; slug: string[] }> }) {
  const { lang, slug }=await params;
  if (!languages.includes(lang as Lang) || !getPageInfo(lang as Lang,slug)) notFound();
  const info=getPageInfo(lang as Lang,slug)!;
  const url=pageUrl(`/${lang}/${slug.join("/")}`);
  const inLanguage=lang==="fr"?"fr-BE":lang==="nl"?"nl-BE":"en";
  const organizationId=`${pageUrl()}#organization`;
  const contentSchema = info.type==="article" && info.article ? { "@type":"Article", "@id":`${url}#article`, headline:info.title, description:info.description, mainEntityOfPage:url, datePublished:info.article.date, dateModified:info.article.date, inLanguage, isPartOf:{"@id":`${pageUrl(`/${lang}/lab`)}#webpage`}, author:{"@id":organizationId}, publisher:{"@id":organizationId} } : info.type==="service" ? { "@type":"Service", "@id":`${url}#service`, name:info.title, description:info.description, url, inLanguage, provider:{"@id":organizationId}, areaServed:{"@type":"Country",name:"Belgium"} } : info.type==="faq" ? { "@type":"FAQPage", "@id":`${url}#webpage`, name:info.title, description:info.description, url, inLanguage, mainEntity:faqs[lang as Lang].map(([question,answer])=>({"@type":"Question",name:question,acceptedAnswer:{"@type":"Answer",text:answer}})) } : { "@type":"WebPage", "@id":`${url}#webpage`, name:info.title, description:info.description, url, inLanguage };
  const breadcrumbSchema = { "@type":"BreadcrumbList", "@id":`${url}#breadcrumb`, itemListElement:[{"@type":"ListItem",position:1,name:"Banana Navy",item:pageUrl(`/${lang}`)},{"@type":"ListItem",position:2,name:info.title,item:url}] };
  const schema = { "@context":"https://schema.org", "@graph":[contentSchema,breadcrumbSchema] };
  return <><InternalPage lang={lang as Lang} slug={slug}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></>;
}
