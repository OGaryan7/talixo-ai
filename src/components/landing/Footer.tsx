import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg gradient-neon">
            <Zap className="h-3.5 w-3.5 text-neon-foreground" />
          </div>
          <span className="text-sm font-semibold text-foreground">Talixo</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2026 Talixo. AI-powered lead intelligence.
        </p>
      </div>
    </footer>
  );
}
