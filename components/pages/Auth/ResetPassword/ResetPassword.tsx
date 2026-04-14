"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, Check, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PasswordRequirements from "./PasswordRequirements";
import ResetPasswordFields from "./ResetPasswordFields";
import {
    ResetPasswordFormValues,
    resetPasswordSchema,
} from "./reset-password-schema";

export default function ResetPassword() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const newPassword = form.watch("newPassword");

  const onSubmit = (data: ResetPasswordFormValues) => {
    console.log(data);
    // Handle reset password logic here
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="w-full bg-transparent">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <RefreshCw className="h-8 w-8 text-primary-foreground" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center border-2 border-background">
              <Check className="h-3 w-3 text-primary-foreground" />
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Reset Password
          </h1>
          <p className="text-muted-foreground text-sm">
            Your new password must be different from previously used passwords.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <ResetPasswordFields
              control={form.control}
              newPassword={newPassword}
              showNewPassword={showNewPassword}
              onToggleNewPassword={() => setShowNewPassword((current) => !current)}
              showConfirmPassword={showConfirmPassword}
              onToggleConfirmPassword={() =>
                setShowConfirmPassword((current) => !current)
              }
            />

            <PasswordRequirements password={newPassword} />

            <Button
              type="submit"
              className="w-full h-12 bg-linear-to-r from-primary to-[#7a14c4] text-primary-foreground rounded-lg hover:from-primary-hover hover:to-[#8a19d4] transition-all font-semibold"
            >
              Reset Password
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </Form>

        <div className="mt-6 text-center">
          <Link
            href="/auth/login"
            className="text-muted-foreground text-sm hover:text-primary transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
