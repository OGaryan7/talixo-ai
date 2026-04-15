import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Github, MapPin, Brain, MessageSquareText } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Talixo" },
      { name: "description", content: "GitHub Intelligence, Google Maps scraping, AI Scoring, and automated outreach." },
      { property: "og:title", content: "Services — Talixo" },
      { property: "og:description", content: "Explore Talixo's AI-powered services for lead intelligence and outreach." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Github, title: "GitHub Intelligence", desc: "Deep-scan developer profiles. Analyze tech stacks, activity, contributions, and community influence to surface high-value dev leads." },
  { icon: MapPin, title: "Google Maps Scraper", desc: "Find local businesses missing a website, with bad SEO, or without online ordering. Opportunity badges highlight exactly what they need." },
  { icon: Brain, title: "AI Scoring Engine", desc: "Every lead gets a 0–100 score with a full breakdown — strengths, weaknesses, and a Hot/Warm/Cold status for instant prioritization." },
  { icon: MessageSquareText, title: "AI Outreach Generator", desc: "Select a lead and generate a personalized cold message in seconds using AI templates trained on high-converting copy." },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-5xl px-6 pt-32 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Our <span className="gradient-neon-text">Services</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Four AI engines working in concert to transform how you find and engage leads.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.1 }}
              className="glass-card rounded-2xl p-8 transition-all hover:border-primary/30"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
