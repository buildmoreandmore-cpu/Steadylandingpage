
export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  category: 'Fixed' | 'Strategic' | 'Lifestyle' | 'Revenue';
  profile: 'Personal' | 'Business' | 'Family';
  tags?: string[];
}

export interface SnapshotData {
  netWorth: number;
  monthlyChange: number;
  lastUpdated: string;
}

export interface ScoutAction {
  id: string;
  title: string;
  description: string;
  cta: string;
}

export enum AppScreen {
  ONBOARDING = 'ONBOARDING',
  TODAY = 'TODAY',
  DECIDE = 'DECIDE',
  JOURNEY = 'JOURNEY',
  MANAGE = 'MANAGE',
  SCOUT_CHAT = 'SCOUT_CHAT'
}

export interface UserState {
  name: string;
  onboarded: boolean;
  moneyPlan: {
    fixed: number;
    strategic: number;
    lifestyle: number;
  };
}
