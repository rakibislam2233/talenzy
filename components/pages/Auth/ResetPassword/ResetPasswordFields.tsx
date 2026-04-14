import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Control } from "react-hook-form";
import { ResetPasswordFormValues } from "./reset-password-schema";
import { getPasswordStrength } from "./reset-password-utils";

type ResetPasswordFieldsProps = {
  control: Control<ResetPasswordFormValues>;
  newPassword: string;
  showNewPassword: boolean;
  onToggleNewPassword: () => void;
  showConfirmPassword: boolean;
  onToggleConfirmPassword: () => void;
};

export default function ResetPasswordFields({
  control,
  newPassword,
  showNewPassword,
  onToggleNewPassword,
  showConfirmPassword,
  onToggleConfirmPassword,
}: ResetPasswordFieldsProps) {
  const passwordStrength = getPasswordStrength(newPassword);

  return (
    <>
      <FormField
        control={control}
        name="newPassword"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-foreground">New Password</FormLabel>
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
                  onClick={onToggleNewPassword}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showNewPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </FormControl>
            {newPassword ? (
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
                {passwordStrength.label ? (
                  <p className={`text-xs ${passwordStrength.color.replace("bg-", "text-")}`}>
                    {passwordStrength.label}
                  </p>
                ) : null}
              </div>
            ) : null}
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="confirmPassword"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-foreground">Confirm New Password</FormLabel>
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
                  onClick={onToggleConfirmPassword}
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
    </>
  );
}
