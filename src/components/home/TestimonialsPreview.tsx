import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FiStar } from "react-icons/fi";
import testimonials from "@/data/testimonials.json";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialsPreview() {
  return (
    <Section tone="dark">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say after the last visit, not just the first"
          light
          align="center"
        />
        <div className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="pb-12"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex gap-1 text-primary">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <FiStar key={i} fill="currentColor" size={14} />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-white/80">"{t.text}"</p>
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/50">{t.business}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </Section>
  );
}
