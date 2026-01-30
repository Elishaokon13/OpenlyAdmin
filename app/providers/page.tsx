import { PageShell } from "@/components/page-shell"

export default function ProvidersPage() {
  const metrics = [
    { label: "Active Providers", value: "7", note: "Enabled rails" },
    { label: "Provider Balances", value: "$4.19B", note: "Net position" },
    { label: "SLA Breaches", value: "2", note: "Last 24h" },
    { label: "Incidents Open", value: "3", note: "Monitoring" }
  ]

  const providers = [
    { id: "pr_001", name: "PayRails", balance: "$1.92B", sla: "99.98%", failures: "1.2%", status: "healthy", updated: "5m ago" },
    { id: "pr_002", name: "Bankline", balance: "$980M", sla: "98.12%", failures: "4.9%", status: "degraded", updated: "12m ago" },
    { id: "pr_003", name: "SwiftPay", balance: "$420M", sla: "97.64%", failures: "6.1%", status: "incident", updated: "22m ago" },
    { id: "pr_004", name: "NovaRail", balance: "$870M", sla: "99.71%", failures: "1.7%", status: "healthy", updated: "9m ago" }
  ]

  return (
    <PageShell
      title="Providers"
      description="Provider balances, SLAs, and uptime health by rail."
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

      <div className="rounded-2xl border border-[#1F1F1F] bg-[#0D0D0D] p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-white">Provider Health</h3>
          <span className="text-xs text-[#919191]">Updated live</span>
        </div>
        <table className="mt-4 w-full text-sm">
          <thead>
            <tr className="text-[#919191] text-xs">
              <th className="pb-3 text-left font-medium">Provider</th>
              <th className="pb-3 text-right font-medium">Balance</th>
              <th className="pb-3 text-right font-medium">SLA</th>
              <th className="pb-3 text-right font-medium">Failure Rate</th>
              <th className="pb-3 text-left font-medium">Status</th>
              <th className="pb-3 text-right font-medium">Updated</th>
            </tr>
          </thead>
          <tbody>
            {providers.map((provider) => (
              <tr key={provider.id} className="border-t border-[#1F1F1F]">
                <td className="py-3 text-white font-medium">{provider.name}</td>
                <td className="py-3 text-right text-white">{provider.balance}</td>
                <td className="py-3 text-right text-white">{provider.sla}</td>
                <td className="py-3 text-right text-[#fca5a5]">{provider.failures}</td>
                <td className="py-3">
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold ${
                    provider.status === "healthy"
                      ? "bg-[#0f2917] text-[#86efac]"
                      : provider.status === "degraded"
                        ? "bg-[#2a1f0f] text-[#fbbf24]"
                        : "bg-[#2a1212] text-[#f87171]"
                  }`}>
                    {provider.status}
                  </span>
                </td>
                <td className="py-3 text-right text-[#919191]">{provider.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  )
}

