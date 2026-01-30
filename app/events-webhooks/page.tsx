import { PageShell } from "@/components/page-shell"

export default function EventsWebhooksPage() {
  return (
    <PageShell
      title="Events & Webhooks"
      description="Outbound webhook delivery, retries, and failure diagnostics."
    >
      <div className="rounded-2xl border border-[#1F1F1F] bg-[#0D0D0D] p-6 text-sm text-[#919191]">
        Event streams and webhook delivery logs will appear here.
      </div>
    </PageShell>
  )
}

