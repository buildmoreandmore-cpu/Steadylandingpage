import React from 'react';
import PageLayout from '../components/PageLayout';

const CookiePolicy: React.FC = () => {
  return (
    <PageLayout>
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero */}
          <div className="space-y-6">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-steady-teal">Legal</p>
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
              Cookie Policy
            </h1>
            <p className="text-gray-400 font-bold uppercase tracking-wider">Last updated: December 2024</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">What Are Cookies</h2>
                <p className="text-gray-600 leading-relaxed">
                  Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and improve your experience.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">How We Use Cookies</h2>
                <p className="text-gray-600 leading-relaxed">
                  Steady uses minimal cookies, primarily for:
                </p>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
                  <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our site</li>
                  <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Third-Party Cookies</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may use third-party services that set their own cookies, such as analytics providers. These cookies are governed by the respective third parties' privacy policies.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Managing Cookies</h2>
                <p className="text-gray-600 leading-relaxed">
                  You can control and delete cookies through your browser settings. Note that disabling certain cookies may affect the functionality of our website.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Most browsers allow you to:
                </p>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li>View what cookies are stored and delete them individually</li>
                  <li>Block third-party cookies</li>
                  <li>Block all cookies from specific sites</li>
                  <li>Block all cookies from being set</li>
                  <li>Delete all cookies when you close your browser</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Updates to This Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Contact</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have questions about our use of cookies, please contact us at privacy@steady.app
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CookiePolicy;
