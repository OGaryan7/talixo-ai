import { X, TrendingUp, TrendingDown, Flame, Thermometer, Snowflake } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import type { GitHubLead, BusinessLead } from "@/lib/mock-data";

type Lead = GitHubLead | BusinessLead;

function isGitHub(lead: Lead): lead is GitHubLead {
  return "username" in lead;
}

const statusConfig = {
  hot: { label: "Hot", icon: Flame, className: "bg-red-500/10 text-red-400 border-red-500/20" },
  warm: { label: "Warm", icon: Thermometer, className: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
  cold: { label: "Cold", icon: Snowflake, className: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
};

export function LeadDetailPanel({
  lead,
  onClose,
}: {
  lead: Lead | null;
  onClose: () => void;
}) {
  if (!lead) return null;

  const st = statusConfig[lead.status];
  const StatusIcon = st.icon;

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md border-l border-border bg-card shadow-2xl overflow-y-auto">
      <div className="flex items-center justify-between border-b border-border p-5">
        <h2 className="font-semibold text-foreground">Lead Intelligence Engine</h2>
        <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="p-5 space-y-6">
        {/* Name & status */}
        <div>
          <h3 className="text-xl font-bold text-foreground">
            {isGitHub(lead) ? lead.name : lead.name}
          </h3>
          {isGitHub(lead) && (
            <p className="text-sm text-muted-foreground">@{lead.username}</p>
          )}
          {!isGitHub(lead) && (
            <p className="text-sm text-muted-foreground">{lead.type} · {lead.city}</p>
          )}
          <div className="mt-2 flex items-center gap-2">
            <Badge variant="outline" className={st.className}>
              <StatusIcon className="mr-1 h-3 w-3" />
              {st.label}
            </Badge>
          </div>
        </div>

        {/* AI Score */}
        <div className="glass-card rounded-xl p-5">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">AI Score</span>
            <span className="text-3xl font-bold neon-text">{lead.aiScore}</span>
          </div>
          <Progress value={lead.aiScore} className="mt-3 h-2 bg-muted [&>div]:gradient-neon" />
          <p className="mt-2 text-xs text-muted-foreground">Out of 100</p>
        </div>

        {/* Strengths */}
        <div>
          <h4 className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
            <TrendingUp className="h-4 w-4 text-primary" /> Strengths
          </h4>
          <ul className="space-y-1.5">
            {lead.strengths.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Weaknesses */}
        <div>
          <h4 className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
            <TrendingDown className="h-4 w-4 text-destructive" /> Weaknesses
          </h4>
          <ul className="space-y-1.5">
            {lead.weaknesses.map((w) => (
              <li key={w} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                {w}
              </li>
            ))}
          </ul>
        </div>

        {/* Extra info */}
        {isGitHub(lead) && (
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>Location</span>
              <span className="text-foreground">{lead.location}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Repos</span>
              <span className="text-foreground">{lead.repos}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Followers</span>
              <span className="text-foreground">{lead.followers.toLocaleString()}</span>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2">
              {lead.techStack.map((t) => (
                <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
              ))}
            </div>
          </div>
        )}

        {!isGitHub(lead) && (
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>Rating</span>
              <span className="text-foreground">⭐ {lead.rating} ({lead.reviews} reviews)</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Phone</span>
              <span className="text-foreground">{lead.phone}</span>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2">
              {lead.badges.map((b) => (
                <Badge key={b} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">{b}</Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
