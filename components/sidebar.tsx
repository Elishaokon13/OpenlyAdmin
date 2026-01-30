"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Building2, Send, BookOpen, ShieldAlert, Server, Webhook, Settings2, LogOut } from 'lucide-react'

export function Sidebar() {
  const pathname = usePathname()
  const linkBaseClass = "flex items-center gap-4 transition-colors cursor-pointer"
  const linkInactive = "text-[#919191] hover:text-[#E7E7E7]"
  const linkActive = "text-[#E7E7E7] bg-[#151515] rounded-xl px-3 py-2"

  return (
    <aside className="sticky top-24 h-[calc(100vh-8rem)] md:w-48 lg:w-64 bg-[#0D0D0D] rounded-2xl hidden md:flex flex-col p-8 overflow-y-auto">
      <nav className="flex flex-col gap-8">
        <Link
          href="/"
          className={`${linkBaseClass} ${pathname === "/" || pathname === "/system-overview" ? linkActive : linkInactive}`}
        >
          <LayoutDashboard className="h-4 w-4" />
          <span className="text-sm font-medium tracking-wide">SYSTEM OVERVIEW</span>
        </Link>
        <Link
          href="/merchants"
          className={`${linkBaseClass} ${pathname === "/merchants" ? linkActive : linkInactive}`}
        >
          <Building2 className="h-4 w-4" />
          <span className="text-sm font-medium tracking-wide">MERCHANTS</span>
        </Link>
        <Link
          href="/global-payouts"
          className={`${linkBaseClass} ${pathname === "/global-payouts" ? linkActive : linkInactive}`}
        >
          <Send className="h-4 w-4" />
          <span className="text-sm font-medium tracking-wide">GLOBAL PAYOUTS</span>
        </Link>
        <Link
          href="/ledger"
          className={`${linkBaseClass} ${pathname === "/ledger" ? linkActive : linkInactive}`}
        >
          <BookOpen className="h-4 w-4" />
          <span className="text-sm font-medium tracking-wide">LEDGER</span>
        </Link>
        <Link
          href="/compliance-risk"
          className={`${linkBaseClass} ${pathname === "/compliance-risk" ? linkActive : linkInactive}`}
        >
          <ShieldAlert className="h-6 w-6" />
          <span className="text-sm font-medium tracking-wide">COMPLIANCE & RISK</span>
        </Link>
        <Link
          href="/providers"
          className={`${linkBaseClass} ${pathname === "/providers" ? linkActive : linkInactive}`}
        >
          <Server className="h-6 w-6" />
          <span className="text-sm font-medium tracking-wide">PROVIDERS</span>
        </Link>
        <Link
          href="/events-webhooks"
          className={`${linkBaseClass} ${pathname === "/events-webhooks" ? linkActive : linkInactive}`}
        >
          <Webhook className="h-6 w-6" />
          <span className="text-sm font-medium tracking-wide">EVENTS & WEBHOOKS</span>
        </Link>
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
