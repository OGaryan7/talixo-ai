import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MessageSquareText, Sparkles, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { githubLeads, businessLeads } from "@/lib/mock-data";
import type { GitHubLead, BusinessLead } from "@/lib/mock-data";

export const Route = createFileRoute("/dashboard/outreach")({
  component: OutreachGenerator,
});

type Lead = GitHubLead | BusinessLead;
const allLeads: Lead[] = [...githubLeads, ...businessLeads];

function generateMessage(lead: Lead): string {
  const isGH = "username" in lead;
  if (isGH) {
    const gh = lead as GitHubLead;
    return `Hi ${gh.name},

I came across your GitHub profile (@${gh.username}) and was really impressed by your work in ${gh.techStack.slice(0, 2).join(" and ")}. With ${gh.repos} repositories and a strong community presence, you're clearly doing great work.

I'm building tools that help developers like you [customize value prop here]. I'd love to share how it could fit into your workflow.

Would you be open to a quick 15-minute chat this week?

Best,
[Your Name]`;
  } else {
    const biz = lead as BusinessLead;
    return `Hi ${biz.name} Team,

I found your business on Google Maps and noticed ${biz.badges.length > 0 ? biz.badges.map((b) => b.toLowerCase()).join(", ") : "a few areas where I could help"}. With a ${biz.rating}-star rating and ${biz.reviews} reviews, you clearly have a great reputation.

I specialize in helping businesses like yours ${biz.badges.includes("No Website Found") ? "build a professional online presence" : "improve their digital strategy"} to attract even more customers.

Would you be interested in a free consultation? I'd love to show you what's possible.

Best regards,
[Your Name]`;
  }
}

function OutreachGenerator() {
  const [selectedId, setSelectedId] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const selectedLead = allLeads.find((l) => l.id === selectedId) ?? null;

  const handleGenerate = () => {
    if (!selectedLead) return;
    setMessage(generateMessage(selectedLead));
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <MessageSquareText className="h-6 w-6 text-primary" />
          AI Outreach Generator
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Select a lead and generate a personalized outreach message.
        </p>
      </div>

      <div className="glass-card rounded-xl p-6 space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">Select Lead</label>
          <select
            className="w-full rounded-lg border border-border bg-card px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
          >
            <option value="">Choose a lead...</option>
            <optgroup label="GitHub Leads">
              {githubLeads.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.name} (@{l.username}) — Score: {l.aiScore}
                </option>
              ))}
            </optgroup>
            <optgroup label="Business Leads">
              {businessLeads.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.name} ({l.type}, {l.city}) — Score: {l.aiScore}
                </option>
              ))}
            </optgroup>
          </select>
        </div>

        <Button
          onClick={handleGenerate}
          disabled={!selectedLead}
          className="gradient-neon text-neon-foreground font-semibold border-0 hover:opacity-90"
        >
          <Sparkles className="mr-2 h-4 w-4" />
          Generate Message
        </Button>

        {message && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-foreground">Generated Message</label>
              <Button variant="ghost" size="sm" onClick={handleCopy} className="text-muted-foreground">
                {copied ? <Check className="mr-1.5 h-3.5 w-3.5 text-primary" /> : <Copy className="mr-1.5 h-3.5 w-3.5" />}
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[280px] bg-card border-border text-sm leading-relaxed"
            />
          </div>
        )}
      </div>
    </div>
  );
}
