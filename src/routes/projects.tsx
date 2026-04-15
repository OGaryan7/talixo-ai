import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Talixo" },
      { name: "description", content: "See what clients have built with Talixo's AI lead intelligence." },
      { property: "og:title", content: "Projects — Talixo" },
      { property: "og:description", content: "Case studies and success stories powered by Talixo." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  { title: "DevReach Agency", desc: "Landed 42 new clients in 3 months using GitHub lead scraping and AI outreach.", metric: "42 clients" },
  { title: "LocalBoost Marketing", desc: "Identified 200+ businesses without websites in the Austin area using Maps scraper.", metric: "200+ leads" },
  { title: "CodeHire Recruitment", desc: "Reduced sourcing time by 70% by using AI scoring to prioritize developer candidates.", metric: "70% faster" },
];

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-5xl px-6 pt-32 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="gradient-neon-text">Projects</span> & Results
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Real outcomes from teams using Talixo.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="glass-card rounded-2xl p-6 flex flex-col"
            >
              <div className="mb-4 text-2xl font-bold neon-text">{p.metric}</div>
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                {p.title} <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
              </h3>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
