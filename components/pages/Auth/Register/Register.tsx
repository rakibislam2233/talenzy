"use client";

import { Button } from "@/components/ui/button";
import {
    Form,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import RegisterFormFields from "./RegisterFormFields";
import RegisterTermsField from "./RegisterTermsField";
import { RegisterFormValues, registerSchema } from "./register-schema";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  const onSubmit = (data: RegisterFormValues) => {
    console.log(data);
  };

  return (
    <section className="w-full max-w-xl mx-auto fade-in">
      <div className="w-full bg-transparent">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Create your account
          </h1>
          <p className="text-muted-foreground text-sm">
            Start your journey today and join the movement.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <RegisterFormFields
              control={form.control}
              showPassword={showPassword}
              onTogglePassword={() => setShowPassword((current) => !current)}
              showConfirmPassword={showConfirmPassword}
              onToggleConfirmPassword={() => setShowConfirmPassword((current) => !current)}
            />

            <RegisterTermsField control={form.control} />
            {form.formState.errors.agreeToTerms?.message ? (
              <p className="text-sm font-medium text-destructive">
                {form.formState.errors.agreeToTerms.message}
              </p>
            ) : null}

            <Button
              type="submit"
              className="w-full h-12 bg-primary hover:bg-primary-hover text-primary-foreground rounded-lg transition-all font-semibold text-base mt-2"
            >
              Create Account
            </Button>
          </form>
        </Form>

        <div className="mt-6 text-center">
          <p className="text-foreground/60 text-sm">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-primary hover:underline font-medium"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}