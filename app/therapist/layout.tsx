import type React from "react"
import TherapistDashboardNav from "@/components/therapist-dashboard-nav"

export default function TherapistLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <TherapistDashboardNav />
      {children}
    </>
  )
}
