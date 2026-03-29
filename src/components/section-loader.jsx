"use client";

export default function SectionLoader({ text = "Loading content..." }) {
  return (
    <div className="w-full py-20 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Gradient Spinner */}
        <div className="relative flex items-center justify-center">
          <div className="h-14 w-14 rounded-full border-[3px] border-neutral-200"></div>

          <div
            className="absolute h-14 w-14 rounded-full border-[3px]
            border-transparent border-t-blue-600 border-r-indigo-500
            animate-spin"
          />

          {/* Inner Glow */}
          <div className="absolute h-6 w-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-500 blur-md opacity-60"></div>
        </div>

        {/* Loading Text */}
        <p className="text-sm sm:text-base text-neutral-500 font-medium tracking-wide">
          {text}
        </p>
      </div>
    </div>
  );
}
