import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SwipeCard } from "@/components/SwipeCard";
import { VibeCard } from "@/components/VibeCard";
import { useVibe } from "@/contexts/VibeContext";
import { useAuth } from "@/contexts/AuthContext";
import { styleItems } from "@/data/items";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const GUEST_LIMIT = 5;

export default function SwipePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showProfile, setShowProfile] = useState(false);
  const { addFavorite, incrementSwipe, swipeCount, generateProfile, vibeProfile } = useVibe();
  const { isGuest, user } = useAuth();
  const navigate = useNavigate();

  const guestLocked = isGuest && !user && swipeCount >= GUEST_LIMIT;

  const handleSwipe = (dir: "left" | "right") => {
    if (dir === "right") addFavorite(styleItems[currentIndex]);
    incrementSwipe();
    if (currentIndex + 1 >= styleItems.length || (isGuest && !user && swipeCount + 1 >= GUEST_LIMIT)) {
      generateProfile();
      setShowProfile(true);
    } else {
      setCurrentIndex((i) => i + 1);
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

  if (showProfile) {
    return (
      <div className="max-w-sm mx-auto p-6 space-y-6">
        <div>
          <p className="font-mono text-[10px] text-muted-foreground tracking-[0.3em] mb-1">ANALYSIS COMPLETE</p>
          <h2 className="text-2xl font-semibold">Your Vibe Profile</h2>
        </div>
        <VibeCard />
        <Button onClick={() => navigate("/shop")} className="w-full justify-between">
          Shop Your Vibe <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-6">
      <div className="w-full max-w-sm mb-4 flex items-center justify-between">
        <p className="font-mono text-[10px] text-muted-foreground tracking-wider">
          {currentIndex + 1} / {styleItems.length}
        </p>
        <p className="font-mono text-[10px] text-muted-foreground tracking-wider">
          {isGuest && !user ? `${GUEST_LIMIT - swipeCount} LEFT` : "SWIPE"}
        </p>
      </div>
      <div className="relative w-full max-w-sm" style={{ height: "480px" }}>
        {styleItems.slice(currentIndex, currentIndex + 2).reverse().map((item, i, arr) => (
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
