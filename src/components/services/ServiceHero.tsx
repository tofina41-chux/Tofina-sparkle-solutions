import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import type { Service } from "@/types";
import { getServiceImageUrl } from "@/utils/serviceImages";

export default function ServiceHero({ service }: { service: Service }) {
  const imageUrl = getServiceImageUrl(service.image);

  return (
    <section className="relative overflow-hidden bg-secondary pt-40 pb-20">
      <svg className="absolute inset-0 h-full w-full opacity-[0.05]" aria-hidden="true">
        <defs>
          <pattern id="svc-grid" width="36" height="36" patternUnits="userSpaceOnUse">
            <path d="M 36 0 L 0 0 0 36" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#svc-grid)" />
      </svg>
      <Container className="relative">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Badge>{service.category}</Badge>
          {imageUrl && (
            <img
              src={imageUrl}
              alt={service.title}
              className="mt-8 h-64 w-full rounded-3xl object-cover shadow-elevated md:h-80"
            />
          )}
          <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold text-white md:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-xl text-white/65">{service.summary}</p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Button to="/request-quote" icon={<FiArrowRight />}>Request This Service</Button>
            <div className="flex gap-8 text-sm text-white/60">
              <div><p className="text-white/40 text-xs">Starting from</p><p className="mt-1 font-semibold text-white">{service.startingPrice}</p></div>
              <div><p className="text-white/40 text-xs">Typical duration</p><p className="mt-1 font-semibold text-white">{service.duration}</p></div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
