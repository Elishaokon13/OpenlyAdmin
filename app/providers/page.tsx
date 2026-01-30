import { PageShell } from "@/components/page-shell"

export default function ProvidersPage() {
  return (
    <PageShell
      title="Providers"
      description="Provider balances, SLAs, and uptime health by rail."
    >
      <div className="rounded-2xl border border-[#1F1F1F] bg-[#0D0D0D] p-6 text-sm text-[#919191]">
        Provider health and balance tables will appear here.
      </div>
    </PageShell>
  )
}

