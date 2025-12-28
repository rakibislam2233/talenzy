"use client";

import { useEffect, useState } from "react";

export type ToastType =
  | "gift"
  | "follow"
  | "like"
  | "comment"
  | "reaction"
  | "hire"
  | "deposit"
  | "withdraw"
  | "profile_update"
  | "logout"
  | "login"
  | "success"
  | "error";

export interface ToastOptions {
  id: string;
  type: ToastType;
  title: string;
  description?: string;
  duration?: number;
}

let toastCount = 0;
const observers: Array<(toasts: ToastOptions[]) => void> = [];
let toasts: ToastOptions[] = [];

const notify = () => {
  observers.forEach((observer) => observer([...toasts]));
};

export const toast = {
  show: (options: Omit<ToastOptions, "id">) => {
    const id = `toast-${toastCount++}`;
    const newToast = { ...options, id };
    toasts = [newToast, ...toasts].slice(0, 5); // Keep last 5
    notify();

    if (options.duration !== 0) {
      setTimeout(() => {
        toast.dismiss(id);
      }, options.duration || 5000);
    }
    return id;
  },
  dismiss: (id: string) => {
    toasts = toasts.filter((t) => t.id !== id);
    notify();
  },
  // Shorthands for convenience
  gift: (data: { coins: number; username: string }) =>
    toast.show({
      type: "gift",
      title: "Gift Sent!",
      description: `You successfully sent ${data.coins} Coins to @${data.username}.`,
    }),
  follow: (username: string) =>
    toast.show({
      type: "follow",
      title: "New Connection!",
      description: `You are now following @${username}.`,
    }),
  like: (username: string) =>
    toast.show({
      type: "like",
      title: "Liked a post",
      description: `You liked @${username}'s new post.`,
    }),
};

export const useToast = () => {
  const [currentToasts, setCurrentToasts] = useState<ToastOptions[]>(toasts);

  useEffect(() => {
    const observer = (newToasts: ToastOptions[]) => {
      setCurrentToasts(newToasts);
    };
    observers.push(observer);
    return () => {
      const index = observers.indexOf(observer);
      if (index > -1) observers.splice(index, 1);
    };
  }, []);

  return { toasts: currentToasts, dismiss: toast.dismiss };
};
