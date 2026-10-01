export const siteUrl = "https://knobstud.com";

export const siteName = "Knob Studio";

export const defaultTitle =
  "Music Video Production in Toronto | Knob Studio";

export const defaultDescription =
  "Music video production in Toronto for artists and brands. Knob Studio also takes projects across Canada.";

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
    question: "What do you actually do?",
    answer:
      "Music video production in Toronto is the heart of the studio, and we take the same work across Canada. We also shoot brand films and commercials, but if you found us because of a song, you're in the right place.",
  },
  {
    question: "Are you only a music video company?",
    answer:
      "No. Music videos are what we're known for, and we also do commercials, brand films, corporate videos, documentaries, social clips, photoshoots, post-production, and creative direction. If it needs a camera and a point of view, ask.",
  },
  {
    question: "Where are you based?",
    answer:
      "Toronto, Ontario. We don't put a street address on the site. Email or call, and we'll tell you where to come.",
  },
  {
    question: "Do you shoot outside Toronto?",
    answer:
      "Yes. We live in Toronto and we work across Canada. If the song wants a location somewhere else, tell us. We'll say straight up whether we can take it.",
  },
  {
    question: "Who do you usually work with?",
    answer:
      "Artists, brands, and agencies. Some people come in with one song and a rough idea. Others already have a campaign. Both are normal around here.",
  },
  {
    question: "Do you work with newer artists?",
    answer:
      "Yes. The studio started with a small crew, borrowed gear, and local projects. You don't need a plaque on the wall to call us. You need a song and something you want the picture to say.",
  },
  {
    question: "How do I start a project?",
    answer: `Send the song. Use the contact form, email ${contactEmail}, or call ${contactPhone}. A voice note is fine. So is a paragraph. We'll take it from there.`,
  },
  {
    question: "What should I send you?",
    answer:
      "The track, a few reference videos if you have them, and what the video needs to do. Don't worry if the idea is still messy. We'll help shape it before anyone books a location.",
  },
  {
    question: "How much does a music video cost?",
    answer:
      "We don't keep a price list on the site, because a one-room performance and a two-day story are different films. Tell us the song, the idea, and what you can spend. We'll tell you honestly what that gets you.",
  },
  {
    question: "How long does a video take?",
    answer:
      "It depends on the idea, the locations, and how much finishing the picture needs. We won't guess a number here. Once we've heard the song, we'll give you a real schedule.",
  },
  {
    question: "Do you handle the edit, or just the shoot?",
    answer:
      "The whole thing, if you want us to. We stay on it from the first conversation through the cut, color, and the version you actually post. If you already have an editor, we can talk about just the production.",
  },
  {
    question: "Can you cut clips for Instagram and TikTok?",
    answer:
      "Yes. A lot of videos need a full cut and a few shorter ones. We make social versions that feel like the song, not a cropped leftover.",
  },
  {
    question: "Do you shoot photos too?",
    answer:
      "We do. Portraits, press shots, and stills around a video day. If you want pictures with the same look as the film, say so when you write.",
  },
  {
    question: "Can you help if I only have a feeling, not a treatment?",
    answer:
      "That's most jobs. Bring the song and the feeling. We'll turn it into a plan you can actually shoot, instead of asking you to show up with a finished script.",
  },
  {
    question: "Where can I see your work?",
    answer:
      "There's a selection of stills on the featured work page, and more video on our YouTube channel. If you want something closer to the record you're making, tell us and we'll send the right examples.",
  },
  {
    question: "How long have you been doing this?",
    answer:
      "More than 15 years. It started as late nights and small local jobs, and it grew into a studio that still likes to stay close to the work.",
  },
  {
    question: "What's the best way to reach you?",
    answer: `Email ${contactEmail} if you want to send a song or a deck. Call ${contactPhone} if you'd rather talk it through. Either one gets to us.`,
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
