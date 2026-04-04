import { useAuth } from "@/contexts/AuthContext";
import { useVibe } from "@/contexts/VibeContext";
import { VibeCard } from "@/components/VibeCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LogOut, ArrowRight, User, Crown, Sparkles, Zap } from "lucide-react";

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

      {/* Moodboard preview */}
      {favorites.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="font-mono text-[10px] text-muted-foreground tracking-wider">MOODBOARD</p>
            <button onClick={() => navigate("/favorites")} className="font-mono text-[10px] text-muted-foreground hover:text-foreground transition-colors">
              VIEW ALL →
            </button>
          </div>
          <div className="grid grid-cols-3 gap-1.5 rounded-lg overflow-hidden">
            {favorites.slice(0, 6).map((item, i) => (
              <div key={`${item.id}-${i}`} className="aspect-square overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pro Teaser */}
      <div className="border border-primary/20 rounded-lg p-5 bg-primary/5 space-y-3">
        <div className="flex items-center gap-2">
          <Crown className="w-5 h-5 text-primary" />
          <p className="font-mono text-xs font-semibold tracking-wider">VIBE PRO</p>
        </div>
        <p className="text-sm text-muted-foreground">Unlock the full experience.</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>AI-powered style recommendations</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Zap className="w-3.5 h-3.5 text-primary" />
            <span>Unlimited swipes & collections</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Crown className="w-3.5 h-3.5 text-primary" />
            <span>Exclusive drops & early access</span>
          </div>
        </div>
        <Button variant="outline" className="w-full mt-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground">
          Coming Soon
        </Button>
      </div>

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
