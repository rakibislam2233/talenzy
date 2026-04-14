import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HireRequest } from "./types";

type HiringRequestCardProps = {
  order: HireRequest;
};

export default function HiringRequestCard({ order }: HiringRequestCardProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/hiring/my-requests/${order.id}`)}
      className="relative cursor-pointer overflow-hidden rounded-lg border border-border/30 bg-card p-6"
    >
      <div className="absolute left-0 right-0 top-0 h-24 bg-linear-to-b from-accent to-transparent opacity-50" />

      <div className="mb-4 flex items-start justify-between">
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Order #{order.id}</span>
            <span
              className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                order.status === "COMPLETED"
                  ? "bg-green-500/15 text-green-600"
                  : order.status === "IN PROGRESS"
                    ? "bg-primary/15 text-primary"
                    : "bg-orange-500/15 text-orange-600"
              }`}
            >
              {order.status}
            </span>
          </div>
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            {order.title}
          </h3>
          <p className="text-xs text-muted-foreground">
            {order.category} • Due: {order.dueDate}
          </p>
        </div>
      </div>

      <div className="relative mb-4 flex items-center gap-4 border-b border-border/30 pb-4">
        <div className="size-12 overflow-hidden rounded-xl border border-border">
          <Image
            src={order.avatar}
            alt={order.freelancer}
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">{order.freelancer}</p>
          <p className="text-xs text-primary">{order.username}</p>
        </div>
      </div>

      <div className="relative mb-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Progress</span>
          <span className="text-sm font-medium text-primary">{order.progress}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-muted/40">
          <div
            className="h-full bg-linear-to-r from-primary to-purple-600 transition-all"
            style={{ width: `${order.progress}%` }}
          />
        </div>
      </div>

      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground">Total Budget</p>
          <p className="text-xl font-semibold text-foreground">${order.budget}</p>
        </div>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/hiring/my-requests/${order.id}`);
          }}
          className="h-10 rounded-xl bg-foreground px-5 text-xs text-background hover:bg-foreground/90"
        >
          View Details
        </Button>
      </div>
    </div>
  );
}