import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import SEO from "@/components/common/SEO";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { EMAIL_ADDRESS } from "@/utils/formatters";

const OPENINGS = [
  { title: "Residential Cleaning Associate", type: "Full-time", location: "Mombasa" },
  { title: "Commercial Site Supervisor", type: "Full-time", location: "Mombasa" },
  { title: "Carpet & Upholstery Technician", type: "Full-time", location: "Mombasa" },
];

const BENEFITS = ["Training provided", "Performance bonuses", "Growth into supervisory roles", "Consistent, scheduled work"];

export default function Careers() {
  return (
    <>
      <SEO title="Careers" description="Join the Tofina Sparkle Solutions team — current openings across Mombasa." path="/careers" />
      <section className="bg-secondary pt-40 pb-16">
        <Container>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="eyebrow text-white/60">Careers</p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-white md:text-5xl">Build your career with us</h1>
          </motion.div>
        </Container>
      </section>
      <Section tone="light" className="pt-14">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <h2 className="font-display text-2xl font-semibold text-secondary">Current Openings</h2>
              <div className="mt-6 space-y-4">
                {OPENINGS.map((role) => (
                  <div key={role.title} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-accent bg-white p-6 shadow-card">
                    <div>
                      <p className="font-semibold text-secondary">{role.title}</p>
                      <p className="mt-1 text-xs text-secondary/50">{role.type} · {role.location}</p>
                    </div>
                    <Button href={`mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(`Application: ${role.title}`)}`} size="sm" variant="outline">
                      Apply
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-secondary">Why work here</h3>
              <ul className="mt-5 space-y-3">
                {BENEFITS.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-secondary/70">
                    <FiCheck className="mt-0.5 shrink-0 text-success" size={16} /> {b}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-secondary/60">
                Don't see the right role listed? Send your CV to{" "}
                <a href={`mailto:${EMAIL_ADDRESS}`} className="text-primary underline underline-offset-2">{EMAIL_ADDRESS}</a> and we'll keep it on file.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
