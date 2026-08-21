import { labArticles, serviceCategories } from "../site-data";

export const dynamic = "force-static";

export function GET() {
  const services=serviceCategories.flatMap(category=>[
    `- ${category.name}: https://banana-navy.ai/en/${category.slug}`,
    ...category.leaves.map(leaf=>`  - ${leaf.name.en}: https://banana-navy.ai/en/${category.slug}/${leaf.slug}`),
  ]).join("\n");
  const lab=labArticles.map(article=>`- ${article.title.en}: https://banana-navy.ai/en/lab/${article.slug}`).join("\n");
  const body=`# Banana Navy\n\nBanana Navy is an AI systems studio based in Charleroi, Belgium. We design and deploy Voice AI agents, agentic systems, automation, AI-ready websites, and SEO/GEO architectures in French, Dutch and English.\n\n## Core facts\n\n- Legal and operating market: Belgium\n- Base: Charleroi / Gosselies, Wallonia\n- Languages: French, Dutch, English\n- Contact: marc@banana-navy.com\n- Website: https://banana-navy.ai\n\n## Expertise\n\n${services}\n\n## Banana Navy Lab\n\n${lab}\n\n## Editorial policy\n\nPages describe capabilities and delivery principles. SEO visibility and AI citations are measured outcomes, never guaranteed rankings. Human escalation, traceability and responsible limits are part of production AI design.\n`;
  return new Response(body,{ headers:{"Content-Type":"text/plain; charset=utf-8"} });
}
