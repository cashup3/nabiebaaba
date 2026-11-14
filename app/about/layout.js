import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Music Video Production in Canada",
  description:
    "Knob Studio is based in Toronto and handles music video production across Canada, with more than 15 years in the studio.",
  path: "/about",
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
]);

export default function AboutLayout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumb} />
      {children}
    </>
  );
}
