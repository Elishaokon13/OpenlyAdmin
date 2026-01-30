import { PageShell } from "@/components/page-shell"

export default function MerchantsPage() {
  return (
    <PageShell
      title="Merchants"
      description="Merchant risk posture, settlement readiness, and payout performance."
    >
      <div className="rounded-2xl border border-[#1F1F1F] bg-[#0D0D0D] p-6 text-sm text-[#919191]">
        Merchant summaries and risk signals will appear here.
      </div>
    </PageShell>
  )
}

