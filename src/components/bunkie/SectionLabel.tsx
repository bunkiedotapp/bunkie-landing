import { cn } from "@/lib/utils";

export function SectionLabel({ index, children, className }: { index: string; children: string; className?: string }) {
  return (
    <p className={cn("eyebrow flex items-center gap-3", className)}>
      <span className="text-lime">({index})</span>
      <span className="h-px w-8 bg-current opacity-40" aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}
