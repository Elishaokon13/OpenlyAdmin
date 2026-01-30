import { PageShell } from "@/components/page-shell"

export default function GlobalPayoutsPage() {
  const metrics = [
    { label: "Payouts Today", value: "58,210", note: "All merchants" },
    { label: "Queue Depth", value: "12,804", note: "Pending review" },
    { label: "Retries In Flight", value: "1,240", note: "Last 24h" },
    { label: "Failure Rate", value: "6.4%", note: "Trailing 24h" }
  ]

  const payouts = [
    { id: "po_8f2c91", merchant: "Atlas Supply Co.", amount: "$18,590.42", provider: "PayRails", state: "completed", reason: "—", retries: 0, updated: "2m ago" },
    { id: "po_52c118", merchant: "Cobalt Health", amount: "$7,620.00", provider: "Bankline", state: "failed", reason: "Insufficient balance", retries: 2, updated: "11m ago" },
    { id: "po_3ac4f0", merchant: "Northwind Markets", amount: "€44,215.11", provider: "PayRails", state: "retrying", reason: "Compliance review", retries: 1, updated: "25m ago" },
    { id: "po_01ff9a", merchant: "Keystone Freight", amount: "$1,299.95", provider: "SwiftPay", state: "pending", reason: "—", retries: 0, updated: "42m ago" }
  ]

  return (
    <PageShell
      title="Global Payouts"
      description="Cross-merchant payout monitoring, retries, and lifecycle visibility."
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

      <div className="rounded-2xl border border-[#3b1d1d] bg-[#1a0f10] p-4 text-sm text-[#fca5a5]">
        Alert: 312 payouts auto-cancelled in last hour due to provider balance shortfall.
      </div>

      <div className="rounded-2xl border border-[#1F1F1F] bg-[#0D0D0D] p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-white">Global Payout Queue</h3>
          <span className="text-xs text-[#919191]">Sorted by risk</span>
        </div>
        <table className="mt-4 w-full text-sm">
          <thead>
            <tr className="text-[#919191] text-xs">
              <th className="pb-3 text-left font-medium">Payout ID</th>
              <th className="pb-3 text-left font-medium">Merchant</th>
              <th className="pb-3 text-right font-medium">Amount</th>
              <th className="pb-3 text-left font-medium">Provider</th>
              <th className="pb-3 text-left font-medium">State</th>
              <th className="pb-3 text-left font-medium">Failure Reason</th>
              <th className="pb-3 text-right font-medium">Retries</th>
              <th className="pb-3 text-right font-medium">Updated</th>
            </tr>
          </thead>
          <tbody>
            {payouts.map((payout) => (
              <tr key={payout.id} className="border-t border-[#1F1F1F]">
                <td className="py-3 text-white font-medium">{payout.id}</td>
                <td className="py-3 text-white">{payout.merchant}</td>
                <td className="py-3 text-right text-white">{payout.amount}</td>
                <td className="py-3 text-white">{payout.provider}</td>
                <td className="py-3">
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold ${
                    payout.state === "completed"
                      ? "bg-[#0f2917] text-[#86efac]"
                      : payout.state === "failed"
                        ? "bg-[#2a1212] text-[#f87171]"
                        : payout.state === "retrying"
                          ? "bg-[#1b2332] text-[#60a5fa]"
                          : "bg-[#2a1f0f] text-[#fbbf24]"
                  }`}>
                    {payout.state}
                  </span>
                </td>
                <td className="py-3 text-[#919191]">{payout.reason}</td>
                <td className="py-3 text-right text-white">{payout.retries}</td>
                <td className="py-3 text-right text-[#919191]">{payout.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  )
}

