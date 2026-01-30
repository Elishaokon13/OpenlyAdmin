import { PageShell } from "@/components/page-shell"

export default function SystemOverviewPage() {
  const metrics = [
    { label: "Funds Under Management", value: "$6.81B", note: "All merchants" },
    { label: "Payout Queue Depth", value: "12,804", note: "Pending release" },
    { label: "Failed Payouts (24h)", value: "1,482", note: "6.4% failure rate" },
    { label: "Provider Health", value: "93.4%", note: "Avg uptime" }
  ]

  const alerts = [
    { id: "AL-204", severity: "critical", message: "Bankline timeout spikes in EU corridor", owner: "Engineering", updated: "4m ago" },
    { id: "AL-198", severity: "high", message: "Compliance queue backlog above SLA", owner: "Compliance", updated: "17m ago" },
    { id: "AL-173", severity: "medium", message: "Payout retries rising for SwiftPay", owner: "Operations", updated: "41m ago" }
  ]

  const flows = [
    { rail: "ACH", successful: 42810, failed: 680, trend: "stable" },
    { rail: "Wire", successful: 1240, failed: 42, trend: "up" },
    { rail: "SEPA", successful: 18920, failed: 510, trend: "down" },
    { rail: "RTP", successful: 2980, failed: 95, trend: "up" }
  ]

  return (
    <PageShell
      title="System Overview"
      description="Real-time posture of payouts, provider health, and risk signals."
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

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 rounded-2xl border border-[#1F1F1F] bg-[#0D0D0D] p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-white">Money Movement by Rail</h3>
            <span className="text-xs text-[#919191]">Last 24h</span>
          </div>
          <table className="mt-4 w-full text-sm">
            <thead>
              <tr className="text-[#919191] text-xs">
                <th className="pb-3 text-left font-medium">Rail</th>
                <th className="pb-3 text-right font-medium">Successful</th>
                <th className="pb-3 text-right font-medium">Failed</th>
                <th className="pb-3 text-right font-medium">Trend</th>
              </tr>
            </thead>
            <tbody>
              {flows.map((flow) => (
                <tr key={flow.rail} className="border-t border-[#1F1F1F]">
                  <td className="py-3 text-white font-medium">{flow.rail}</td>
                  <td className="py-3 text-right text-white">{flow.successful.toLocaleString()}</td>
                  <td className="py-3 text-right text-[#fca5a5]">{flow.failed.toLocaleString()}</td>
                  <td className="py-3 text-right text-[#919191] capitalize">{flow.trend}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-2xl border border-[#1F1F1F] bg-[#0D0D0D] p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-white">Operational Alerts</h3>
            <span className="text-xs text-[#919191]">Active</span>
          </div>
          <div className="mt-4 space-y-4 text-sm">
            {alerts.map((alert) => (
              <div key={alert.id} className="rounded-xl border border-[#1F1F1F] bg-[#111] p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#919191]">{alert.id}</span>
                  <span className={`text-xs font-semibold ${
                    alert.severity === "critical"
                      ? "text-[#f87171]"
                      : alert.severity === "high"
                        ? "text-[#fbbf24]"
                        : "text-[#60a5fa]"
                  }`}>
                    {alert.severity}
                  </span>
                </div>
                <div className="mt-2 text-white">{alert.message}</div>
                <div className="mt-2 text-xs text-[#919191]">{alert.owner} · {alert.updated}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  )
}

