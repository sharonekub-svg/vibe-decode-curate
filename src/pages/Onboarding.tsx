import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useVibe } from "@/contexts/VibeContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const genders = ["Men", "Women", "Non-binary"];
const ages = ["16-20", "21-25", "26-30", "31-35", "36+"];

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const { gender, setGender, age, setAge, setOnboardingComplete } = useVibe();
  const navigate = useNavigate();

  const finish = () => {
    setOnboardingComplete(true);
    navigate("/swipe");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-sm animate-fade-up">
        <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-1">
          STEP {step + 1} OF 2
        </p>
        {step === 0 ? (
          <>
            <h2 className="text-2xl font-semibold mb-6">How do you identify?</h2>
            <div className="space-y-2">
              {genders.map((g) => (
                <button
                  key={g}
                  onClick={() => setGender(g)}
                  className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors ${
                    gender === g ? "border-foreground bg-secondary" : "hover:bg-secondary/50"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
            <Button onClick={() => setStep(1)} disabled={!gender} className="w-full mt-6 justify-between">
              Next <ArrowRight className="w-4 h-4" />
            </Button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-6">What's your age range?</h2>
            <div className="space-y-2">
              {ages.map((a) => (
                <button
                  key={a}
                  onClick={() => setAge(a)}
                  className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors ${
                    age === a ? "border-foreground bg-secondary" : "hover:bg-secondary/50"
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>
            <Button onClick={finish} disabled={!age} className="w-full mt-6 justify-between">
              Start Swiping <ArrowRight className="w-4 h-4" />
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
