"use client"

import { Wallet, Building2, Flame, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const wallets = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Strategy Wallet",
    description: "Collects trading tax and executes weekly WoLSTR strategy operations.",
    address: "0x68b54C5Ae95Ccb9586a45013E4066D25759De58F",
    explorerUrl: "https://explorer.cronos.org/address/0x68b54C5Ae95Ccb9586a45013E4066D25759De58F",
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "Treasury Wallet",
    description: "Holds treasury reserves used for ecosystem operations and strategic actions.",
    address: "0x9e460969DE1c47d05195003b5edC8Ca7Df82A350",
    explorerUrl: "https://explorer.cronos.org/address/0x9e460969DE1c47d05195003b5edC8Ca7Df82A350",
  },
  {
    icon: <Flame className="w-6 h-6" />,
    title: "Burn Address",
    description: "Permanent removal of tokens from circulation.",
    address: "0x000000000000000000000000000000000000dEaD",
    explorerUrl: "https://explorer.cronos.org/address/0x000000000000000000000000000000000000dEaD",
  },
]

export function Transparency() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          <span className="text-primary">Transparency</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          All operations are verifiable on-chain. Track every transaction.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wallets.map((wallet, index) => (
            <div key={index} className="group relative">
              {/* Hover glow */}
              <div className="absolute -inset-[1px] bg-gradient-to-b from-primary/40 to-transparent rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-card/80 backdrop-blur-xl border border-border rounded-xl p-6 h-full hover:border-primary/30 transition-all duration-300">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary">{wallet.icon}</div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2">{wallet.title}</h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4">{wallet.description}</p>
                
                {/* Address */}
                <div className="bg-secondary/50 rounded-lg px-3 py-2 font-mono text-xs text-muted-foreground truncate mb-4">
                  {wallet.address}
                </div>
                
                {/* View button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-medium"
                  asChild
                >
                  <a href={wallet.explorerUrl} target="_blank" rel="noopener noreferrer">
                    View on Explorer
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
