type MediaToolButtonProps = {
  icon: React.ElementType;
  tooltip: string;
  onClick: () => void;
};

export default function MediaToolButton({
  icon: Icon,
  tooltip,
  onClick,
}: MediaToolButtonProps) {
  return (
    <button
      onClick={onClick}
      className="p-3 bg-black/40 hover:bg-black/60 rounded-full z-10 text-white backdrop-blur-md transition-all group relative hover:scale-110"
    >
      <Icon className="h-5 w-5" />
      <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-black/80 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
        {tooltip}
      </span>
    </button>
  );
}
