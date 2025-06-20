"use client";
import { usePathname } from "next/navigation";
import Header from "./header";

export default function HeaderWrapper() {
  const pathname = usePathname();
  // Only show header if not on the main landing page
  if (pathname === "/") return null;
  return <Header />;
}
