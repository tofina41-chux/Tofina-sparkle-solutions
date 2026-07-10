import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import posts from "@/data/blog.json";
import SEO from "@/components/common/SEO";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { formatDate } from "@/utils/formatters";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <SEO title={post.title} description={post.excerpt} path={`/blog/${post.slug}`} />
      <section className="bg-secondary pt-40 pb-16">
        <Container className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="eyebrow text-white/60">{post.category} · {formatDate(post.date)} · {post.readTime}</p>
            <h1 className="mt-4 font-display text-4xl font-semibold text-white md:text-5xl">{post.title}</h1>
          </motion.div>
        </Container>
      </section>
      <Section tone="light" className="pt-14">
        <Container className="max-w-3xl">
          <p className="text-base leading-relaxed text-secondary/75">{post.excerpt}</p>
          <p className="mt-6 text-sm leading-relaxed text-secondary/60">
            This article outline is ready for full content — replace this placeholder paragraph with the
            complete write-up in <code className="rounded bg-accent/40 px-1.5 py-0.5 text-xs">src/data/blog.json</code>{" "}
            or convert this page to render Markdown/MDX if you plan to publish long-form posts regularly.
          </p>
          <Link to="/blog" className="mt-10 inline-block text-sm font-medium text-primary">← Back to Blog</Link>
        </Container>
      </Section>
    </>
  );
}
