import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InternalPage, { getPageInfo } from "../../internal-page";
import { allPublicRoutes, languages, type Lang } from "../../site-data";

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
  return {
    title: info.title,
    description: info.description,
    alternates: { canonical:`/${lang}/${route}`, languages:{ "fr-BE":`/fr/${route}`, "nl-BE":`/nl/${route}`, en:`/en/${route}`, "x-default":`/fr/${route}` } },
    openGraph:{ title:info.title, description:info.description, type:info.type==="article"?"article":"website" },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string; slug: string[] }> }) {
  const { lang, slug }=await params;
  if (!languages.includes(lang as Lang) || !getPageInfo(lang as Lang,slug)) notFound();
  const info=getPageInfo(lang as Lang,slug)!;
  const url=`https://banana-navy.ai/${lang}/${slug.join("/")}`;
  const schema = info.type==="article" ? { "@context":"https://schema.org", "@type":"Article", headline:info.title, description:info.description, mainEntityOfPage:url, author:{"@type":"Organization",name:"Banana Navy"}, publisher:{"@type":"Organization",name:"Banana Navy"} } : info.type==="service" ? { "@context":"https://schema.org", "@type":"Service", name:info.title, description:info.description, url, provider:{"@type":"Organization",name:"Banana Navy",url:"https://banana-navy.ai"}, areaServed:{"@type":"Country",name:"Belgium"} } : { "@context":"https://schema.org", "@type":"WebPage", name:info.title, description:info.description, url };
  return <><InternalPage lang={lang as Lang} slug={slug}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></>;
}
