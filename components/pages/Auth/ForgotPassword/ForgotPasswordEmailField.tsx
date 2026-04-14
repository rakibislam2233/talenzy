import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { ForgotPasswordFormValues } from "./forgot-password-schema";

type ForgotPasswordEmailFieldProps = {
  control: Control<ForgotPasswordFormValues>;
};

export default function ForgotPasswordEmailField({
  control,
}: ForgotPasswordEmailFieldProps) {
  return (
    <FormField
      control={control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm font-medium text-foreground/70">
            Email Address
          </FormLabel>
          <FormControl>
            <div className="relative">
              <Input {...field} type="email" placeholder="name@example.com" />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
