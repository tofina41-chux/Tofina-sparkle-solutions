import { useParams, Link, Navigate } from "react-router-dom";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import services from "@/data/services.json";
import SEO from "@/components/common/SEO";
import ServiceHero from "@/components/services/ServiceHero";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import ServiceCard from "@/components/services/ServiceCard";
import { FiHome } from "react-icons/fi";
import CTASection from "@/components/home/CTASection";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const related = services.filter((s) => s.category === service.category && s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <SEO
        title={service.title}
        description={service.description}
        path={`/services/${service.slug}`}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: service.title,
          provider: { "@type": "LocalBusiness", name: "Tofina Sparkle Solutions" },
          areaServed: "Mombasa, Kenya",
          description: service.description,
        }}
      />
      <ServiceHero service={service} />

      <Section tone="light">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <nav aria-label="Breadcrumb" className="text-xs text-secondary/50">
                <Link to="/" className="hover:text-primary">Home</Link> /{" "}
                <Link to="/services" className="hover:text-primary">Services</Link> / {service.title}
              </nav>

              <h2 className="mt-6 font-display text-2xl font-semibold text-secondary">Overview</h2>
              <p className="mt-4 text-sm leading-relaxed text-secondary/70">{service.description}</p>

              <h3 className="mt-10 font-display text-xl font-semibold text-secondary">What's included</h3>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-secondary/70">
                    <FiCheck className="mt-0.5 shrink-0 text-success" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>

              <ImagePlaceholder label={service.title} tone="primary" aspect="aspect-[16/9]" className="mt-10" />
            </div>

            <aside className="h-fit rounded-3xl border border-accent bg-white p-7 shadow-card lg:sticky lg:top-28">
              <p className="eyebrow">Ready to book?</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-secondary">{service.title}</h3>
              <div className="mt-5 space-y-3 border-t border-accent pt-5 text-sm">
                <div className="flex justify-between"><span className="text-secondary/50">Starting from</span><span className="font-semibold text-secondary">{service.startingPrice}</span></div>
                <div className="flex justify-between"><span className="text-secondary/50">Typical duration</span><span className="font-semibold text-secondary">{service.duration}</span></div>
                <div className="flex justify-between"><span className="text-secondary/50">Category</span><span className="font-semibold text-secondary">{service.category}</span></div>
              </div>
              <Button to="/request-quote" className="mt-6 w-full" icon={<FiArrowRight />}>Request a Quote</Button>
            </aside>
          </div>

          {related.length > 0 && (
            <div className="mt-24">
              <h3 className="font-display text-2xl font-semibold text-secondary">Related Services</h3>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((s) => (
                  <ServiceCard key={s.slug} service={s} icon={FiHome} />
                ))}
              </div>
            </div>
          )}
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
