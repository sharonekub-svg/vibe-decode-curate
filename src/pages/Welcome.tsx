import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-fashion.jpg";
import { supabase } from "@/lib/supabase";
import { ArrowRight, Mail } from "lucide-react";

export default function Welcome() {
  const [mode, setMode] = useState<"welcome" | "signin" | "signup">("welcome");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn, signUp, continueAsGuest } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      if (mode === "signin") {
        await signIn(email, password);
      } else {
        await signUp(email, password);
      }
      navigate("/");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.origin },
    });
  };

  const handleGuest = () => {
    continueAsGuest();
    navigate("/");
  };

  if (mode === "welcome") {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="relative flex-1 flex items-end">
          <img src={heroImage} alt="Fashion mood board" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="relative z-10 w-full p-6 pb-10 md:p-12 max-w-md">
            <h1 className="font-mono text-xs tracking-[0.4em] text-muted-foreground mb-2">WELCOME TO</h1>
            <p className="text-5xl font-bold tracking-tight mb-2">VIBE</p>
            <p className="text-muted-foreground text-sm mb-8">Your Style, Decoded.</p>
            <div className="space-y-2.5">
              <Button onClick={() => setMode("signin")} className="w-full justify-between" variant="default">
                Sign In <ArrowRight className="w-4 h-4" />
              </Button>
              <Button onClick={() => setMode("signup")} className="w-full justify-between" variant="outline">
                Create Account <ArrowRight className="w-4 h-4" />
              </Button>
              <button
                onClick={handleGuest}
                className="w-full text-center font-mono text-xs text-muted-foreground hover:text-foreground transition-colors py-2 tracking-wider"
              >
                CONTINUE AS GUEST →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <button onClick={() => setMode("welcome")} className="font-mono text-xs text-muted-foreground hover:text-foreground mb-8 block tracking-wider">
          ← BACK
        </button>
        <h1 className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-1">
          {mode === "signin" ? "SIGN IN" : "CREATE ACCOUNT"}
        </h1>
        <p className="text-2xl font-semibold mb-6">
          {mode === "signin" ? "Welcome back." : "Join VIBE."}
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-11"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            className="h-11"
          />
          {error && <p className="font-mono text-xs text-destructive">{error}</p>}
          <Button type="submit" className="w-full h-11" disabled={loading}>
            {loading ? "..." : mode === "signin" ? "Sign In" : "Create Account"}
          </Button>
        </form>
        <div className="mt-4 flex items-center gap-3">
          <div className="flex-1 border-t" />
          <span className="font-mono text-[10px] text-muted-foreground">OR</span>
          <div className="flex-1 border-t" />
        </div>
        <Button onClick={handleGoogle} variant="outline" className="w-full mt-4 h-11">
          <Mail className="w-4 h-4 mr-2" /> Continue with Google
        </Button>
        <p className="text-center mt-6 text-sm text-muted-foreground">
          {mode === "signin" ? "No account? " : "Already have one? "}
          <button
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            className="text-foreground underline underline-offset-4"
          >
            {mode === "signin" ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  );
}
