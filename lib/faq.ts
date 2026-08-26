export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Extracts Q&A pairs from the "## Frequently Asked Questions" section of a
 * post's MDX body, for FAQPage structured data (see study-guide page.tsx).
 * Each "### Question" heading inside that section becomes one FAQ item,
 * with the following paragraph(s) as its answer.
 */
export function extractFaqs(content: string): FaqItem[] {
  const lines = content.split("\n");
  const faqs: FaqItem[] = [];

  let inFaqSection = false;
  let currentQuestion: string | null = null;
  let currentAnswer: string[] = [];

  function flush() {
    if (currentQuestion) {
      const answer = currentAnswer.join(" ").replace(/\s+/g, " ").trim();
      if (answer) faqs.push({ question: currentQuestion.trim(), answer });
    }
    currentQuestion = null;
    currentAnswer = [];
  }

  for (const line of lines) {
    const h2 = line.match(/^##\s+(.*)/);
    const h3 = line.match(/^###\s+(.*)/);

    if (h2) {
      if (inFaqSection) flush();
      inFaqSection = /frequently asked questions/i.test(h2[1]);
      continue;
    }

    if (!inFaqSection) continue;

    if (h3) {
      flush();
      currentQuestion = h3[1];
      continue;
    }

    if (currentQuestion && line.trim()) {
      currentAnswer.push(line.trim());
    }
  }

  if (inFaqSection) flush();

  return faqs;
}
