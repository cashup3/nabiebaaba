import { siteUrl } from "@/lib/site";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/hands", "/mediapipe"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
