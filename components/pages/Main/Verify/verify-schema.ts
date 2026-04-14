import * as z from "zod";

export const verifySchema = z.object({
  legalName: z.string().min(2, "Legal name is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  country: z.string().min(1, "Country is required"),
  whyVerify: z.string().optional(),
  instagramLink: z.string().url("Invalid URL").optional().or(z.literal("")),
  articleLink: z.string().url("Invalid URL").optional().or(z.literal("")),
  agreeToTerms: z.boolean().refine((value) => value === true, {
    message: "You must agree to the terms",
  }),
});

export type VerifyFormValues = z.infer<typeof verifySchema>;
