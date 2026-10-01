import { NextResponse } from "next/server";
import { aiCrawlers, siteUrl } from "@/lib/site";

export const dynamic = "force-static";

const privatePaths = ["/admin", "/hands", "/mediapipe"];

function renderGroup(userAgent) {
  const lines = [`User-agent: ${userAgent}`, "Allow: /"];
  for (const path of privatePaths) {
    lines.push(`Disallow: ${path}`);
  }
  return lines.join("\n");
}

function renderRobots() {
  const groups = ["*", ...aiCrawlers].map(renderGroup);
  return [
    `# Company facts for AI answer engines: ${siteUrl}/llms.txt`,
    "",
    groups.join("\n\n"),
    "",
    `Sitemap: ${siteUrl}/sitemap.xml`,
    "",
  ].join("\n");
}

export function GET() {
  return new NextResponse(renderRobots(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
