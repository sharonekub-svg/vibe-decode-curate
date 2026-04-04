import { useAuth } from "@/contexts/AuthContext";
import { useVibe } from "@/contexts/VibeContext";
import { VibeCard } from "@/components/VibeCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LogOut, ArrowRight, User } from "lucide-react";

export default function ProfilePage() {
  const { user, isGuest, signOut } = useAuth();
  const { vibeProfile, favorites, swipeCount } = useVibe();
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-sm mx-auto space-y-6">
      <div>
        <p className="font-mono text-[10px] text-muted-foreground tracking-[0.3em] mb-1">PROFILE</p>
        <h2 className="text-2xl font-semibold">
          {user ? user.email?.split("@")[0] : "Guest"}
        </h2>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="border rounded-lg p-4">
          <p className="font-mono text-2xl font-semibold">{swipeCount}</p>
          <p className="font-mono text-[10px] text-muted-foreground tracking-wider">SWIPES</p>
        </div>
        <div className="border rounded-lg p-4">
          <p className="font-mono text-2xl font-semibold">{favorites.length}</p>
          <p className="font-mono text-[10px] text-muted-foreground tracking-wider">FAVORITES</p>
        </div>
      </div>

      {vibeProfile && <VibeCard />}

      {isGuest && !user && (
        <div className="border rounded-lg p-4 space-y-3">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-muted-foreground" />
            <p className="text-sm">Create an account to save your profile</p>
          </div>
          <Button onClick={() => navigate("/welcome")} variant="outline" className="w-full justify-between">
            Sign Up <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      )}

      {user && (
        <Button onClick={signOut} variant="outline" className="w-full">
          <LogOut className="w-4 h-4 mr-2" /> Sign Out
        </Button>
      )}
    </div>
  );
}
