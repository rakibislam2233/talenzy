export default function CreatePostAuthorHeader() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-linear-to-br from-primary to-purple-400 p-0.5">
        <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-foreground font-bold text-xs md:text-sm">
          AT
        </div>
      </div>
      <div>
        <h4 className="text-foreground font-bold text-sm md:text-base">Alex Talent</h4>
        <p className="text-gray-400 text-xs md:text-sm">Creator</p>
      </div>
    </div>
  );
}
