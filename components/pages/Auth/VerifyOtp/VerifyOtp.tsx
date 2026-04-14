"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import VerifyOtpCodeField from "./VerifyOtpCodeField";
import VerifyOtpResendInfo from "./VerifyOtpResendInfo";
import { VerifyOtpFormValues, verifyOtpSchema } from "./verify-otp-schema";

export default function VerifyOtp() {
  const [resendTimer, setResendTimer] = useState(59);
  const email = "user@talenzy.com"; // This would come from context or query params

  const form = useForm<VerifyOtpFormValues>({
    resolver: zodResolver(verifyOtpSchema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = (data: VerifyOtpFormValues) => {
    console.log(data);
    // Handle OTP verification logic here
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="w-full bg-transparent">
        <div className="flex justify-center mb-6">
          <div className="relative w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <Mail className="h-8 w-8 text-primary-foreground" />
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Verify Your Email
          </h1>
          <p className="text-muted-foreground text-sm">
            We sent a 6-digit code to{" "}
            <span className="text-foreground font-semibold">{email}</span>.
            Please enter it below.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <VerifyOtpCodeField control={form.control} />

            <VerifyOtpResendInfo
              resendTimer={resendTimer}
              onResend={() => setResendTimer(59)}
            />

            <Button type="submit" className="w-full cursor-pointer">
              Verify Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </Form>

        <div className="mt-6 text-center">
          <Link
            href="/auth/login"
            className="text-foreground text-sm hover:text-primary transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
