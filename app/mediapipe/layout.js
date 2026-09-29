import { noIndexRobots } from "@/lib/site";

export const metadata = {
  title: "MediaPipe",
  robots: noIndexRobots,
  alternates: {
    canonical: "/mediapipe",
  },
};

export default function MediaPipeLayout({ children }) {
  return children;
}
