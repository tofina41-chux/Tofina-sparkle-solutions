import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  tone?: "light" | "dark" | "muted";
}

const TONE_MAP: Record<NonNullable<SectionProps["tone"]>, string> = {
  light: "bg-surface",
  dark: "bg-secondary text-white",
  muted: "bg-accent/30",
};

export default function Section({ children, id, className = "", tone = "light" }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${TONE_MAP[tone]} ${className}`}>
      {children}
    </section>
  );
}
