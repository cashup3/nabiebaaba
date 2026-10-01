import HomePage from "@/components/HomePage";
import JsonLd from "@/components/seo/JsonLd";
import {
  contactEmail,
  contactPhone,
  defaultDescription,
  services,
  siteUrl,
  slogan,
  socialProfiles,
} from "@/lib/site";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Knob Studio",
  url: siteUrl,
  email: contactEmail,
  telephone: contactPhone,
  description: defaultDescription,
  slogan,
  image: `${siteUrl}/q.jpg`,
  logo: `${siteUrl}/android-chrome-512x512.png`,
  areaServed: [
    {
      "@type": "City",
      name: "Toronto",
    },
    {
      "@type": "Country",
      name: "Canada",
    },
  ],
  knowsAbout: services,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: contactPhone,
    email: contactEmail,
    contactType: "customer service",
    areaServed: ["Toronto", "Canada"],
    availableLanguage: "English",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Knob Studio services",
    itemListElement: services.map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
      },
    })),
  },
  sameAs: socialProfiles,
};

export default function Page() {
  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <HomePage />
    </>
  );
}
