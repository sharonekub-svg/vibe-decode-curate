import { useState, useRef } from "react";
import { StyleItem } from "@/data/items";
import { Heart, X, ThumbsUp, ThumbsDown } from "lucide-react";

interface SwipeCardProps {
  item: StyleItem;
  onSwipeRight: () => void;
  onSwipeLeft: () => void;
  isTop: boolean;
}

export function SwipeCard({ item, onSwipeRight, onSwipeLeft, isTop }: SwipeCardProps) {
  const [offset, setOffset] = useState(0);
  const [swiping, setSwiping] = useState(false);
  const [animClass, setAnimClass] = useState("");
  const startX = useRef(0);
  const dragging = useRef(false);

  const handleStart = (x: number) => {
    if (!isTop) return;
    startX.current = x;
    dragging.current = true;
    setSwiping(true);
  };
  const handleMove = (x: number) => {
    if (!dragging.current) return;
    setOffset(x - startX.current);
  };
  const handleEnd = () => {
    if (!dragging.current) return;
    dragging.current = false;
    setSwiping(false);
    if (offset > 100) {
      setAnimClass("animate-swipe-right");
      setTimeout(onSwipeRight, 350);
    } else if (offset < -100) {
      setAnimClass("animate-swipe-left");
      setTimeout(onSwipeLeft, 350);
    } else {
      setOffset(0);
    }
  };

  const handleButtonSwipe = (dir: "left" | "right") => {
    setAnimClass(dir === "right" ? "animate-swipe-right" : "animate-swipe-left");
    setTimeout(dir === "right" ? onSwipeRight : onSwipeLeft, 350);
  };

  const rotation = offset * 0.08;
  const opacity = Math.max(0, 1 - Math.abs(offset) / 400);
  const likeOpacity = Math.min(1, Math.max(0, offset / 120));
  const nopeOpacity = Math.min(1, Math.max(0, -offset / 120));

  return (
    <div
      className={`absolute inset-0 ${animClass}`}
      style={{
        transform: animClass ? undefined : `translateX(${offset}px) rotate(${rotation}deg)`,
        opacity: animClass ? undefined : opacity,
        transition: swiping ? "none" : "transform 0.3s ease, opacity 0.3s ease",
        zIndex: isTop ? 10 : 0,
      }}
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
    >
      <div className="h-full w-full rounded-lg border bg-card overflow-hidden flex flex-col cursor-grab active:cursor-grabbing select-none relative">
        {/* Full-card overlay feedback */}
        <div
          className="absolute inset-0 z-20 pointer-events-none rounded-lg transition-opacity duration-150 flex items-center justify-center"
          style={{ backgroundColor: "hsl(var(--accent) / 0.15)", opacity: likeOpacity }}
        >
          {likeOpacity > 0.1 && (
            <div className="flex flex-col items-center gap-2 animate-scale-in">
              <ThumbsUp className="w-16 h-16 text-accent" strokeWidth={2.5} />
              <span className="font-mono text-lg font-bold tracking-wider text-accent">VIBE IT</span>
            </div>
          )}
        </div>
        <div
          className="absolute inset-0 z-20 pointer-events-none rounded-lg transition-opacity duration-150 flex items-center justify-center"
          style={{ backgroundColor: "hsl(var(--destructive) / 0.15)", opacity: nopeOpacity }}
        >
          {nopeOpacity > 0.1 && (
            <div className="flex flex-col items-center gap-2 animate-scale-in">
              <ThumbsDown className="w-16 h-16 text-destructive" strokeWidth={2.5} />
              <span className="font-mono text-lg font-bold tracking-wider text-destructive">DROP IT</span>
            </div>
          )}
        </div>

        <div className="relative flex-1 overflow-hidden">
          <img src={item.image} alt={item.name} className="h-full w-full object-cover" draggable={false} />
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-xs text-muted-foreground tracking-wider">{item.brand}</p>
              <p className="text-sm font-medium mt-0.5">{item.name}</p>
            </div>
            <p className="font-mono text-sm font-medium">${item.price}</p>
          </div>
          <div className="flex gap-1.5 mt-2">
            <span className="font-mono text-[10px] px-2 py-0.5 rounded-sm bg-secondary text-muted-foreground">{item.aesthetic}</span>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded-sm bg-secondary text-muted-foreground">{item.fit}</span>
          </div>
        </div>
        {/* Action buttons */}
        {isTop && (
          <div className="flex border-t">
            <button
              onClick={(e) => { e.stopPropagation(); handleButtonSwipe("left"); }}
              className="flex-1 flex items-center justify-center gap-2 py-3 text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors border-r"
            >
              <X className="w-4 h-4" />
              <span className="font-mono text-xs">DROP</span>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleButtonSwipe("right"); }}
              className="flex-1 flex items-center justify-center gap-2 py-3 text-accent hover:bg-accent/10 transition-colors"
            >
              <Heart className="w-4 h-4" />
              <span className="font-mono text-xs">VIBE</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
