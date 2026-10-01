import Link from "next/link";
import { businessFacts } from "@/lib/site";

export function FaqItems({ items }) {
  return (
    <div className="space-y-4">
      {items.map(({ question, answer }) => (
        <article
          key={question}
          className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-white/5 px-5 py-5 sm:px-6"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
            {question}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            {answer}
          </p>
        </article>
      ))}
    </div>
  );
}

export default function BusinessFacts() {
  const preview = businessFacts.slice(0, 3);

  return (
    <section aria-labelledby="business-facts-heading" className="w-full py-16 sm:py-20">
      <div className="max-w-3xl mx-auto">
        <h2 id="business-facts-heading" className="text-2xl sm:text-3xl font-bold mb-3">
          Frequently asked questions
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-8">
          Short answers about Knob Studio, a music video production company in Toronto, Canada.
        </p>
        <FaqItems items={preview} />
        <Link
          href="/faq"
          className="inline-block mt-8 text-sm sm:text-base font-semibold underline underline-offset-4"
        >
          See all questions
        </Link>
      </div>
    </section>
  );
}
