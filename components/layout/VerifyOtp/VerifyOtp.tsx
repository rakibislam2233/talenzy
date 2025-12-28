"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Link from "next/link"
import { Mail, ArrowRight, ArrowLeft, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const verifyOtpSchema = z.object({
  code: z.string().length(6, "Code must be 6 digits"),
})

type VerifyOtpFormValues = z.infer<typeof verifyOtpSchema>

export default function VerifyOtp() {
  const [resendTimer, setResendTimer] = useState(59)
  const email = "user@talenzy.com" // This would come from context or query params

  const form = useForm<VerifyOtpFormValues>({
    resolver: zodResolver(verifyOtpSchema),
    defaultValues: {
      code: "",
    },
  })

  const onSubmit = (data: VerifyOtpFormValues) => {
    console.log(data)
    // Handle OTP verification logic here
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-surface-dark/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-border-dark/30">
        <div className="flex justify-center mb-6">
          <div className="relative w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <Mail className="h-8 w-8 text-white" />
            <div className="absolute w-4 h-4 bg-green-500 rounded-full border-2 border-surface-dark -top-1 -right-1"></div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Verify Your Email</h1>
          <p className="text-gray-400 text-sm">
            We sent a 6-digit code to{" "}
            <span className="text-white font-semibold">{email}</span>. Please enter it below.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Verification Code</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="000000"
                      maxLength={6}
                      className="bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 h-14 text-center text-2xl tracking-widest font-mono rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "")
                        field.onChange(value)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-3">
              <p className="text-gray-400 text-sm text-center">Didn't receive the code?</p>
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>
                    Resend in <span className="font-semibold text-white">00:{String(resendTimer).padStart(2, "0")}</span>
                  </span>
                </div>
                <button
                  type="button"
                  className="text-[#9419e6] text-sm hover:underline"
                  onClick={() => {
                    // Handle resend logic
                    setResendTimer(59)
                  }}
                >
                  Resend Code
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-[#9419e6] to-[#7a14c4] text-white rounded-lg hover:from-[#a824f0] hover:to-[#8a19d4] transition-all font-semibold"
            >
              Verify Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </Form>

        <div className="mt-6 text-center">
          <Link
            href="/auth/login"
            className="text-white text-sm hover:text-[#9419e6] transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  )
}

