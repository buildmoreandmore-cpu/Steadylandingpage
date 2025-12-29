
import React, { useState } from 'react';

interface OnboardingProps {
  onComplete: (name: string) => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [choice, setChoice] = useState<string | null>(null);

  const screens = [
    {
      id: 1,
      question: "ONE MONEY THING ON YOUR MIND?",
      options: [
        "Spend less without feeling it",
        "Know if I can afford it",
        "Stop worrying about bills",
        "Just feel more in control"
      ]
    },
    {
      id: 2,
      question: "HOW TO TRACK YOUR MONEY?",
      options: [
        "Link accounts (Automatic)",
        "Manual Mode (Private)",
        "Hybrid Control"
      ]
    },
    {
      id: 3,
      question: "WHO IS THIS ACCOUNT FOR?",
      options: [
        "Just me",
        "Me + partner",
        "Me + family",
        "Me + side business"
      ]
    }
  ];

  const currentScreen = screens[step - 1];

  const handleNext = () => {
    if (step < screens.length) {
      setStep(step + 1);
      setChoice(null);
    } else {
      onComplete("Francis");
    }
  };

  return (
    <div className="h-screen bg-steady-bg flex flex-col p-10 max-w-md mx-auto relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-steady-teal/5 rounded-full blur-3xl"></div>
      
      <div className="flex-1 flex flex-col justify-center">
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-xs font-black text-steady-teal tracking-[0.3em] uppercase">Step 0{step}</p>
            <h2 className="text-5xl font-black text-steady-charcoal leading-[0.9] tracking-tighter uppercase">
              {currentScreen.question}
            </h2>
          </div>
          
          <div className="space-y-3">
            {currentScreen.options.map((option) => (
              <button
                key={option}
                onClick={() => setChoice(option)}
                className={`w-full p-8 rounded-4xl text-left font-black transition-all border-4 text-sm uppercase tracking-wider ${
                  choice === option 
                    ? 'bg-steady-charcoal text-white border-steady-charcoal shadow-2xl scale-[1.05]' 
                    : 'bg-white text-steady-charcoal border-white shadow-sm hover:border-gray-50'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="py-10">
        <button
          disabled={!choice}
          onClick={handleNext}
          className={`w-full py-6 rounded-3xl font-black text-xs uppercase tracking-[0.3em] transition-all ${
            choice 
              ? 'bg-steady-teal text-white shadow-2xl shadow-steady-teal/30 hover:scale-[1.02] active:scale-95' 
              : 'bg-gray-100 text-gray-300 cursor-not-allowed'
          }`}
        >
          {step === screens.length ? "Finish Setup" : "Continue"}
        </button>
        <div className="flex justify-center gap-2 mt-6">
          {screens.map(s => (
            <div key={s.id} className={`h-1 rounded-full transition-all duration-500 ${step >= s.id ? 'w-8 bg-steady-teal' : 'w-2 bg-gray-200'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
