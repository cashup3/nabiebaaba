import { noIndexMetadata } from "@/lib/site";

export const metadata = noIndexMetadata({
  title: "Admin",
  description: "Private Knob Studio submissions dashboard.",
  path: "/admin",
});

export default function AdminLayout({ children }) {
  return children;
}
