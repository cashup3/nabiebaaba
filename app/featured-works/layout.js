import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Music Videos from Toronto",
  description:
    "Stills from Knob Studio music video production in Toronto and from shoots across Canada.",
  path: "/featured-works",
});

export default function FeaturedWorksLayout({ children }) {
  return children;
}
