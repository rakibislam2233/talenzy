import { CheckCircle2 } from "lucide-react";

export default function VerifyHeader() {
  return (
    <div className="mb-8 text-center">
      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#9419e6]">
        <CheckCircle2 className="h-10 w-10 text-white" />
      </div>
      <h1 className="mb-2 text-2xl font-bold text-white sm:text-4xl">
        Get Verified on Talenzy
      </h1>
      <p className="text-sm text-gray-400 sm:text-lg">
        Unlock exclusive monetization features, increased visibility, and build trust with your audience. Join the elite circle of Talenzy creators.
      </p>
    </div>
  );
}
