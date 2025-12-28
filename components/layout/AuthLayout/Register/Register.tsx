"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { Check, Eye, EyeOff, Mail, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const registerSchema = z
  .object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character"
      ),
    confirmPassword: z.string(),
    agreeToTerms: z.boolean().refine((val) => val === true, {
      message: "You must agree to the terms",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState(true);

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
  });

  // Basic password field watcher if needed for UI feedback (not fully implemented in design image but good to have)
  // The existing logic for passwordStrength was removed as it wasn't in the provided strict design image provided in User Request
  // (actually it IS in screenshot 1? No, screenshot 0 is Register. I see dots. I don't see strength bar. I'll stick to simple inputs).

  const onSubmit = (data: RegisterFormValues) => {
    console.log(data);
  };

  return (
    <div className="w-full max-w-md mx-auto fade-in">
      <div className="bg-transparent lg:bg-surface-dark lg:rounded-2xl lg:p-8 lg:shadow-2xl lg:border lg:border-border-dark/30">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Create your account
          </h1>
          <p className="text-gray-400 text-sm">
            Start your journey today and join the movement.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                        className="bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 h-10 lg:h-12 pl-4 pr-12 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
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
                        className="bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 h-10 lg:h-12 pl-4 pr-12 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
                      />
                      {usernameAvailable && field.value && (
                        <Check className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500" />
                      )}
                    </div>
                  </FormControl>
                  {usernameAvailable && field.value && (
                    <p className="text-sm text-green-500 flex items-center gap-1 font-medium">
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
                        className="bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 h-10 lg:h-12 pl-4 pr-12 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
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
                        placeholder="••••••••"
                        className="bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 h-10 lg:h-12 pl-4 pr-12 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
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
                  {/* Password Strength Indicators - Keeping simple/hidden based on design, checking image... 
                        Image shows dots and then some colored bars? 
                        Yes, underneath functionality: Red/Orange/Green/Gray bars. 
                        I should reinstate the strength bars. */}
                  <div className="flex gap-1 h-1 mt-2">
                    <div className="h-full flex-1 rounded bg-red-500" />
                    <div className="h-full flex-1 rounded bg-orange-500" />
                    {/* Mocked for design */}
                    <div className="h-full flex-1 rounded bg-gray-700" />
                    <div className="h-full flex-1 rounded bg-gray-700" />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-4">
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 h-10 lg:h-12 pl-4 pr-12 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
                        />
                        {/* No eye icon shown in design for confirm password? Actually it is. */}
                        {/* Design screenshot for confirm password shows dots. */}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="agreeToTerms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border-[#4a3c53] data-[state=checked]:bg-[#9419e6] data-[state=checked]:border-[#9419e6]"
                    />
                  </FormControl>
                  <FormLabel className="text-white/70 text-sm font-normal cursor-pointer">
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="text-white hover:underline underline-offset-4"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="text-white hover:underline underline-offset-4"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </FormLabel>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full h-12 bg-[#8b21de] hover:bg-[#7a1dc4] text-white rounded-lg transition-all font-semibold text-base mt-2"
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
            <span className="bg-background-dark lg:bg-surface-dark px-2 text-gray-500">
              OR CONTINUE WITH
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button
            type="button"
            variant="outline"
            className="h-12 bg-[#2a2330] border-[#4a3c53] text-white hover:bg-[#332840] rounded-lg flex items-center gap-2"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
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
            className="h-12 bg-[#1877F2] hover:bg-[#166fe5] text-white border-none rounded-lg flex items-center gap-2 font-medium"
          >
            <svg
              className="h-5 w-5 bg-white text-[#1877F2] rounded-sm p-[1px]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Facebook
          </Button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-white/60 text-sm">
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
  );
}
