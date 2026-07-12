import { motion } from "framer-motion";
import beforeAfter from "@/data/beforeafter.json";
import SEO from "@/components/common/SEO";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

function getImageUrl(filename: string) {
  return new URL(`../../assets/gallery/${filename}.png`, import.meta.url).href;
}

export default function BeforeAfter() {
  return (
    <>
      <SEO title="Before & After" description="See real before-and-after results from Tofina Sparkle Solutions' carpet, deep cleaning, and post-construction projects." path="/before-after" />
      <section className="bg-secondary pt-40 pb-16">
        <Container>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="eyebrow text-white/60">Before & After</p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-white md:text-5xl">Results you can actually see</h1>
          </motion.div>
        </Container>
      </section>
      <Section tone="light" className="pt-14">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {beforeAfter.map((item) => (
              <div key={item.id} className="rounded-2xl border border-accent bg-white p-5 shadow-card">
                <div className="grid grid-cols-2 gap-3">
                  <img
                    src={getImageUrl(item.before)}
                    alt={`${item.title} before`}
                    className="aspect-[4/3] w-full rounded-xl object-cover"
                  />
                  <img
                    src={getImageUrl(item.after)}
                    alt={`${item.title} after`}
                    className="aspect-[4/3] w-full rounded-xl object-cover"
                  />
                </div>
                <p className="mt-4 text-sm font-semibold text-secondary">{item.title}</p>
                <p className="text-xs text-secondary/50">{item.category}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
