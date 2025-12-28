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
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const loginSchema = z.object({
  emailOrUsername: z.string().min(1, "Email or username is required"),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean().default(false),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      emailOrUsername: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
    // Handle login logic here
  };

  return (
    <div className="w-full max-w-md mx-auto fade-in">
      <div className="bg-transparent lg:bg-surface-dark lg:rounded-2xl lg:p-8 lg:shadow-2xl lg:border lg:border-border-dark/30">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back!</h1>
          <p className="text-gray-400 text-sm">
            Please enter your details to sign in.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="emailOrUsername"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">
                    Email or Username
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        type="text"
                        placeholder="Enter your email or username"
                        className="bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 h-12 pl-4 pr-4 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
                      />
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
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-between">
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="border-[#4a3c53] data-[state=checked]:bg-[#9419e6] data-[state=checked]:border-[#9419e6]"
                      />
                    </FormControl>
                    <FormLabel className="text-white text-sm font-normal cursor-pointer select-none">
                      Remember me
                    </FormLabel>
                  </FormItem>
                )}
              />
              <Link
                href="/auth/forgot-password"
                className="text-[#9419e6] text-sm hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-linear-to-r from-[#9419e6] to-[#7a14c4] text-white rounded-lg hover:from-[#a824f0] hover:to-[#8a19d4] transition-all font-semibold"
            >
              Log In
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </Form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#4a3c53]"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background-dark lg:bg-surface-dark px-2 text-gray-400">
              OR CONTINUE WITH
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <Button
            type="button"
            variant="outline"
            className="h-12 bg-[#2a2330] border-[#4a3c53] text-white hover:bg-[#332840] rounded-lg"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                fill="#EA4335"
                d="M12 5.04c1.56 0 2.95.53 4.05 1.58l3.05-3.05C17.25 1.79 14.81 0.74 12 0.74 7.57 0.74 3.75 3.3 1.9 7.04l3.78 2.87C6.67 6.47 9.13 5.04 12 5.04z"
              />
              <path
                fill="#FBBC05"
                d="M23.18 12.27c0-0.81-.07-1.59-.2-2.34H12v4.45h6.29c-.27 1.45-1.07 2.68-2.28 3.49l3.7 2.86c2.16-1.99 3.47-4.92 3.47-8.46z"
              />
              <path
                fill="#34A853"
                d="M12 23.26c3.15 0 5.79-1.04 7.71-2.82l-3.7-2.87c-1.04.7-2.37 1.11-4.01 1.11-3.03 0-5.59-2.05-6.51-4.79l-3.78 2.88C3.75 20.01 7.57 23.26 12 23.26z"
              />
              <path
                fill="#4285F4"
                d="M5.49 14.89c-0.23-0.69-0.36-1.43-0.36-2.18s0.13-1.49.36-2.18l-3.78-2.88C1.18 8.87 0.74 10.38 0.74 12s0.44 3.13 0.97 4.31l3.78-2.42z"
              />
            </svg>
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-12 bg-[#2a2330] border-[#4a3c53] text-white hover:bg-[#332840] rounded-lg"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 384 512">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-12 bg-[#2a2330] border-[#4a3c53] text-white hover:bg-[#332840] rounded-lg"
          >
            <svg
              className="h-5 w-5 text-[#1877F2]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </Button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-white text-sm">
            New to Talenzy?{" "}
            <Link
              href="/auth/register"
              className="text-[#9419e6] hover:underline font-medium"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
