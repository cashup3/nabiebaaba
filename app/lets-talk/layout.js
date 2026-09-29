import { noIndexRobots } from "@/lib/site";

export const metadata = {
  title: "Let's Talk",
  description:
    "Send Knob Studio a project request by form, WhatsApp, or phone.",
  robots: noIndexRobots,
  alternates: {
    canonical: "/contact",
  },
};

export default function LetsTalkLayout({ children }) {
  return children;
}
