
import React from 'react';
import { Transaction, SnapshotData, ScoutAction } from '../types';

interface TodayProps {
  snapshot: SnapshotData;
  dailyAction: ScoutAction | null;
  recentFlow: Transaction[];
}

const LogoMap: Record<string, string> = {
  'Netflix': 'logos:netflix-icon',
  'Client Payment': 'solar:bank-bold-duotone',
  'Rent Payment': 'solar:home-bold-duotone',
  'Emergency Fund': 'solar:shield-up-bold-duotone',
};

const Today: React.FC<TodayProps> = ({ snapshot, dailyAction, recentFlow }) => {
  return (
    <div className="space-y-4">
      {/* Snapshot Hero - Compact */}
      <div className="bg-steady-charcoal text-white p-4 rounded-2xl">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[9px] font-bold uppercase tracking-wider opacity-50">Net Worth</p>
          <div className="flex items-center gap-1 bg-steady-success/20 text-steady-success px-2 py-0.5 rounded-full">
            <iconify-icon icon="solar:arrow-up-bold" width="10"></iconify-icon>
            <span className="text-[9px] font-bold">+${snapshot.monthlyChange.toLocaleString()}</span>
          </div>
        </div>
        <div className="flex items-baseline gap-0.5">
          <span className="text-lg font-medium text-white/40">$</span>
          <span className="text-2xl font-black tracking-tight">{snapshot.netWorth.toLocaleString()}</span>
        </div>
      </div>

      {/* Scout's Pick - Compact */}
      {dailyAction && (
        <div className="bg-white p-4 rounded-2xl border border-gray-100">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-8 h-8 rounded-xl bg-steady-teal/10 flex items-center justify-center text-steady-teal shrink-0">
              <iconify-icon icon="solar:star-fall-bold-duotone" width="18"></iconify-icon>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400 mb-1">Scout's Pick</p>
              <h4 className="text-sm font-black text-steady-charcoal leading-tight">{dailyAction.title}</h4>
            </div>
          </div>
          <p className="text-[11px] text-gray-500 font-medium leading-relaxed mb-3">{dailyAction.description}</p>
          <div className="flex gap-2">
            <button className="flex-1 bg-steady-teal text-white py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-wider">
              {dailyAction.cta}
            </button>
            <button className="px-4 py-2.5 text-gray-400 font-bold text-[10px] uppercase tracking-wider">
              Later
            </button>
          </div>
        </div>
      )}

      {/* Recent Flow - Compact */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400">Recent</p>
          <button className="text-steady-teal text-[9px] font-bold uppercase tracking-wider">See all</button>
        </div>
        <div className="space-y-2">
          {recentFlow.slice(0, 3).map((tx) => (
            <div key={tx.id} className="bg-white p-3 rounded-xl border border-gray-100 flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                  <iconify-icon
                    icon={LogoMap[tx.description] || 'solar:wallet-money-bold-duotone'}
                    width="16"
                    className="monotone-logo"
                  ></iconify-icon>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-steady-charcoal">{tx.description}</p>
                  <p className="text-[9px] text-gray-400 font-medium uppercase">{tx.category}</p>
                </div>
              </div>
              <p className={`text-[11px] font-bold ${tx.amount < 0 ? 'text-steady-charcoal' : 'text-steady-success'}`}>
                {tx.amount < 0 ? `-$${Math.abs(tx.amount).toLocaleString()}` : `+$${tx.amount.toLocaleString()}`}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Note - Compact */}
      <div className="bg-steady-teal text-white p-4 rounded-2xl">
        <h4 className="text-[11px] font-black uppercase tracking-wider mb-3 opacity-80">Weekly Note</h4>
        <ul className="space-y-2.5">
          {[
            "3 decisions made",
            "$847 toward goals",
            "Insurance renews soon"
          ].map((note, idx) => (
            <li key={idx} className="flex gap-2.5 items-center">
              <div className="w-5 h-5 rounded-md bg-white/10 flex items-center justify-center shrink-0">
                <iconify-icon icon="solar:check-read-bold-duotone" width="12"></iconify-icon>
              </div>
              <span className="text-[11px] font-medium opacity-90">{note}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Today;
