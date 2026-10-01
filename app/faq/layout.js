import JsonLd from "@/components/seo/JsonLd";
import { businessFacts, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers about Knob Studio, a music video production company in Toronto, Canada, including location, services, and how to start a project.",
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
