import { useState } from "react";
import { useVibe } from "@/contexts/VibeContext";
import { styleItems } from "@/data/items";
import { Share2 } from "lucide-react";

const categories = ["All", "Tops", "Bottoms", "Kicks", "Accessories", "Outerwear"];
const budgets = [
  { label: "$", max: 50 },
  { label: "$$", max: 100 },
  { label: "$$$", max: 200 },
  { label: "$$$$", max: Infinity },
];

export default function ShopPage() {
  const [category, setCategory] = useState("All");
  const [budgetIdx, setBudgetIdx] = useState(3);
  const { vibeProfile } = useVibe();

  const filtered = styleItems.filter((item) => {
    const catMatch = category === "All" || item.category === category.toLowerCase();
    const budgetMatch = item.price <= budgets[budgetIdx].max;
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

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <p className="font-mono text-[10px] text-muted-foreground tracking-[0.3em] mb-1">CURATED FOR YOU</p>
        <h2 className="text-2xl font-semibold">
          {vibeProfile ? `${vibeProfile.name}'s Shop` : "VIBE Shop"}
        </h2>
      </div>

      {/* Budget */}
      <div className="flex gap-2 mb-4">
        {budgets.map((b, i) => (
          <button
            key={b.label}
            onClick={() => setBudgetIdx(i)}
            className={`font-mono text-xs px-3 py-1.5 rounded-sm border transition-colors ${
              budgetIdx === i ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
            }`}
          >
            {b.label}
          </button>
        ))}
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
            <div className="aspect-[4/5] overflow-hidden">
              <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
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
      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground text-sm mt-12">No items match your filters.</p>
      )}
    </div>
  );
}
