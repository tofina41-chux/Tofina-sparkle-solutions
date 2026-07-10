import { useState } from "react";
import beforeAfter from "@/data/beforeafter.json";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

function Slider({ item }: { item: (typeof beforeAfter)[number] }) {
  const [pos, setPos] = useState(50);
  return (
    <div className="rounded-2xl border border-accent/70 bg-white p-4 shadow-card">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-secondary/5">
        <div className="absolute inset-0 flex items-center justify-center bg-primary/[0.07] text-xs font-medium uppercase tracking-widest text-primary/70">
          After
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center overflow-hidden bg-accent/50 text-xs font-medium uppercase tracking-widest text-secondary/50"
          style={{ width: `${pos}%` }}
        >
          <span style={{ width: "max(100%, 260px)" }} className="flex items-center justify-center">Before</span>
        </div>
        <div
          className="absolute inset-y-0 w-0.5 bg-white shadow"
          style={{ left: `${pos}%` }}
        />
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`Before and after slider for ${item.title}`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <p className="mt-4 text-sm font-semibold text-secondary">{item.title}</p>
      <p className="text-xs text-secondary/50">{item.category}</p>
    </div>
  );
}

export default function BeforeAfterPreview() {
  return (
    <Section tone="light">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Real Results"
            title="See the difference for yourself"
            description="Drag the slider across each project to compare before and after."
          />
          <Button to="/before-after" variant="outline">View All Projects</Button>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {beforeAfter.map((item) => (
            <Slider key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
