import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link as LinkIcon } from "lucide-react";
import { Control } from "react-hook-form";
import { VerifyFormValues } from "./verify-schema";

type VerifyAdditionalInfoSectionProps = {
  control: Control<VerifyFormValues>;
};

export default function VerifyAdditionalInfoSection({
  control,
}: VerifyAdditionalInfoSectionProps) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <LinkIcon className="h-5 w-5 text-[#9419e6]" />
        <h3 className="font-semibold text-white">Additional Information</h3>
      </div>
      <div className="space-y-4">
        <FormField
          control={control}
          name="whyVerify"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">
                Why should you be verified? (Optional)
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Tell us about your achievements or influence..."
                  className="min-h-24 rounded-lg border-[#4a3c53] bg-[#2a2330] text-white placeholder:text-gray-500 focus:border-[#9419e6] focus:ring-[#9419e6]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <label className="mb-2 block text-white">Relevant Links</label>
          <div className="space-y-3">
            <FormField
              control={control}
              name="instagramLink"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl">
                        📷
                      </span>
                      <Input
                        {...field}
                        placeholder="https://instagram.com/yourusername"
                        className="h-12 rounded-lg border-[#4a3c53] bg-[#2a2330] pl-12 pr-4 text-white placeholder:text-gray-500 focus:border-[#9419e6] focus:ring-[#9419e6]"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="articleLink"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl">
                        📰
                      </span>
                      <Input
                        {...field}
                        placeholder="https://nytimes.com/article-about-you"
                        className="h-12 rounded-lg border-[#4a3c53] bg-[#2a2330] pl-12 pr-4 text-white placeholder:text-gray-500 focus:border-[#9419e6] focus:ring-[#9419e6]"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
