import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type DetailHeaderProps = {
  sectionLabel: string;
  requestId: string;
};

export default function DetailHeader({
  sectionLabel,
  requestId,
}: DetailHeaderProps) {
  return (
    <div className="sticky top-0 z-50 border-b border-border/30 bg-background/50 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
        <div className="flex items-center gap-4">
          <Link href="/hiring">
            <Button
              variant="ghost"
              className="h-10 w-10 p-0 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex-1">
            <div className="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
              <span>{sectionLabel}</span>
              <span>/</span>
              <span className="text-foreground">Request #{requestId}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
