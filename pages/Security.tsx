import React from 'react';
import PageLayout from '../components/PageLayout';

const Security: React.FC = () => {
  return (
    <PageLayout>
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero */}
          <div className="text-center space-y-6">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-steady-teal">Security</p>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              Your data stays<br />yours. Period.
            </h1>
            <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
              We built Steady with privacy-first architecture. No selling data, no third-party access, no compromises.
            </p>
          </div>

          {/* Security Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: 'solar:shield-keyhole-bold-duotone',
                title: 'Bank-Level Encryption',
                description: 'All data is encrypted with AES-256 encryption, the same standard used by major financial institutions.'
              },
              {
                icon: 'solar:lock-bold-duotone',
                title: 'Zero-Knowledge Architecture',
                description: 'We can\'t see your financial data even if we wanted to. Your encryption keys stay with you.'
              },
              {
                icon: 'solar:server-bold-duotone',
                title: 'SOC 2 Type II Compliant',
                description: 'Our infrastructure undergoes regular third-party audits to ensure the highest security standards.'
              },
              {
                icon: 'solar:user-check-bold-duotone',
                title: 'Optional Account Linking',
                description: 'Link accounts if you want, or go fully manual. We support CSV imports and manual entry.'
              },
              {
                icon: 'solar:trash-bin-trash-bold-duotone',
                title: 'Data Deletion on Demand',
                description: 'Request complete deletion of your data at any time. No questions asked, no data retained.'
              },
              {
                icon: 'solar:shield-check-bold-duotone',
                title: 'No Data Selling. Ever.',
                description: 'Your financial data is never sold, shared, or monetized. Our business model is simple: you pay for the app.'
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-steady-teal/10 rounded-2xl flex items-center justify-center text-steady-teal">
                  <iconify-icon icon={feature.icon} width="32"></iconify-icon>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight">{feature.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Policy Documents */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black uppercase tracking-tight text-center">Security Policies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/access-control" className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-steady-teal/30 hover:shadow-lg transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-steady-teal/10 rounded-xl flex items-center justify-center text-steady-teal">
                    <iconify-icon icon="solar:shield-keyhole-bold-duotone" width="24"></iconify-icon>
                  </div>
                  <div>
                    <h3 className="font-black uppercase tracking-tight group-hover:text-steady-teal transition-colors">Access Control Policy</h3>
                    <p className="text-sm text-gray-500">How we manage access to systems and data</p>
                  </div>
                </div>
              </a>
              <a href="/data-retention" className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-steady-teal/30 hover:shadow-lg transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-steady-teal/10 rounded-xl flex items-center justify-center text-steady-teal">
                    <iconify-icon icon="solar:trash-bin-trash-bold-duotone" width="24"></iconify-icon>
                  </div>
                  <div>
                    <h3 className="font-black uppercase tracking-tight group-hover:text-steady-teal transition-colors">Data Retention Policy</h3>
                    <p className="text-sm text-gray-500">How long we keep data and disposal procedures</p>
                  </div>
                </div>
              </a>
              <a href="/privacy" className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-steady-teal/30 hover:shadow-lg transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-steady-teal/10 rounded-xl flex items-center justify-center text-steady-teal">
                    <iconify-icon icon="solar:lock-bold-duotone" width="24"></iconify-icon>
                  </div>
                  <div>
                    <h3 className="font-black uppercase tracking-tight group-hover:text-steady-teal transition-colors">Privacy Policy</h3>
                    <p className="text-sm text-gray-500">How we collect, use, and protect your data</p>
                  </div>
                </div>
              </a>
              <a href="/terms" className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-steady-teal/30 hover:shadow-lg transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-steady-teal/10 rounded-xl flex items-center justify-center text-steady-teal">
                    <iconify-icon icon="solar:document-text-bold-duotone" width="24"></iconify-icon>
                  </div>
                  <div>
                    <h3 className="font-black uppercase tracking-tight group-hover:text-steady-teal transition-colors">Terms of Service</h3>
                    <p className="text-sm text-gray-500">Terms and conditions for using Steady</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Trust Banner */}
          <div className="bg-steady-charcoal rounded-3xl p-12 text-center space-y-6">
            <iconify-icon icon="solar:verified-check-bold" width="48" className="text-steady-teal"></iconify-icon>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Questions about security?</h2>
            <p className="text-gray-400 font-medium">Reach out to our security team at <a href="mailto:buildmoreandmore@gmail.com" className="text-steady-teal hover:underline">buildmoreandmore@gmail.com</a></p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Security;
