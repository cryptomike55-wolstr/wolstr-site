import { HeroSection } from "@/components/hero-section"
import { PackStats } from "@/components/pack-stats"
import { StrategyFlywheel } from "@/components/strategy-flywheel"
import { LiveMarketData } from "@/components/live-market-data"
import { TokenOverview } from "@/components/token-overview"
import { Transparency } from "@/components/transparency"
import { OfficialLinks } from "@/components/official-links"
import { Footer } from "@/components/footer"
import { AnimatedGrid } from "@/components/animated-grid"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <AnimatedGrid />
      <div className="relative z-10">
        <HeroSection />
        <PackStats />
        <StrategyFlywheel />
        <LiveMarketData />
        <TokenOverview />
        <Transparency />
        <OfficialLinks />
        <Footer />
      </div>
    </main>
  )
}
