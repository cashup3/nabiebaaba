export const siteUrl = "https://knobstud.com";

export const siteName = "Knob Studio";

export const defaultTitle =
  "Music Video Production Company in Toronto, Canada | Knob Studio";

export const defaultDescription =
  "Knob Studio produces music videos for artists and brands from Toronto, Canada.";

export const contactEmail = "info@knobstud.com";

export const contactPhone = "+1 (514) 929-3511";

export const contactPhoneTel = "+15149293511";

export const slogan = "Beyond Visions Within Reach";

export const socialProfiles = [
  "https://www.instagram.com/knobstudio.inc",
  "https://www.youtube.com/@KnobStudio1",
];

export const services = [
  "Commercial & Brand Videos",
  "Corporate & Promotional Films",
  "Music Videos",
  "Social Media Content",
  "Post-Production",
  "Web Design",
  "DSPs Services",
  "Advertising",
  "Public Relations",
  "Photoshoots",
  "Creative Direction",
];

export const businessFacts = [
  {
    question: "What is Knob Studio?",
    answer:
      "Knob Studio is a music video production company in Toronto, Canada. It produces music videos for artists and brands.",
  },
  {
    question: "Where is Knob Studio located?",
    answer:
      "Knob Studio is based in Toronto, Ontario, Canada. The website does not publish a street address.",
  },
  {
    question: "Do you produce music videos outside Toronto?",
    answer:
      "The studio is based in Toronto and works with artists and brands in Toronto and across Canada.",
  },
  {
    question: "What services does Knob Studio offer?",
    answer: `Knob Studio offers ${services.join(", ")}.`,
  },
  {
    question: "Do you only make music videos?",
    answer:
      "Music videos are the main work. The studio also makes commercial and brand videos, corporate and promotional films, social media content, and the other services listed on the services page.",
  },
  {
    question: "How do I start a project?",
    answer: `Send a message on the contact page, email ${contactEmail}, or call ${contactPhone}.`,
  },
  {
    question: "Where can I see Knob Studio's work?",
    answer:
      "Selected production stills are on the featured work page. More video is on the Knob Studio YouTube channel.",
  },
  {
    question: "How long has Knob Studio worked in entertainment?",
    answer:
      "Knob Studio states that it has more than 15 years of experience in the entertainment industry.",
  },
];

export const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "Google-Extended",
  "PerplexityBot",
  "ClaudeBot",
  "anthropic-ai",
  "Applebot-Extended",
  "Bingbot",
  "Amazonbot",
];

export const ogImage = {
  url: "/q.jpg",
  width: 3500,
  height: 2333,
  alt: "Collage of Knob Studio music video and production stills",
};

export function pageMetadata({ title, description, path }) {
  const socialTitle = title.includes("|") ? title : `${title} | ${siteName}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName,
      type: "website",
      locale: "en_CA",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [ogImage.url],
    },
  };
}

export const noIndexRobots = {
  index: false,
  follow: false,
};

export function noIndexMetadata({ title, description, path, canonical }) {
  const metadata = pageMetadata({ title, description, path });
  metadata.robots = noIndexRobots;
  if (canonical) {
    metadata.alternates = { canonical };
  }
  return metadata;
}
