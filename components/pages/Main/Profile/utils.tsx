import { Star } from "lucide-react";

export function renderStars(rating: number) {
  return Array.from({ length: 5 }).map((_, index) => (
    <Star
      key={index}
      className={`h-3.5 w-3.5 ${index < rating ? "text-yellow-500 fill-yellow-500" : "text-border"}`}
    />
  ));
}
