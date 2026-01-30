import { PageShell } from "@/components/page-shell"

export default function LedgerPage() {
  return (
    <PageShell
      title="Ledger"
      description="Immutable ledger entries, reconciliations, and balance movements."
    >
      <div className="rounded-2xl border border-[#1F1F1F] bg-[#0D0D0D] p-6 text-sm text-[#919191]">
        Ledger reconciliation views will appear here.
      </div>
    </PageShell>
  )
}

