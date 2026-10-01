import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import { FaqItems } from "@/components/BusinessFacts";
import { businessFacts } from "@/lib/site";

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F1FA] via-white to-[#F0F1FA] dark:from-black dark:via-gray-900 dark:to-black text-gray-900 dark:text-white">
      <Navbar />
      <main className="pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
            Knob Studio
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Frequently asked questions
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            A few things people ask before they call. If yours isn&apos;t here, just write us.
          </p>
          <div className="mt-10">
            <FaqItems items={businessFacts} />
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-gray-900 dark:bg-white text-white dark:text-black px-6 py-3 text-sm sm:text-base font-semibold"
            >
              Contact the studio
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border border-gray-900 dark:border-white px-6 py-3 text-sm sm:text-base font-semibold"
            >
              View services
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
