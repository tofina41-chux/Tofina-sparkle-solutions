import { FiMapPin } from "react-icons/fi";
import areas from "@/data/areas.json";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AreasWeServe() {
  return (
    <Section tone="light">
      <Container>
        <SectionHeading eyebrow="Areas We Serve" title="Active across greater Mombasa" align="center" />
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="flex items-center gap-2 rounded-full border border-accent px-4 py-2 text-sm font-medium text-secondary/75"
            >
              <FiMapPin size={13} className="text-primary" />
              {area}
            </span>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-secondary/50">
          Don't see your area? <a href="/contact" className="text-primary underline underline-offset-2">Get in touch</a> — we likely still cover it.
        </p>
      </Container>
    </Section>
  );
}
