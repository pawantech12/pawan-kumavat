"use client";

export default function SectionLoader({ text = "Fetching data..." }) {
  return (
    <div className="w-full py-16 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        {/* Minimal inline loader */}
        <div className="relative flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-blue-600 animate-bounce [animation-delay:-0.2s]" />
          <span className="h-2 w-2 rounded-full bg-indigo-500 animate-bounce [animation-delay:-0.1s]" />
          <span className="h-2 w-2 rounded-full bg-purple-500 animate-bounce" />
        </div>

        {/* Terminal-style text */}
        <p className="text-base font-mono text-slate-500 dark:text-slate-400">
          <span className="text-blue-600">{">_"}</span> {text}
        </p>
      </div>
    </div>
  );
}
