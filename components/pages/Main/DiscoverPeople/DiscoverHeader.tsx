export default function DiscoverHeader() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl tracking-tight text-foreground sm:text-3xl">
        Discover <span className="text-primary">Talent</span>
      </h1>
      <p className="text-sm text-muted-foreground sm:text-base">
        Connect with creators and professionals across the globe.
      </p>
    </div>
  );
}