import { createContext, useContext, useState, ReactNode } from "react";
import { StyleItem } from "@/data/items";

interface VibeProfile {
  name: string;
  aesthetics: Record<string, number>;
  fits: Record<string, number>;
  topAesthetic: string;
  topFit: string;
}

interface VibeContextType {
  favorites: StyleItem[];
  swipeCount: number;
  vibeProfile: VibeProfile | null;
  gender: string;
  age: string;
  budget: string;
  addFavorite: (item: StyleItem) => void;
  incrementSwipe: () => void;
  generateProfile: () => void;
  setGender: (g: string) => void;
  setAge: (a: string) => void;
  setBudget: (b: string) => void;
  onboardingComplete: boolean;
  setOnboardingComplete: (v: boolean) => void;
}

const VibeContext = createContext<VibeContextType | undefined>(undefined);

const profileNames: Record<string, string> = {
  Streetwear: "The Urban Architect",
  Minimalist: "The Quiet Flex",
  Gorpcore: "The Trail Blazer",
  Classic: "The Modern Classic",
  Casual: "The Effortless Cool",
  Basics: "The Essentialist",
};

export function VibeProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<StyleItem[]>([]);
  const [swipeCount, setSwipeCount] = useState(0);
  const [vibeProfile, setVibeProfile] = useState<VibeProfile | null>(null);
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [budget, setBudget] = useState("");
  const [onboardingComplete, setOnboardingComplete] = useState(false);

  const addFavorite = (item: StyleItem) => {
    setFavorites((prev) => [...prev, item]);
  };

  const incrementSwipe = () => setSwipeCount((c) => c + 1);

  const generateProfile = () => {
    const aesthetics: Record<string, number> = {};
    const fits: Record<string, number> = {};
    favorites.forEach((item) => {
      aesthetics[item.aesthetic] = (aesthetics[item.aesthetic] || 0) + 1;
      fits[item.fit] = (fits[item.fit] || 0) + 1;
    });
    const topAesthetic = Object.entries(aesthetics).sort((a, b) => b[1] - a[1])[0]?.[0] || "Minimalist";
    const topFit = Object.entries(fits).sort((a, b) => b[1] - a[1])[0]?.[0] || "Regular";
    const name = profileNames[topAesthetic] || "The Style Explorer";
    setVibeProfile({ name, aesthetics, fits, topAesthetic, topFit });
  };

  return (
    <VibeContext.Provider value={{
      favorites, swipeCount, vibeProfile, gender, age, budget,
      addFavorite, incrementSwipe, generateProfile,
      setGender, setAge, setBudget,
      onboardingComplete, setOnboardingComplete,
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
