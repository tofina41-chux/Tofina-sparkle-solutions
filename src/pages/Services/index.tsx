import { useState } from "react";
import services from "@/data/services.json";
import SEO from "@/components/common/SEO";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ServiceCard from "@/components/services/ServiceCard";
import { FiDroplet, FiHome, FiBriefcase, FiShoppingBag, FiLayers, FiWind } from "react-icons/fi";
import { motion } from "framer-motion";
import CTASection from "@/components/home/CTASection";

const ICONS: Record<string, typeof FiHome> = {
  residential: FiHome,
  commercial: FiBriefcase,
  office: FiBriefcase,
  shop: FiShoppingBag,
  shared: FiLayers,
  carpet: FiWind,
};

const CATEGORIES = ["All", ...Array.from(new Set(services.map((s) => s.category)))];

export default function Services() {
  const [category, setCategory] = useState("All");
  const filtered = category === "All" ? services : services.filter((s) => s.category === category);

  return (
    <>
      <SEO
        title="Our Services"
        description="Twelve specialist cleaning services — residential, commercial, office, carpet, sofa, mattress, move-in/out, deep cleaning, and post-construction."
        path="/services"
      />
      <section className="bg-secondary pt-40 pb-16">
        <Container>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="eyebrow text-white/60">Our Services</p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-white md:text-5xl">
              A cleaning specialism for every space
            </h1>
            <p className="mt-5 max-w-xl text-white/65">
              Every service follows the same standard checklist, delivered by vetted, trained teams.
            </p>
          </motion.div>
        </Container>
      </section>

      <Section tone="light" className="pt-14">
        <Container>
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

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((service, i) => (
              <ServiceCard key={service.slug} service={service} icon={ICONS[service.image] ?? FiDroplet} delay={i * 0.05} />
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
