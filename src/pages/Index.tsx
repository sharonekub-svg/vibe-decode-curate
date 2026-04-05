import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useVibe } from "@/contexts/VibeContext";
import { Button } from "@/components/ui/button";
import { VibeCard } from "@/components/VibeCard";
import { ArrowRight, Layers, ShoppingBag, Heart, RefreshCw, Sparkles } from "lucide-react";

const categoryLabels: Record<string, string> = {
  tops: "Tops",
  bottoms: "Bottoms",
  dresses: "Dresses",
  outerwear: "Outerwear",
  kicks: "Shoes",
  accessories: "Accessories",
};

export default function Index() {
  const { user, isGuest } = useAuth();
  const {
    vibeProfile, onboardingComplete, favorites, swipeCount,
    discoveryComplete, startRefining, getRecommendedItems,
  } = useVibe();
  const navigate = useNavigate();

  const name = user ? user.email?.split("@")[0] : "Explorer";
  const recommended = useMemo(() => getRecommendedItems(), [favorites, vibeProfile]);

  // Group recommended by category
  const byCategory = useMemo(() => {
    const map: Record<string, typeof recommended> = {};
    recommended.forEach((item) => {
      if (!map[item.category]) map[item.category] = [];
      map[item.category].push(item);
    });
    return map;
  }, [recommended]);

  const handleRefine = () => {
    startRefining();
    navigate("/swipe");
  };

  return (
    <div className="p-6 max-w-lg mx-auto space-y-6 pb-24">
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
          <p className="text-sm">Swipe through 30 items to decode your fashion DNA and generate your unique Vibe Profile.</p>
          <Button
            onClick={() => navigate(onboardingComplete ? "/swipe" : "/onboarding")}
            className="w-full justify-between"
          >
            {onboardingComplete ? "Continue Swiping" : "Start Your Vibe Check"} <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      )}

      {/* Refine Taste CTA */}
      {discoveryComplete && (
        <button
          onClick={handleRefine}
          className="w-full border rounded-lg p-4 flex items-center gap-3 hover:bg-secondary transition-colors"
        >
          <RefreshCw className="w-5 h-5 text-muted-foreground" />
          <div className="text-left flex-1">
            <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">REFINE</p>
            <p className="text-sm font-medium">Sharpen Your Taste</p>
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground" />
        </button>
      )}

      {/* Recommended Items by Category */}
      {discoveryComplete && Object.keys(byCategory).length > 0 && (
        <div className="space-y-6">
          <div>
            <p className="font-mono text-[10px] text-muted-foreground tracking-[0.3em] mb-1">FOR YOU</p>
            <h2 className="text-lg font-semibold">Based on Your Vibe</h2>
          </div>

          {Object.entries(byCategory).map(([cat, items]) => (
            <div key={cat}>
              <div className="flex items-center justify-between mb-3">
                <p className="font-mono text-xs tracking-wider font-medium">
                  {categoryLabels[cat] || cat.toUpperCase()}
                </p>
                <button
                  onClick={() => navigate("/shop")}
                  className="font-mono text-[10px] text-muted-foreground tracking-wider hover:text-foreground transition-colors"
                >
                  VIEW ALL →
                </button>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
                {items.slice(0, 6).map((item) => (
                  <div
                    key={item.id}
                    className="flex-shrink-0 w-36 border rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => window.open(item.affiliateUrl, "_blank")}
                  >
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-2">
                      <p className="font-mono text-[9px] text-muted-foreground tracking-wider">{item.brand}</p>
                      <p className="text-xs font-medium truncate">{item.name}</p>
                      <p className="font-mono text-xs mt-0.5">${item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
