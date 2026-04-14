import { Textarea } from "@/components/ui/textarea";

type MessageFieldProps = {
  username: string;
  message: string;
  onChange: (value: string) => void;
};

export default function MessageField({
  username,
  message,
  onChange,
}: MessageFieldProps) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <label className="text-muted-foreground text-xs font-bold uppercase tracking-wider">
          Personal Message
        </label>
        <span className="text-muted-foreground text-[10px]">Optional</span>
      </div>
      <Textarea
        placeholder={`Add a nice message for ${username}...`}
        value={message}
        onChange={(event) => onChange(event.target.value.slice(0, 140))}
        className="bg-background/50 border-border rounded-2xl min-h-[100px] text-foreground focus:border-primary/50 transition-all resize-none p-4"
      />
      <div className="text-right">
        <span className="text-muted-foreground text-[10px]">{message.length}/140</span>
      </div>
    </div>
  );
}
