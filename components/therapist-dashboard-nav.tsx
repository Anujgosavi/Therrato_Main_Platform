"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Settings, FileText, LogOut } from "lucide-react"

export default function TherapistDashboardNav() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const navItems = [
    {
      name: "Appointments",
      href: "/therapist/appointments",
      icon: <Calendar className="h-5 w-5 mr-2" />,
    },
    {
      name: "Profile",
      href: "/therapist/profile-edit",
      icon: <Settings className="h-5 w-5 mr-2" />,
    },
    {
      name: "Patients",
      href: "/therapist/patients",
      icon: <Users className="h-5 w-5 mr-2" />,
    },
    {
      name: "Resources",
      href: "/therapist/resources",
      icon: <FileText className="h-5 w-5 mr-2" />,
    },
  ]

  return (
    <div className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/therapist/appointments" className="text-xl font-bold text-emerald-600 mr-8">
              Therreto Therapist
            </Link>

            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium flex items-center",
                    isActive(item.href)
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                  )}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center">
            <Button variant="ghost" size="sm" className="text-gray-600">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
