export default function Loading() {
  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-purple-500/20" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-purple-500 animate-spin" />
        </div>
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
          Loading Portfolio...
        </span>
      </div>
    </div>
  );
}
