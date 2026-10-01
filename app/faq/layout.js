import JsonLd from "@/components/seo/JsonLd";
import { businessFacts, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Questions people ask Knob Studio before a music video in Toronto, from cost and timing to how to send a song.",
  path: "/faq",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: businessFacts.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function FaqLayout({ children }) {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      {children}
    </>
  );
}
