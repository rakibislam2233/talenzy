import { Clock } from "lucide-react";

type VerifyOtpResendInfoProps = {
  resendTimer: number;
  onResend: () => void;
};

export default function VerifyOtpResendInfo({
  resendTimer,
  onResend,
}: VerifyOtpResendInfoProps) {
  return (
    <div className="space-y-3">
      <p className="text-muted-foreground text-sm text-center">Didn&apos;t receive the code?</p>
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <Clock className="h-4 w-4" />
          <span>
            Resend in <span className="font-semibold text-foreground">00:{String(resendTimer).padStart(2, "0")}</span>
          </span>
        </div>
        <button
          type="button"
          className="text-primary text-sm hover:underline cursor-pointer"
          onClick={onResend}
        >
          Resend Code
        </button>
      </div>
    </div>
  );
}
