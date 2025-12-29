
import React, { useState } from 'react';

const Manage: React.FC = () => {
  const [showNegotiation, setShowNegotiation] = useState(false);

  const sections = [
    { title: 'Subscriptions', count: '12 active', value: '$184/mo', icon: 'solar:card-2-bold-duotone', color: 'bg-steady-teal' },
    { title: 'Bills', count: 'Next: Oct 12', value: '$1,250', icon: 'solar:calendar-date-bold-duotone', color: 'bg-steady-amber' },
    { title: 'Privacy', count: 'Manual Mode', value: 'Active', icon: 'solar:lock-password-bold-duotone', color: 'bg-steady-charcoal' },
    { title: 'Profiles', count: 'Roll-up View', value: 'Family', icon: 'solar:users-group-rounded-bold-duotone', color: 'bg-steady-coral' },
  ];

  if (showNegotiation) {
    return (
      <div className="space-y-10 pb-12">
        <button onClick={() => setShowNegotiation(false)} className="text-steady-teal font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:-translate-x-1 transition-transform">
          <iconify-icon icon="solar:alt-arrow-left-bold-duotone" width="16"></iconify-icon>
          Back to Manage
        </button>
        <div className="text-steady-charcoal">
          <h2 className="text-5xl font-black mb-4 uppercase leading-none">Negotiate</h2>
          <p className="text-gray-400 text-lg font-medium leading-tight">Transparent, optional, and effective.</p>
        </div>

        <div className="bg-white p-8 rounded-4xl shadow-sm border border-gray-50 space-y-8">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-black text-steady-charcoal uppercase tracking-tighter">Xfinity</h3>
            <div className="bg-steady-success/10 text-steady-success px-4 py-1 rounded-full text-[10px] font-black uppercase">82% Success</div>
          </div>
          
          <div className="space-y-2">
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Potential Saving</p>
            <p className="text-4xl font-black text-steady-charcoal tracking-tighter leading-none">$35/mo</p>
          </div>

          <div className="flex flex-col gap-3">
            <button className="w-full bg-steady-teal text-white py-5 rounded-3xl font-black text-xs uppercase tracking-widest shadow-lg shadow-steady-teal/20">We Negotiate</button>
            <button className="w-full bg-gray-100 text-steady-charcoal py-5 rounded-3xl font-black text-xs uppercase tracking-widest">Get DIY Script</button>
          </div>
        </div>

        <div className="bg-steady-charcoal text-white p-8 rounded-4xl">
           <h4 className="text-xs font-black uppercase tracking-[0.2em] opacity-40 mb-4">Scout's DIY Tip</h4>
           <p className="text-sm font-bold leading-relaxed opacity-90">
             "Ask for the 'Loyalty Department' directly. Mention a local fiber competitor—they usually have an unadvertised match rate."
           </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10 pb-12">
      <div className="text-steady-charcoal">
        <h2 className="text-5xl font-black mb-4 uppercase leading-none">Control</h2>
        <p className="text-gray-400 text-lg font-medium leading-tight">Manage the logistics of your complex lives.</p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-2 gap-4">
        {sections.map((section) => (
          <button key={section.title} className="bg-white p-6 rounded-4xl border border-gray-50 shadow-sm flex flex-col items-start gap-4 text-left group hover:border-steady-teal/20 transition-all">
            <div className={`w-12 h-12 rounded-2xl ${section.color}/10 flex items-center justify-center text-${section.color.split('-')[1]}`}>
              <iconify-icon icon={section.icon} width="32"></iconify-icon>
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-black text-steady-charcoal uppercase leading-none tracking-tighter">{section.title}</h3>
              <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest leading-none">{section.count}</p>
            </div>
            <p className="text-sm font-black text-steady-teal mt-auto">{section.value}</p>
          </button>
        ))}
      </div>

      <div className="space-y-6">
        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Deep Insights</h3>
        
        {/* Subscription Bento Card */}
        <div className="bg-white p-8 rounded-4xl border border-gray-50 shadow-sm relative overflow-hidden">
           <div className="flex justify-between items-start mb-6">
              <div className="bg-steady-amber/10 text-steady-amber px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">Optimize</div>
              <iconify-icon icon="logos:disney-plus" width="40" className="monotone-logo"></iconify-icon>
           </div>
           <h4 className="text-2xl font-black text-steady-charcoal mb-2 leading-tight">Hulu + Disney Bundle</h4>
           <p className="text-sm text-gray-500 font-medium mb-6 leading-relaxed">
             Scout found you're paying for Hulu separately. Merging saves you $9/mo.
           </p>
           <div className="flex gap-2">
             <button className="flex-1 bg-steady-charcoal text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest">Pause Now</button>
             <button className="flex-1 bg-gray-50 text-gray-400 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest">Ignore</button>
           </div>
        </div>

        {/* Negotiation Feature Card */}
        <button 
          onClick={() => setShowNegotiation(true)}
          className="w-full bg-steady-teal text-white p-8 rounded-4xl flex justify-between items-center group shadow-xl shadow-steady-teal/20"
        >
          <div className="text-left">
            <p className="text-2xl font-black uppercase tracking-tighter leading-none mb-1">Negotiate Bills</p>
            <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Potential Savings: $42/mo Found</p>
          </div>
          <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all">
            <iconify-icon icon="solar:round-alt-arrow-right-bold-duotone" width="28"></iconify-icon>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Manage;
