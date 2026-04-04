import { useVibe } from "@/contexts/VibeContext";
import { Share2, Heart, ExternalLink, Grid, LayoutGrid } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function FavoritesPage() {
  const { favorites } = useVibe();
  const [viewMode, setViewMode] = useState<"grid" | "moodboard">("grid");

  const handleShare = (item: typeof favorites[0]) => {
    const text = `Check out this ${item.name} by ${item.brand} — $${item.price}`;
    if (navigator.share) {
      navigator.share({ title: "VIBE", text });
    } else {
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="font-mono text-[10px] text-muted-foreground tracking-[0.3em] mb-1">THE VAULT</p>
          <h2 className="text-2xl font-semibold">Your Favorites</h2>
        </div>
        {favorites.length > 0 && (
          <div className="flex gap-1 border rounded-lg p-0.5">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-1.5 rounded transition-colors ${viewMode === "grid" ? "bg-secondary" : "hover:bg-secondary/50"}`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("moodboard")}
              className={`p-1.5 rounded transition-colors ${viewMode === "moodboard" ? "bg-secondary" : "hover:bg-secondary/50"}`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {favorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
          <Heart className="w-8 h-8 text-muted-foreground mb-3" />
          <p className="text-sm text-muted-foreground">Items you vibe will appear here.</p>
        </div>
      ) : viewMode === "moodboard" ? (
        /* Moodboard collage view */
        <div className="columns-2 md:columns-3 gap-3 space-y-3">
          {favorites.map((item, i) => (
            <div key={`${item.id}-${i}`} className="break-inside-avoid rounded-lg overflow-hidden border bg-card group relative">
              <img src={item.image} alt={item.name} loading="lazy" className="w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                <p className="font-mono text-[10px] text-muted-foreground tracking-wider">{item.brand}</p>
                <p className="text-sm font-medium">{item.name}</p>
                <div className="flex gap-2 mt-2">
                  <Button size="sm" variant="secondary" className="h-7 text-xs gap-1" onClick={() => handleShare(item)}>
                    <Share2 className="w-3 h-3" /> Share
                  </Button>
                  <Button
                    size="sm"
                    className="h-7 text-xs gap-1"
                    onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(`${item.brand} ${item.name} buy`)}`, "_blank")}
                  >
                    <ExternalLink className="w-3 h-3" /> Shop Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Standard grid view */
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {favorites.map((item, i) => (
            <div key={`${item.id}-${i}`} className="border rounded-lg overflow-hidden bg-card group">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-3 border-t">
                <p className="font-mono text-[10px] text-muted-foreground tracking-wider">{item.brand}</p>
                <p className="text-sm font-medium mt-0.5">{item.name}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-mono text-sm">${item.price}</span>
                  <div className="flex gap-2">
                    <button onClick={() => handleShare(item)} className="text-muted-foreground hover:text-foreground transition-colors">
                      <Share2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(`${item.brand} ${item.name} buy`)}`, "_blank")}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
