import { StatusBadge } from "./types";

type StatusPillProps = {
  badge: StatusBadge;
};

export default function StatusPill({ badge }: StatusPillProps) {
  return (
    <span className={`${badge.color} rounded px-2 py-0.5 text-[10px] uppercase`}>
      {badge.text}
    </span>
  );
}
