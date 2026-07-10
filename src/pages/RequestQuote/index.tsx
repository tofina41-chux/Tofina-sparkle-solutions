import { motion } from "framer-motion";
import SEO from "@/components/common/SEO";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import EstimateCalculator from "@/components/quote/EstimateCalculator";
import QuoteForm from "@/components/quote/QuoteForm";

export default function RequestQuote() {
  return (
    <>
      <SEO
        title="Request a Quote"
        description="Get an instant price estimate or submit a full quote request for residential or commercial cleaning across Mombasa."
        path="/request-quote"
      />
      <section className="bg-secondary pt-40 pb-16">
        <Container>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="eyebrow text-white/60">Request a Quote</p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-white md:text-5xl">
              Tell us what you need — we'll handle the rest
            </h1>
            <p className="mt-5 max-w-xl text-white/65">
              Use the instant estimator for a quick price range, then submit the full form below to lock in your booking.
            </p>
          </motion.div>
        </Container>
      </section>
      <Section tone="light" className="pt-14">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <EstimateCalculator />
            <QuoteForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
