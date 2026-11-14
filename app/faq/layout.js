import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl, breadcrumbJsonLd, businessFacts, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description:
    "What a Knob Studio music video costs, how long it takes, and how to send a song. Straight answers from the Toronto studio.",
  path: "/faq",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${absoluteUrl("/faq")}#faq`,
  url: absoluteUrl("/faq"),
  mainEntity: businessFacts.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "FAQ", path: "/faq" },
]);

export default function FaqLayout({ children }) {
  return (
    <>
      <JsonLd data={[faqJsonLd, breadcrumb]} />
      {children}
    </>
  );
}
