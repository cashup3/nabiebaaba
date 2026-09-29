import { siteUrl } from "@/lib/site";

const routes = ["/", "/about", "/services", "/contact", "/featured-works"];

export default function sitemap() {
  const lastModified = new Date();

  return routes.map((path) => ({
    url: new URL(path, siteUrl).href,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
