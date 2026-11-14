import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About the Toronto Studio",
  description:
    "Knob Studio has spent more than 15 years making music videos in Toronto and on shoots across Canada. This is how the studio works.",
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
