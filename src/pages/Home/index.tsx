import SEO from "@/components/common/SEO";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesPreview from "@/components/home/ServicesPreview";
import HowItWorks from "@/components/home/HowItWorks";
import BeforeAfterPreview from "@/components/home/BeforeAfterPreview";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import FAQPreview from "@/components/home/FAQPreview";
import AreasWeServe from "@/components/home/AreasWeServe";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <SEO
        title="Premium Residential & Commercial Cleaning in Mombasa"
        description="Tofina Sparkle Solutions delivers meticulous residential and commercial cleaning across Mombasa. Deep cleaning, offices, carpets, move-in/move-out, and post-construction."
        path="/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Tofina Sparkle Solutions",
          image: "https://www.tofinasparkle.co.ke/og-image.jpg",
          telephone: "+254759154533",
          email: "cwafula2026@gmail.com",
          address: { "@type": "PostalAddress", addressLocality: "Mombasa", addressCountry: "KE" },
          areaServed: "Mombasa, Kenya",
          priceRange: "KES 2,000 - KES 20,000",
        }}
      />
      <Hero />
      <Stats />
      <WhyChooseUs />
      <ServicesPreview />
      <HowItWorks />
      <BeforeAfterPreview />
      <TestimonialsPreview />
      <GalleryPreview />
      <FAQPreview />
      <AreasWeServe />
      <CTASection />
    </>
  );
}
