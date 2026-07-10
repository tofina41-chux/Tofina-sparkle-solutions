import { motion } from "framer-motion";
import { FiArrowRight, FiStar } from "react-icons/fi";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const WORDS = ["Precise.", "Reliable.", "Immaculate."];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-secondary pt-24">
      {/* Base surface */}
      <div className="absolute inset-0 bg-secondary" />

      {/* Signature: a slow diagonal sheen sweeping across the hero, like light
          catching a freshly polished surface. This is the one bold motion
          moment on the page — everything else stays quiet. */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -inset-y-1/2 left-[-20%] w-1/3 rotate-[8deg] bg-white/[0.05] animate-sheen" />
      </div>

      <svg className="absolute inset-0 h-full w-full opacity-[0.05]" aria-hidden="true">
        <defs>
          <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      <Container className="relative z-10 py-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5"
          >
            <FiStar className="text-primary" size={13} />
            <span className="text-xs font-medium tracking-wide text-white/80">
              Trusted across Mombasa since 2018
            </span>
          </motion.div>

          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl">
            {WORDS.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className={`block ${i === 2 ? "text-primary" : ""}`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 max-w-lg text-lg leading-relaxed text-white/65"
          >
            Residential and commercial cleaning, done to a standard you can feel — from a
            single deep clean to an ongoing contract across every floor of your building.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button to="/request-quote" size="lg" icon={<FiArrowRight />}>
              Request a Quote
            </Button>
            <Button to="/services" size="lg" variant="outline" className="border-white/25 text-white hover:border-white hover:text-white">
              Explore Services
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
