import Link from "next/link";

export default function LoginRememberRow() {
  return (
    <div className="flex items-center justify-between text-sm">
      <label className="flex items-center gap-2 cursor-pointer group">
        <div className="w-4 h-4 rounded border border-border bg-background group-hover:border-primary transition-colors flex items-center justify-center" />
        <span className="text-muted-foreground group-hover:text-foreground/80">Remember me</span>
      </label>
      <Link
        href="/auth/forgot-password"
        className="text-primary hover:text-primary/80 font-medium transition-colors"
      >
        Forgot Password?
      </Link>
    </div>
  );
}
