import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"

type PageShellProps = {
  title: string
  description?: string
  children?: React.ReactNode
}

export function PageShell({ title, description, children }: PageShellProps) {
  return (
    <div className="relative h-screen w-full bg-black text-white overflow-hidden">
      <Header />

      <div className="h-full overflow-y-auto no-scrollbar">
        <main className="flex gap-6 p-6 pt-24 min-h-full">
          <Sidebar />

          <div className="flex-1 flex flex-col gap-6 min-w-0">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold text-white">{title}</h1>
              {description ? (
                <p className="text-sm text-[#919191]">{description}</p>
              ) : null}
            </div>
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

