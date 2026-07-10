import { motion } from "framer-motion";
import SEO from "@/components/common/SEO";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export default function Gallery() {
  return (
    <>
      <SEO title="Gallery" description="Browse recent residential, commercial, and specialist cleaning projects by Tofina Sparkle Solutions." path="/gallery" />
      <section className="bg-secondary pt-40 pb-16">
        <Container>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="eyebrow text-white/60">Gallery</p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-white md:text-5xl">Recent work, by category</h1>
          </motion.div>
        </Container>
      </section>
      <Section tone="light" className="pt-14">
        <Container>
          <GalleryGrid />
        </Container>
      </Section>
    </>
  );
}
