"use client"

import { Zap } from "lucide-react"

export function TokenOverview() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 border border-primary/20 rounded-full" />
          <div className="absolute -bottom-10 -right-10 w-32 h-32 border border-primary/10 rounded-full" />
          
          {/* Content card */}
          <div className="relative bg-card/60 backdrop-blur-xl border border-border rounded-2xl p-8 md:p-12">
            {/* Icon */}
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mx-auto md:mx-0">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center md:text-left">
              Token <span className="text-primary">Overview</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center md:text-left text-pretty">
              WoLSTR is a strategy token designed to strengthen Wolfies Owned Liquidity through structured weekly operations and transparent on-chain activity.
            </p>
            
            {/* Accent line */}
            <div className="mt-8 h-1 w-24 bg-gradient-to-r from-primary to-primary/20 rounded-full mx-auto md:mx-0" />
          </div>
        </div>
      </div>
    </section>
  )
}
