import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Featured Music Video Work",
  description:
    "Selected production stills from Knob Studio music video and film shoots.",
  path: "/featured-works",
});

export default function FeaturedWorksLayout({ children }) {
  return children;
}
