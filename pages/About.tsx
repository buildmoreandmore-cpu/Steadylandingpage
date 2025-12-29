import React from 'react';
import PageLayout from '../components/PageLayout';

const About: React.FC = () => {
  return (
    <PageLayout>
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero */}
          <div className="text-center space-y-6">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-steady-teal">About Us</p>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              Built by control<br />freaks, for control freaks.
            </h1>
            <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
              We got tired of budgeting apps that made us feel bad about our spending. So we built one that actually helps.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-12 rounded-3xl border border-gray-100 space-y-6">
            <h2 className="text-3xl font-black uppercase tracking-tight">Our Mission</h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              Steady exists to give people real control over their money—not through guilt trips and category limits, but through smart automation and intentional decision-making. We believe managing money should feel empowering, not exhausting.
            </p>
          </div>

          {/* Values */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black uppercase tracking-tight text-center">What We Believe</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Privacy First',
                  description: 'Your financial data is yours. We\'ll never sell it, share it, or use it against you.'
                },
                {
                  title: 'Intent Over Rules',
                  description: 'Life changes. Your budget should adapt with you, not punish you for being human.'
                },
                {
                  title: 'Automation > Willpower',
                  description: 'Good financial habits shouldn\'t require constant effort. Let Scout do the heavy lifting.'
                }
              ].map((value, idx) => (
                <div key={idx} className="bg-steady-charcoal p-8 rounded-3xl text-white space-y-4">
                  <h3 className="text-xl font-black uppercase tracking-tight text-steady-teal">{value.title}</h3>
                  <p className="text-gray-400 font-medium leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-black uppercase tracking-tight">Join the waitlist</h2>
            <p className="text-gray-500 font-medium">Be the first to take control when we launch.</p>
            <a href="/" className="inline-block bg-steady-teal text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-steady-teal/20 hover:scale-105 transition-all">
              Get Early Access
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
