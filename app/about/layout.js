import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About Our Music Video Work",
  description:
    "Knob Studio is a music video production company in Toronto, Canada, with more than 15 years of experience in music videos and film.",
  path: "/about",
});

export default function AboutLayout({ children }) {
  return children;
}
