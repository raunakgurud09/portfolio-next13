

interface LayoutProps {
  children: React.ReactNode
}

export default async function Layout({
  children,
}: LayoutProps) {
  return (
    <div className="flex min-h-screen ">
      <main className="max-w-[960px] mx-auto ">
        {children}
      </main>
    </div>
  )
}
