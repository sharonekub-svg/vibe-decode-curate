import { useVibe } from "@/contexts/VibeContext";
import { Share2, Heart } from "lucide-react";

export default function FavoritesPage() {
  const { favorites } = useVibe();

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
      <div className="mb-6">
        <p className="font-mono text-[10px] text-muted-foreground tracking-[0.3em] mb-1">THE VAULT</p>
        <h2 className="text-2xl font-semibold">Your Favorites</h2>
      </div>
      {favorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
          <Heart className="w-8 h-8 text-muted-foreground mb-3" />
          <p className="text-sm text-muted-foreground">Items you vibe will appear here.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {favorites.map((item, i) => (
            <div key={`${item.id}-${i}`} className="border rounded-lg overflow-hidden bg-card">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="p-3 border-t">
                <p className="font-mono text-[10px] text-muted-foreground tracking-wider">{item.brand}</p>
                <p className="text-sm font-medium mt-0.5">{item.name}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-mono text-sm">${item.price}</span>
                  <button onClick={() => handleShare(item)} className="text-muted-foreground hover:text-foreground transition-colors">
                    <Share2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
