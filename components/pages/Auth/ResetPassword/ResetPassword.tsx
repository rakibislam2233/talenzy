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
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const resetPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character",
      )
      .refine((val) => !/\s/.test(val), "Password must not contain spaces"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

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

  const checkRequirement = (requirement: string) => {
    switch (requirement) {
      case "length":
        return newPassword.length >= 8;
      case "number":
        return /[0-9]/.test(newPassword);
      case "special":
        return /[^A-Za-z0-9]/.test(newPassword);
      case "noSpaces":
        return !/\s/.test(newPassword);
      default:
        return false;
    }
  };

  const getPasswordStrength = (password: string) => {
    if (!password) return { strength: 0, label: "", color: "" };
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    if (!/\s/.test(password)) strength++;

    if (strength <= 1)
      return { strength: 1, label: "Weak", color: "bg-red-500" };
    if (strength === 2)
      return { strength: 2, label: "Medium", color: "bg-orange-500" };
    return { strength: 3, label: "Strong", color: "bg-green-500" };
  };

  const passwordStrength = getPasswordStrength(newPassword);

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
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">
                    New Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        type={showNewPassword ? "text" : "password"}
                        placeholder="Enter new password"
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground h-12 pl-4 pr-12 rounded-lg focus:border-primary focus:ring-primary"
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
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
                            passwordStrength.strength >= 1
                              ? passwordStrength.color
                              : "bg-gray-700"
                          }`}
                        />
                        <div
                          className={`h-full flex-1 rounded ${
                            passwordStrength.strength >= 2
                              ? passwordStrength.color
                              : "bg-gray-700"
                          }`}
                        />
                        <div
                          className={`h-full flex-1 rounded ${
                            passwordStrength.strength >= 3
                              ? passwordStrength.color
                              : "bg-gray-700"
                          }`}
                        />
                      </div>
                      {passwordStrength.label && (
                        <p
                          className={`text-xs ${passwordStrength.color.replace("bg-", "text-")}`}
                        >
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
                  <FormLabel className="text-foreground">
                    Confirm New Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm new password"
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground h-12 pl-4 pr-12 rounded-lg focus:border-primary focus:ring-primary"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
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
              <h3 className="text-foreground text-sm font-semibold">
                PASSWORD REQUIREMENTS
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  {checkRequirement("length") ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <div className="h-4 w-4 rounded-full border-2 border-border" />
                  )}
                  <span className="text-sm text-muted-foreground">
                    At least 8 characters long
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {checkRequirement("number") ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <div className="h-4 w-4 rounded-full border-2 border-border" />
                  )}
                  <span className="text-sm text-muted-foreground">
                    Contains at least one number
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {checkRequirement("special") ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <div className="h-4 w-4 rounded-full border-2 border-border" />
                  )}
                  <span className="text-sm text-muted-foreground">
                    Contains at least one special character
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {checkRequirement("noSpaces") ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <div className="h-4 w-4 rounded-full border-2 border-border" />
                  )}
                  <span className="text-sm text-muted-foreground">
                    No spaces
                  </span>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-primary to-[#7a14c4] text-primary-foreground rounded-lg hover:from-primary-hover hover:to-[#8a19d4] transition-all font-semibold"
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
