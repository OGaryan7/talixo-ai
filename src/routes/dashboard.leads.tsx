import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Bookmark, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { githubLeads, businessLeads } from "@/lib/mock-data";
import { ScoreBadge } from "@/components/dashboard/ScoreBadge";
import { LeadDetailPanel } from "@/components/dashboard/LeadDetailPanel";
import type { GitHubLead, BusinessLead } from "@/lib/mock-data";

export const Route = createFileRoute("/dashboard/leads")({
  component: SavedLeads,
});

type Lead = GitHubLead | BusinessLead;

const initialSaved: Lead[] = [githubLeads[0], githubLeads[4], businessLeads[0], businessLeads[2]];

function SavedLeads() {
  const [saved, setSaved] = useState<Lead[]>(initialSaved);
  const [selected, setSelected] = useState<Lead | null>(null);

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Saved Leads</h1>
          <p className="mt-1 text-sm text-muted-foreground">{saved.length} leads saved</p>
        </div>
        <Bookmark className="h-5 w-5 text-primary" />
      </div>

      <div className="space-y-3">
        {saved.map((lead) => {
          const isGH = "username" in lead;
          return (
            <div
              key={lead.id}
              className="glass-card rounded-xl p-5 flex items-center gap-4 transition-all hover:border-primary/30"
            >
              <button className="flex-1 min-w-0 text-left" onClick={() => setSelected(lead)}>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">{lead.name}</span>
                  {isGH && <Badge variant="secondary" className="text-[10px]">GitHub</Badge>}
                  {!isGH && <Badge variant="secondary" className="text-[10px]">Maps</Badge>}
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {isGH ? (lead as GitHubLead).location : `${(lead as BusinessLead).type} · ${(lead as BusinessLead).city}`}
                </p>
              </button>
              <ScoreBadge score={lead.aiScore} />
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-destructive shrink-0"
                onClick={() => setSaved(saved.filter((s) => s.id !== lead.id))}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          );
        })}

        {saved.length === 0 && (
          <div className="py-12 text-center text-sm text-muted-foreground">
            No saved leads yet. Save leads from GitHub or Maps finders.
          </div>
        )}
      </div>

      {selected && (
        <>
          <div className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm" onClick={() => setSelected(null)} />
          <LeadDetailPanel lead={selected} onClose={() => setSelected(null)} />
        </>
      )}
    </div>
  );
}
