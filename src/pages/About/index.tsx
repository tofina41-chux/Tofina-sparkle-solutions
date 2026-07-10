import { motion } from "framer-motion";
import { FiTarget, FiEye, FiHeart } from "react-icons/fi";
import team from "@/data/team.json";
import SEO from "@/components/common/SEO";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import CTASection from "@/components/home/CTASection";

const VALUES = [
  { icon: FiTarget, title: "Precision", text: "Every job follows the same detailed checklist — nothing left to memory." },
  { icon: FiEye, title: "Transparency", text: "Clear pricing, clear scope, and a walk-through before we leave." },
  { icon: FiHeart, title: "Care", text: "We treat every home and workplace the way we'd want our own treated." },
];

const TIMELINE = [
  { year: "2018", text: "Tofina Sparkle Solutions founded, starting with residential cleaning in Nyali." },
  { year: "2020", text: "Expanded into commercial contracts, adding office and retail clients across Tudor." },
  { year: "2022", text: "Launched specialist services — carpet, sofa, and mattress cleaning." },
  { year: "2024", text: "Reached 4,000+ completed jobs and grew to a team of over 60 trained staff." },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Tofina Sparkle Solutions — our story, mission, values, and the team behind Mombasa's most consistent cleaning service."
        path="/about"
      />
      <section className="bg-secondary pt-40 pb-20">
        <Container>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="eyebrow text-white/60">About Us</p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-white md:text-5xl">
              Cleaning built around consistency, not one good day
            </h1>
            <p className="mt-5 max-w-xl text-white/65">
              Tofina Sparkle Solutions started with a simple observation: most cleaning services are good once,
              then inconsistent. We built our operation around checklists, team continuity, and accountability
              so the standard holds — visit after visit.
            </p>
          </motion.div>
        </Container>
      </section>

      <Section tone="light">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Card key={v.title} delay={i * 0.1}>
                <v.icon className="text-primary" size={26} />
                <h3 className="mt-4 font-display text-lg font-semibold text-secondary">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary/65">{v.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading eyebrow="Our Journey" title="How we got here" align="center" />
          <div className="relative mt-16 mx-auto max-w-2xl">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-accent" aria-hidden="true" />
            <div className="space-y-10">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-8"
                >
                  <div className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-primary bg-white" />
                  <p className="font-display text-sm font-semibold text-primary">{item.year}</p>
                  <p className="mt-1 text-sm leading-relaxed text-secondary/70">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="light">
        <Container>
          <SectionHeading eyebrow="Meet The Team" title="The people behind every visit" align="center" />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Card key={member.id} delay={i * 0.08}>
                <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center font-display font-semibold">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-secondary">{member.name}</h3>
                <p className="text-xs font-medium text-primary">{member.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-secondary/60">{member.bio}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
