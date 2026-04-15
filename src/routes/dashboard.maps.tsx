import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search, Star, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { businessLeads, type BusinessLead } from "@/lib/mock-data";
import { ScoreBadge } from "@/components/dashboard/ScoreBadge";
import { LeadDetailPanel } from "@/components/dashboard/LeadDetailPanel";

export const Route = createFileRoute("/dashboard/maps")({
  component: MapsLeads,
});

function MapsLeads() {
  const [businessType, setBusinessType] = useState("");
  const [city, setCity] = useState("");
  const [selectedLead, setSelectedLead] = useState<BusinessLead | null>(null);

  const filtered = businessLeads.filter((l) => {
    const matchType = !businessType || l.type.toLowerCase().includes(businessType.toLowerCase());
    const matchCity = !city || l.city.toLowerCase().includes(city.toLowerCase());
    return matchType && matchCity;
  });

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Google Maps Lead Finder</h1>
        <p className="mt-1 text-sm text-muted-foreground">Discover local businesses with untapped opportunities.</p>
      </div>

      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[180px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Business type (e.g. Bakery)"
            className="pl-10 bg-card border-border"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
          />
        </div>
        <div className="relative flex-1 min-w-[180px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="City (e.g. Portland)"
            className="pl-10 bg-card border-border"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map((lead) => (
          <button
            key={lead.id}
            onClick={() => setSelectedLead(lead)}
            className="w-full glass-card rounded-xl p-5 text-left transition-all hover:border-primary/30 focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <div className="flex items-start gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">{lead.name}</span>
                  <span className="text-xs text-muted-foreground">· {lead.type}</span>
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">{lead.address}, {lead.city}</p>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Star className="h-3 w-3 text-yellow-400" />{lead.rating} ({lead.reviews})</span>
                  <span className="flex items-center gap-1"><Phone className="h-3 w-3" />{lead.phone}</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {lead.badges.map((b) => (
                    <Badge key={b} variant="secondary" className="text-[10px] bg-primary/10 text-primary border-primary/20">{b}</Badge>
                  ))}
                </div>
              </div>
              <ScoreBadge score={lead.aiScore} />
            </div>
          </button>
        ))}

        {filtered.length === 0 && (
          <div className="py-12 text-center text-sm text-muted-foreground">
            No businesses match your search.
          </div>
        )}
      </div>

      {selectedLead && (
        <>
          <div className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm" onClick={() => setSelectedLead(null)} />
          <LeadDetailPanel lead={selectedLead} onClose={() => setSelectedLead(null)} />
        </>
      )}
    </div>
  );
}
