"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Link from "next/link"
import { Eye, EyeOff, RefreshCw, Check, ArrowRight, ArrowLeft } from "lucide-react"
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

const resetPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character")
      .refine((val) => !/\s/.test(val), "Password must not contain spaces"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>

export default function ResetPassword() {
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  })

  const newPassword = form.watch("newPassword")

  const checkRequirement = (requirement: string) => {
    switch (requirement) {
      case "length":
        return newPassword.length >= 8
      case "number":
        return /[0-9]/.test(newPassword)
      case "special":
        return /[^A-Za-z0-9]/.test(newPassword)
      case "noSpaces":
        return !/\s/.test(newPassword)
      default:
        return false
    }
  }

  const getPasswordStrength = (password: string) => {
    if (!password) return { strength: 0, label: "", color: "" }
    let strength = 0
    if (password.length >= 8) strength++
    if (/[0-9]/.test(password)) strength++
    if (/[^A-Za-z0-9]/.test(password)) strength++
    if (!/\s/.test(password)) strength++

    if (strength <= 1) return { strength: 1, label: "Weak", color: "bg-red-500" }
    if (strength === 2) return { strength: 2, label: "Medium", color: "bg-orange-500" }
    return { strength: 3, label: "Strong", color: "bg-green-500" }
  }

  const passwordStrength = getPasswordStrength(newPassword)

  const onSubmit = (data: ResetPasswordFormValues) => {
    console.log(data)
    // Handle reset password logic here
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
              <Check className="h-3 w-3 text-white" />
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Reset Password</h1>
          <p className="text-gray-400 text-sm">
            Your new password must be different from previously used passwords.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">New Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        type={showNewPassword ? "text" : "password"}
                        placeholder="Enter new password"
                        className="bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 h-12 pl-4 pr-12 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                      >
                        {showNewPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  {newPassword && (
                    <div className="space-y-2">
                      <div className="flex gap-1 h-1">
                        <div
                          className={`h-full flex-1 rounded ${
                            passwordStrength.strength >= 1 ? passwordStrength.color : "bg-gray-700"
                          }`}
                        />
                        <div
                          className={`h-full flex-1 rounded ${
                            passwordStrength.strength >= 2 ? passwordStrength.color : "bg-gray-700"
                          }`}
                        />
                        <div
                          className={`h-full flex-1 rounded ${
                            passwordStrength.strength >= 3 ? passwordStrength.color : "bg-gray-700"
                          }`}
                        />
                      </div>
                      {passwordStrength.label && (
                        <p className={`text-xs ${passwordStrength.color.replace("bg-", "text-")}`}>
                          {passwordStrength.label}
                        </p>
                      )}
                    </div>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Confirm New Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm new password"
                        className="bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 h-12 pl-4 pr-12 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-3">
              <h3 className="text-white text-sm font-semibold">PASSWORD REQUIREMENTS</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  {checkRequirement("length") ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <div className="h-4 w-4 rounded-full border-2 border-gray-600" />
                  )}
                  <span className="text-sm text-gray-400">At least 8 characters long</span>
                </div>
                <div className="flex items-center gap-2">
                  {checkRequirement("number") ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <div className="h-4 w-4 rounded-full border-2 border-gray-600" />
                  )}
                  <span className="text-sm text-gray-400">Contains at least one number</span>
                </div>
                <div className="flex items-center gap-2">
                  {checkRequirement("special") ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <div className="h-4 w-4 rounded-full border-2 border-gray-600" />
                  )}
                  <span className="text-sm text-gray-400">Contains at least one special character</span>
                </div>
                <div className="flex items-center gap-2">
                  {checkRequirement("noSpaces") ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <div className="h-4 w-4 rounded-full border-2 border-gray-600" />
                  )}
                  <span className="text-sm text-gray-400">No spaces</span>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-[#9419e6] to-[#7a14c4] text-white rounded-lg hover:from-[#a824f0] hover:to-[#8a19d4] transition-all font-semibold"
            >
              Reset Password
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </Form>

        <div className="mt-6 text-center">
          <Link
            href="/auth/login"
            className="text-gray-400 text-sm hover:text-[#9419e6] transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Log in
          </Link>
        </div>
      </div>
    </div>
  )
}

