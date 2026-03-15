"use client"

import Image from "next/image"


const steps = [
  { id: 1, label: "Trade WoLSTR", angle: -90 },
  { id: 2, label: "Tax Collected", angle: -30 },
  { id: 3, label: "Weekly Strategy Operations", angle: 30 },
  { id: 4, label: "WoL Liquidity Strengthens", angle: 90 },
  { id: 5, label: "Stronger Ecosystem", angle: 150 },
  { id: 6, label: "More Trading", angle: 210 },
]

export function StrategyFlywheel() {
  return (
    <section className="py-20 px-4 relative">
      {/* Background claw marks */}
      <div className="absolute top-10 left-10 opacity-5 text-primary">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="currentColor">
          <path d="M20,10 L25,50 L20,90 M40,10 L45,50 L40,90 M60,10 L65,50 L60,90" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 opacity-5 text-primary rotate-180">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="currentColor">
          <path d="M20,10 L25,50 L20,90 M40,10 L45,50 L40,90 M60,10 L65,50 L60,90" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Strategy <span className="text-primary">Flywheel</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          A self-sustaining cycle that strengthens the ecosystem with every transaction
        </p>

        {/* Flywheel - Desktop */}
        <div className="hidden md:flex justify-center items-center">
          <div className="relative w-[600px] h-[600px]">
            {/* Outer ring with glow */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
            <div className="absolute inset-4 rounded-full border border-primary/10" />
            
            {/* Animated ring */}
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary animate-spin" style={{ animationDuration: '8s' }} />

            {/* Center logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WoLSTR%20PFP-yvvEvcPYUcdHkHs5vJic5lNhMHWQQ6.png"
                    alt="WoLSTR Logo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Steps around the circle */}
            {steps.map((step) => {
              const radius = 250
              const angleRad = step.angle * (Math.PI / 180)
              const x = Math.cos(angleRad) * radius
              const y = Math.sin(angleRad) * radius

              return (
                <div
                  key={step.id}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <div className="relative group">
                    {/* Glow */}
                    <div className="absolute -inset-2 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Card */}
                    <div className="relative bg-card/90 backdrop-blur border border-border hover:border-primary/50 rounded-xl px-4 py-3 w-[140px] text-center transition-all duration-300">
                      <div className="text-primary font-bold text-lg mb-1">{step.id}</div>
                      <div className="text-foreground text-sm font-medium leading-tight">{step.label}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Flywheel - Mobile (linear layout) */}
        <div className="md:hidden">
          {/* Center logo */}
          <div className="w-32 h-32 mx-auto mb-8 relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WoLSTR%20PFP-yvvEvcPYUcdHkHs5vJic5lNhMHWQQ6.png"
                alt="WoLSTR Logo"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Steps as list */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary" />
            
            <div className="space-y-4">
              {steps.map((step) => (
                <div key={step.id} className="flex items-center gap-4 relative">
                  {/* Step number */}
                  <div className="w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center text-primary font-bold text-lg z-10 shrink-0">
                    {step.id}
                  </div>
                  
                  {/* Step label */}
                  <div className="bg-card/80 backdrop-blur border border-border rounded-xl px-4 py-3 flex-1">
                    <span className="text-foreground font-medium">{step.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
