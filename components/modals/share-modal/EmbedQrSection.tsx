import { Button } from "@/components/ui/button";
import { QrCode } from "lucide-react";

type EmbedQrSectionProps = {
  embedCode: string;
  onCopyEmbedCode: () => void;
};

export default function EmbedQrSection({
  embedCode,
  onCopyEmbedCode,
}: EmbedQrSectionProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-3">
        <h5 className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest pl-1">
          Embed Code
        </h5>
        <div className="relative">
          <div className="bg-foreground/40 border border-border/50 rounded-xl h-10 flex items-center px-3 overflow-hidden">
            <code className="text-[10px] text-muted-foreground whitespace-nowrap overflow-hidden">
              {embedCode}
            </code>
          </div>
          <button
            onClick={onCopyEmbedCode}
            className="absolute inset-y-0 right-0 px-3 bg-white/10 hover:bg-accent/50 text-foreground text-[10px] font-bold transition-colors"
          >
            Copy
          </button>
        </div>
      </div>
      <div className="space-y-3">
        <h5 className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest pl-1">
          Scan
        </h5>
        <Button
          variant="outline"
          className="w-full h-10 bg-background/50 border-border rounded-xl text-foreground text-[10px] font-bold flex items-center gap-2 hover:bg-accent"
        >
          <QrCode className="h-4 w-4" />
          QR Code
        </Button>
      </div>
    </div>
  );
}
