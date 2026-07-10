import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import faqs from "@/data/faqs.json";
import SEO from "@/components/common/SEO";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FAQAccordionItem from "@/components/faq/FAQItem";

const CATEGORIES = ["All", ...Array.from(new Set(faqs.map((f) => f.category)))];

export default function FAQ() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return faqs.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const matchesQuery =
        item.question.toLowerCase().includes(query.toLowerCase()) ||
        item.answer.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <>
      <SEO
        title="Frequently Asked Questions"
        description="Answers to common questions about booking, pricing, and what to expect from Tofina Sparkle Solutions."
        path="/faq"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }}
      />
      <section className="bg-secondary pt-40 pb-16">
        <Container>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="eyebrow text-white/60">FAQ</p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-white md:text-5xl">Questions, answered plainly</h1>
          </motion.div>
        </Container>
      </section>
      <Section tone="light" className="pt-14">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    category === cat ? "bg-primary text-white" : "bg-accent/40 text-secondary/70 hover:bg-accent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <input
              type="search"
              placeholder="Search FAQs..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-full border border-accent px-4 py-2 text-sm focus:border-primary focus:outline-none md:w-64"
              aria-label="Search FAQs"
            />
          </div>

          <div className="mt-10 divide-y divide-accent rounded-2xl border border-accent bg-white">
            {filtered.length === 0 ? (
              <p className="p-8 text-center text-sm text-secondary/50">No questions match your search.</p>
            ) : (
              filtered.map((item) => <FAQAccordionItem key={item.id} item={item} />)
            )}
          </div>
        </Container>
      </Section>
    </>
  );
}
