"use client"

import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Small logo */}
          <div className="relative w-12 h-12">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WoLSTR%20PFP-yvvEvcPYUcdHkHs5vJic5lNhMHWQQ6.png"
              alt="WoLSTR"
              fill
              className="object-contain opacity-80"
            />
          </div>
          
          {/* Brand */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground">
              <span className="text-primary">$</span>WoLSTR
            </h3>
            <p className="text-primary/80 text-sm tracking-widest uppercase mt-1">
              Feed the Pack
            </p>
          </div>
          
          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent my-4" />
          
          {/* Copyright */}
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} WoLSTR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
