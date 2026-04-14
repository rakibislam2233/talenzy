import { FileText, Lock } from "lucide-react";

export default function VerifyIdentificationSection() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-[#9419e6]" />
          <h3 className="font-semibold text-white">Identification Document</h3>
        </div>
        <div className="flex items-center gap-2">
          <Lock className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-400">Encrypted & Secure</span>
        </div>
      </div>

      <p className="mb-4 text-sm text-gray-400">
        Please upload a clear photo of your government-issued ID (Passport, Driver&apos;s License, or National ID).
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="cursor-pointer rounded-lg border-2 border-dashed border-[#4a3c53] p-6 text-center transition-colors hover:border-[#9419e6]">
          <FileText className="mx-auto mb-2 h-8 w-8 text-[#9419e6]" />
          <p className="mb-1 text-sm font-medium text-white">Front of ID</p>
          <p className="text-xs text-gray-400">SVG, PNG, JPG or GIF</p>
        </div>

        <div className="cursor-pointer rounded-lg border-2 border-dashed border-[#4a3c53] p-6 text-center transition-colors hover:border-[#9419e6]">
          <FileText className="mx-auto mb-2 h-8 w-8 text-[#9419e6]" />
          <p className="mb-1 text-sm font-medium text-white">Back of ID</p>
          <p className="text-xs text-gray-400">Required for cards</p>
        </div>
      </div>
    </div>
  );
}
