import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useVibe } from "@/contexts/VibeContext";
import { Button } from "@/components/ui/button";
import { VibeCard } from "@/components/VibeCard";
import { ArrowRight, Layers, ShoppingBag, Heart } from "lucide-react";

export default function Index() {
  const { user, isGuest } = useAuth();
  const { vibeProfile, onboardingComplete, favorites, swipeCount } = useVibe();
  const navigate = useNavigate();

  const name = user ? user.email?.split("@")[0] : "Explorer";

  return (
    <div className="p-6 max-w-lg mx-auto space-y-6">
      {/* Header */}
      <div className="pt-4 md:pt-0">
        <p className="font-mono text-[10px] text-muted-foreground tracking-[0.3em] mb-1">
          {new Date().toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" }).toUpperCase()}
        </p>
        <h1 className="text-2xl font-semibold">Hey, {name}.</h1>
      </div>

      {/* Vibe Card or CTA */}
      {vibeProfile ? (
        <VibeCard />
      ) : (
        <div className="border rounded-lg p-6 space-y-3">
          <p className="font-mono text-[10px] text-muted-foreground tracking-[0.3em]">GET STARTED</p>
          <p className="text-sm">Swipe through items to decode your fashion DNA and generate your unique Vibe Profile.</p>
          <Button
            onClick={() => navigate(onboardingComplete ? "/swipe" : "/onboarding")}
            className="w-full justify-between"
          >
            {onboardingComplete ? "Continue Swiping" : "Start Your Vibe Check"} <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      )}

      {/* Quick links */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { icon: Layers, label: "Swipe", to: onboardingComplete ? "/swipe" : "/onboarding", count: swipeCount },
          { icon: ShoppingBag, label: "Shop", to: "/shop", count: null },
          { icon: Heart, label: "Vault", to: "/favorites", count: favorites.length },
        ].map((link) => (
          <button
            key={link.label}
            onClick={() => navigate(link.to)}
            className="border rounded-lg p-4 flex flex-col items-center gap-2 hover:bg-secondary transition-colors"
          >
            <link.icon className="w-5 h-5 text-muted-foreground" />
            <span className="font-mono text-[10px] tracking-wider">{link.label.toUpperCase()}</span>
            {link.count !== null && (
              <span className="font-mono text-lg font-semibold">{link.count}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
