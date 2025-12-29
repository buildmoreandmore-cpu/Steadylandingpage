
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Today from './components/Today';
import Decide from './components/Decide';
import Manage from './components/Manage';
import { SnapshotData, Transaction } from './types';

// Page imports
import Security from './pages/Security';
import About from './pages/About';
import Careers from './pages/Careers';
import News from './pages/News';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import AccessControl from './pages/AccessControl';
import DataRetention from './pages/DataRetention';
import Terms from './pages/Terms';
import CookiePolicy from './pages/CookiePolicy';
import Licenses from './pages/Licenses';

const MOCK_SNAPSHOT: SnapshotData = {
  netWorth: 46800,
  monthlyChange: 1250,
  lastUpdated: '2 hours ago'
};

const MOCK_FLOW: Transaction[] = [
  { id: '1', date: '2023-10-01', description: 'Netflix', amount: -15.99, category: 'Lifestyle', profile: 'Personal', tags: ['Entertainment'] },
  { id: '2', date: '2023-10-01', description: 'Client Payment', amount: 2450.00, category: 'Revenue', profile: 'Business' },
  { id: '3', date: '2023-09-30', description: 'Rent Payment', amount: -1800.00, category: 'Fixed', profile: 'Personal' },
  { id: '4', date: '2023-09-29', description: 'Emergency Fund', amount: -500.00, category: 'Strategic', profile: 'Family' },
];

const SignupModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-steady-charcoal/60 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-lg rounded-5xl p-12 shadow-2xl relative animate-in zoom-in-95 duration-300">
        <button onClick={onClose} className="absolute top-8 right-8 text-gray-400 hover:text-steady-charcoal transition-colors">
          <iconify-icon icon="solar:close-circle-bold-duotone" width="32"></iconify-icon>
        </button>
        <div className="space-y-8">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-4xl font-black uppercase tracking-tighter leading-none">Get early<br/>access</h2>
            <p className="text-gray-500 font-medium">Be the first to know when Steady launches. Join the waitlist for exclusive early access.</p>
          </div>
          <div className="space-y-4">
            <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-gray-50 border-2 border-gray-100 focus:border-steady-teal px-8 py-5 rounded-3xl font-black text-xs tracking-widest outline-none transition-all" />
            <button className="w-full bg-steady-teal text-white py-6 rounded-3xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-steady-teal/20 hover:scale-[1.02] active:scale-95 transition-all">Join the Waitlist</button>
          </div>
          <p className="text-[10px] text-center text-gray-400 font-black uppercase tracking-widest leading-relaxed">
            Free to use. We'll notify you at launch.
          </p>
        </div>
      </div>
    </div>
  );
};

const LandingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'personal' | 'business'>('personal');
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const comparisonFeatures = [
    { name: 'Subscription Tracking', other: 'Cancel only', steady: 'Pause, Explain, Optimize' },
    { name: 'Budgeting Style', other: 'Category Limits', steady: 'Intent & Tradeoffs' },
    { name: 'AI Interaction', other: 'Basic Chatbot', steady: 'Scout Copilot' },
    { name: 'Account Linking', other: 'Mandatory', steady: 'Optional & Manual' },
    { name: 'Bill Control', other: 'Opaque Fees', steady: 'Negotiation & DIY' }
  ];

  return (
    <div className="min-h-screen bg-steady-bg text-steady-charcoal selection:bg-steady-teal selection:text-white overflow-x-hidden">
      <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-10">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src="/logo.png" alt="Steady" className="h-10 w-auto rounded-lg" />
              <span className="text-2xl font-black uppercase tracking-tighter">Steady</span>
            </button>
            <div className="hidden lg:flex gap-8">
              {[
                { name: 'Features', id: 'features' },
                { name: 'Scout', id: 'scout' }
              ].map(item => (
                <button 
                  key={item.id} 
                  onClick={() => scrollTo(item.id)} 
                  className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-steady-teal transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          <button onClick={() => setIsSignupOpen(true)} className="bg-steady-teal text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-black text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] shadow-xl shadow-steady-teal/20 hover:scale-105 transition-all">Join Waitlist</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-steady-teal/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <div className="inline-flex p-1 bg-gray-100 rounded-2xl">
            <button 
              onClick={() => setActiveTab('personal')}
              className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'personal' ? 'bg-white shadow-sm text-steady-charcoal' : 'text-gray-400'}`}
            >
              Personal
            </button>
            <button 
              onClick={() => setActiveTab('business')}
              className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'business' ? 'bg-white shadow-sm text-steady-charcoal' : 'text-gray-400'}`}
            >
              Business
            </button>
          </div>
          
          <h1 className="text-[11vw] sm:text-[10vw] md:text-[8.5vw] font-black uppercase leading-[0.85] tracking-tighter animate-in slide-in-from-bottom-12 duration-1000">
            {activeTab === 'personal' ? (
              <>Money for the<br />Control Freaks</>
            ) : (
              <>Cashflow for<br />the Solo-Preneur</>
            )}
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl md:text-2xl font-medium text-gray-500 leading-tight">
            Stop tracking. Start deciding. <br className="hidden md:block"/> 
            {activeTab === 'personal' 
              ? "Stop checking 4 apps to know if you can afford it."
              : "Focus on your craft. Scout automates your finances."}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-4">
            <button onClick={() => setIsSignupOpen(true)} className="w-full sm:w-auto bg-steady-teal text-white px-8 sm:px-14 py-5 sm:py-7 rounded-2xl sm:rounded-[2rem] font-black text-xs sm:text-sm uppercase tracking-[0.2em] shadow-2xl shadow-steady-teal/30 hover:scale-105 transition-all">Join Waitlist</button>
            <button onClick={() => scrollTo('features')} className="w-full sm:w-auto bg-white text-steady-charcoal px-8 sm:px-14 py-5 sm:py-7 rounded-2xl sm:rounded-[2rem] font-black text-xs sm:text-sm uppercase tracking-[0.2em] border border-gray-100 hover:bg-gray-50">See Features</button>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="max-w-7xl mx-auto px-6 py-32" id="scout">
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-20">
          <div className="lg:w-1/3 space-y-10 text-center lg:text-left z-20">
            <div className="w-16 h-1 bg-steady-teal mx-auto lg:mx-0"></div>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none">The one screen that actually matters</h2>
            <p className="text-xl font-medium text-gray-500 leading-relaxed">
              Steady gives you one snapshot, one daily action, and one decision-based plan. No clutter. Just control.
            </p>
            <div className="flex flex-col gap-6">
              {[
                { icon: 'solar:magic-stick-3-bold-duotone', text: 'Scout AI scouts for savings daily' },
                { icon: 'solar:tuning-square-2-bold-duotone', text: 'Intent-based sliders for real planning' },
                { icon: 'solar:shield-keyhole-bold-duotone', text: 'Bank-level privacy by default' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 justify-center lg:justify-start">
                  <div className="w-10 h-10 rounded-xl bg-steady-teal/10 flex items-center justify-center text-steady-teal">
                    <iconify-icon icon={item.icon} width="24"></iconify-icon>
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest opacity-70">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="perspective-1000 lg:w-1/2 flex justify-center">
            <div className="relative lg:rotate-y-12 transition-transform duration-700 hover:rotate-0 group">
              <div className="w-[280px] sm:w-[320px] md:w-[360px] h-[580px] sm:h-[660px] md:h-[760px] bg-steady-bg rounded-[2.5rem] sm:rounded-[3rem] md:rounded-[4rem] border-[8px] sm:border-[10px] md:border-[12px] border-steady-charcoal shadow-[0_30px_60px_-20px_rgba(0,0,0,0.4)] md:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden relative z-10 transition-shadow group-hover:shadow-[0_60px_120px_-20px_rgba(0,0,0,0.6)]">
                 <div className="h-10 bg-steady-bg flex justify-center items-end pb-1">
                    <div className="w-32 h-6 bg-steady-charcoal rounded-b-3xl"></div>
                 </div>
                 <div className="h-full overflow-y-auto no-scrollbar p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6 md:space-y-8">
                    <Today 
                      snapshot={activeTab === 'personal' ? MOCK_SNAPSHOT : { ...MOCK_SNAPSHOT, netWorth: 124500 }} 
                      dailyAction={{id:'1', title:'Optimize Energy Bills', description:'Scout found a way to save $42/mo on your electricity.', cta:'Save Now'}} 
                      recentFlow={MOCK_FLOW} 
                    />
                 </div>
              </div>
              <div className="hidden xl:block absolute -left-32 top-20 w-80 animate-float pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <Decide />
              </div>
              <div className="hidden xl:block absolute -right-32 bottom-20 w-80 animate-float pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" style={{ animationDelay: '2s' }}>
                <Manage />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section - REDESIGNED FOR DEPTH & MEANING */}
      <section className="bg-steady-charcoal text-white py-40 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12 relative">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">Built Different.<br/><span className="text-steady-teal">On Purpose.</span></h2>
            
            <div className="relative space-y-12">
              {/* Vertical Lifeline connecting testimonials */}
              <div className="absolute left-10 top-20 bottom-20 w-1 bg-gradient-to-b from-white/10 via-steady-teal/40 to-steady-teal/10 hidden md:block"></div>
              
              <div className="space-y-12">
                {/* Before: The Struggle */}
                <div className="p-10 bg-white/5 rounded-[2.5rem] border border-white/10 space-y-6 relative z-10 transition-all hover:bg-white/[0.08] shadow-lg">
                  <div className="flex items-center gap-3">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-steady-teal/80">The Struggle</p>
                    <div className="h-px flex-1 bg-white/10"></div>
                  </div>
                  <p className="text-xl font-medium opacity-60 italic leading-relaxed">"I had 4 different finance apps. One for tracking, one for bills, one for taxes. I spent hours a week just looking at charts and still didn't know if I could afford to take my team to dinner."</p>
                  <p className="text-xs font-black uppercase tracking-widest text-white/30">— Sarah, Creative Director</p>
                </div>

                {/* The Pivot Element */}
                <div className="flex justify-center md:justify-start md:pl-5 relative z-10">
                   <div className="bg-steady-teal p-4 rounded-3xl shadow-[0_0_40px_rgba(13,115,119,0.5)] animate-bounce">
                     <iconify-icon icon="solar:double-alt-arrow-down-bold-duotone" width="32" className="text-white block"></iconify-icon>
                   </div>
                </div>

                {/* After: The Steady Way */}
                <div className="p-10 bg-steady-teal/10 rounded-[2.5rem] border-2 border-steady-teal/40 space-y-6 relative z-10 shadow-[0_30px_80px_rgba(13,115,119,0.3)] bg-gradient-to-br from-steady-teal/10 to-transparent">
                  <div className="flex items-center gap-3">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-steady-teal">The Steady Way</p>
                    <div className="h-px flex-1 bg-steady-teal/20"></div>
                  </div>
                  <p className="text-xl font-medium leading-relaxed">"I opened Steady, adjusted my 'Lifestyle' slider, and Scout confirmed I was ahead of my debt payoff goal. I took the team out. No stress. Just control."</p>
                  <p className="text-xs font-black uppercase tracking-widest text-steady-teal">— Marcus, Solo-Preneur</p>
                </div>
              </div>
            </div>
          </div>

          {/* Redesigned Grid: 4 Value Cards with descriptors and depth */}
          <div className="relative">
             <div className="grid grid-cols-2 gap-6 md:gap-10 perspective-1000">
                {[
                  { 
                    label: 'Control', 
                    desc: 'Your rules. Your money.',
                    icon: 'solar:tuning-bold-duotone', 
                    gradient: 'from-steady-teal to-[#0a5c5f]',
                    shadow: 'shadow-[0_30px_60px_rgba(13,115,119,0.4)]'
                  },
                  { 
                    label: 'Focus', 
                    desc: 'One action. Every day.',
                    icon: 'solar:target-bold-duotone', 
                    gradient: 'from-steady-amber to-[#e0af4c]',
                    shadow: 'shadow-[0_30px_60px_rgba(253,203,110,0.3)]'
                  },
                  { 
                    label: 'Privacy', 
                    desc: 'Your data stays yours.',
                    icon: 'solar:shield-keyhole-bold-duotone', 
                    gradient: 'from-[#2D3436] to-[#1A1D1E]',
                    shadow: 'shadow-[0_30px_60px_rgba(0,0,0,0.6)]'
                  },
                  { 
                    label: 'Speed', 
                    desc: 'Answers in seconds.',
                    icon: 'solar:bolt-bold-duotone', 
                    gradient: 'from-steady-coral to-[#e65c5b]',
                    shadow: 'shadow-[0_30px_60px_rgba(255,118,117,0.3)]'
                  }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-gradient-to-br ${item.gradient} p-8 md:p-12 rounded-[2.5rem] aspect-square flex flex-col items-center justify-center gap-6 group hover:scale-[1.05] transition-all duration-500 cursor-default border border-white/10 ${item.shadow}`}
                  >
                    <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform shadow-inner">
                      <iconify-icon icon={item.icon} width="52" className="opacity-95"></iconify-icon>
                    </div>
                    <div className="text-center space-y-2">
                      <span className="block text-base font-black uppercase tracking-[0.2em]">{item.label}</span>
                      <span className="block text-[10px] font-bold uppercase tracking-widest opacity-60 leading-tight max-w-[140px] mx-auto">{item.desc}</span>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Features Bento */}
      <section className="bg-white py-40" id="features">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
             <p className="text-xs font-black uppercase tracking-[0.4em] text-steady-teal">Capabilities</p>
             <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
               Four ways Steady<br />thinks like you
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-gradient-to-br from-steady-teal to-[#0a5c5f] rounded-5xl p-12 text-white relative overflow-hidden group cursor-default min-h-[500px] shadow-[0_20px_50px_rgba(13,115,119,0.25)] hover:-translate-y-2 transition-all duration-500">
               <div className="relative z-10 max-w-sm space-y-6">
                  <h3 className="text-4xl font-black uppercase tracking-tighter leading-tight">Intent-based budgeting</h3>
                  <p className="text-lg opacity-80 font-medium leading-relaxed">Forget strict category limits. Steady focuses on your intent: Fixed, Strategic, or Lifestyle. Adjust your sliders and watch your future unfold.</p>
                  <button onClick={() => setIsSignupOpen(true)} className="bg-white text-steady-teal px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">Get Early Access</button>
               </div>
               
               <div className="absolute right-0 bottom-0 md:top-12 md:bottom-auto w-[340px] bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-l-[3rem] shadow-2xl translate-x-12 group-hover:translate-x-4 transition-transform duration-700 hidden md:block">
                  <div className="space-y-6">
                     <div className="space-y-2">
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                           <span>Fixed</span>
                           <span>50%</span>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                           <div className="h-full w-1/2 bg-white shadow-[0_0_10px_white]"></div>
                        </div>
                     </div>
                     <div className="space-y-2">
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                           <span>Strategic</span>
                           <span className="text-steady-amber">30%</span>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                           <div className="h-full w-[30%] bg-steady-amber shadow-[0_0_10px_#FDCB6E]"></div>
                        </div>
                     </div>
                     <div className="space-y-2">
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                           <span>Lifestyle</span>
                           <span className="text-steady-coral">20%</span>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                           <div className="h-full w-[20%] bg-steady-coral shadow-[0_0_10px_#FF7675]"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="md:col-span-4 bg-white rounded-5xl p-12 flex flex-col justify-between border-2 border-transparent shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:border-steady-teal/10 transition-all duration-500 group">
               <div className="w-16 h-16 bg-steady-amber rounded-2xl flex items-center justify-center text-white shadow-lg shadow-steady-amber/30 group-hover:scale-110 transition-transform">
                 <iconify-icon icon="solar:stars-line-bold-duotone" width="36"></iconify-icon>
               </div>
               <div className="space-y-4">
                 <h3 className="text-3xl font-black uppercase tracking-tighter leading-none">Meet Scout</h3>
                 <p className="text-sm font-medium text-gray-400 leading-relaxed">A financial expert in your pocket that doesn't judge. Scout audits your subscriptions, finds overlap, and negotiates bills for you.</p>
               </div>
            </div>

            <div className="md:col-span-4 bg-steady-charcoal rounded-5xl p-12 text-white flex flex-col justify-between shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:scale-[0.98] transition-all duration-500 group relative overflow-hidden">
               <div className="absolute -right-12 -top-12 w-32 h-32 bg-steady-teal/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
               <div className="space-y-4 relative z-10">
                  <h3 className="text-3xl font-black uppercase tracking-tighter leading-none text-steady-teal">Privacy First</h3>
                  <p className="text-sm font-medium opacity-50 leading-relaxed">Manual mode is built-in. Use cash, upload CSVs, or link accounts. No shared data, ever.</p>
               </div>
               <div className="flex gap-4 relative z-10">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-steady-teal shadow-inner">
                    <iconify-icon icon="solar:shield-keyhole-bold-duotone" width="32"></iconify-icon>
                  </div>
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center opacity-20">
                    <iconify-icon icon="solar:key-bold-duotone" width="28"></iconify-icon>
                  </div>
               </div>
            </div>

            <div className="md:col-span-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl sm:rounded-5xl p-6 sm:p-12 border border-gray-100 flex flex-col lg:flex-row items-center gap-8 sm:gap-12 group shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500 relative overflow-hidden">
               <div className="space-y-4 sm:space-y-6 text-center lg:text-left flex-1 relative z-10">
                  <div className="inline-flex px-4 py-1.5 rounded-full bg-steady-coral/10 text-steady-coral text-[10px] font-black uppercase tracking-widest mb-2">Switching Focus</div>
                  <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter leading-[0.9] text-steady-charcoal">Profiles for everyone</h3>
                  <p className="text-base sm:text-lg font-medium text-steady-charcoal/60 leading-relaxed max-w-sm">Switch between Personal, Business, and Family. All your snapshots roll up into one master dashboard.</p>
               </div>

               {/* Mobile: Stacked cards */}
               <div className="flex lg:hidden flex-col gap-4 w-full">
                  <div className="w-full bg-steady-charcoal rounded-2xl p-5 text-white flex justify-between items-center">
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                           <iconify-icon icon="solar:user-bold" width="16"></iconify-icon>
                        </div>
                        <div>
                           <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Personal</p>
                           <p className="text-lg font-black text-steady-teal">$46,800</p>
                        </div>
                     </div>
                     <iconify-icon icon="solar:shield-check-bold" width="20" className="text-steady-teal"></iconify-icon>
                  </div>
                  <div className="w-full bg-steady-teal rounded-2xl p-5 text-white flex justify-between items-center">
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                           <iconify-icon icon="solar:case-round-bold" width="16"></iconify-icon>
                        </div>
                        <div>
                           <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Business</p>
                           <p className="text-lg font-black">$24,900</p>
                        </div>
                     </div>
                  </div>
                  <div className="w-full bg-white rounded-2xl p-5 border border-steady-coral/20 flex justify-between items-center">
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-steady-coral/10 flex items-center justify-center">
                           <iconify-icon icon="solar:users-group-rounded-bold" width="16" className="text-steady-coral"></iconify-icon>
                        </div>
                        <div>
                           <p className="text-[10px] font-black uppercase tracking-widest text-steady-coral">Family</p>
                           <p className="text-lg font-black text-steady-charcoal">$8,450</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Desktop: Stacked perspective cards */}
               <div className="hidden lg:block relative h-[280px] w-full max-w-none flex-1 perspective-1000">
                  <div className="absolute top-10 right-4 w-60 h-40 bg-white rounded-3xl border border-steady-coral/20 shadow-xl rotate-[10deg] translate-x-4 opacity-40 group-hover:rotate-[8deg] transition-all duration-700 p-6 flex flex-col justify-between">
                     <div className="flex justify-between items-start">
                        <p className="text-[10px] font-black uppercase tracking-widest text-steady-coral">Family</p>
                        <iconify-icon icon="solar:users-group-rounded-bold" width="20" className="text-steady-coral"></iconify-icon>
                     </div>
                     <p className="text-xl font-black text-steady-charcoal">$8,450 <span className="text-[10px] opacity-40 uppercase">Safe</span></p>
                  </div>

                  <div className="absolute top-4 right-10 w-60 h-40 bg-steady-teal rounded-3xl shadow-2xl rotate-[-5deg] group-hover:rotate-[-8deg] transition-all duration-700 p-6 text-white flex flex-col justify-between z-10">
                     <div className="flex justify-between items-start">
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/60">Business</p>
                        <iconify-icon icon="solar:case-round-bold" width="20"></iconify-icon>
                     </div>
                     <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1">Q4 Revenue</p>
                        <p className="text-2xl font-black tracking-tighter leading-none">$24,900</p>
                     </div>
                  </div>

                  <div className="absolute top-20 right-20 w-64 h-44 bg-steady-charcoal rounded-[2rem] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.3)] rotate-[3deg] group-hover:rotate-[0deg] transition-all duration-500 p-8 text-white flex flex-col justify-between z-20">
                     <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                           <div className="w-6 h-6 rounded-full bg-white/10 overflow-hidden">
                              <img src="https://i.pravatar.cc/100?u=steady_pro" alt="p" className="w-full h-full object-cover grayscale" />
                           </div>
                           <p className="text-[10px] font-black uppercase tracking-widest">Personal</p>
                        </div>
                        <iconify-icon icon="solar:shield-check-bold" width="20" className="text-steady-teal"></iconify-icon>
                     </div>
                     <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1">Snapshot</p>
                        <p className="text-3xl font-black tracking-tighter leading-none text-steady-teal">$46,800</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-40 px-6 bg-steady-bg overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-20">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-center leading-none">THE CHOICE IS YOURS.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 items-center perspective-1000">
            <div className="bg-steady-charcoal/90 p-12 rounded-[2.5rem] space-y-10 shadow-xl opacity-80 md:-rotate-y-12 transition-all duration-700 hover:opacity-100 hover:rotate-0 transform-gpu group cursor-default">
              <div className="space-y-2">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">The Legacy Way</p>
                <h3 className="text-3xl font-black text-gray-400 uppercase tracking-tighter">Old School Apps</h3>
              </div>
              <ul className="space-y-6">
                {comparisonFeatures.map((f, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-500 font-bold uppercase tracking-widest text-xs">
                    <span className="text-gray-600 text-lg">✕</span>
                    {f.other}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <div className="h-14 w-full border border-white/5 rounded-2xl flex items-center justify-center opacity-20">
                   <span className="text-[10px] font-black uppercase tracking-[0.3em]">No Future Found</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 rounded-[2.5rem] space-y-10 border-2 border-steady-teal shadow-[0_40px_100px_rgba(13,115,119,0.2)] md:rotate-y-12 z-10 transition-all duration-700 hover:rotate-0 hover:scale-[1.05] transform-gpu bg-gradient-to-br from-steady-teal/[0.03] to-white group">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-steady-teal">Next Gen Money</p>
                  <h3 className="text-3xl font-black text-steady-charcoal uppercase tracking-tighter">The Steady Way</h3>
                </div>
                <div className="w-12 h-12 bg-steady-teal rounded-2xl flex items-center justify-center text-white shadow-lg animate-pulse-soft">
                  <iconify-icon icon="solar:shield-check-bold" width="28"></iconify-icon>
                </div>
              </div>
              <ul className="space-y-6">
                {comparisonFeatures.map((f, i) => (
                  <li key={i} className="flex items-center gap-4 text-steady-charcoal font-black uppercase tracking-widest text-xs">
                    <span className="text-steady-success text-xl">✓</span>
                    {f.steady}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <button 
                  onClick={() => setIsSignupOpen(true)}
                  className="w-full bg-steady-teal text-white py-6 rounded-2xl font-black text-sm uppercase tracking-[0.3em] shadow-2xl shadow-steady-teal/30 hover:shadow-steady-teal/50 transition-all group-hover:scale-[1.02]"
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERHAULED FOOTER SECTION */}
      <footer className="bg-white pt-16 sm:pt-32 pb-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-32">

          {/* FINAL CTA BLOCK (WAITLIST) */}
          <div className="bg-steady-charcoal rounded-3xl sm:rounded-[4rem] p-8 sm:p-16 md:p-24 text-center space-y-8 sm:space-y-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-steady-teal/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
            <div className="space-y-4 relative z-10">
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">READY TO TAKE<br/>CONTROL?</h2>
              <p className="text-gray-400 text-base sm:text-lg md:text-xl font-medium tracking-wide">Decide once. Automate forever.</p>
            </div>

            <div className="max-w-xl mx-auto flex flex-col gap-3 sm:gap-4 relative z-10">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full bg-white/10 border-2 border-white/10 focus:border-steady-teal px-6 sm:px-8 py-4 sm:py-5 rounded-2xl sm:rounded-3xl font-black text-xs tracking-widest text-white outline-none transition-all placeholder:text-white/30"
              />
              <button className="w-full sm:w-auto bg-steady-teal text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl sm:rounded-3xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-steady-teal/20 hover:scale-[1.05] transition-all">Get Early Access</button>
            </div>

            <p className="text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/40 relative z-10">
              Join 2,000+ control freaks on the waitlist.
            </p>
          </div>

          {/* MAIN FOOTER LINKS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-20">
            <div className="col-span-2 md:col-span-1 space-y-6 sm:space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <img src="/logo.png" alt="Steady" className="h-10 sm:h-12 w-auto rounded-xl" />
                  <span className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-steady-charcoal">Steady</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 font-bold uppercase tracking-widest leading-relaxed">Money for the Control Freaks.</p>
              </div>

              <div className="flex gap-4 sm:gap-6">
                {[
                  { icon: 'ri:twitter-x-fill', link: '#' },
                  { icon: 'ri:linkedin-box-fill', link: '#' },
                  { icon: 'ri:instagram-fill', link: '#' }
                ].map((social, idx) => (
                  <a key={idx} href={social.link} className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-steady-teal hover:bg-steady-teal/5 transition-all">
                    <iconify-icon icon={social.icon} width="20"></iconify-icon>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4 sm:space-y-8">
              <h4 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-steady-charcoal">Product</h4>
              <div className="flex flex-col gap-3 sm:gap-5">
                <button onClick={() => scrollTo('features')} className="text-xs sm:text-sm text-gray-400 font-bold uppercase tracking-widest hover:text-steady-teal text-left transition-colors">Features</button>
                <button onClick={() => scrollTo('scout')} className="text-xs sm:text-sm text-gray-400 font-bold uppercase tracking-widest hover:text-steady-teal text-left transition-colors">Scout</button>
                <Link to="/security" className="text-xs sm:text-sm text-gray-400 font-bold uppercase tracking-widest hover:text-steady-teal text-left transition-colors">Security</Link>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-8">
              <h4 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-steady-charcoal">Company</h4>
              <div className="flex flex-col gap-3 sm:gap-5">
                <Link to="/about" className="text-xs sm:text-sm text-gray-400 font-bold uppercase tracking-widest hover:text-steady-teal text-left transition-colors">About</Link>
                <Link to="/careers" className="text-xs sm:text-sm text-gray-400 font-bold uppercase tracking-widest hover:text-steady-teal text-left transition-colors">Careers</Link>
                <Link to="/news" className="text-xs sm:text-sm text-gray-400 font-bold uppercase tracking-widest hover:text-steady-teal text-left transition-colors">News</Link>
                <Link to="/contact" className="text-xs sm:text-sm text-gray-400 font-bold uppercase tracking-widest hover:text-steady-teal text-left transition-colors">Contact</Link>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-8">
              <h4 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-steady-charcoal">Legal</h4>
              <div className="flex flex-col gap-3 sm:gap-5">
                <Link to="/privacy" className="text-xs sm:text-sm text-gray-400 font-bold uppercase tracking-widest hover:text-steady-teal text-left transition-colors">Privacy</Link>
                <Link to="/terms" className="text-xs sm:text-sm text-gray-400 font-bold uppercase tracking-widest hover:text-steady-teal text-left transition-colors">Terms</Link>
                <Link to="/cookie-policy" className="text-xs sm:text-sm text-gray-400 font-bold uppercase tracking-widest hover:text-steady-teal text-left transition-colors">Cookies</Link>
                <Link to="/licenses" className="text-xs sm:text-sm text-gray-400 font-bold uppercase tracking-widest hover:text-steady-teal text-left transition-colors">Licenses</Link>
              </div>
            </div>
          </div>

          {/* BOTTOM COPYRIGHT & TRUST */}
          <div className="pt-8 sm:pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
             <p className="text-[10px] text-gray-300 font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">
               © 2024 Steady Money Inc.
             </p>

             <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-12">
               <div className="flex items-center gap-2 text-gray-400">
                 <iconify-icon icon="solar:lock-password-bold" width="16" className="text-steady-teal"></iconify-icon>
                 <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider sm:tracking-widest">Bank-level encryption</span>
               </div>
               <div className="flex items-center gap-2 text-gray-400">
                 <iconify-icon icon="solar:shield-check-bold" width="16" className="text-steady-teal"></iconify-icon>
                 <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider sm:tracking-widest">Your data is never sold</span>
               </div>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/security" element={<Security />} />
      <Route path="/about" element={<About />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/news" element={<News />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/access-control" element={<AccessControl />} />
      <Route path="/data-retention" element={<DataRetention />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      <Route path="/licenses" element={<Licenses />} />
    </Routes>
  );
};

export default App;
