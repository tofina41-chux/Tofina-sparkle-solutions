import { FiShield, FiClock, FiAward, FiUsers } from "react-icons/fi";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

const REASONS = [
  { icon: FiShield, title: "Vetted & Insured", text: "Every team member is background-checked, trained, and covered by liability insurance on site." },
  { icon: FiClock, title: "On Time, Every Time", text: "Scheduled arrival windows and a supervisor accountable for every job, residential or commercial." },
  { icon: FiAward, title: "Consistent Standard", text: "The same checklist and the same team return each visit, so quality never depends on who shows up." },
  { icon: FiUsers, title: "Built for Kenyan Homes", text: "Products and methods suited to local surfaces, water hardness, and building materials." },
];

export default function WhyChooseUs() {
  return (
    <Section tone="light">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A cleaning standard you can actually rely on"
          description="Not just a one-time deep clean — a service you can build a recurring plan around."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason, i) => (
            <Card key={reason.title} delay={i * 0.08}>
              <reason.icon className="text-primary" size={26} />
              <h3 className="mt-4 font-display text-lg font-semibold text-secondary">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary/65">{reason.text}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
