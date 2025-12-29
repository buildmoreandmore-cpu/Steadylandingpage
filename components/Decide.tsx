
import React, { useState } from 'react';

const Decide: React.FC = () => {
  const [fixed, setFixed] = useState(50);
  const [strategic, setStrategic] = useState(30);
  const [lifestyle, setLifestyle] = useState(20);

  const debtFreeDate = new Date();
  debtFreeDate.setMonth(debtFreeDate.getMonth() + Math.max(1, 36 - (strategic / 2)));
  
  const breathingRoom = 200 + (lifestyle * 10);

  return (
    <div className="space-y-10 pb-12 w-full glass-card p-8 rounded-[3rem] shadow-2xl border border-gray-100">
      <div className="text-steady-charcoal overflow-hidden">
        <h2 className="text-4xl font-black mb-2 uppercase leading-none tracking-tighter">What if...</h2>
        <p className="text-gray-400 text-sm font-bold uppercase tracking-widest leading-tight">
          Planning intent, not limits.
        </p>
      </div>

      <div className="space-y-10">
        {/* Fixed Costs */}
        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-400">Fixed</p>
              <h3 className="text-lg font-black text-steady-charcoal uppercase tracking-tighter">Living</h3>
            </div>
            <span className="text-3xl font-black text-steady-teal tracking-tighter">{fixed}%</span>
          </div>
          <div className="relative group">
            <input 
              type="range" 
              min="30" max="70" value={fixed} 
              onChange={(e) => setFixed(parseInt(e.target.value))}
              className="w-full h-3 bg-gray-100 rounded-full appearance-none cursor-grab active:cursor-grabbing accent-steady-teal relative z-10"
            />
          </div>
        </div>

        {/* Strategic Growth */}
        <div className="space-y-4">
          <div className="flex justify-between items-end">
             <div>
               <p className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-400">Strategic</p>
               <h3 className="text-lg font-black text-steady-charcoal uppercase tracking-tighter">Growth</h3>
             </div>
             <span className="text-3xl font-black text-steady-teal tracking-tighter">{strategic}%</span>
          </div>
          <div className="relative group">
            <input 
              type="range" 
              min="5" max="50" value={strategic} 
              onChange={(e) => setStrategic(parseInt(e.target.value))}
              className="w-full h-3 bg-gray-100 rounded-full appearance-none cursor-grab active:cursor-grabbing accent-steady-teal relative z-10"
            />
          </div>
        </div>

        {/* Lifestyle Flow */}
        <div className="space-y-4">
          <div className="flex justify-between items-end">
             <div>
               <p className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-400">Lifestyle</p>
               <h3 className="text-lg font-black text-steady-charcoal uppercase tracking-tighter">Fun</h3>
             </div>
             <span className="text-3xl font-black text-steady-teal tracking-tighter">{lifestyle}%</span>
          </div>
          <div className="relative group">
            <input 
              type="range" 
              min="5" max="40" value={lifestyle} 
              onChange={(e) => setLifestyle(parseInt(e.target.value))}
              className="w-full h-3 bg-gray-100 rounded-full appearance-none cursor-grab active:cursor-grabbing accent-steady-teal relative z-10"
            />
          </div>
        </div>
      </div>

      <div className="bg-steady-charcoal text-white p-6 rounded-4xl space-y-6 relative overflow-hidden shadow-xl">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Live Projections</h3>
        
        <div className="grid grid-cols-2 gap-4">
           <div className="space-y-1">
             <p className="text-[8px] font-black uppercase tracking-widest opacity-60">Debt-free</p>
             <p className="text-base font-black leading-none">{debtFreeDate.toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}</p>
           </div>
           <div className="space-y-1">
             <p className="text-[8px] font-black uppercase tracking-widest opacity-60">Weekly Flow</p>
             <p className="text-base font-black leading-none text-steady-success">${Math.round(breathingRoom/4)}</p>
           </div>
        </div>

        <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
          <p className="text-[10px] font-bold leading-tight italic opacity-60 text-center">
            "More Growth = Earlier Freedom."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Decide;
