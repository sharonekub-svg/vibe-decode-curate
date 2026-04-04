import { useVibe } from "@/contexts/VibeContext";
import { Fingerprint } from "lucide-react";

export function VibeCard() {
  const { vibeProfile } = useVibe();
  if (!vibeProfile) return null;

  return (
    <div className="border rounded-lg p-6 bg-card animate-fade-up">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-sm bg-primary flex items-center justify-center">
          <Fingerprint className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <p className="font-mono text-[10px] text-muted-foreground tracking-widest">YOUR VIBE</p>
          <h3 className="text-lg font-semibold leading-tight">{vibeProfile.name}</h3>
        </div>
      </div>
      <div className="space-y-3">
        <div>
          <p className="font-mono text-[10px] text-muted-foreground tracking-wider mb-1.5">AESTHETICS</p>
          <div className="flex flex-wrap gap-1.5">
            {Object.entries(vibeProfile.aesthetics).map(([key, val]) => (
              <span key={key} className="font-mono text-[10px] px-2 py-1 rounded-sm bg-secondary">
                {key} <span className="text-muted-foreground">×{val}</span>
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="font-mono text-[10px] text-muted-foreground tracking-wider mb-1.5">FIT PREFERENCE</p>
          <div className="flex flex-wrap gap-1.5">
            {Object.entries(vibeProfile.fits).map(([key, val]) => (
              <span key={key} className="font-mono text-[10px] px-2 py-1 rounded-sm bg-secondary">
                {key} <span className="text-muted-foreground">×{val}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
