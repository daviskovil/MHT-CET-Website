"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "Is there a refund policy?",
    answer:
      "Pro subscriptions can be refunded in full within 7 days of purchase if you haven’t attempted more than one full paper.",
  },
  {
    question: "Which exams and years are covered?",
    answer:
      "All MHT CET papers and shifts from 2016 through 2026, across Physics, Chemistry, and Maths.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We don’t sell or share your data. Answers and scores are only ever visible to you.",
  },
  {
    question: "Can I switch from Free to Pro later?",
    answer:
      "Yes, you can upgrade at any time from your account — your existing progress carries over.",
  },
  {
    question: "Do institutes get a separate dashboard?",
    answer:
      "Yes. Institute licenses include a teacher dashboard to track every student’s performance in one place.",
  },
  {
    question: "Is the Free tier really free forever?",
    answer:
      "Yes — 3 full papers a month, no credit card required, for as long as you like.",
  },
];

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-3">
      {FAQS.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.question}
            className="rounded-2xl border border-ink/8 bg-white px-6 py-4"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="font-display font-semibold text-ink">{faq.question}</span>
              <span
                className={`flex-shrink-0 text-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                &#8964;
              </span>
            </button>
            {isOpen && <p className="mt-3 text-sm text-muted">{faq.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
