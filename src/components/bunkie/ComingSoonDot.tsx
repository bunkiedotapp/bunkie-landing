import { cn } from "@/lib/utils";

export function ComingSoonDot({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("inline-block size-2 shrink-0 rounded-full bg-lime animate-pulse-dot", className)}
    />
  );
}
