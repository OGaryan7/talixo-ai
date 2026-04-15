import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Talixo — AI Lead Intelligence & Outreach" },
      { name: "description", content: "AI-driven lead discovery and outreach for developers and local businesses. Find, score, and engage leads automatically." },
      { property: "og:title", content: "Talixo — AI Lead Intelligence & Outreach" },
      { property: "og:description", content: "AI automation that evolves daily. Discover leads with GitHub Intelligence, Google Maps scraping, and AI scoring." },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
