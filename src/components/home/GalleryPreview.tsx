import { FiArrowRight } from "react-icons/fi";
import gallery from "@/data/gallery.json";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const getImageUrl = (filename: string): string => {
  return new URL(`../../assets/gallery/${filename}`, import.meta.url).href;
};

export default function GalleryPreview() {
  return (
    <Section tone="light">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Gallery" title="A closer look at recent work" />
          <Button to="/gallery" variant="outline" icon={<FiArrowRight />}>Full Gallery</Button>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.slice(0, 8).map((item) => (
            <div key={item.id} className="relative overflow-hidden rounded-2xl">
              <img
                src={getImageUrl(item.image)}
                alt={item.title}
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent px-4 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-white/80">{item.category}</p>
                <p className="mt-1 text-sm font-semibold text-white">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
