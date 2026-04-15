import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search, MapPin, Code2, GitFork } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { githubLeads, type GitHubLead } from "@/lib/mock-data";
import { ScoreBadge } from "@/components/dashboard/ScoreBadge";
import { LeadDetailPanel } from "@/components/dashboard/LeadDetailPanel";

export const Route = createFileRoute("/dashboard/github")({
  component: GitHubLeads,
});

function GitHubLeads() {
  const [search, setSearch] = useState("");
  const [techFilter, setTechFilter] = useState("");
  const [selectedLead, setSelectedLead] = useState<GitHubLead | null>(null);

  const allTechs = Array.from(new Set(githubLeads.flatMap((l) => l.techStack)));

  const filtered = githubLeads.filter((l) => {
    const matchSearch =
      !search ||
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.username.toLowerCase().includes(search.toLowerCase()) ||
      l.location.toLowerCase().includes(search.toLowerCase());
    const matchTech = !techFilter || l.techStack.includes(techFilter);
    return matchSearch && matchTech;
  });

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">GitHub Lead Finder</h1>
        <p className="mt-1 text-sm text-muted-foreground">Discover and score developer leads from GitHub.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by name, username, or location..."
            className="pl-10 bg-card border-border"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          className="rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          value={techFilter}
          onChange={(e) => setTechFilter(e.target.value)}
        >
          <option value="">All Tech Stacks</option>
          {allTechs.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Results */}
      <div className="space-y-3">
        {filtered.map((lead) => (
          <button
            key={lead.id}
            onClick={() => setSelectedLead(lead)}
            className="w-full glass-card rounded-xl p-5 text-left transition-all hover:border-primary/30 focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {lead.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">{lead.name}</span>
                  <span className="text-sm text-muted-foreground">@{lead.username}</span>
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground line-clamp-1">{lead.bio}</p>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{lead.location}</span>
                  <span className="flex items-center gap-1"><GitFork className="h-3 w-3" />{lead.repos} repos</span>
                  <span className="flex items-center gap-1"><Code2 className="h-3 w-3" />{lead.techStack.slice(0, 2).join(", ")}</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {lead.techStack.map((t) => (
                    <Badge key={t} variant="secondary" className="text-[10px]">{t}</Badge>
                  ))}
                </div>
              </div>
              <ScoreBadge score={lead.aiScore} />
            </div>
          </button>
        ))}

        {filtered.length === 0 && (
          <div className="py-12 text-center text-sm text-muted-foreground">
            No leads match your filters.
          </div>
        )}
      </div>

      {/* Detail panel */}
      {selectedLead && (
        <>
          <div className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm" onClick={() => setSelectedLead(null)} />
          <LeadDetailPanel lead={selectedLead} onClose={() => setSelectedLead(null)} />
        </>
      )}
    </div>
  );
}
