
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
    <div className="space-y-10">
      {/* Snapshot Hero - High Impact Wise Style */}
      <div className="bg-steady-charcoal text-white p-8 rounded-4xl shadow-2xl relative overflow-hidden group">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-steady-teal/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
        <p className="text-xs font-black uppercase tracking-[0.2em] opacity-40 mb-4">Your Snapshot</p>
        <div className="space-y-1">
          <h2 className="text-5xl font-black tracking-tighter leading-tight">
            ${snapshot.netWorth.toLocaleString()}
          </h2>
          <div className="inline-flex items-center gap-2 bg-steady-success/10 text-steady-success px-3 py-1 rounded-full">
            <iconify-icon icon="solar:round-alt-arrow-up-bold-duotone" width="16"></iconify-icon>
            <span className="text-xs font-black tracking-wider uppercase">
              +${snapshot.monthlyChange} this month
            </span>
          </div>
        </div>
      </div>

      {/* Scout's Pick - Prominent Feature Card */}
      {dailyAction && (
        <section>
           <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4">Scout's Pick</h3>
           <div className="bg-white p-8 rounded-4xl shadow-sm border border-gray-50 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-steady-teal/5 flex items-center justify-center text-steady-teal">
                <iconify-icon icon="solar:star-fall-bold-duotone" width="32"></iconify-icon>
              </div>
              <div>
                <h4 className="text-2xl font-black text-steady-charcoal mb-2 leading-tight">{dailyAction.title}</h4>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">{dailyAction.description}</p>
              </div>
              <div className="flex gap-2 pt-2">
                <button className="flex-1 bg-steady-teal text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg shadow-steady-teal/20">
                  {dailyAction.cta}
                </button>
                <button className="px-6 py-4 text-steady-charcoal/40 font-black text-xs uppercase tracking-widest hover:text-steady-charcoal transition-colors">
                  Later
                </button>
              </div>
           </div>
        </section>
      )}

      {/* Recent Flow - Clean Monotone List */}
      <section>
        <div className="flex justify-between items-end mb-6">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Recent Flow</h3>
          <button className="text-steady-teal text-xs font-black uppercase tracking-widest hover:translate-x-1 transition-transform">See all →</button>
        </div>
        <div className="space-y-3">
          {recentFlow.map((tx) => (
            <div key={tx.id} className="bg-white p-5 rounded-3xl border border-gray-50 flex justify-between items-center group cursor-pointer hover:border-steady-teal/10 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center overflow-hidden">
                  <iconify-icon 
                    icon={LogoMap[tx.description] || 'solar:wallet-money-bold-duotone'} 
                    width="24"
                    className="monotone-logo"
                  ></iconify-icon>
                </div>
                <div>
                  <p className="text-sm font-black text-steady-charcoal">{tx.description}</p>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">{tx.category}</p>
                </div>
              </div>
              <p className={`text-base font-black tracking-tighter ${tx.amount < 0 ? 'text-steady-charcoal' : 'text-steady-success'}`}>
                {tx.amount < 0 ? `-$${Math.abs(tx.amount).toLocaleString()}` : `+$${tx.amount.toLocaleString()}`}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Scout Summary Card */}
      <div className="bg-steady-teal text-white p-8 rounded-4xl relative overflow-hidden">
        <iconify-icon icon="solar:notes-bold-duotone" width="80" className="absolute -bottom-4 -right-4 opacity-10"></iconify-icon>
        <h4 className="text-xl font-black uppercase tracking-tighter mb-6 leading-none">Weekly Note</h4>
        <ul className="space-y-5">
          {[
            "You made 3 decisions (nice momentum)",
            "$847 moved toward your goals",
            "Insurance renews in 12 days"
          ].map((note, idx) => (
            <li key={idx} className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <iconify-icon icon="solar:check-read-bold-duotone" width="14"></iconify-icon>
              </div>
              <span className="text-sm font-bold opacity-90 leading-tight">{note}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Today;
