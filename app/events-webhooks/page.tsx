import { PageShell } from "@/components/page-shell"

export default function EventsWebhooksPage() {
  const metrics = [
    { label: "Events Emitted (24h)", value: "1.24M", note: "All topics" },
    { label: "Webhook Failures", value: "4,210", note: "0.34% rate" },
    { label: "Retries Pending", value: "820", note: "Backlog" },
    { label: "Disabled Endpoints", value: "14", note: "Manual review" }
  ]

  const endpoints = [
    { id: "wh_8841", destination: "https://atlas.example/webhooks", status: "healthy", response: "200 OK", retries: 0, lastAttempt: "2m ago" },
    { id: "wh_3920", destination: "https://cobalt.example/hooks", status: "degraded", response: "503", retries: 3, lastAttempt: "9m ago" },
    { id: "wh_5512", destination: "https://northwind.example/hooks", status: "failed", response: "Timeout", retries: 5, lastAttempt: "16m ago" },
    { id: "wh_1179", destination: "https://helios.example/webhooks", status: "healthy", response: "200 OK", retries: 0, lastAttempt: "4m ago" }
  ]

  return (
    <PageShell
      title="Events & Webhooks"
      description="Outbound webhook delivery, retries, and failure diagnostics."
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
        Alert: 14 endpoints disabled after repeated failures. Manual review required before re-enable.
      </div>

      <div className="rounded-2xl border border-[#1F1F1F] bg-[#0D0D0D] p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-white">Webhook Delivery</h3>
          <span className="text-xs text-[#919191]">Retries prioritized</span>
        </div>
        <table className="mt-4 w-full text-sm">
          <thead>
            <tr className="text-[#919191] text-xs">
              <th className="pb-3 text-left font-medium">Endpoint</th>
              <th className="pb-3 text-left font-medium">Destination</th>
              <th className="pb-3 text-left font-medium">Status</th>
              <th className="pb-3 text-left font-medium">Last Response</th>
              <th className="pb-3 text-right font-medium">Retries</th>
              <th className="pb-3 text-right font-medium">Last Attempt</th>
            </tr>
          </thead>
          <tbody>
            {endpoints.map((endpoint) => (
              <tr key={endpoint.id} className="border-t border-[#1F1F1F]">
                <td className="py-3 text-white font-medium">{endpoint.id}</td>
                <td className="py-3 text-white">{endpoint.destination}</td>
                <td className="py-3">
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold ${
                    endpoint.status === "healthy"
                      ? "bg-[#0f2917] text-[#86efac]"
                      : endpoint.status === "degraded"
                        ? "bg-[#2a1f0f] text-[#fbbf24]"
                        : "bg-[#2a1212] text-[#f87171]"
                  }`}>
                    {endpoint.status}
                  </span>
                </td>
                <td className="py-3 text-[#919191]">{endpoint.response}</td>
                <td className="py-3 text-right text-white">{endpoint.retries}</td>
                <td className="py-3 text-right text-[#919191]">{endpoint.lastAttempt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  )
}

