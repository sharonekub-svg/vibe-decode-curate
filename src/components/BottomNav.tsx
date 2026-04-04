import { Home, Layers, ShoppingBag, Heart, User } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/swipe", icon: Layers, label: "Swipe" },
  { to: "/shop", icon: ShoppingBag, label: "Shop" },
  { to: "/favorites", icon: Heart, label: "Vault" },
  { to: "/profile", icon: User, label: "Profile" },
];

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur-sm md:hidden">
      <div className="flex items-center justify-around h-14">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className="flex flex-col items-center gap-0.5 px-3 py-1.5 text-muted-foreground transition-colors"
            activeClassName="text-foreground"
          >
            <item.icon className="w-4 h-4" />
            <span className="font-mono text-[9px] tracking-wider">{item.label.toUpperCase()}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
