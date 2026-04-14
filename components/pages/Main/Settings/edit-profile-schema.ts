import * as z from "zod";

export const profileSchema = z.object({
  displayName: z.string().min(2, "Display name must be at least 2 characters"),
  username: z.string().min(3, "Username must be at least 3 characters"),
  bio: z.string().max(160, "Bio must be at most 160 characters").optional(),
  website: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  location: z.string().optional(),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
});

export type EditProfileFormValues = z.infer<typeof profileSchema>;
