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
    href: "/payouts/po_aa12b8"
  }
]

export function TickerList() {
  return (
    <div className="bg-[#0D0D0D] rounded-2xl p-6">
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
