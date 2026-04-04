import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useVibe } from "@/contexts/VibeContext";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ArrowRight } from "lucide-react";

const genders = ["Men", "Women", "Non-binary"];
const ages = ["16-20", "21-25", "26-30", "31-35", "36+"];
const budgetLabels: Record<number, string> = {
  25: "Under $25",
  50: "Under $50",
  100: "Under $100",
  200: "Under $200",
  500: "Under $500",
};
const budgetSteps = [25, 50, 100, 200, 500];

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const { gender, setGender, age, setAge, budget, setBudget, setOnboardingComplete } = useVibe();
  const [budgetValue, setBudgetValue] = useState(2); // index into budgetSteps
  const navigate = useNavigate();

  const finish = () => {
    setBudget(budgetSteps[budgetValue].toString());
    setOnboardingComplete(true);
    navigate("/swipe");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-sm animate-fade-in">
        <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-1">
          STEP {step + 1} OF 2
        </p>
        {step === 0 ? (
          <>
            <h2 className="text-2xl font-semibold mb-2">Tell us about you</h2>
            <p className="text-sm text-muted-foreground mb-6">Select your identity and age range so we can personalize your feed.</p>

            <p className="font-mono text-[10px] tracking-wider text-muted-foreground mb-2">IDENTITY</p>
            <div className="space-y-2 mb-6">
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

            <p className="font-mono text-[10px] tracking-wider text-muted-foreground mb-2">AGE RANGE</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {ages.map((a) => (
                <button
                  key={a}
                  onClick={() => setAge(a)}
                  className={`px-4 py-2 rounded-lg border text-sm transition-colors ${
                    age === a ? "border-foreground bg-secondary" : "hover:bg-secondary/50"
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>

            <Button onClick={() => setStep(1)} disabled={!gender || !age} className="w-full justify-between">
              Next <ArrowRight className="w-4 h-4" />
            </Button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-2">Set your budget</h2>
            <p className="text-sm text-muted-foreground mb-8">
              Drag the slider to set your per-item spending limit. We'll only show pieces within range.
            </p>

            <div className="space-y-6">
              <div className="text-center">
                <p className="text-4xl font-bold font-mono">${budgetSteps[budgetValue]}</p>
                <p className="text-sm text-muted-foreground mt-1">{budgetLabels[budgetSteps[budgetValue]]}</p>
              </div>

              <Slider
                value={[budgetValue]}
                onValueChange={([v]) => setBudgetValue(v)}
                min={0}
                max={budgetSteps.length - 1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
                <span>$25</span>
                <span>$500</span>
              </div>
            </div>

            <div className="flex gap-2 mt-8">
              <Button onClick={() => setStep(0)} variant="outline" className="flex-1">
                Back
              </Button>
              <Button onClick={finish} className="flex-1 justify-between">
                Start Swiping <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
