import { ArrowLeft, Compass } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-30 blur-[130px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.4), rgba(59, 130, 246, 0.3) 50%, transparent 70%)",
        }}
      />

      <Container size="narrow">
        <div className="text-center relative z-10 flex flex-col items-center">
          <div className="p-4 rounded-2xl bg-zinc-900/80 border border-purple-500/30 text-purple-400 mb-6 shadow-2xl">
            <Compass className="w-10 h-10 animate-spin" style={{ animationDuration: "12s" }} />
          </div>

          <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300 mb-4">
            404 Error • Page Not Found
          </span>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4">
            Lost in the{" "}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
              Digital Space.
            </span>
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
            The page you are looking for doesn&apos;t exist, has been moved, or is temporarily unavailable. Let&apos;s get you back to familiar territory.
          </p>

          <Button
            variant="primary"
            size="lg"
            href="/"
            icon={<ArrowLeft className="w-4 h-4" />}
            iconPosition="left"
          >
            Return to Portfolio
          </Button>
        </div>
      </Container>
    </div>
  );
}
