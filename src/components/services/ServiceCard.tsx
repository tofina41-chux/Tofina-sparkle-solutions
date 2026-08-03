import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import type { IconType } from "react-icons";
import type { Service } from "@/types";
import { getServiceImageUrl } from "@/utils/serviceImages";

export default function ServiceCard({
  service,
  icon: Icon,
  delay = 0,
}: {
  service: Service;
  icon: IconType;
  delay?: number;
}) {
  const imageUrl = getServiceImageUrl(service.image);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
    >
      <Link
        to={`/services/${service.slug}`}
        className="group flex h-full flex-col rounded-2xl border border-accent/70 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated"
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={service.title}
            className="mb-5 h-40 w-full rounded-xl object-cover"
            loading="lazy"
          />
        ) : (
          <div className="mb-5 flex h-40 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon size={24} />
          </div>
        )}
        <div className="flex items-start justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon size={20} />
          </div>
          <FiArrowUpRight
            className="text-secondary/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
            size={18}
          />
        </div>
        <h3 className="mt-5 font-display text-lg font-semibold text-secondary">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-secondary/60">{service.summary}</p>
        <div className="mt-5 flex items-center justify-between border-t border-accent pt-4 text-xs text-secondary/50">
          <span>From {service.startingPrice}</span>
          <span>{service.duration}</span>
        </div>
      </Link>
    </motion.div>
  );
}
