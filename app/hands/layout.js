import { noIndexMetadata } from "@/lib/site";

export const metadata = noIndexMetadata({
  title: "Hands",
  description: "Internal Knob Studio hand-tracking experiment.",
  path: "/hands",
});

export default function HandsLayout({ children }) {
  return children;
}
