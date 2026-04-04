import { useState } from "react";
import { useVibe } from "@/contexts/VibeContext";
import { styleItems } from "@/data/items";
import { Share2, ExternalLink } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const categories = ["All", "Tops", "Bottoms", "Kicks", "Accessories", "Outerwear"];
const priceSteps = [25, 50, 100, 150, 200, 500];

export default function ShopPage() {
  const [category, setCategory] = useState("All");
  const [priceIdx, setPriceIdx] = useState(priceSteps.length - 1);
  const { vibeProfile } = useVibe();

  const maxPrice = priceSteps[priceIdx];

  const filtered = styleItems.filter((item) => {
    const catMatch = category === "All" || item.category === category.toLowerCase();
    const budgetMatch = item.price <= maxPrice;
    return catMatch && budgetMatch;
  });

  const handleShare = (item: typeof styleItems[0]) => {
    const text = `Check out this ${item.name} by ${item.brand} — $${item.price}`;
    if (navigator.share) {
      navigator.share({ title: "VIBE", text });
    } else {
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
    }
  };

  const handleShopNow = (item: typeof styleItems[0]) => {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(`${item.brand} ${item.name} buy`)}`, "_blank");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <p className="font-mono text-[10px] text-muted-foreground tracking-[0.3em] mb-1">CURATED FOR YOU</p>
        <h2 className="text-2xl font-semibold">
          {vibeProfile ? `${vibeProfile.name}'s Shop` : "VIBE Shop"}
        </h2>
      </div>

      {/* Budget slider */}
      <div className="mb-4 space-y-2">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[10px] tracking-wider text-muted-foreground">BUDGET</p>
          <p className="font-mono text-sm font-medium">Under ${maxPrice}</p>
        </div>
        <Slider
          value={[priceIdx]}
          onValueChange={([v]) => setPriceIdx(v)}
          min={0}
          max={priceSteps.length - 1}
          step={1}
        />
        <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
          <span>${priceSteps[0]}</span>
          <span>${priceSteps[priceSteps.length - 1]}</span>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-2 mb-6 overflow-x-auto">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`font-mono text-[10px] tracking-wider px-3 py-1.5 rounded-sm border whitespace-nowrap transition-colors ${
              category === c ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
            }`}
          >
            {c.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {filtered.map((item) => (
          <div key={item.id} className="border rounded-lg overflow-hidden bg-card group">
            <div className="aspect-[4/5] overflow-hidden relative">
              <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              {/* Shop Now overlay */}
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button size="sm" className="gap-1.5" onClick={() => handleShopNow(item)}>
                  <ExternalLink className="w-3.5 h-3.5" /> Shop Now
                </Button>
              </div>
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
                  <button onClick={() => handleShopNow(item)} className="text-muted-foreground hover:text-foreground transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground text-sm mt-12">No items match your filters.</p>
      )}
    </div>
  );
}
