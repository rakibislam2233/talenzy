import logo from "@/assets/logo/talenzy.png";
import Image from "next/image";

export default function BrandLogo({
  size = 40,
  withText = true,
  showTagline = false,
  className = "",
}: {
  size?: number;
  withText?: boolean;
  showTagline?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`.trim()}>
      <Image
        src={logo}
        alt="Talenzy logo"
        width={size}
        height={size}
        className="rounded-xl object-contain"
        priority={false}
      />

      {withText && (
        <div className="flex flex-col leading-tight">
          <span className="text-xl font-bold tracking-tight text-foreground">Talenzy</span>
          {showTagline && (
            <span className="text-xs font-medium text-muted-foreground">Unleash Your Potential</span>
          )}
        </div>
      )}
    </div>
  );
}
