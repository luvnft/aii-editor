import MainPageHeader from "@/components/main-layout/header"
import MainSidebar from "@/components/main-layout/sidebar"

export const metadata = {
  title: 'AI Artist Editor',
  description: 'Generated by create next app',
}

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MainPageHeader />
        <div style={{ display: 'flex' }}>
          <MainSidebar />
          {children}
        </div>
      </body>
    </html>
  )
}
