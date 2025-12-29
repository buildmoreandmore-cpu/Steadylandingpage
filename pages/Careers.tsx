import React from 'react';
import PageLayout from '../components/PageLayout';

const Careers: React.FC = () => {
  return (
    <PageLayout>
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero */}
          <div className="text-center space-y-6">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-steady-teal">Careers</p>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              Build the future<br />of personal finance.
            </h1>
            <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
              We're looking for passionate people who want to help millions take control of their money.
            </p>
          </div>

          {/* Why Join */}
          <div className="bg-steady-charcoal p-12 rounded-3xl text-white space-y-8">
            <h2 className="text-3xl font-black uppercase tracking-tight">Why Steady?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: 'solar:home-2-bold-duotone', text: 'Remote-first culture' },
                { icon: 'solar:health-bold-duotone', text: 'Full health benefits' },
                { icon: 'solar:calendar-bold-duotone', text: 'Unlimited PTO' },
                { icon: 'solar:chart-2-bold-duotone', text: 'Equity compensation' }
              ].map((perk, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-steady-teal">
                    <iconify-icon icon={perk.icon} width="24"></iconify-icon>
                  </div>
                  <span className="font-bold uppercase tracking-wider">{perk.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Open Roles */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black uppercase tracking-tight text-center">Open Positions</h2>
            <div className="space-y-4">
              {[
                { title: 'Senior iOS Engineer', location: 'Remote', type: 'Full-time' },
                { title: 'Senior Android Engineer', location: 'Remote', type: 'Full-time' },
                { title: 'Product Designer', location: 'Remote', type: 'Full-time' },
                { title: 'Backend Engineer', location: 'Remote', type: 'Full-time' }
              ].map((job, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-lg transition-shadow cursor-pointer group">
                  <div>
                    <h3 className="text-lg font-black uppercase tracking-tight group-hover:text-steady-teal transition-colors">{job.title}</h3>
                    <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">{job.location} · {job.type}</p>
                  </div>
                  <div className="flex items-center gap-2 text-steady-teal font-black text-xs uppercase tracking-widest">
                    View Role
                    <iconify-icon icon="solar:arrow-right-bold" width="16"></iconify-icon>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* No Fit */}
          <div className="bg-gray-50 p-8 rounded-3xl text-center space-y-4">
            <h3 className="text-xl font-black uppercase tracking-tight">Don't see a fit?</h3>
            <p className="text-gray-500 font-medium">We're always looking for talented people. Send your resume to careers@steady.app</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Careers;
