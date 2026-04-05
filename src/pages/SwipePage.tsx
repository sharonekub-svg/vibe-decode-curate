import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { SwipeCard } from "@/components/SwipeCard";
import { VibeCard } from "@/components/VibeCard";
import { useVibe } from "@/contexts/VibeContext";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const DISCOVERY_LIMIT = 30;
const GUEST_LIMIT = 5;

export default function SwipePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showProfile, setShowProfile] = useState(false);
  const {
    addFavorite, incrementSwipe, swipeCount,
    generateProfile, vibeProfile,
    isRefining, stopRefining,
    getDiscoveryItems, getRefineItems,
    setDiscoveryComplete, discoveryComplete,
  } = useVibe();
  const { isGuest, user } = useAuth();
  const navigate = useNavigate();

  // Get items based on mode (discovery vs refining)
  const items = useMemo(() => {
    if (isRefining) return getRefineItems();
    return getDiscoveryItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRefining]);

  const limit = isGuest && !user ? GUEST_LIMIT : (isRefining ? items.length : DISCOVERY_LIMIT);
  const localSwipes = currentIndex;
  const guestLocked = isGuest && !user && localSwipes >= GUEST_LIMIT;

  const handleSwipe = (dir: "left" | "right") => {
    if (dir === "right" && items[currentIndex]) {
      addFavorite(items[currentIndex]);
    }
    incrementSwipe();

    const nextIndex = currentIndex + 1;
    if (nextIndex >= items.length || nextIndex >= limit) {
      generateProfile();
      if (isRefining) {
        stopRefining();
        navigate("/");
      } else {
        setDiscoveryComplete(true);
        setShowProfile(true);
      }
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  if (guestLocked && !showProfile) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] p-6 text-center">
        <p className="font-mono text-xs text-muted-foreground tracking-wider mb-2">GUEST LIMIT REACHED</p>
        <h2 className="text-2xl font-semibold mb-2">Sign up to keep swiping</h2>
        <p className="text-sm text-muted-foreground mb-6">Create a free account to unlock unlimited swipes and save your Vibe Profile.</p>
        <Button onClick={() => navigate("/welcome")} className="justify-between gap-3">
          Create Account <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    );
  }

  if (showProfile && !isRefining) {
    return (
      <div className="max-w-sm mx-auto p-6 space-y-6">
        <div>
          <p className="font-mono text-[10px] text-muted-foreground tracking-[0.3em] mb-1">ANALYSIS COMPLETE</p>
          <h2 className="text-2xl font-semibold">Your Vibe Profile</h2>
        </div>
        <VibeCard />
        <Button onClick={() => navigate("/")} className="w-full justify-between">
          See Your Recommendations <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-6">
      <div className="w-full max-w-sm mb-4 flex items-center justify-between">
        <p className="font-mono text-[10px] text-muted-foreground tracking-wider">
          {isRefining ? "REFINING YOUR TASTE" : "DISCOVERING YOUR VIBE"}
        </p>
        <p className="font-mono text-[10px] text-muted-foreground tracking-wider">
          {isGuest && !user ? `${Math.max(0, GUEST_LIMIT - localSwipes)} LEFT` : "SWIPE"}
        </p>
      </div>
      <div className="relative w-full max-w-sm" style={{ height: "480px" }}>
        {items.slice(currentIndex, currentIndex + 2).reverse().map((item, i, arr) => (
          <SwipeCard
            key={item.id}
            item={item}
            isTop={i === arr.length - 1}
            onSwipeRight={() => handleSwipe("right")}
            onSwipeLeft={() => handleSwipe("left")}
          />
        ))}
      </div>
    </div>
  );
}
