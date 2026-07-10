import { FiArrowRight } from "react-icons/fi";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary py-20">
      <svg className="absolute inset-0 h-full w-full opacity-[0.06]" aria-hidden="true">
        <defs>
          <pattern id="cta-grid" width="36" height="36" patternUnits="userSpaceOnUse">
            <path d="M 36 0 L 0 0 0 36" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cta-grid)" />
      </svg>
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-xl font-display text-3xl font-semibold text-white md:text-4xl">
          Ready for a space that actually feels clean?
        </h2>
        <p className="max-w-md text-white/75">
          Get an instant price range in under a minute, or speak to us directly on WhatsApp.
        </p>
        <Button to="/request-quote" variant="secondary" size="lg" icon={<FiArrowRight />}>
          Request a Free Quote
        </Button>
      </Container>
    </section>
  );
}
