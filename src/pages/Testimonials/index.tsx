import { motion } from "framer-motion";
import testimonials from "@/data/testimonials.json";
import SEO from "@/components/common/SEO";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import CTASection from "@/components/home/CTASection";

export default function Testimonials() {
  return (
    <>
      <SEO title="Testimonials" description="Read what residential and commercial clients say about Tofina Sparkle Solutions." path="/testimonials" />
      <section className="bg-secondary pt-40 pb-16">
        <Container>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="eyebrow text-white/60">Testimonials</p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-white md:text-5xl">What our clients say</h1>
          </motion.div>
        </Container>
      </section>
      <Section tone="light" className="pt-14">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} delay={i * 0.06} />
            ))}
          </div>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
