"use client"

import { Button } from "@/components/ui/button"
import { BookOpen, Globe } from "lucide-react"

export function OfficialLinks() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Official <span className="text-primary">Links</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Connect with the WoLSTR community through our official channels
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary font-semibold px-8 py-6 text-lg transition-all"
            asChild
          >
            <a href="https://wolstr.gitbook.io/wolstr/" target="_blank" rel="noopener noreferrer">
              <BookOpen className="mr-2 h-5 w-5" />
              Documentation
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-border text-foreground hover:bg-secondary hover:border-primary/30 font-semibold px-8 py-6 text-lg transition-all"
            asChild
          >
            <a href="https://x.com/WoL_STR" target="_blank" rel="noopener noreferrer">
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              X (WoLSTR)
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-border text-foreground hover:bg-secondary hover:border-primary/30 font-semibold px-8 py-6 text-lg transition-all"
            asChild
          >
            <a href="https://wolstr.com" target="_blank" rel="noopener noreferrer">
              <Globe className="mr-2 h-5 w-5" />
              Website
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
