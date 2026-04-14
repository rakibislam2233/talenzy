import { Checkbox } from "@/components/ui/checkbox";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import Link from "next/link";
import { Control } from "react-hook-form";
import { RegisterFormValues } from "./register-schema";

type RegisterTermsFieldProps = {
  control: Control<RegisterFormValues>;
};

export default function RegisterTermsField({ control }: RegisterTermsFieldProps) {
  return (
    <FormField
      control={control}
      name="agreeToTerms"
      render={({ field }) => (
        <FormItem className="flex flex-row items-center space-x-3 space-y-0">
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              className="border-border data-[state=checked]:border-primary data-[state=checked]:bg-primary"
            />
          </FormControl>
          <FormLabel className="cursor-pointer text-sm font-normal text-foreground/70">
            I agree to the {" "}
            <Link href="/terms" className="text-foreground underline-offset-4 hover:underline">
              Terms of Service
            </Link>{" "}
            and {" "}
            <Link href="/privacy-policy" className="text-foreground underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
            .
          </FormLabel>
        </FormItem>
      )}
    />
  );
}
