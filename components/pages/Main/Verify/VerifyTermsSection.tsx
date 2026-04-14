import { Checkbox } from "@/components/ui/checkbox";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { Control } from "react-hook-form";
import { VerifyFormValues } from "./verify-schema";

type VerifyTermsSectionProps = {
  control: Control<VerifyFormValues>;
};

export default function VerifyTermsSection({ control }: VerifyTermsSectionProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="agreeToTerms"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                className="mt-1 border-[#4a3c53] data-[state=checked]:border-[#9419e6] data-[state=checked]:bg-[#9419e6]"
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel className="cursor-pointer text-sm text-gray-400">
                I agree to the {" "}
                <Link href="/terms" className="text-[#9419e6] hover:underline">
                  Terms of Service
                </Link>{" "}
                and {" "}
                <Link href="/privacy-policy" className="text-[#9419e6] hover:underline">
                  Privacy Policy
                </Link>
                .
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />

      <p className="text-sm italic text-gray-400">
        I certify that the information provided is accurate. False information may result in account suspension.
      </p>
    </div>
  );
}
