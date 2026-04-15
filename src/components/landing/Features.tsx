import { motion } from "framer-motion";
import { Github, MapPin, Brain } from "lucide-react";

const features = [
  {
    icon: Github,
    title: "GitHub Intelligence",
    description:
      "Scan developer profiles, analyze tech stacks, activity patterns, and community influence to find high-value leads.",
  },
  {
    icon: MapPin,
    title: "Google Maps Lead Scraper",
    description:
      "Discover local businesses missing websites, SEO, or online presence — ready for your solutions.",
  },
  {
    icon: Brain,
    title: "AI Scoring Engine",
    description:
      "Every lead gets a 0–100 AI score with a breakdown of strengths, weaknesses, and actionable insights.",
  },
];

export function Features() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Intelligence at <span className="gradient-neon-text">Every Layer</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Three powerful engines working together to find, analyze, and engage your ideal leads.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="aura-effect glass-card rounded-2xl p-8 transition-all hover:border-primary/30"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
