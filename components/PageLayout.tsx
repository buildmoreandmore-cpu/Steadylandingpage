import React from 'react';
import { Link } from 'react-router-dom';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-steady-bg text-steady-charcoal">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-10">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src="/logo.svg" alt="Steady" className="h-10 w-auto" />
              <span className="text-2xl font-black uppercase tracking-tighter">Steady</span>
            </Link>
            <div className="hidden lg:flex gap-8">
              <Link to="/#features" className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-steady-teal transition-colors">Features</Link>
              <Link to="/#scout" className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-steady-teal transition-colors">Scout</Link>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/" className="bg-steady-teal text-white px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-steady-teal/20 hover:scale-105 transition-all">Join Waitlist</Link>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <img src="/logo.svg" alt="Steady" className="h-12 w-auto" />
                  <span className="text-3xl font-black uppercase tracking-tighter text-steady-charcoal">Steady</span>
                </div>
                <p className="text-sm text-gray-400 font-bold uppercase tracking-widest leading-relaxed">Money for the Control Freaks.</p>
              </div>

              <div className="flex gap-6">
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

            <div className="space-y-8">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-steady-charcoal">Product</h4>
              <div className="flex flex-col gap-5">
                <Link to="/#features" className="text-sm text-gray-400 font-bold uppercase tracking-widest hover:text-steady-teal text-left transition-colors">Features</Link>
                <Link to="/#scout" className="text-sm text-gray-400 font-bold uppercase tracking-widest hover:text-steady-teal text-left transition-colors">Scout</Link>
                <Link to="/security" className="text-sm text-gray-400 font-bold uppercase tracking-widest hover:text-steady-teal text-left transition-colors">Security</Link>
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-steady-charcoal">Company</h4>
              <div className="flex flex-col gap-5">
                <Link to="/about" className="text-sm text-gray-400 font-bold uppercase tracking-widest hover:text-steady-teal text-left transition-colors">About</Link>
                <Link to="/careers" className="text-sm text-gray-400 font-bold uppercase tracking-widest hover:text-steady-teal text-left transition-colors">Careers</Link>
                <Link to="/news" className="text-sm text-gray-400 font-bold uppercase tracking-widest hover:text-steady-teal text-left transition-colors">News</Link>
                <Link to="/contact" className="text-sm text-gray-400 font-bold uppercase tracking-widest hover:text-steady-teal text-left transition-colors">Contact</Link>
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-steady-charcoal">Legal</h4>
              <div className="flex flex-col gap-5">
                <Link to="/privacy" className="text-sm text-gray-400 font-bold uppercase tracking-widest hover:text-steady-teal text-left transition-colors">Privacy</Link>
                <Link to="/terms" className="text-sm text-gray-400 font-bold uppercase tracking-widest hover:text-steady-teal text-left transition-colors">Terms</Link>
                <Link to="/cookie-policy" className="text-sm text-gray-400 font-bold uppercase tracking-widest hover:text-steady-teal text-left transition-colors">Cookie Policy</Link>
                <Link to="/licenses" className="text-sm text-gray-400 font-bold uppercase tracking-widest hover:text-steady-teal text-left transition-colors">Licenses</Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 mt-20 pt-10 text-center">
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">© {new Date().getFullYear()} Steady. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PageLayout;
