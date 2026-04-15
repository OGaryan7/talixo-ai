import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Shield, Target, Cpu } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Talixo" },
      { name: "description", content: "Learn about Talixo's mission to revolutionize lead intelligence with AI." },
      { property: "og:title", content: "About — Talixo" },
      { property: "og:description", content: "Learn about Talixo's mission to revolutionize lead intelligence with AI." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const values = [
    { icon: Cpu, title: "AI-First", desc: "Every feature is powered by intelligent algorithms that learn and adapt." },
    { icon: Target, title: "Precision", desc: "We deliver targeted leads, not noise. Quality over quantity, always." },
    { icon: Shield, title: "Trust", desc: "Ethical data sourcing and transparent scoring methodologies." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-4xl px-6 pt-32 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About <span className="gradient-neon-text">Talixo</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Talixo is an AI-powered lead intelligence platform built for developers, agencies, and
            entrepreneurs who want to find and engage high-value prospects — without the manual grind.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <v.icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
