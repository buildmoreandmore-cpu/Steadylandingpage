import React from 'react';
import PageLayout from '../components/PageLayout';

const Privacy: React.FC = () => {
  return (
    <PageLayout>
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero */}
          <div className="space-y-6">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-steady-teal">Legal</p>
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
              Privacy Policy
            </h1>
            <p className="text-gray-400 font-bold uppercase tracking-wider">Last updated: December 2024</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  At Steady, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Information We Collect</h2>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Information you provide:</strong> Account information (email, name), financial data you choose to input or connect, preferences and settings.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Automatically collected:</strong> Device information, usage analytics, crash reports to improve app stability.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Financial data via Plaid:</strong> When you choose to link your bank accounts, we use Plaid Inc. to securely connect to your financial institutions. Plaid collects and shares with us your account balances, transaction history, and account identification information. You authorize this data sharing when you connect your accounts through Plaid Link.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Third-Party Services (Plaid)</h2>
                <p className="text-gray-600 leading-relaxed">
                  We use Plaid to connect your bank accounts. By using our account linking feature, you agree to Plaid&apos;s privacy policy available at <a href="https://plaid.com/legal/#end-user-privacy-policy" className="text-steady-teal underline">plaid.com/legal</a>. Plaid&apos;s services are subject to their terms and conditions.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>What Plaid accesses:</strong> Account balances, transaction history (up to 24 months), account and routing numbers for verification, and account holder information.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>You can disconnect at any time:</strong> You may revoke Plaid&apos;s access to your accounts through the app settings or by contacting us directly.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">How We Use Your Information</h2>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li>To provide and maintain our service</li>
                  <li>To personalize your experience</li>
                  <li>To improve our application</li>
                  <li>To communicate with you about updates and features</li>
                  <li>To provide customer support</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement bank-level encryption (AES-256) and follow industry best practices to protect your data. Your financial information is encrypted both in transit and at rest.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Data Sharing</h2>
                <p className="text-gray-600 leading-relaxed">
                  <strong>We do not sell your personal data.</strong> We may share data only with service providers necessary to operate our service, and only under strict confidentiality agreements.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Your Rights</h2>
                <p className="text-gray-600 leading-relaxed">
                  You have the right to access, correct, or delete your personal data at any time. You can export your data or request complete account deletion through the app settings or by contacting us.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Household Sharing</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you choose to share your financial data with a partner or family member through our Household feature, your linked account data, transactions, and balances will be visible to invited members. You control who has access and can revoke sharing at any time.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at <a href="mailto:buildmoreandmore@gmail.com" className="text-steady-teal underline">buildmoreandmore@gmail.com</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Privacy;
