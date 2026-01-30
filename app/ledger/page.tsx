import { PageShell } from "@/components/pageShell"

export default function LedgerPage() {
  const metrics = [
    { label: "Ledger Entries (24h)", value: "92,440", note: "Posted + pending" },
    { label: "Unreconciled", value: "184", note: "Requires review" },
    { label: "Provider Balances", value: "$4.19B", note: "Net position" },
    { label: "Settlement Drift", value: "$82.4k", note: "Last 24h" }
  ]

  const entries = [
    { id: "le_90214", type: "credit", amount: "$18,590.42", account: "Merchant: Atlas Supply", status: "posted", source: "PayRails", time: "10:42:12Z" },
    { id: "le_90215", type: "debit", amount: "$7,620.00", account: "Provider: Bankline", status: "pending", source: "Bankline", time: "10:33:58Z" },
    { id: "le_90216", type: "credit", amount: "€44,215.11", account: "Merchant: Northwind", status: "posted", source: "PayRails", time: "10:19:06Z" },
    { id: "le_90217", type: "debit", amount: "$1,299.95", account: "Provider: SwiftPay", status: "exception", source: "SwiftPay", time: "10:05:44Z" }
  ]

  return (
    <PageShell
      title="Ledger"
      description="Immutable ledger entries, reconciliations, and balance movements."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-2xl border border-[#1F1F1F] bg-[#0D0D0D] p-4">
            <div className="text-xs text-[#919191]">{metric.label}</div>
            <div className="mt-2 text-2xl font-semibold text-white">{metric.value}</div>
            <div className="mt-1 text-xs text-[#5f5f5f]">{metric.note}</div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-[#3b2d1a] bg-[#20170a] p-4 text-sm text-[#fbbf24]">
        Warning: 184 unreconciled ledger entries awaiting review. Settlement holds active.
      </div>

      <div className="rounded-2xl border border-[#1F1F1F] bg-[#0D0D0D] p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-white">Recent Ledger Entries</h3>
          <span className="text-xs text-[#919191]">Immutable log</span>
        </div>
        <div className="-mx-4 sm:mx-0 mt-4 overflow-x-auto">
          <table className="w-full min-w-[760px] text-sm">
            <thead>
              <tr className="text-[#919191] text-xs">
                <th className="pb-3 text-left font-medium">Entry</th>
                <th className="pb-3 text-left font-medium">Type</th>
                <th className="pb-3 text-right font-medium">Amount</th>
                <th className="pb-3 text-left font-medium">Account</th>
                <th className="pb-3 text-left font-medium">Status</th>
                <th className="pb-3 text-left font-medium">Source</th>
                <th className="pb-3 text-right font-medium">Time</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry.id} className="border-t border-[#1F1F1F]">
                  <td className="py-3 text-white font-medium">{entry.id}</td>
                  <td className="py-3 text-[#919191] capitalize">{entry.type}</td>
                  <td className="py-3 text-right text-white">{entry.amount}</td>
                  <td className="py-3 text-white">{entry.account}</td>
                  <td className="py-3">
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold ${
                      entry.status === "posted"
                        ? "bg-[#0f2917] text-[#86efac]"
                        : entry.status === "pending"
                          ? "bg-[#2a1f0f] text-[#fbbf24]"
                          : "bg-[#2a1212] text-[#f87171]"
                    }`}>
                      {entry.status}
                    </span>
                  </td>
                  <td className="py-3 text-white">{entry.source}</td>
                  <td className="py-3 text-right text-[#919191]">{entry.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageShell>
  )
}

