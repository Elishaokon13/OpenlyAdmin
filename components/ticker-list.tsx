"use client"

import { AlertTriangle, ArrowUpRight, CheckCircle2, ChevronsUpDown, Clock } from 'lucide-react'

const data = [
  {
    id: "po_8f2c91",
    merchant: "Atlas Supply Co.",
    amount: 18590.42,
    currency: "USD",
    provider: "PayRails",
    failureReason: "—",
    retries: 0,
    status: "completed",
    updated: "2m ago",
    lastAction: "Released",
    lastActionAt: "10:42:12Z",
    lastActionBy: "ops@openly",
    href: "/payouts/po_8f2c91"
  },
  {
    id: "po_52c118",
    merchant: "Cobalt Health",
    amount: 7620.0,
    currency: "USD",
    provider: "Bankline",
    failureReason: "Insufficient balance",
    retries: 2,
    status: "failed",
    updated: "11m ago",
    lastAction: "Retry scheduled",
    lastActionAt: "10:33:58Z",
    lastActionBy: "finance@openly",
    href: "/payouts/po_52c118"
  },
  {
    id: "po_3ac4f0",
    merchant: "Northwind Markets",
    amount: 44215.11,
    currency: "EUR",
    provider: "PayRails",
    failureReason: "Compliance review",
    retries: 1,
    status: "retrying",
    updated: "25m ago",
    lastAction: "Held for review",
    lastActionAt: "10:19:06Z",
    lastActionBy: "compliance@openly",
    href: "/payouts/po_3ac4f0"
  },
  {
    id: "po_01ff9a",
    merchant: "Keystone Freight",
    amount: 1299.95,
    currency: "USD",
    provider: "SwiftPay",
    failureReason: "—",
    retries: 0,
    status: "pending",
    updated: "42m ago",
    lastAction: "Queued",
    lastActionAt: "10:05:44Z",
    lastActionBy: "system",
    href: "/payouts/po_01ff9a"
  },
  {
    id: "po_aa12b8",
    merchant: "Helios Labs",
    amount: 9800.0,
    currency: "USD",
    provider: "Bankline",
    failureReason: "Timeout from provider",
    retries: 3,
    status: "failed",
    updated: "1h ago",
    lastAction: "Override denied",
    lastActionAt: "09:22:01Z",
    lastActionBy: "eng@openly",
    href: "/payouts/po_aa12b8"
  }
]

export function TickerList() {
  return (
    <div className="bg-[#0D0D0D] rounded-2xl p-6 flex flex-col gap-4">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-white text-base font-medium">Admin Actions</h3>
          <p className="text-sm text-[#919191]">
            Destructive actions require confirmation. All actions are logged with timestamp and actor.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="px-3 py-2 rounded-lg text-sm font-medium border border-[#3b1d1d] text-[#f87171] bg-[#2a1212] hover:bg-[#3b1d1d] transition-colors">
            Freeze User
          </button>
          <button className="px-3 py-2 rounded-lg text-sm font-medium border border-[#2b3342] text-[#60a5fa] bg-[#1b2332] hover:bg-[#2b3342] transition-colors">
            Retry Payout
          </button>
          <button className="px-3 py-2 rounded-lg text-sm font-medium border border-[#3b2d1a] text-[#fbbf24] bg-[#2a1f0f] hover:bg-[#3b2d1a] transition-colors">
            Cancel Payout
          </button>
          <button className="px-3 py-2 rounded-lg text-sm font-medium border border-[#3b1d1d] text-[#f87171] bg-[#2a1212] hover:bg-[#3b1d1d] transition-colors">
            Override State
          </button>
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-[#919191] text-sm border-b border-transparent">
            <th className="pb-4 text-left font-medium pl-2">
              <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                Payout ID
                <ChevronsUpDown className="h-4 w-4" />
              </div>
            </th>
            <th className="pb-4 text-left font-medium">Merchant</th>
            <th className="pb-4 text-right font-medium">Amount</th>
            <th className="pb-4 text-left font-medium">Provider</th>
            <th className="pb-4 text-left font-medium">Failure Reason</th>
            <th className="pb-4 text-right font-medium">Retries</th>
            <th className="pb-4 text-left font-medium">Status</th>
            <th className="pb-4 text-right font-medium pr-2">Last Update</th>
            <th className="pb-4 text-left font-medium">Last Action</th>
            <th className="pb-4 text-left font-medium">Action Log</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr 
              key={item.id} 
              onClick={() => (window.location.href = item.href)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  window.location.href = item.href
                }
              }}
              role="link"
              tabIndex={0}
              className="group transition-colors border-b border-transparent last:border-0 hover:bg-[#1A1A1A] cursor-pointer"
            >
              <td className="py-4 pl-2 rounded-l-xl">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-white">{item.id}</span>
                </div>
              </td>
              <td className="py-4 text-left text-white font-medium">{item.merchant}</td>
              <td className="py-4 text-right text-white font-medium">
                {item.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {item.currency}
              </td>
              <td className="py-4 text-left text-white font-medium">{item.provider}</td>
              <td className="py-4 text-left text-[#919191]">{item.failureReason}</td>
              <td className="py-4 text-right text-white font-medium">{item.retries}</td>
              <td className="py-4 text-left">
                <span className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs font-medium border ${
                  item.status === "completed"
                    ? "bg-[#0f2917] text-[#86efac] border-[#1d3b26]"
                    : item.status === "failed"
                      ? "bg-[#2a1212] text-[#f87171] border-[#3b1d1d]"
                      : item.status === "retrying"
                        ? "bg-[#1b2332] text-[#60a5fa] border-[#2b3342]"
                        : "bg-[#2a1f0f] text-[#fbbf24] border-[#3b2d1a]"
                }`}>
                  {item.status === "completed" && <CheckCircle2 className="h-3 w-3" />}
                  {item.status === "failed" && <AlertTriangle className="h-3 w-3" />}
                  {item.status === "retrying" && <ArrowUpRight className="h-3 w-3" />}
                  {item.status === "pending" && <Clock className="h-3 w-3" />}
                  <span className="capitalize">{item.status}</span>
                </span>
              </td>
              <td className="py-4 text-right text-[#919191] pr-2 rounded-r-xl">{item.updated}</td>
              <td className="py-4 text-left text-white font-medium">{item.lastAction}</td>
              <td className="py-4 text-left text-[#919191]">
                {item.lastActionAt} · {item.lastActionBy}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
