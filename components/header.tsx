"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-emerald-600">
              Therreto
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-10">
            <Link
              href="/therapists"
              className={cn(
                "text-sm font-medium transition-colors hover:text-emerald-600",
                isActive("/therapists") ? "text-emerald-600" : "text-gray-600"
              )}
            >
              Find Therapists
            </Link>
            <Link
              href="/appointments"
              className={cn(
                "text-sm font-medium transition-colors hover:text-emerald-600",
                isActive("/appointments") ? "text-emerald-600" : "text-gray-600"
              )}
            >
              My Appointments
            </Link>
            <Link
              href="/resources"
              className={cn(
                "text-sm font-medium transition-colors hover:text-emerald-600",
                isActive("/resources") ? "text-emerald-600" : "text-gray-600"
              )}
            >
              Resources
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                Sign up
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/therapists"
              className="block py-2 text-base font-medium hover:text-emerald-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Find Therapists
            </Link>
            <Link
              href="/appointments"
              className="block py-2 text-base font-medium hover:text-emerald-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              My Appointments
            </Link>
            <Link
              href="/resources"
              className="block py-2 text-base font-medium hover:text-emerald-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <div className="pt-4 border-t flex flex-col space-y-3">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  Log in
                </Button>
              </Link>
              <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
