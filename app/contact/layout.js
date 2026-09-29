import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact Our Toronto Studio",
  description:
    "Contact Knob Studio in Toronto, Canada by email at info@knobstud.com or phone at +1 (514) 929-3511.",
  path: "/contact",
});

export default function ContactLayout({ children }) {
  return children;
}
