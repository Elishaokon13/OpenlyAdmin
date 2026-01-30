import { PageShell } from "@/components/page-shell"

export default function GlobalPayoutsPage() {
  return (
    <PageShell
      title="Global Payouts"
      description="Cross-merchant payout monitoring, retries, and lifecycle visibility."
    >
      <div className="rounded-2xl border border-[#1F1F1F] bg-[#0D0D0D] p-6 text-sm text-[#919191]">
        Global payout queues and lifecycle tables will appear here.
      </div>
    </PageShell>
  )
}

