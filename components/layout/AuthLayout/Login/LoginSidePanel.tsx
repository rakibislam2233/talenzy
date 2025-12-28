export default function LoginSidePanel() {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold text-white leading-tight">
          Unleash Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
            Inner Talent.
          </span>
        </h1>
        <p className="text-lg text-white/70 max-w-md">
          Connect, Share, Monetize. Join the ultimate platform for creators who
          want more than just likes.
        </p>
      </div>

      <div className="mt-12 relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
        {/* Placeholder for the Camera Lens Image - Using a gradient/color block or available image if any */}
        {/* Since I don't have the exact image, I'll use a placeholder div that looks stylish */}
        <div className="h-64 bg-black relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border-4 border-[#3a0d5c] relative flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border-2 border-white/20 animate-pulse" />
              {/* "Camera Lens" effect using CSS radial gradients would be complex, simplified for now */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
            </div>
          </div>
          {/* Simulating the lens reflection */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
        </div>

        {/* Bottom overlay with avatars */}
        <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-white/10 backdrop-blur-md p-2 rounded-full pr-6 border border-white/10">
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-black bg-gray-400"
              />
            ))}
          </div>
          <span className="text-xs text-white font-medium">
            +2k Creators joined today
          </span>
        </div>
      </div>
    </div>
  );
}
