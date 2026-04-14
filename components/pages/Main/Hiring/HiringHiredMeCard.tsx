import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HiredMeRequest } from "./types";

type HiringHiredMeCardProps = {
  hire: HiredMeRequest;
};

export default function HiringHiredMeCard({ hire }: HiringHiredMeCardProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/hiring/hired-me/${hire.id}`)}
      className="relative cursor-pointer overflow-hidden rounded-lg border border-border/30 bg-card p-6"
    >
      <div className="absolute left-0 right-0 top-0 h-24 bg-linear-to-b from-accent to-transparent opacity-50" />

      <div className="mb-4 flex items-start justify-between">
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Request #{hire.id}</span>
            <span
              className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                hire.status === "ACTIVE"
                  ? "bg-green-500/15 text-green-600"
                  : "bg-orange-500/15 text-orange-600"
              }`}
            >
              {hire.status}
            </span>
          </div>
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            {hire.title}
          </h3>
          <p className="text-xs text-muted-foreground">
            {hire.category} • Started: {hire.startDate}
          </p>
        </div>
      </div>

      <div className="relative mb-6 flex items-center gap-4 border-b border-border/30 pb-4">
        <div className="size-12 overflow-hidden rounded-xl border border-border">
          <Image
            src={hire.avatar}
            alt={hire.client}
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">{hire.client}</p>
          <p className="text-xs text-primary">{hire.username}</p>
        </div>
      </div>

      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground">Project Budget</p>
          <p className="text-xl font-semibold text-foreground">${hire.budget}</p>
        </div>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/hiring/hired-me/${hire.id}`);
          }}
          className="h-10 rounded-xl bg-primary px-5 text-xs text-primary-foreground hover:bg-primary-hover"
        >
          View Request
        </Button>
      </div>
    </div>
  );
}