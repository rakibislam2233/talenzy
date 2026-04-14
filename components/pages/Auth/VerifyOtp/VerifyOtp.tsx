"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, Clock, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const verifyOtpSchema = z.object({
  code: z.string().length(6, "Code must be 6 digits"),
});

type VerifyOtpFormValues = z.infer<typeof verifyOtpSchema>;

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
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">
                    Verification Code
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="000000"
                      maxLength={6}
                      className="text-center tracking-[1rem] text-lg font-bold"
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        field.onChange(value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-3">
              <p className="text-muted-foreground text-sm text-center">
                Didn&apos;t receive the code?
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Clock className="h-4 w-4" />
                  <span>
                    Resend in{" "}
                    <span className="font-semibold text-foreground">
                      00:{String(resendTimer).padStart(2, "0")}
                    </span>
                  </span>
                </div>
                <button
                  type="button"
                  className="text-primary text-sm hover:underline cursor-pointer"
                  onClick={() => {
                    // Handle resend logic
                    setResendTimer(59);
                  }}
                >
                  Resend Code
                </button>
              </div>
            </div>

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
