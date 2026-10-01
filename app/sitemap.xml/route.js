import { NextResponse } from "next/server";
import { siteUrl } from "@/lib/site";

// Next.js 14.0.4 ignores MetadataRoute `images` and runs sitemap.js per request.
// This static handler is /sitemap.xml. lastModified is the UTC date of the latest
// git commit for that page file (8d86266, 2026-09-29), not the current time.

export const dynamic = "force-static";

const routes = [
  {
    path: "/",
    lastModified: "2026-10-01",
    changeFrequency: "weekly",
    priority: 1,
    images: [
      "/q.jpg",
      "/textures/555.jpg",
      "/textures/4972058170432270203.jpg",
      "/textures/4972058170432270207.jpg",
      "/textures/4972058170432270208.jpg",
    ],
  },
  {
    path: "/services",
    lastModified: "2026-10-01",
    changeFrequency: "monthly",
    priority: 0.8,
    images: ["/textures/4972058170432270204.jpg"],
  },
  {
    path: "/featured-works",
    lastModified: "2026-10-01",
    changeFrequency: "monthly",
    priority: 0.8,
    images: [
      "/textures/4972058170432270203.jpg",
      "/textures/4972058170432270207.jpg",
      "/textures/4972058170432270208.jpg",
    ],
  },
  {
    path: "/about",
    lastModified: "2026-10-01",
    changeFrequency: "monthly",
    priority: 0.7,
    images: [
      "/textures/4972058170432270204.jpg",
      "/textures/4972058170432270205.jpg",
      "/textures/4972058170432270206.jpg",
    ],
  },
  {
    path: "/contact",
    lastModified: "2026-10-01",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/faq",
    lastModified: "2026-10-01",
    changeFrequency: "monthly",
    priority: 0.7,
  },
];

function absoluteUrl(path) {
  return new URL(path, siteUrl).href;
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function renderSitemap() {
  const entries = routes.map((route) => ({
    loc: absoluteUrl(route.path),
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    images: (route.images || []).map(absoluteUrl),
  }));
  const hasImages = entries.some((entry) => entry.images.length > 0);
  const imageNamespace = hasImages
    ? ' xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"'
    : "";

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"${imageNamespace}>\n`;

  for (const entry of entries) {
    xml += "<url>\n";
    xml += `<loc>${escapeXml(entry.loc)}</loc>\n`;
    if (entry.images.length) {
      for (const image of entry.images) {
        xml += "<image:image>\n";
        xml += `<image:loc>${escapeXml(image)}</image:loc>\n`;
        xml += "</image:image>\n";
      }
    }
    xml += `<lastmod>${escapeXml(entry.lastModified)}</lastmod>\n`;
    xml += `<changefreq>${escapeXml(entry.changeFrequency)}</changefreq>\n`;
    xml += `<priority>${entry.priority}</priority>\n`;
    xml += "</url>\n";
  }

  xml += "</urlset>\n";
  return xml;
}

export function GET() {
  return new NextResponse(renderSitemap(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
