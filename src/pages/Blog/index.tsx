import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import posts from "@/data/blog.json";
import SEO from "@/components/common/SEO";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { formatDate } from "@/utils/formatters";

export default function Blog() {
  return (
    <>
      <SEO title="Blog" description="Cleaning tips, deposit-protection checklists, and guidance from Tofina Sparkle Solutions." path="/blog" />
      <section className="bg-secondary pt-40 pb-16">
        <Container>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="eyebrow text-white/60">Blog</p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-white md:text-5xl">Notes on keeping spaces spotless</h1>
          </motion.div>
        </Container>
      </section>
      <Section tone="light" className="pt-14">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {posts.map((post, i) => (
              <Card key={post.id} delay={i * 0.08} className="flex flex-col">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">{post.category}</p>
                <h2 className="mt-3 font-display text-lg font-semibold text-secondary">{post.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-secondary/65">{post.excerpt}</p>
                <div className="mt-5 flex items-center justify-between border-t border-accent pt-4 text-xs text-secondary/50">
                  <span>{formatDate(post.date)}</span>
                  <span>{post.readTime}</span>
                </div>
                <Link to={`/blog/${post.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read Article <FiArrowRight size={14} />
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
