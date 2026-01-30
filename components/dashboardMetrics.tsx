"use client"

import { Wallet } from 'lucide-react'

export function DashboardMetrics() {
  const metrics = [
    { label: "Volume", value: "$6.8M" },
    { label: "Revenue", value: "$10M" },
    { label: "Expenses", value: "$8M" },
    { label: "Net Profit", value: "$2M" },
    { label: "Gross Profit", value: "$12M" }
  ]

  return (
    <div className="bg-[#0D0D0D] rounded-2xl p-4 sm:p-6">
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {metrics.map((metric) => {
          const Icon = metric.icon
          return (
            <div key={metric.label} className="rounded-xl border border-[#1F1F1F] bg-[#111] p-3 sm:p-4">
              <div className="flex items-center gap-2 text-gray-400">
                {Icon ? <Icon className="h-4 w-4" /> : null}
                <span className="text-[11px] sm:text-xs uppercase tracking-wide">{metric.label}</span>
              </div>
              <div className="mt-2 text-lg sm:text-2xl font-semibold text-white">{metric.value}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
