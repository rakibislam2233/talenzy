import * as z from "zod";

export const verifyOtpSchema = z.object({
  code: z.string().length(6, "Code must be 6 digits"),
});

export type VerifyOtpFormValues = z.infer<typeof verifyOtpSchema>;
