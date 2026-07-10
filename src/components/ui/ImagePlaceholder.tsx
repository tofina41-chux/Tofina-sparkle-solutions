import { ReactNode } from "react";

/**
 * Elegant stand-in for real photography. Replace with actual project photos by
 * swapping this component's usage for an <img> tag pointing into src/assets.
 * Kept deliberately flat and on-brand (no gradients, no stock-photo cliché).
 */
export default function ImagePlaceholder({
  label,
  icon,
  tone = "primary",
  className = "",
  aspect = "aspect-[4/3]",
}: {
  label?: string;
  icon?: ReactNode;
  tone?: "primary" | "secondary" | "accent";
  className?: string;
  aspect?: string;
}) {
  const toneClasses: Record<string, string> = {
    primary: "bg-primary/[0.06] text-primary",
    secondary: "bg-secondary/[0.05] text-secondary",
    accent: "bg-accent/40 text-secondary/60",
  };

  return (
    <div
      className={`relative flex ${aspect} items-center justify-center overflow-hidden rounded-2xl border border-accent/70 ${toneClasses[tone]} ${className}`}
    >
      <svg className="absolute inset-0 h-full w-full opacity-[0.4]" aria-hidden="true">
        <defs>
          <pattern id={`grid-${label ?? "x"}`} width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M 28 0 L 0 0 0 28" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${label ?? "x"})`} />
      </svg>
      <div className="relative flex flex-col items-center gap-2 px-4 text-center">
        {icon && <span className="text-2xl opacity-70">{icon}</span>}
        {label && <span className="text-xs font-medium uppercase tracking-[0.14em] opacity-60">{label}</span>}
      </div>
    </div>
  );
}
