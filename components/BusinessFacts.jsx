import { businessFacts } from "@/lib/site";

export default function BusinessFacts() {
  return (
    <section aria-labelledby="business-facts-heading" className="w-full py-16 sm:py-20">
      <div className="max-w-3xl mx-auto">
        <h2 id="business-facts-heading" className="text-2xl sm:text-3xl font-bold mb-8">
          Questions about Knob Studio
        </h2>
        <dl className="space-y-6">
          {businessFacts.map(({ question, answer }) => (
            <div key={question}>
              <dt className="text-lg font-semibold">{question}</dt>
              <dd className="mt-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                {answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
