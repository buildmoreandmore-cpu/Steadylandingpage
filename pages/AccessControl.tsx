import React from 'react';
import PageLayout from '../components/PageLayout';

const AccessControl: React.FC = () => {
  return (
    <PageLayout>
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero */}
          <div className="space-y-6">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-steady-teal">Security</p>
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
              Access Control Policy
            </h1>
            <p className="text-gray-400 font-bold uppercase tracking-wider">Last updated: December 2024</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Purpose</h2>
                <p className="text-gray-600 leading-relaxed">
                  This Access Control Policy defines the standards and procedures for managing access to Steady&apos;s production systems, consumer financial data, and sensitive information. The policy ensures that access is granted based on the principle of least privilege and business need.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Scope</h2>
                <p className="text-gray-600 leading-relaxed">
                  This policy applies to all employees, contractors, and third-party service providers who require access to Steady&apos;s systems, applications, and data.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Access Control Principles</h2>
                <ul className="text-gray-600 space-y-3 list-disc list-inside">
                  <li><strong>Least Privilege:</strong> Users are granted the minimum level of access necessary to perform their job functions.</li>
                  <li><strong>Need-to-Know:</strong> Access to sensitive data is restricted to individuals who require it for legitimate business purposes.</li>
                  <li><strong>Separation of Duties:</strong> Critical functions are divided among multiple individuals to prevent fraud and errors.</li>
                  <li><strong>Defense in Depth:</strong> Multiple layers of security controls protect sensitive systems and data.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Authentication Requirements</h2>
                <ul className="text-gray-600 space-y-3 list-disc list-inside">
                  <li><strong>Multi-Factor Authentication (MFA):</strong> Required for all access to production systems and administrative interfaces.</li>
                  <li><strong>Strong Passwords:</strong> Minimum 12 characters with complexity requirements.</li>
                  <li><strong>Biometric Authentication:</strong> Supported for consumer mobile application access (Face ID, Touch ID).</li>
                  <li><strong>Session Management:</strong> Automatic session timeout after 15 minutes of inactivity for sensitive systems.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Access Management Procedures</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Access Request</h3>
                    <p className="text-gray-600 leading-relaxed">
                      All access requests must be submitted through the official request process, approved by the appropriate manager, and documented in the access management system.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Access Review</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Access rights are reviewed quarterly to ensure they remain appropriate. Excessive or unused access is revoked.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Access Revocation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Access is revoked immediately upon termination of employment or contract. Access is modified when job responsibilities change.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Consumer Data Access</h2>
                <p className="text-gray-600 leading-relaxed">
                  Access to consumer financial data received from Plaid or entered by users is strictly controlled:
                </p>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li>Production database access is limited to essential personnel only</li>
                  <li>All access to consumer data is logged and audited</li>
                  <li>Data is encrypted at rest and in transit</li>
                  <li>Access tokens (e.g., Plaid tokens) are stored securely and never exposed to client applications</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Third-Party Access</h2>
                <p className="text-gray-600 leading-relaxed">
                  Third-party service providers (including Plaid, Supabase, and cloud infrastructure providers) are subject to:
                </p>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li>Security assessment and due diligence before engagement</li>
                  <li>Contractual data protection obligations</li>
                  <li>Regular review of access and security practices</li>
                  <li>Compliance with applicable data protection regulations</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Monitoring and Audit</h2>
                <p className="text-gray-600 leading-relaxed">
                  All access to production systems and consumer data is monitored and logged. Logs are retained for a minimum of 12 months and are reviewed for suspicious activity.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Contact</h2>
                <p className="text-gray-600 leading-relaxed">
                  For questions about this policy, contact: <a href="mailto:buildmoreandmore@gmail.com" className="text-steady-teal underline">buildmoreandmore@gmail.com</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AccessControl;
