export function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Top ambient radial gradient glows */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] opacity-35 dark:opacity-40 blur-[130px] rounded-full transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.35), rgba(59, 130, 246, 0.25) 45%, transparent 70%)",
        }}
      />

      {/* Subtle top right purple accent */}
      <div
        className="absolute top-20 right-[-10%] w-[500px] h-[450px] opacity-20 dark:opacity-25 blur-[120px] rounded-full transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.3), transparent 70%)",
        }}
      />

      {/* Subtle bottom left blue accent */}
      <div
        className="absolute top-[450px] left-[-10%] w-[500px] h-[450px] opacity-15 dark:opacity-20 blur-[120px] rounded-full transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.25), transparent 70%)",
        }}
      />

      {/* Subtle modern engineering grid texture */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 20%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 20%, black 40%, transparent 100%)",
        }}
      />
    </div>
  );
}
