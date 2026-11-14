import { NextResponse } from "next/server";
import { absoluteUrl } from "@/lib/site";

// Next.js 14.0.4 ignores MetadataRoute `images` and runs sitemap.js per request.
// This static handler is /sitemap.xml. lastModified is the UTC date of the
// canonical-host fix, not the current time.

export const dynamic = "force-static";

const routes = [
  {
    path: "/",
    lastModified: "2026-11-14",
    changeFrequency: "weekly",
    priority: 1,
    images: [
      ["/q.jpg", "Collage of Knob Studio music video and production stills"],
      ["/textures/555.jpg", "Poster frame from a Knob Studio music video"],
      ["/textures/4972058170432270203.jpg", "Camera operator beside a cinema camera on a studio dolly"],
      ["/textures/4972058170432270207.jpg", "Film crew lighting a night shoot inside a warehouse"],
      ["/textures/4972058170432270208.jpg", "Virtual production stage with a lunar backdrop"],
    ],
  },
  {
    path: "/services",
    lastModified: "2026-11-14",
    changeFrequency: "monthly",
    priority: 0.8,
    images: [["/textures/4972058170432270204.jpg", "Film crew lighting a performer on a studio set"]],
  },
  {
    path: "/featured-works",
    lastModified: "2026-11-14",
    changeFrequency: "monthly",
    priority: 0.8,
    images: [
      ["/textures/4972058170432270203.jpg", "Camera operator beside a cinema camera on a studio dolly"],
      ["/textures/4972058170432270207.jpg", "Film crew lighting a night shoot inside a warehouse"],
      ["/textures/4972058170432270208.jpg", "Virtual production stage with a lunar backdrop"],
    ],
  },
  {
    path: "/about",
    lastModified: "2026-11-14",
    changeFrequency: "monthly",
    priority: 0.7,
    images: [
      ["/textures/4972058170432270204.jpg", "Film crew lighting a performer on a studio set"],
      ["/textures/4972058170432270205.jpg", "Camera crane crew on a street film set"],
      ["/textures/4972058170432270206.jpg", "Crew preparing a shot on a studio soundstage"],
    ],
  },
  {
    path: "/contact",
    lastModified: "2026-11-14",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/faq",
    lastModified: "2026-11-14",
    changeFrequency: "monthly",
    priority: 0.7,
  },
];

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
    images: (route.images || []).map(([path, title]) => ({
      loc: absoluteUrl(path),
      title,
    })),
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
        xml += `<image:loc>${escapeXml(image.loc)}</image:loc>\n`;
        xml += `<image:title>${escapeXml(image.title)}</image:title>\n`;
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
