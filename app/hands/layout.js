import { noIndexRobots } from "@/lib/site";

export const metadata = {
  title: "Hands",
  robots: noIndexRobots,
  alternates: {
    canonical: "/hands",
  },
};

export default function HandsLayout({ children }) {
  return children;
}
