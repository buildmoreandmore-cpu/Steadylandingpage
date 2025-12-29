import React from 'react';
import PageLayout from '../components/PageLayout';

const Terms: React.FC = () => {
  return (
    <PageLayout>
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero */}
          <div className="space-y-6">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-steady-teal">Legal</p>
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
              Terms of Service
            </h1>
            <p className="text-gray-400 font-bold uppercase tracking-wider">Last updated: December 2024</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Agreement to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing or using Steady, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Use of Service</h2>
                <p className="text-gray-600 leading-relaxed">
                  Steady provides personal finance management tools. You are responsible for maintaining the confidentiality of your account and for all activities under your account.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  You agree not to use the service for any illegal purposes or in violation of any applicable laws.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Financial Disclaimer</h2>
                <p className="text-gray-600 leading-relaxed">
                  Steady is not a financial advisor. The information and tools provided are for informational purposes only and should not be considered financial advice. Always consult with a qualified financial professional before making financial decisions.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Intellectual Property</h2>
                <p className="text-gray-600 leading-relaxed">
                  The service and its original content, features, and functionality are owned by Steady and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Termination</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may terminate or suspend your account immediately, without prior notice, for any breach of these Terms. Upon termination, your right to use the service will cease immediately.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  In no event shall Steady be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Changes to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the app.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Contact</h2>
                <p className="text-gray-600 leading-relaxed">
                  Questions about these Terms? Contact us at legal@steady.app
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Terms;
