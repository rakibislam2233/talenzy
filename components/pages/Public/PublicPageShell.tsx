import BrandLogo from "@/components/BrandLogo";
import Link from "next/link";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/help", label: "Help" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function PublicPageShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_10%_10%,hsl(var(--primary)/0.15),transparent_28%),radial-gradient(circle_at_90%_0%,hsl(var(--primary)/0.08),transparent_24%),linear-gradient(180deg,hsl(var(--background)),hsl(var(--background)))] text-foreground">
      <header className="sticky top-0 z-20 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="block">
            <BrandLogo size={36} withText className="cursor-pointer" />
          </Link>
          <nav className="flex items-center gap-4 text-sm text-muted-foreground">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
        <div className="mb-8 max-w-3xl">
          <h1 className="text-3xl font-bold leading-tight sm:text-5xl">{title}</h1>
          <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
            {subtitle}
          </p>
        </div>

        <section className="rounded-3xl border border-border/80 bg-card/85 p-5 shadow-sm sm:p-8">
          {children}
        </section>
      </main>

      <footer className="border-t border-border/70 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 text-xs text-muted-foreground sm:px-6">
          <span>© 2026 Talenzy. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
            <Link href="/help" className="hover:text-foreground">
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
