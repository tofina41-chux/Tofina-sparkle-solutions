import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const STEPS = [
  { number: "01", title: "Request a Quote", text: "Tell us the property type, service, and preferred date — or use our instant estimator for a price range." },
  { number: "02", title: "We Confirm the Details", text: "A short call or WhatsApp exchange to confirm scope, access, and an exact price." },
  { number: "03", title: "Team Arrives On Schedule", text: "A vetted, equipped team arrives in your chosen window and works through our standard checklist." },
  { number: "04", title: "Walk-Through & Sign-Off", text: "We review the job with you before we leave — any touch-ups happen on the spot." },
];

export default function HowItWorks() {
  return (
    <Section tone="light">
      <Container>
        <SectionHeading eyebrow="How It Works" title="From enquiry to a finished space, in four steps" align="center" />
        <div className="relative mt-16 grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-accent md:block" aria-hidden="true" />
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-display text-sm font-semibold text-white">
                {step.number}
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-secondary">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary/65">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
