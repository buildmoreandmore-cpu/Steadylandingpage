
import React from 'react';
import { AppScreen } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeScreen: AppScreen;
  setActiveScreen: (screen: AppScreen) => void;
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, activeScreen, setActiveScreen, title }) => {
  const navItems = [
    { screen: AppScreen.TODAY, label: 'Today', icon: 'solar:home-2-bold-duotone' },
    { screen: AppScreen.DECIDE, label: 'Decide', icon: 'solar:tuning-square-2-bold-duotone' },
    { screen: AppScreen.JOURNEY, label: 'Journey', icon: 'solar:graph-up-bold-duotone' },
    { screen: AppScreen.MANAGE, label: 'Manage', icon: 'solar:settings-minimalistic-bold-duotone' },
  ];

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-steady-bg shadow-2xl relative">
      {/* Header */}
      <header className="px-8 pt-10 pb-6 bg-steady-bg sticky top-0 z-10">
        <h1 className="text-4xl font-black text-steady-charcoal uppercase tracking-tighter leading-none">{title}</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-8 pb-32 no-scrollbar">
        {children}
      </main>

      {/* Scout Bubble */}
      <button 
        onClick={() => setActiveScreen(AppScreen.SCOUT_CHAT)}
        className="fixed bottom-28 right-8 w-16 h-16 bg-steady-teal rounded-3xl shadow-xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all z-20"
      >
        <iconify-icon icon="solar:chat-round-dots-bold-duotone" width="32"></iconify-icon>
      </button>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/90 backdrop-blur-md border-t border-gray-100 flex justify-between px-10 py-5 z-20">
        {navItems.map((item) => (
          <button
            key={item.screen}
            onClick={() => setActiveScreen(item.screen)}
            className={`flex flex-col items-center gap-1 transition-all ${
              activeScreen === item.screen ? 'text-steady-teal scale-110' : 'text-gray-300'
            }`}
          >
            <iconify-icon icon={item.icon} width="28"></iconify-icon>
            <span className={`text-[10px] font-black uppercase tracking-widest ${activeScreen === item.screen ? 'opacity-100' : 'opacity-0'}`}>
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Layout;
