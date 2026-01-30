import { PageShell } from "@/components/pageShell"

export default function MerchantsPage() {
  const metrics = [
    { label: "Active Merchants", value: "312", note: "Last 30d" },
    { label: "At-Risk Merchants", value: "18", note: "Escalations open" },
    { label: "Settlement Holds", value: "$4.2M", note: "Compliance holds" },
    { label: "Payout Success", value: "93.6%", note: "Trailing 7d" }
  ]

  const merchants = [
    { id: "m_2041", name: "Atlas Supply Co.", risk: "low", exposure: "$820k", failureRate: "1.2%", holds: "0", review: "Mar 02" },
    { id: "m_9822", name: "Cobalt Health", risk: "high", exposure: "$1.6M", failureRate: "6.9%", holds: "2", review: "Feb 16" },
    { id: "m_4403", name: "Northwind Markets", risk: "medium", exposure: "$420k", failureRate: "3.4%", holds: "1", review: "Feb 21" },
    { id: "m_7720", name: "Helios Labs", risk: "high", exposure: "$980k", failureRate: "7.8%", holds: "3", review: "Feb 14" }
  ]

  return (
    <PageShell
      title="Merchants"
      description="Merchant risk posture, settlement readiness, and payout performance."
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
        Warning: 18 merchants exceed payout failure thresholds. Reviews required before release.
      </div>

      <div className="rounded-2xl border border-[#1F1F1F] bg-[#0D0D0D] p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-white">Merchant Risk Queue</h3>
          <span className="text-xs text-[#919191]">Prioritized</span>
        </div>
        <div className="-mx-4 sm:mx-0 mt-4 overflow-x-auto">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="text-[#919191] text-xs">
                <th className="pb-3 text-left font-medium">Merchant</th>
                <th className="pb-3 text-left font-medium">Risk</th>
                <th className="pb-3 text-right font-medium">Exposure</th>
                <th className="pb-3 text-right font-medium">Failure Rate</th>
                <th className="pb-3 text-right font-medium">Holds</th>
                <th className="pb-3 text-right font-medium">Next Review</th>
              </tr>
            </thead>
            <tbody>
              {merchants.map((merchant) => (
                <tr key={merchant.id} className="border-t border-[#1F1F1F]">
                  <td className="py-3 text-white font-medium">{merchant.name}</td>
                  <td className="py-3">
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold ${
                      merchant.risk === "high"
                        ? "bg-[#2a1212] text-[#f87171]"
                        : merchant.risk === "medium"
                          ? "bg-[#2a1f0f] text-[#fbbf24]"
                          : "bg-[#0f2917] text-[#86efac]"
                    }`}>
                      {merchant.risk}
                    </span>
                  </td>
                  <td className="py-3 text-right text-white">{merchant.exposure}</td>
                  <td className="py-3 text-right text-[#fca5a5]">{merchant.failureRate}</td>
                  <td className="py-3 text-right text-white">{merchant.holds}</td>
                  <td className="py-3 text-right text-[#919191]">{merchant.review}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageShell>
  )
}

