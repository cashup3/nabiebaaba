import { noIndexMetadata } from "@/lib/site";

export const metadata = noIndexMetadata({
  title: "Let's Talk",
  description:
    "Send Knob Studio a project request by form, WhatsApp, or phone.",
  path: "/lets-talk",
  canonical: "/contact",
  follow: true,
});

export default function LetsTalkLayout({ children }) {
  return children;
}
