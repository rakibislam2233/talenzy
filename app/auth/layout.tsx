"use client";

import AuthLayout from "@/components/layout/AuthLayout/AuthLayout";
import LoginSidePanel from "@/components/layout/AuthLayout/Login/LoginSidePanel";
import RegisterSidePanel from "@/components/layout/AuthLayout/Register/RegisterSidePanel";
import { usePathname } from "next/navigation";

export default function AuthLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isLoginPage = pathname === "/auth/login";
  const isRegisterPage = pathname === "/auth/register";
  const isSplitLayout = isLoginPage || isRegisterPage;

  const variant = isSplitLayout ? "split" : "centered";

  let sideContent = null;
  if (isLoginPage) {
    sideContent = <LoginSidePanel />;
  } else if (isRegisterPage) {
    sideContent = <RegisterSidePanel />;
  }

  return (
    <AuthLayout variant={variant} sideContent={sideContent}>
      {children}
    </AuthLayout>
  );
}
