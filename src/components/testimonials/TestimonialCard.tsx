import { FiStar } from "react-icons/fi";
import Card from "@/components/ui/Card";
import type { Testimonial } from "@/types";

export default function TestimonialCard({ testimonial, delay = 0 }: { testimonial: Testimonial; delay?: number }) {
  return (
    <Card delay={delay}>
      <div className="flex gap-1 text-primary">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <FiStar key={i} fill="currentColor" size={14} />
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-secondary/70">"{testimonial.text}"</p>
      <div className="mt-6 border-t border-accent pt-4">
        <p className="text-sm font-semibold text-secondary">{testimonial.name}</p>
        <p className="text-xs text-secondary/50">{testimonial.business}</p>
      </div>
    </Card>
  );
}
