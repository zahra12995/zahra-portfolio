// Pure CSS animated gradient blobs — no canvas, no JS, GPU-only transforms.
// Safe to mount anywhere; respects prefers-reduced-motion via globals.css.
export function GradientBlobBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="animate-blob absolute -left-24 -top-24 h-72 w-72 rounded-full bg-teal-400/30 blur-3xl dark:bg-teal-500/20 sm:h-96 sm:w-96" />
      <div className="animate-blob-slow absolute -right-16 top-24 h-80 w-80 rounded-full bg-purple-400/30 blur-3xl dark:bg-purple-500/20 sm:h-[26rem] sm:w-[26rem]" />
      <div className="animate-blob-reverse absolute bottom-[-6rem] left-1/3 h-72 w-72 rounded-full bg-emerald-400/25 blur-3xl dark:bg-emerald-500/15 sm:h-96 sm:w-96" />
    </div>
  );
}
