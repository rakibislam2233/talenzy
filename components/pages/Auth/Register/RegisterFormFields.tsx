import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Mail, User } from "lucide-react";
import { Control } from "react-hook-form";
import { RegisterFormValues } from "./register-schema";

type RegisterFormFieldsProps = {
  control: Control<RegisterFormValues>;
  showPassword: boolean;
  onTogglePassword: () => void;
  showConfirmPassword: boolean;
  onToggleConfirmPassword: () => void;
};

export default function RegisterFormFields({
  control,
  showPassword,
  onTogglePassword,
  showConfirmPassword,
  onToggleConfirmPassword,
}: RegisterFormFieldsProps) {
  return (
    <>
      <FormField
        control={control}
        name="fullName"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-foreground">Full Name</FormLabel>
            <FormControl>
              <div className="relative">
                <Input
                  {...field}
                  type="text"
                  placeholder="e.g. Sarah Jenkins"
                  className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                />
                <User className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-foreground">Username</FormLabel>
            <FormControl>
              <div className="relative">
                <Input
                  {...field}
                  type="text"
                  placeholder="e.g. sarah_jenkins"
                  className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                />
                <User className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-foreground">Email Address</FormLabel>
            <FormControl>
              <div className="relative">
                <Input
                  {...field}
                  type="email"
                  placeholder="name@example.com"
                  className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                />
                <Mail className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-foreground">Password</FormLabel>
            <FormControl>
              <div className="relative">
                <Input
                  {...field}
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                />
                <button
                  type="button"
                  onClick={onTogglePassword}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </FormControl>
            <div className="mt-2 flex h-1 gap-1">
              <div className="h-full flex-1 rounded bg-red-500" />
              <div className="h-full flex-1 rounded bg-orange-500" />
              <div className="h-full flex-1 rounded bg-gray-700" />
              <div className="h-full flex-1 rounded bg-gray-700" />
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="confirmPassword"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-foreground">Confirm Password</FormLabel>
            <FormControl>
              <div className="relative">
                <Input
                  {...field}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                />
                <button
                  type="button"
                  onClick={onToggleConfirmPassword}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
