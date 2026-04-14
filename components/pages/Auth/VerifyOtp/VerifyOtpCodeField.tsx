import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { VerifyOtpFormValues } from "./verify-otp-schema";

type VerifyOtpCodeFieldProps = {
  control: Control<VerifyOtpFormValues>;
};

export default function VerifyOtpCodeField({ control }: VerifyOtpCodeFieldProps) {
  return (
    <FormField
      control={control}
      name="code"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-foreground">Verification Code</FormLabel>
          <FormControl>
            <Input
              {...field}
              type="text"
              placeholder="000000"
              maxLength={6}
              className="text-center tracking-[1rem] text-lg font-bold"
              onChange={(event) => {
                const value = event.target.value.replace(/\D/g, "");
                field.onChange(value);
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
