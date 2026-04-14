"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import EditProfileAvatarCard from "./EditProfileAvatarCard";
import EditProfileMainFields from "./EditProfileMainFields";
import EditProfilePersonalFields from "./EditProfilePersonalFields";
import { EditProfileFormValues, profileSchema } from "./edit-profile-schema";

export default function EditProfilePageView() {
  const form = useForm<EditProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      displayName: "Sarah Jenkins",
      username: "@sarahcreative",
      bio: "Digital artist and content creator passionate about bringing imagination to life. Open for collaborations!",
      website: "https://sarahjenkins.com",
      location: "Los Angeles, CA",
      email: "sarah.jenkins@example.com",
      phone: "+1 (555) 000-1234",
    },
  });

  const onSubmit = (data: EditProfileFormValues) => {
    console.log("Profile updated:", data);
  };

  return (
    <div className="mx-auto max-w-4xl p-4 pb-20 sm:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Edit Profile</h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="rounded-xl border border-border bg-background p-6">
            <EditProfileAvatarCard
              displayName={form.getValues("displayName")}
              username={form.getValues("username")}
            />
            <EditProfileMainFields control={form.control} />
          </div>

          <div className="rounded-xl border border-border bg-background p-6">
            <h3 className="mb-4 text-lg font-semibold text-foreground">Personal Information</h3>
            <EditProfilePersonalFields control={form.control} />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" className="flex-1 border-border text-foreground hover:bg-accent">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
              Save Changes
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
