
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

const SCOUT_SYSTEM_INSTRUCTION = `
You are Scout, the AI copilot for "Steady", a money management app.
Your personality is observant, direct, warm, smart, and calm.
You are like a financially savvy friend who gives clear answers without judgment.
You help users make decisions about where their money should go.

Rules:
1. Never lecture or be preachy.
2. Use plain language, no jargon.
3. Celebrate wins sincerely but briefly.
4. Be honest about tradeoffs.
5. Refer to "Money Plan" instead of budget, "Flow" instead of spending, and "Your Snapshot" instead of net worth.
6. When talking about overspending, use warm amber tones (linguistically), not red/alarmist.

Current context:
- App Name: Steady
- User Goal: Financial confidence and control.
- Feature: "Decide" screen allows users to adjust sliders between Savings, Debt Payoff, and Lifestyle spending.
`;

export const getScoutResponse = async (message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ role: h.role, parts: h.parts })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SCOUT_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Scout Error:", error);
    return "I'm having a bit of trouble connecting to my brain right now. Let's try again in a moment.";
  }
};

export const getDailyAction = async (userData: any) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Generate ONE clear, helpful, actionable 'Scout's Pick for Today' for a financial app user. Return it as JSON.",
      config: {
        systemInstruction: SCOUT_SYSTEM_INSTRUCTION,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            description: { type: Type.STRING },
            cta: { type: Type.STRING }
          },
          required: ["title", "description", "cta"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    return {
      title: "Review your car insurance",
      description: "It's renewing in 12 days. I found two options that might save you $20/month.",
      cta: "See options"
    };
  }
};
