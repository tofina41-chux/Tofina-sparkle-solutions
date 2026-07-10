import { FiImage, FiArrowRight } from "react-icons/fi";
import gallery from "@/data/gallery.json";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

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
            <ImagePlaceholder key={item.id} label={item.category} icon={<FiImage />} tone="accent" />
          ))}
        </div>
      </Container>
    </Section>
  );
}
