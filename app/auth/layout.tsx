"use client"

import AuthLayout from "@/components/layout/AuthLayout"
import { usePathname } from "next/navigation"

export default function AuthLayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const showCreateAccount = pathname === "/auth/login"
  const showBackToLogin = pathname !== "/auth/login" && pathname !== "/auth/register"

  return (
    <AuthLayout showBackToLogin={showBackToLogin} showCreateAccount={showCreateAccount}>
      {children}
    </AuthLayout>
  )
}

