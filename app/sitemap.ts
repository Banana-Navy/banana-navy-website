import type { MetadataRoute } from "next";
import { allPublicRoutes, languages } from "./site-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base="https://banana-navy.ai";
  const now=new Date();
  const home=languages.map(lang=>({ url:`${base}/${lang}`, lastModified:now, changeFrequency:"weekly" as const, priority:1, alternates:{ languages:{ fr:`${base}/fr`, nl:`${base}/nl`, en:`${base}/en`, "x-default":`${base}/fr` } } }));
  const pages=languages.flatMap(lang=>allPublicRoutes().map(slug=>({
    url:`${base}/${lang}/${slug.join("/")}`,
    lastModified:now,
    changeFrequency:slug[0]==="lab"?"monthly" as const:"weekly" as const,
    priority:slug.length===1?.85:.72,
    alternates:{ languages:{ fr:`${base}/fr/${slug.join("/")}`, nl:`${base}/nl/${slug.join("/")}`, en:`${base}/en/${slug.join("/")}`, "x-default":`${base}/fr/${slug.join("/")}` } },
  })));
  return [...home,...pages];
}
