import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Users, Flame, Thermometer, Send, BarChart3, Target } from "lucide-react";
import { dashboardStats } from "@/lib/mock-data";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardHome,
});

const stats = [
  { label: "Total Leads", value: dashboardStats.totalLeads.toLocaleString(), icon: Users, accent: false },
  { label: "Hot Leads", value: dashboardStats.hotLeads.toString(), icon: Flame, accent: true },
  { label: "Warm Leads", value: dashboardStats.warmLeads.toString(), icon: Thermometer, accent: false },
  { label: "Outreach Sent", value: dashboardStats.outreachSent.toString(), icon: Send, accent: false },
  { label: "Response Rate", value: `${dashboardStats.responseRate}%`, icon: BarChart3, accent: true },
  { label: "Avg. Score", value: dashboardStats.avgScore.toString(), icon: Target, accent: false },
];

function DashboardHome() {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">Overview of your lead pipeline.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="glass-card rounded-xl p-5"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{s.label}</span>
              <s.icon className={`h-4 w-4 ${s.accent ? "text-primary" : "text-muted-foreground"}`} />
            </div>
            <div className={`mt-2 text-3xl font-bold ${s.accent ? "neon-text" : "text-foreground"}`}>
              {s.value}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Activity preview */}
      <div className="glass-card rounded-xl p-6">
        <h2 className="text-lg font-semibold text-foreground">Recent Activity</h2>
        <div className="mt-4 space-y-3">
          {[
            "AI scored 12 new GitHub leads — 3 marked Hot",
            "Outreach campaign 'React Devs SF' sent to 24 leads",
            "Maps scan: 8 new businesses found in Portland, OR",
            "Lead 'Priya Patel' responded — moved to Active pipeline",
          ].map((activity, i) => (
            <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {activity}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
