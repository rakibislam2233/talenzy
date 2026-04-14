import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Mail, Phone } from "lucide-react";
import { Control } from "react-hook-form";
import { EditProfileFormValues } from "./edit-profile-schema";

type EditProfilePersonalFieldsProps = {
  control: Control<EditProfileFormValues>;
};

export default function EditProfilePersonalFields({
  control,
}: EditProfilePersonalFieldsProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-muted-foreground">Email</FormLabel>
            <FormControl>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  {...field}
                  type="email"
                  className="border-border bg-background pl-10 text-foreground"
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-muted-foreground">Phone</FormLabel>
            <FormControl>
              <div className="relative mt-1">
                <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  {...field}
                  type="tel"
                  className="border-border bg-background pl-10 text-foreground"
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
