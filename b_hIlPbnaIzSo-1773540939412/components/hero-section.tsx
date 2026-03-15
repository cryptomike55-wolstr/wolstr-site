"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, BarChart3, BookOpen } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex flex-col bg-background">
      {/* Banner Image - Fully visible */}
      <div className="relative w-full aspect-[16/7] md:aspect-[16/6]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WoLSTR%20Banner-V0KWDcqTqoHDZlOOoRU7P6Pu3XZK91.png"
          alt="WoLSTR Banner"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle gradient at bottom edge for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content - Below the banner */}
      <div className="relative z-10 container mx-auto px-4 text-center py-16 md:py-20">
        {/* Title with teal glow */}
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight drop-shadow-[0_0_30px_rgba(29,212,201,0.3)]">
          <span className="text-primary">$</span>WoLSTR
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-primary font-medium mb-12 tracking-widest uppercase">
          Feed the Pack
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-5">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 text-lg shadow-[0_0_30px_rgba(29,212,201,0.3)] hover:shadow-[0_0_40px_rgba(29,212,201,0.5)] transition-all"
            asChild
          >
            <a href="#">
              <ExternalLink className="mr-2 h-5 w-5" />
              Buy WoLSTR
            </a>
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary font-semibold px-8 py-6 text-lg transition-all"
            asChild
          >
            <a href="#">
              <BarChart3 className="mr-2 h-5 w-5" />
              View Chart
            </a>
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-border text-foreground hover:bg-secondary hover:border-primary/30 font-semibold px-8 py-6 text-lg transition-all"
            asChild
          >
            <a href="https://wolstr.gitbook.io/wolstr/" target="_blank" rel="noopener noreferrer">
              <BookOpen className="mr-2 h-5 w-5" />
              Documentation
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
