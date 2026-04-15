import { cn } from "@/lib/utils";

export function ScoreBadge({ score }: { score: number }) {
  const color =
    score >= 80
      ? "text-primary bg-primary/10 border-primary/30 neon-glow"
      : score >= 50
        ? "text-yellow-400 bg-yellow-500/10 border-yellow-500/20"
        : "text-muted-foreground bg-muted border-border";

  return (
    <span
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-lg border text-xs font-bold",
        color
      )}
    >
      {score}
    </span>
  );
}
