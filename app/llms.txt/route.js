import { NextResponse } from "next/server";
import {
  businessFacts,
  contactEmail,
  contactPhone,
  defaultDescription,
  services,
  siteName,
  siteUrl,
  slogan,
} from "@/lib/site";

export const dynamic = "force-static";

function renderLlmsTxt() {
  const pages = [
    ["Home", "/", "Music video production company in Toronto, Canada."],
    ["About", "/about", "Company background, experience, and Toronto location."],
    ["Services", "/services", "Music videos, brand films, and related production services."],
    ["Featured work", "/featured-works", "Selected music video and production stills."],
    ["Contact", "/contact", `Email ${contactEmail} or call ${contactPhone}.`],
  ];

  const lines = [
    `# ${siteName}`,
    "",
    `> ${defaultDescription} Slogan: ${slogan}.`,
    "",
    "Knob Studio is based in Toronto, Ontario, Canada. The site does not publish a street address.",
    `Published phone: ${contactPhone}. Email: ${contactEmail}.`,
    "Experience stated on the site: more than 15 years in the entertainment industry.",
    "",
    "## Pages",
    ...pages.map(
      ([label, path, note]) => `- [${label}](${siteUrl}${path}): ${note}`
    ),
    "",
    "## Services",
    ...services.map((name) => `- ${name}`),
    "",
    "## Facts",
    ...businessFacts.map(
      ({ question, answer }) => `- ${question} ${answer}`
    ),
    "",
    "## Optional",
    `- [Full company facts](${siteUrl}/llms-full.txt): longer plain-text summary of the same public pages.`,
    "",
  ];

  return lines.join("\n");
}

export function GET() {
  return new NextResponse(renderLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
