import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";

export default function GiftsTab() {
  return (
    <div className="animate-in fade-in duration-500 py-20">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-border bg-card">
          <Gift className="h-10 w-10 text-primary" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-foreground">No Gifts Yet</h3>
        <p className="mb-6 text-sm text-muted-foreground">
          Send a gift to show your appreciation!
        </p>
        <Button className="h-10 rounded-full bg-primary px-6 font-bold text-primary-foreground shadow-glow hover:bg-primary/90">
          <Gift className="mr-2 h-4 w-4" />
          Send Gift
        </Button>
      </div>
    </div>
  );
}
