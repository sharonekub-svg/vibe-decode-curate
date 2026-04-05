import { createContext, useContext, useState, useMemo, ReactNode } from "react";
import { StyleItem, styleItems } from "@/data/items";

interface VibeProfile {
  name: string;
  aesthetics: Record<string, number>;
  fits: Record<string, number>;
  topAesthetic: string;
  topFit: string;
  likedCategories: Record<string, number>;
}

interface VibeContextType {
  favorites: StyleItem[];
  swipeCount: number;
  vibeProfile: VibeProfile | null;
  gender: string;
  age: string;
  budget: string;
  discoveryComplete: boolean;
  isRefining: boolean;
  addFavorite: (item: StyleItem) => void;
  incrementSwipe: () => void;
  generateProfile: () => void;
  setGender: (g: string) => void;
  setAge: (a: string) => void;
  setBudget: (b: string) => void;
  onboardingComplete: boolean;
  setOnboardingComplete: (v: boolean) => void;
  setDiscoveryComplete: (v: boolean) => void;
  startRefining: () => void;
  stopRefining: () => void;
  getRecommendedItems: () => StyleItem[];
  getDiscoveryItems: () => StyleItem[];
  getRefineItems: () => StyleItem[];
}

const VibeContext = createContext<VibeContextType | undefined>(undefined);

const DISCOVERY_COUNT = 30;

const profileNames: Record<string, string> = {
  Streetwear: "The Urban Architect",
  Minimalist: "The Quiet Flex",
  Gorpcore: "The Trail Blazer",
  Classic: "The Modern Classic",
  Classique: "The Modern Classic",
  Casual: "The Effortless Cool",
  Basics: "The Essentialist",
  Romantic: "The Dreamer",
  Boho: "The Free Spirit",
  Y2K: "The Time Traveler",
  "Going Out": "The Night Owl",
  Preppy: "The Ivy Leaguer",
  Athleisure: "The Active One",
  Edgy: "The Rebel",
  Vintage: "The Old Soul",
  Western: "The Trailblazer",
  Cozy: "The Comfort Queen",
  Summer: "The Sun Chaser",
};

export function VibeProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<StyleItem[]>([]);
  const [swipeCount, setSwipeCount] = useState(0);
  const [vibeProfile, setVibeProfile] = useState<VibeProfile | null>(null);
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [budget, setBudget] = useState("");
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  const [discoveryComplete, setDiscoveryComplete] = useState(false);
  const [isRefining, setIsRefining] = useState(false);
  const [seenIds, setSeenIds] = useState<Set<string>>(new Set());

  const addFavorite = (item: StyleItem) => {
    setFavorites((prev) => [...prev, item]);
  };

  const incrementSwipe = () => {
    setSwipeCount((c) => c + 1);
  };

  const markSeen = (id: string) => {
    setSeenIds((prev) => new Set(prev).add(id));
  };

  const generateProfile = () => {
    const aesthetics: Record<string, number> = {};
    const fits: Record<string, number> = {};
    const likedCategories: Record<string, number> = {};
    favorites.forEach((item) => {
      aesthetics[item.aesthetic] = (aesthetics[item.aesthetic] || 0) + 1;
      fits[item.fit] = (fits[item.fit] || 0) + 1;
      likedCategories[item.category] = (likedCategories[item.category] || 0) + 1;
    });
    const topAesthetic = Object.entries(aesthetics).sort((a, b) => b[1] - a[1])[0]?.[0] || "Minimalist";
    const topFit = Object.entries(fits).sort((a, b) => b[1] - a[1])[0]?.[0] || "Regular";
    const name = profileNames[topAesthetic] || "The Style Explorer";
    setVibeProfile({ name, aesthetics, fits, topAesthetic, topFit, likedCategories });
  };

  // Get mixed discovery items (diverse categories/aesthetics)
  const getDiscoveryItems = (): StyleItem[] => {
    const genderFilter = gender.toLowerCase();
    const filtered = styleItems.filter(
      (item) => item.gender === genderFilter || item.gender === "unisex"
    );
    // Shuffle for variety
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, DISCOVERY_COUNT);
  };

  // Get recommended items based on favorites
  const getRecommendedItems = (): StyleItem[] => {
    if (favorites.length === 0) return styleItems.slice(0, 20);
    const topAesthetics = Object.entries(
      favorites.reduce((acc, item) => {
        acc[item.aesthetic] = (acc[item.aesthetic] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)
    )
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([k]) => k);

    const topCategories = Object.entries(
      favorites.reduce((acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)
    )
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([k]) => k);

    const genderFilter = gender.toLowerCase();
    const favIds = new Set(favorites.map((f) => f.id));

    // Score items by how well they match preferences
    const scored = styleItems
      .filter((item) => !favIds.has(item.id))
      .filter((item) => item.gender === genderFilter || item.gender === "unisex")
      .map((item) => {
        let score = 0;
        if (topAesthetics.includes(item.aesthetic)) score += 3;
        if (topCategories.includes(item.category)) score += 2;
        return { item, score };
      })
      .sort((a, b) => b.score - a.score);

    return scored.map((s) => s.item);
  };

  // Items for refining (unseen items matching top preferences)
  const getRefineItems = (): StyleItem[] => {
    const genderFilter = gender.toLowerCase();
    const unseen = styleItems.filter(
      (item) =>
        !seenIds.has(item.id) &&
        (item.gender === genderFilter || item.gender === "unisex")
    );
    return unseen.sort(() => Math.random() - 0.5).slice(0, 20);
  };

  const startRefining = () => setIsRefining(true);
  const stopRefining = () => {
    setIsRefining(false);
    generateProfile();
  };

  return (
    <VibeContext.Provider value={{
      favorites, swipeCount, vibeProfile, gender, age, budget,
      discoveryComplete, isRefining,
      addFavorite, incrementSwipe, generateProfile,
      setGender, setAge, setBudget,
      onboardingComplete, setOnboardingComplete,
      setDiscoveryComplete, startRefining, stopRefining,
      getRecommendedItems, getDiscoveryItems, getRefineItems,
    }}>
      {children}
    </VibeContext.Provider>
  );
}

export function useVibe() {
  const ctx = useContext(VibeContext);
  if (!ctx) throw new Error("useVibe must be used within VibeProvider");
  return ctx;
}
