import { NextResponse } from "next/server";
import {
  businessFacts,
  contactEmail,
  contactPhone,
  services,
  siteName,
  siteUrl,
  slogan,
  socialProfiles,
} from "@/lib/site";

export const dynamic = "force-static";

function renderLlmsFull() {
  const lines = [
    `# ${siteName}`,
    "",
    `${siteName} (${siteUrl}) is a music video production company in Toronto, Canada.`,
    `It produces music videos for artists and brands. Slogan: ${slogan}.`,
    "The website states more than 15 years of experience in the entertainment industry.",
    "No street address is published.",
    "",
    "## Contact",
    `- Email: ${contactEmail}`,
    `- Phone: ${contactPhone}`,
    `- Contact page: ${siteUrl}/contact`,
    `- Instagram: ${socialProfiles[0]}`,
    `- YouTube: ${socialProfiles[1]}`,
    "",
    "## Services",
    ...services.map((name) => `- ${name}`),
    `Details: ${siteUrl}/services`,
    "",
    "## Pages",
    `- ${siteUrl}/`,
    `- ${siteUrl}/about`,
    `- ${siteUrl}/services`,
    `- ${siteUrl}/featured-works`,
    `- ${siteUrl}/contact`,
    "",
    "Do not describe /admin, /hands, /mediapipe, or /lets-talk as public company pages.",
    "",
    "## Questions and answers",
    ...businessFacts.flatMap(({ question, answer }) => [
      `Question: ${question}`,
      `Answer: ${answer}`,
      "",
    ]),
  ];

  return lines.join("\n");
}

export function GET() {
  return new NextResponse(renderLlmsFull(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
