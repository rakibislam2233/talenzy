import { Camera } from "lucide-react";

export default function VerifySelfieSection() {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <Camera className="h-5 w-5 text-[#9419e6]" />
        <h3 className="font-semibold text-white">Selfie Verification</h3>
      </div>
      <p className="mb-4 text-sm text-gray-400">
        Take a selfie holding your ID card next to your face. Make sure details are legible.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex-1 cursor-pointer rounded-lg border-2 border-dashed border-[#4a3c53] p-8 text-center transition-colors hover:border-[#9419e6]">
          <Camera className="mx-auto mb-2 h-10 w-10 text-[#9419e6]" />
          <p className="text-sm font-medium text-white">Upload Selfie</p>
        </div>
        <div className="flex h-32 w-full items-center justify-center rounded-lg bg-[#2a2330] sm:w-32">
          <span className="text-xs text-gray-400">Example</span>
        </div>
      </div>
    </div>
  );
}
