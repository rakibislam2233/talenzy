"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import VerifyAdditionalInfoSection from "./VerifyAdditionalInfoSection";
import VerifyEligibility from "./VerifyEligibility";
import VerifyHeader from "./VerifyHeader";
import VerifyIdentificationSection from "./VerifyIdentificationSection";
import VerifyPersonalInfoSection from "./VerifyPersonalInfoSection";
import VerifySelfieSection from "./VerifySelfieSection";
import VerifyTermsSection from "./VerifyTermsSection";
import { VerifyFormValues, verifySchema } from "./verify-schema";

export default function VerifyPageView() {
  const form = useForm<VerifyFormValues>({
    resolver: zodResolver(verifySchema),
    defaultValues: {
      legalName: "",
      dateOfBirth: "",
      country: "",
      whyVerify: "",
      instagramLink: "",
      articleLink: "",
      agreeToTerms: false,
    },
  });

  const onSubmit = (data: VerifyFormValues) => {
    console.log(data);
  };

  return (
    <div className="mx-auto max-w-4xl p-4 sm:p-6">
      <div className="rounded-2xl border border-[#4a3c53]/30 bg-[#221c26] p-5 sm:p-8">
        <VerifyHeader />
        <VerifyEligibility />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <VerifyPersonalInfoSection control={form.control} />
            <VerifyIdentificationSection />
            <VerifySelfieSection />
            <VerifyAdditionalInfoSection control={form.control} />
            <VerifyTermsSection control={form.control} />

            <Button
              type="submit"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#9419e6] font-semibold text-white hover:bg-[#a824f0]"
            >
              Submit Verification Request
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>

            <p className="text-center text-sm text-gray-400">
              Review typically takes 24-48 hours. You will be notified via email and in-app notification.
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
}
