import { noIndexMetadata } from "@/lib/site";

export const metadata = noIndexMetadata({
  title: "MediaPipe",
  description: "Internal Knob Studio MediaPipe experiment.",
  path: "/mediapipe",
});

export default function MediaPipeLayout({ children }) {
  return children;
}