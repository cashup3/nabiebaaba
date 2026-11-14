import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Featured Music Video Stills",
  description:
    "Stills from Knob Studio music videos shot in Toronto and on location across Canada, plus a link to more work on YouTube.",
  path: "/featured-works",
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Featured Work", path: "/featured-works" },
]);

export default function FeaturedWorksLayout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumb} />
      {children}
    </>
  );
}
