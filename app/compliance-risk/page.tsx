import { PageShell } from "@/components/pageShell"

export default function ComplianceRiskPage() {
  const metrics = [
    { label: "Open Reviews", value: "94", note: "Queue depth" },
    { label: "Sanctions Checks", value: "12", note: "Pending" },
    { label: "Holds Active", value: "38", note: "Funds locked" },
    { label: "Escalations", value: "7", note: "Requires approval" }
  ]

  const cases = [
    { id: "cr_1182", merchant: "Cobalt Health", reason: "Sanctions match", priority: "critical", age: "2h", owner: "Compliance" },
    { id: "cr_1174", merchant: "Helios Labs", reason: "High refund ratio", priority: "high", age: "6h", owner: "Risk" },
    { id: "cr_1168", merchant: "Northwind Markets", reason: "KYC refresh", priority: "medium", age: "1d", owner: "Compliance" },
    { id: "cr_1159", merchant: "Atlas Supply Co.", reason: "Suspicious payout pattern", priority: "high", age: "2d", owner: "Risk" }
  ]

  return (
    <PageShell
      title="Compliance & Risk"
      description="Review holds, sanctions checks, and escalations in flight."
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
        Critical: 7 escalations pending approval beyond SLA. Escalate to compliance lead.
      </div>

      <div className="rounded-2xl border border-[#1F1F1F] bg-[#0D0D0D] p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-white">Compliance Case Queue</h3>
          <span className="text-xs text-[#919191]">Escalations first</span>
        </div>
        <div className="-mx-4 sm:mx-0 mt-4 overflow-x-auto">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="text-[#919191] text-xs">
                <th className="pb-3 text-left font-medium">Case</th>
                <th className="pb-3 text-left font-medium">Merchant</th>
                <th className="pb-3 text-left font-medium">Reason</th>
                <th className="pb-3 text-left font-medium">Priority</th>
                <th className="pb-3 text-right font-medium">Age</th>
                <th className="pb-3 text-right font-medium">Owner</th>
              </tr>
            </thead>
            <tbody>
              {cases.map((item) => (
                <tr key={item.id} className="border-t border-[#1F1F1F]">
                  <td className="py-3 text-white font-medium">{item.id}</td>
                  <td className="py-3 text-white">{item.merchant}</td>
                  <td className="py-3 text-[#919191]">{item.reason}</td>
                  <td className="py-3">
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold ${
                      item.priority === "critical"
                        ? "bg-[#2a1212] text-[#f87171]"
                        : item.priority === "high"
                          ? "bg-[#2a1f0f] text-[#fbbf24]"
                          : "bg-[#1b2332] text-[#60a5fa]"
                    }`}>
                      {item.priority}
                    </span>
                  </td>
                  <td className="py-3 text-right text-[#919191]">{item.age}</td>
                  <td className="py-3 text-right text-white">{item.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageShell>
  )
}

