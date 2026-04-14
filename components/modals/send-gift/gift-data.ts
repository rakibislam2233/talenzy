import { Coffee, Diamond, Flower2, Pizza, Rocket, Trophy } from "lucide-react";
import { GiftItem } from "./types";

export const GIFTS: GiftItem[] = [
  {
    id: "coffee",
    name: "Coffee",
    price: 50,
    icon: Coffee,
    color: "text-orange-400",
  },
  {
    id: "pizza",
    name: "Pizza",
    price: 150,
    icon: Pizza,
    color: "text-orange-500",
  },
  {
    id: "flower",
    name: "Flower",
    price: 300,
    icon: Flower2,
    color: "text-pink-400",
  },
  {
    id: "diamond",
    name: "Diamond",
    price: 1000,
    icon: Diamond,
    color: "text-blue-400",
  },
  {
    id: "rocket",
    name: "Rocket",
    price: 5000,
    icon: Rocket,
    color: "text-red-400",
  },
  {
    id: "trophy",
    name: "Trophy",
    price: 10000,
    icon: Trophy,
    color: "text-yellow-400",
  },
];
