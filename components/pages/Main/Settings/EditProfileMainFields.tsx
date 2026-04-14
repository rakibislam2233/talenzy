import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AtSign, Globe, Hash, MapPin } from "lucide-react";
import { Control } from "react-hook-form";
import { EditProfileFormValues } from "./edit-profile-schema";

type EditProfileMainFieldsProps = {
  control: Control<EditProfileFormValues>;
};

export default function EditProfileMainFields({
  control,
}: EditProfileMainFieldsProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="displayName"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-muted-foreground">Display Name</FormLabel>
            <FormControl>
              <div className="relative mt-1">
                <AtSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input {...field} className="border-border bg-background pl-10 text-foreground" />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-muted-foreground">Username</FormLabel>
            <FormControl>
              <div className="relative mt-1">
                <Hash className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input {...field} className="border-border bg-background pl-10 text-foreground" />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="bio"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-muted-foreground">Bio</FormLabel>
            <FormControl>
              <Textarea {...field} rows={4} className="mt-1 border-border bg-background text-foreground" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="website"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-muted-foreground">Website</FormLabel>
            <FormControl>
              <div className="relative mt-1">
                <Globe className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input {...field} className="border-border bg-background pl-10 text-foreground" />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-muted-foreground">Location</FormLabel>
            <FormControl>
              <div className="relative mt-1">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input {...field} className="border-border bg-background pl-10 text-foreground" />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
