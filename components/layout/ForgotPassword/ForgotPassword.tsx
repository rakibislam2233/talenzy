"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Link from "next/link"
import { Mail, ArrowLeft, RefreshCw, Lock } from "lucide-react"
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

const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
})

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>

export default function ForgotPassword() {
  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = (data: ForgotPasswordFormValues) => {
    console.log(data)
    // Handle forgot password logic here
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-[#221c26] rounded-2xl p-8 shadow-2xl border border-[#4a3c53]/30">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-16 h-16 bg-[#9419e6] rounded-full flex items-center justify-center">
              <RefreshCw className="h-8 w-8 text-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#9419e6] rounded-full flex items-center justify-center border-2 border-[#221c26]">
              <Lock className="h-3 w-3 text-white" />
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Forgot Password?</h1>
          <p className="text-gray-400 text-sm">
            Enter the email associated with your account and we'll send you a link to reset your password.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email Address</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        type="email"
                        placeholder="name@example.com"
                        className="bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 h-12 pl-12 pr-4 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
                      />
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-[#9419e6] to-[#7a14c4] text-white rounded-lg hover:from-[#a824f0] hover:to-[#8a19d4] transition-all font-semibold"
            >
              Send Reset Link
            </Button>
          </form>
        </Form>

        <div className="mt-6 text-center">
          <Link
            href="/auth/login"
            className="text-white text-sm hover:text-[#9419e6] transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to log in
          </Link>
        </div>
      </div>
    </div>
  )
}

