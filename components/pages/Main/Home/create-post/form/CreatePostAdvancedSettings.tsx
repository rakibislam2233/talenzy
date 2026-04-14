import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

type PrivacyOption = "public" | "connections" | "private";

type CreatePostAdvancedSettingsProps = {
  isHiring: boolean;
  setIsHiring: (val: boolean) => void;
  allowComments: boolean;
  setAllowComments: (val: boolean) => void;
  allowDownloads: boolean;
  setAllowDownloads: (val: boolean) => void;
  privacy: PrivacyOption;
  setPrivacy: (val: PrivacyOption) => void;
};

export default function CreatePostAdvancedSettings({
  isHiring,
  setIsHiring,
  allowComments,
  setAllowComments,
  allowDownloads,
  setAllowDownloads,
  privacy,
  setPrivacy,
}: CreatePostAdvancedSettingsProps) {
  return (
    <div className="border-t border-border pt-4">
      <details className="group">
        <summary className="flex items-center justify-between cursor-pointer list-none text-foreground font-bold text-sm mb-4">
          <span>Advanced Settings</span>
          <ChevronRight className="h-4 w-4 text-gray-400 group-open:rotate-90 transition-transform" />
        </summary>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="flex flex-col gap-4 pl-1"
        >
          <SettingRow
            title="Open to hiring"
            description="Let clients send hiring requests for this post."
            checked={isHiring}
            onChange={() => setIsHiring(!isHiring)}
          />

          <SettingRow
            title="Allow comments"
            description="Viewers can comment on this post."
            checked={allowComments}
            onChange={() => setAllowComments(!allowComments)}
          />

          <SettingRow
            title="Allow downloads"
            description="Allow others to download media from this post."
            checked={allowDownloads}
            onChange={() => setAllowDownloads(!allowDownloads)}
          />

          <div className="space-y-2">
            <div className="text-foreground text-sm font-medium">Post visibility</div>
            <div className="grid grid-cols-3 gap-2">
              {(["public", "connections", "private"] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setPrivacy(item)}
                  className={`rounded-lg border px-3 py-2 text-xs font-semibold capitalize ${
                    privacy === item
                      ? "border-primary text-primary"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">Control who can see this post.</p>
          </div>
        </motion.div>
      </details>
    </div>
  );
}

function SettingRow({
  title,
  description,
  checked,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-foreground text-sm font-medium">{title}</span>
        <Switch checked={checked} onChange={onChange} />
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function Switch({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`w-11 h-5 rounded-full relative transition-colors duration-300 ease-in-out cursor-pointer ${
        checked ? "bg-primary" : "bg-gray-600"
      }`}
    >
      <div
        className={`size-4 bg-white rounded-full absolute top-0.5 transition-transform duration-300 shadow-md ${
          checked ? "left-[calc(100%-1.2rem)]" : "left-0.5"
        }`}
      />
    </button>
  );
}
