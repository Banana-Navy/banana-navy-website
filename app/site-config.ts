export const publicSiteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://banana-navy.github.io/banana-navy-website").replace(/\/$/, "");

export function absoluteUrl(path = "/") {
  return `${publicSiteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageUrl(path = "/") {
  const clean = path === "/" ? "" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  return `${publicSiteUrl}${clean}/`;
}
