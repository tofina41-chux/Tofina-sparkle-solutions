import { ReactNode } from "react";

export default function Badge({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "success" }) {
  const toneClass =
    tone === "success" ? "bg-success/10 text-success" : "bg-primary/10 text-primary";
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${toneClass}`}>
      {children}
    </span>
  );
}
