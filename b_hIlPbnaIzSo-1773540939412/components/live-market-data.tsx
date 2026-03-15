"use client"

import { Button } from "@/components/ui/button"
import { BarChart3, Activity } from "lucide-react"

export function LiveMarketData() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Live Market <span className="text-primary">Data</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Track WoLSTR price action and trading activity in real-time
        </p>

        {/* Chart placeholder container */}
        <div className="relative group mb-8">
          {/* Border glow */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 rounded-2xl blur-sm" />
          
          <div className="relative bg-card/50 backdrop-blur-xl border border-border rounded-2xl p-8 min-h-[400px] flex flex-col items-center justify-center">
            {/* Animated background pattern */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-20">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(90deg, transparent 0%, transparent 49%, rgba(29,212,201,0.1) 50%, transparent 51%, transparent 100%),
                    linear-gradient(0deg, transparent 0%, transparent 49%, rgba(29,212,201,0.1) 50%, transparent 51%, transparent 100%)
                  `,
                  backgroundSize: '40px 40px'
                }}
              />
            </div>
            
            {/* Icon */}
            <div className="relative w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Activity className="w-10 h-10 text-primary animate-pulse" />
            </div>
            
            {/* Placeholder text */}
            <p className="text-muted-foreground text-center max-w-md mb-6">
              WoLSTR trading data will appear here once liquidity is seeded and the token is indexed by Dexscreener.
            </p>
            
            {/* Placeholder bars */}
            <div className="flex items-end gap-2 h-24 mb-6 opacity-30">
              {[40, 60, 30, 80, 50, 70, 45, 90, 55, 75, 35, 85].map((height, i) => (
                <div
                  key={i}
                  className="w-4 bg-primary/50 rounded-t"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* View Chart Button */}
        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 text-lg shadow-[0_0_20px_rgba(29,212,201,0.2)] hover:shadow-[0_0_30px_rgba(29,212,201,0.4)] transition-all"
            asChild
          >
            <a href="#">
              <BarChart3 className="mr-2 h-5 w-5" />
              View Chart
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
