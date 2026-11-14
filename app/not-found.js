import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";

const pages = [
  ["/", "Music video production in Toronto"],
  ["/services", "Production services"],
  ["/featured-works", "Featured stills"],
  ["/about", "About the studio"],
  ["/faq", "Frequently asked questions"],
  ["/contact", "Contact"],
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F0F1FA] dark:bg-black text-gray-900 dark:text-white">
      <Navbar />
      <main className="px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold">Page not found</h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
            That address is not on the Knob Studio site. These pages are.
          </p>
          <ul className="mt-8 space-y-3 text-base font-semibold">
            {pages.map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="underline underline-offset-4">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
