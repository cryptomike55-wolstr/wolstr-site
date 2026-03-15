"use client"

import { useEffect, useState, useRef } from "react"
import { Droplets, Flame, TrendingUp, Wallet } from "lucide-react"

interface StatCardProps {
  icon: React.ReactNode
  label: string
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
}

function useCountUp(end: number, duration: number = 2000, decimals: number = 0) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number
    const startValue = 0

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = startValue + (end - startValue) * easeOutQuart
      
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [hasStarted, end, duration])

  return { count, ref }
}

function StatCard({ icon, label, value, prefix = "", suffix = "", decimals = 0 }: StatCardProps) {
  const { count, ref } = useCountUp(value, 2500, decimals)

  return (
    <div
      ref={ref}
      className="relative group"
    >
      {/* Glow effect */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/50 to-primary/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Card */}
      <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
        {/* Icon */}
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <div className="text-primary">{icon}</div>
        </div>
        
        {/* Value */}
        <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          {prefix}
          {decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}
          {suffix}
        </div>
        
        {/* Label */}
        <div className="text-muted-foreground text-sm font-medium">{label}</div>
      </div>
    </div>
  )
}

export function PackStats() {
  const stats = [
    {
      icon: <Droplets className="w-6 h-6" />,
      label: "WoL Liquidity Added",
      value: 125000,
      prefix: "$",
    },
    {
      icon: <Flame className="w-6 h-6" />,
      label: "WoLSTR Burned",
      value: 2500000,
      suffix: "",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      label: "WoLSTR LP Added",
      value: 85000,
      prefix: "$",
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      label: "Treasury Balance",
      value: 42500,
      prefix: "$",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Pack <span className="text-primary">Stats</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Real-time metrics tracking the strength of the WoLSTR ecosystem
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
