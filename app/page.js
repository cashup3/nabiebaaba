import HomePage from "@/components/HomePage";
import JsonLd from "@/components/seo/JsonLd";
import { defaultDescription, siteUrl } from "@/lib/site";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Knob Studio",
  url: siteUrl,
  email: "info@knobstud.com",
  telephone: "+1 (514) 929-3511",
  description: defaultDescription,
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
  knowsAbout: "Music video production",
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Music video production",
      areaServed: ["Toronto", "Canada"],
    },
  },
  sameAs: [
    "https://www.instagram.com/knobstudio.inc",
    "https://www.youtube.com/@KnobStudio1",
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <HomePage />
    </>
  );
}
