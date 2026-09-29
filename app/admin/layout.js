import { noIndexRobots } from "@/lib/site";

export const metadata = {
  title: "Admin",
  robots: noIndexRobots,
  alternates: {
    canonical: "/admin",
  },
};

export default function AdminLayout({ children }) {
  return children;
}
