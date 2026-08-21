import type { MetadataRoute } from "next";
import { pageUrl } from "./site-config";
import { allPublicRoutes, isIndexableRoute, languages } from "./site-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now=new Date();
  const home=languages.map(lang=>({ url:pageUrl(`/${lang}`), lastModified:now, changeFrequency:"weekly" as const, priority:1, alternates:{ languages:{ "fr-BE":pageUrl("/fr"), "nl-BE":pageUrl("/nl"), en:pageUrl("/en"), "x-default":pageUrl("/fr") } } }));
  const pages=languages.flatMap(lang=>allPublicRoutes().filter(isIndexableRoute).map(slug=>({
    url:pageUrl(`/${lang}/${slug.join("/")}`),
    lastModified:now,
    changeFrequency:slug[0]==="lab"?"monthly" as const:"weekly" as const,
    priority:slug.length===1?.85:.72,
    alternates:{ languages:{ "fr-BE":pageUrl(`/fr/${slug.join("/")}`), "nl-BE":pageUrl(`/nl/${slug.join("/")}`), en:pageUrl(`/en/${slug.join("/")}`), "x-default":pageUrl(`/fr/${slug.join("/")}`) } },
  })));
  return [...home,...pages];
}
