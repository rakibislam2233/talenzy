"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Link from "next/link"
import { Eye, EyeOff, User, Mail, Check, Camera, Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const registerSchema = z
  .object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
    confirmPassword: z.string(),
    agreeToTerms: z.boolean().refine((val) => val === true, {
      message: "You must agree to the terms",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

type RegisterFormValues = z.infer<typeof registerSchema>

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [usernameAvailable, setUsernameAvailable] = useState(true)

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
  })

  const password = form.watch("password")

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

  const passwordStrength = getPasswordStrength(password)

  const onSubmit = (data: RegisterFormValues) => {
    console.log(data)
    // Handle registration logic here
  }

  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Column - Branding */}
      <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-[#9419e6] to-[#7a14c4] rounded-2xl p-10 text-white">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-2xl font-semibold">Talenzy</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Unleash Your <span className="text-white/90">Talent.</span>
          </h1>
          <p className="text-lg text-white/90 mb-10">
            Join the world's first social platform designed to monetize your creativity instantly.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">$</span>
              </div>
              <div>
                <h3 className="font-semibold">Monetize Instantly</h3>
                <p className="text-sm text-white/80">Earn from your very first post.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎁</span>
              </div>
              <div>
                <h3 className="font-semibold">Gift Interactions</h3>
                <p className="text-sm text-white/80">Fans can send real gifts on comments.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌍</span>
              </div>
              <div>
                <h3 className="font-semibold">Global Stage</h3>
                <p className="text-sm text-white/80">Reach audiences in 140+ countries.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-white/20 rounded-full"></div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">@DancePro</span>
                <Check className="h-4 w-4 text-blue-400" />
              </div>
            </div>
          </div>
          <p className="text-sm text-white/90">
            "Talenzy changed my career overnight. The monetization tools are lightyears ahead of anything else."
          </p>
        </div>
      </div>

      {/* Right Column - Registration Form */}
      <div className="flex items-center justify-center">
        <div className="w-full max-w-md bg-[#221c26] rounded-2xl p-8 shadow-2xl border border-[#4a3c53]/30">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Create your account</h1>
            <p className="text-gray-400 text-sm">
              Start your journey today and join the movement.
            </p>
          </div>

          {/* Profile Picture Upload */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-2 border-dashed border-[#4a3c53] flex items-center justify-center bg-[#2a2330]">
                <Camera className="h-8 w-8 text-gray-500" />
              </div>
              <button
                type="button"
                className="absolute bottom-0 right-0 w-8 h-8 bg-[#9419e6] rounded-full flex items-center justify-center hover:bg-[#a824f0] transition-colors"
              >
                <Pencil className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Full Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          type="text"
                          placeholder="e.g. Sarah Jenkins"
                          className="bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 h-12 pl-4 pr-12 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
                        />
                        <User className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Username</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          type="text"
                          placeholder="@username"
                          className="bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 h-12 pl-4 pr-12 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
                        />
                        {usernameAvailable && field.value && (
                          <Check className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500" />
                        )}
                      </div>
                    </FormControl>
                    {usernameAvailable && field.value && (
                      <p className="text-sm text-green-500 flex items-center gap-1">
                        <span>•</span> Available
                      </p>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />

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
                          className="bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 h-12 pl-4 pr-12 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
                        />
                        <Mail className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 h-12 pl-4 pr-12 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    {password && (
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
                    <FormLabel className="text-white">Confirm Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
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

              <FormField
                control={form.control}
                name="agreeToTerms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="border-[#4a3c53] data-[state=checked]:bg-[#9419e6] data-[state=checked]:border-[#9419e6] mt-1"
                      />
                    </FormControl>
                    <FormLabel className="text-white text-sm font-normal cursor-pointer">
                      I agree to the{" "}
                      <Link href="/terms" className="text-[#9419e6] hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-[#9419e6] hover:underline">
                        Privacy Policy
                      </Link>
                      .
                    </FormLabel>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-[#9419e6] to-[#7a14c4] text-white rounded-lg hover:from-[#a824f0] hover:to-[#8a19d4] transition-all font-semibold"
              >
                Create Account
              </Button>
            </form>
          </Form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#4a3c53]"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#221c26] px-2 text-gray-400">OR CONTINUE WITH</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button
              type="button"
              variant="outline"
              className="h-12 bg-[#2a2330] border-[#4a3c53] text-white hover:bg-[#332840] rounded-lg"
            >
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-12 bg-[#2a2330] border-[#4a3c53] text-white hover:bg-[#332840] rounded-lg"
            >
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </Button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-white text-sm">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="text-[#9419e6] hover:underline font-medium"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

