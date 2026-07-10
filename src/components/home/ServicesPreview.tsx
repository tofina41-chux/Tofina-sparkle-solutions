import { FiArrowRight, FiDroplet, FiHome, FiBriefcase, FiShoppingBag, FiLayers, FiWind } from "react-icons/fi";
import services from "@/data/services.json";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/services/ServiceCard";

const ICONS: Record<string, typeof FiHome> = {
  residential: FiHome,
  commercial: FiBriefcase,
  office: FiBriefcase,
  shop: FiShoppingBag,
  shared: FiLayers,
  carpet: FiWind,
};

export default function ServicesPreview() {
  const featured = services.slice(0, 6);
  return (
    <Section tone="muted">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Our Services"
            title="Twelve specialisms, one consistent standard"
            description="From routine residential visits to post-construction handovers — every service follows the same quality checklist."
          />
          <Button to="/services" variant="outline" icon={<FiArrowRight />}>
            View All Services
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, i) => (
            <ServiceCard
              key={service.slug}
              service={service}
              icon={ICONS[service.image] ?? FiDroplet}
              delay={i * 0.06}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
