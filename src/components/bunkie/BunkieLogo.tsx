import { cn } from "@/lib/utils";

/**
 * Temporary typographic stand-in for the official Bunkie logo.
 * Replace the inner markup with the supplied transparent logo file once it is uploaded —
 * the official artwork must never be redrawn or AI-generated.
 */
export function BunkieLogo({ className }: { className?: string }) {
  return (
    <span
      className={cn("font-display text-2xl font-extrabold lowercase leading-none tracking-[-0.06em]", className)}
      aria-label="Bunkie"
    >
      bunkie
    </span>
  );
}
