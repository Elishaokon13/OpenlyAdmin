import { PageShell } from "@/components/page-shell"

export default function SystemOverviewPage() {
  return (
    <PageShell
      title="System Overview"
      description="Real-time posture of payouts, provider health, and risk signals."
    >
      <div className="rounded-2xl border border-[#1F1F1F] bg-[#0D0D0D] p-6 text-sm text-[#919191]">
        Overview panels and system status will appear here.
      </div>
    </PageShell>
  )
}

