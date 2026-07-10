import faqs from "@/data/faqs.json";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordionItem from "@/components/faq/FAQItem";
import Button from "@/components/ui/Button";

export default function FAQPreview() {
  const preview = faqs.slice(0, 5);
  return (
    <Section tone="muted">
      <Container className="max-w-4xl">
        <SectionHeading eyebrow="FAQ" title="Common questions, answered plainly" align="center" />
        <div className="mt-12 divide-y divide-accent rounded-2xl border border-accent bg-white">
          {preview.map((item) => (
            <FAQAccordionItem key={item.id} item={item} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button to="/faq" variant="outline">See All FAQs</Button>
        </div>
      </Container>
    </Section>
  );
}
