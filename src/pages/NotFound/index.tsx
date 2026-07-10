import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import SEO from "@/components/common/SEO";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="flex min-h-screen items-center bg-secondary">
        <Container className="text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="font-display text-8xl font-semibold text-primary">404</p>
            <h1 className="mt-4 font-display text-2xl font-semibold text-white">This page hasn't been cleaned up yet</h1>
            <p className="mt-3 text-white/60">The page you're looking for doesn't exist or may have moved.</p>
            <Button to="/" className="mt-8" icon={<FiArrowLeft />}>Back to Home</Button>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
