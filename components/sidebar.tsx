"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Building2, Send, BookOpen, ShieldAlert, Server, Webhook, Settings2, LogOut } from 'lucide-react'

const navItems = [
  { href: "/", label: "SYSTEM OVERVIEW", icon: LayoutDashboard, match: ["/", "/system-overview"] },
  { href: "/merchants", label: "MERCHANTS", icon: Building2, match: ["/merchants"] },
  { href: "/global-payouts", label: "GLOBAL PAYOUTS", icon: Send, match: ["/global-payouts"] },
  { href: "/ledger", label: "LEDGER", icon: BookOpen, match: ["/ledger"] },
  { href: "/compliance-risk", label: "COMPLIANCE & RISK", icon: ShieldAlert, match: ["/compliance-risk"] },
  { href: "/providers", label: "PROVIDERS", icon: Server, match: ["/providers"] },
  { href: "/events-webhooks", label: "EVENTS & WEBHOOKS", icon: Webhook, match: ["/events-webhooks"] },
]

export function Sidebar() {
  const pathname = usePathname()
  const linkBaseClass = "flex items-center gap-4 transition-colors cursor-pointer"
  const linkInactive = "text-[#919191] hover:text-[#E7E7E7]"
  const linkActive = "text-[#E7E7E7] bg-[#151515] rounded-xl px-3 py-2"

  return (
    <aside className="sticky top-24 h-[calc(100vh-8rem)] md:w-48 lg:w-64 bg-[#0D0D0D] rounded-2xl hidden md:flex flex-col p-8 overflow-y-auto">
      <nav className="flex flex-col gap-8">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = item.match.includes(pathname)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${linkBaseClass} ${isActive ? linkActive : linkInactive}`}
            >
              <Icon className="h-4 w-4" />
              <span className="text-sm font-medium tracking-wide">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto pt-8 border-t border-[#1F1F1F] flex flex-col gap-8">
        <div className="flex items-center gap-4 text-[#919191] hover:text-[#E7E7E7] transition-colors cursor-pointer">
          <Settings2 className="h-6 w-6" />
          <span className="text-sm font-medium tracking-wide">SETTINGS</span>
        </div>
        <div className="flex items-center gap-4 text-[#919191] hover:text-[#E7E7E7] transition-colors cursor-pointer">
          <LogOut className="h-6 w-6" />
          <span className="text-sm font-medium tracking-wide">LOGOUT</span>
        </div>
      </div>
    </aside>
  )
}

export function MobileNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()
  const linkBaseClass = "flex items-center gap-3 rounded-lg px-3 py-2 transition-colors"
  const linkInactive = "text-[#919191] hover:text-[#E7E7E7] hover:bg-[#151515]"
  const linkActive = "text-[#E7E7E7] bg-[#151515]"

  return (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => {
        const Icon = item.icon
        const isActive = item.match.includes(pathname)
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={`${linkBaseClass} ${isActive ? linkActive : linkInactive}`}
          >
            <Icon className="h-4 w-4" />
            <span className="text-sm font-medium tracking-wide">{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
