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
import { useAuth } from "@/context/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginForm) => {
    // Simulate API call
    console.log("Login data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Call login from context to update state and redirect
    login();
  };

  return (
    <section className="w-full max-w-lg mx-auto fade-in">
      <div className="w-full bg-transparent">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Welcome Back!
          </h2>
          <p className="text-muted-foreground text-sm">
            Please enter your details to sign in.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-foreground/70 ml-1">
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Enter your email"
                      className="h-12 bg-background border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 rounded-lg"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-foreground/70 ml-1">
                    Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="h-12 bg-background border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 pr-10 rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="w-4 h-4 rounded border border-border bg-background group-hover:border-primary transition-colors flex items-center justify-center">
                  {/* Checkbox logic would go here ideally */}
                </div>
                <span className="text-muted-foreground group-hover:text-foreground/80">
                  Remember me
                </span>
              </label>
              <Link
                href="/auth/forgot-password"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Forgot Password?
              </Link>
            </div>

            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="w-full cursor-pointer"
            >
              {form.formState.isSubmitting ? "Signing in..." : "Sign In"}
            </Button>
            <p className="text-center text-muted-foreground text-sm mt-8">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/register"
                className="text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                Sign up for free
              </Link>
            </p>
          </form>
        </Form>
      </div>
    </section>
  );
}
