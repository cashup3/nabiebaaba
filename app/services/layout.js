import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata, services } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Music Video Production Services",
  description:
    "Music videos, brand films, post-production, and related creative services from Knob Studio in Toronto, Canada.",
  path: "/services",
});

const serviceListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Knob Studio services",
  itemListElement: services.map((name, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name,
      provider: {
        "@type": "Organization",
        name: "Knob Studio",
      },
    },
  })),
};

export default function ServicesLayout({ children }) {
  return (
    <>
      <JsonLd data={serviceListJsonLd} />
      {children}
    </>
  );
}
