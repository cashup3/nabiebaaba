import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl, breadcrumbJsonLd, organizationId, pageMetadata, services } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Music Video Production Services in Toronto",
  description:
    "Music videos, brand films, photoshoots, and post-production from Knob Studio in Toronto. The same crew takes projects across Canada.",
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
      url: absoluteUrl("/services"),
      areaServed: ["Toronto", "Canada"],
      provider: { "@id": organizationId },
    },
  })),
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
]);

export default function ServicesLayout({ children }) {
  return (
    <>
      <JsonLd data={[serviceListJsonLd, breadcrumb]} />
      {children}
    </>
  );
}
