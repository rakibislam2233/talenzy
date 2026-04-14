import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Calendar, User } from "lucide-react";
import { Control } from "react-hook-form";
import { VerifyFormValues } from "./verify-schema";

type VerifyPersonalInfoSectionProps = {
  control: Control<VerifyFormValues>;
};

export default function VerifyPersonalInfoSection({
  control,
}: VerifyPersonalInfoSectionProps) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <User className="h-5 w-5 text-[#9419e6]" />
        <h3 className="font-semibold text-white">Personal Information</h3>
      </div>
      <div className="space-y-4">
        <FormField
          control={control}
          name="legalName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-2 text-white">Legal Full Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="As shown on ID"
                  className="h-12 rounded-lg border-[#4a3c53] bg-[#2a2330] text-white placeholder:text-gray-500 focus:border-[#9419e6] focus:ring-[#9419e6]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-2 text-white">Date of Birth</FormLabel>
              <FormControl>
                <div className="relative">
                  <Calendar className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <Input
                    {...field}
                    placeholder="mm/dd/yyyy"
                    className="h-12 rounded-lg border-[#4a3c53] bg-[#2a2330] pl-4 pr-12 text-white placeholder:text-gray-500 focus:border-[#9419e6] focus:ring-[#9419e6]"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-2 text-white">Country of Residence</FormLabel>
              <FormControl>
                <select
                  {...field}
                  className="h-12 w-full rounded-lg border border-[#4a3c53] bg-[#2a2330] px-4 text-white focus:border-[#9419e6] focus:ring-[#9419e6]"
                >
                  <option value="">Select a country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
