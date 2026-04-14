import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageSquare, Star } from "lucide-react";
import Image from "next/image";

type PartyCardProps = {
  image: string;
  name: string;
  username: string;
  priceLabel: string;
  priceValue: number;
  messageLabel: string;
  rating?: number;
  reviews?: number;
};

export default function PartyCard({
  image,
  name,
  username,
  priceLabel,
  priceValue,
  messageLabel,
  rating,
  reviews,
}: PartyCardProps) {
  return (
    <div className="rounded-3xl border border-border/40 bg-background/50 p-6 backdrop-blur-xl">
      <div className="mb-6 text-center">
        <div className="relative mb-4 inline-block">
          <div className="size-24 overflow-hidden rounded-3xl border-2 border-primary/50 shadow-xl shadow-primary/20">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>
          <div className="absolute -bottom-1 -right-1 rounded-full border-2 border-background bg-blue-500 p-1">
            <CheckCircle2 className="size-4 text-primary-foreground" />
          </div>
        </div>
        <h3 className="text-xl uppercase tracking-tight text-foreground">{name}</h3>
        <p className="text-sm font-bold text-primary">{username}</p>
        {typeof rating === "number" && typeof reviews === "number" && (
          <div className="mt-2 flex items-center justify-center gap-1 text-xs font-bold text-muted-foreground">
            <Star className="size-3 fill-yellow-500 text-yellow-500" />
            <span>{rating}</span>
            <span>({reviews} reviews)</span>
          </div>
        )}
      </div>

      <div className="space-y-4 border-t border-border/30 pt-6">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            {priceLabel}
          </span>
          <span className="text-xl text-foreground">${priceValue}</span>
        </div>
        <Button className="h-12 w-full rounded-xl bg-foreground text-xs uppercase tracking-widest text-background hover:bg-foreground/90">
          <MessageSquare className="mr-2 size-4" />
          {messageLabel}
        </Button>
      </div>
    </div>
  );
}
