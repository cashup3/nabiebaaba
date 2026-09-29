export const siteUrl = "https://knobstud.com";

export const siteName = "Knob Studio";

export const defaultTitle =
  "Music Video Production Company in Toronto, Canada | Knob Studio";

export const defaultDescription =
  "Knob Studio produces music videos for artists and brands from Toronto, Canada.";

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
