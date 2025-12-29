import React from 'react';
import PageLayout from '../components/PageLayout';

const DataRetention: React.FC = () => {
  return (
    <PageLayout>
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero */}
          <div className="space-y-6">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-steady-teal">Security</p>
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
              Data Retention &amp; Disposal Policy
            </h1>
            <p className="text-gray-400 font-bold uppercase tracking-wider">Last updated: December 2024</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Purpose</h2>
                <p className="text-gray-600 leading-relaxed">
                  This Data Retention and Disposal Policy establishes guidelines for the retention, archival, and secure disposal of data collected and processed by Steady. The policy ensures compliance with applicable data protection laws and minimizes risk from retaining unnecessary data.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Scope</h2>
                <p className="text-gray-600 leading-relaxed">
                  This policy applies to all data collected, processed, or stored by Steady, including consumer personal data, financial data from linked accounts, and operational data.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Data Retention Periods</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-gray-600">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 pr-4 font-bold text-gray-800">Data Type</th>
                        <th className="text-left py-3 pr-4 font-bold text-gray-800">Retention Period</th>
                        <th className="text-left py-3 font-bold text-gray-800">Disposal Method</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="py-3 pr-4">Account Information</td>
                        <td className="py-3 pr-4">Duration of account + 30 days</td>
                        <td className="py-3">Secure deletion</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Transaction Data (from Plaid)</td>
                        <td className="py-3 pr-4">24 months or until account deletion</td>
                        <td className="py-3">Secure deletion</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Plaid Access Tokens</td>
                        <td className="py-3 pr-4">Until user disconnects or deletes account</td>
                        <td className="py-3">Secure deletion + Plaid revocation</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">User Preferences</td>
                        <td className="py-3 pr-4">Duration of account</td>
                        <td className="py-3">Secure deletion</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Access Logs</td>
                        <td className="py-3 pr-4">12 months</td>
                        <td className="py-3">Automated purge</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Support Communications</td>
                        <td className="py-3 pr-4">3 years</td>
                        <td className="py-3">Secure deletion</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Consumer Rights</h2>
                <p className="text-gray-600 leading-relaxed">
                  Consumers have the following rights regarding their data:
                </p>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li><strong>Right to Access:</strong> Request a copy of all personal data we hold</li>
                  <li><strong>Right to Correction:</strong> Request correction of inaccurate data</li>
                  <li><strong>Right to Deletion:</strong> Request complete deletion of all personal data</li>
                  <li><strong>Right to Data Portability:</strong> Export data in a machine-readable format</li>
                  <li><strong>Right to Disconnect:</strong> Revoke access to linked financial accounts at any time</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Account Deletion Process</h2>
                <p className="text-gray-600 leading-relaxed">
                  When a user requests account deletion:
                </p>
                <ol className="text-gray-600 space-y-2 list-decimal list-inside">
                  <li>All linked account connections are immediately revoked with Plaid</li>
                  <li>Personal data is marked for deletion within 24 hours</li>
                  <li>Data is permanently deleted from all production systems within 30 days</li>
                  <li>Backup systems are purged according to the backup retention cycle (maximum 90 days)</li>
                  <li>User receives confirmation of deletion completion</li>
                </ol>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Secure Disposal Methods</h2>
                <p className="text-gray-600 leading-relaxed">
                  All data disposal follows secure practices:
                </p>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li><strong>Digital Data:</strong> Cryptographic erasure or secure overwriting</li>
                  <li><strong>Database Records:</strong> Hard deletion with verification</li>
                  <li><strong>Backups:</strong> Encrypted backups are destroyed according to retention schedule</li>
                  <li><strong>Third-Party Data:</strong> Deletion requests sent to service providers (e.g., Plaid token revocation)</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Exceptions</h2>
                <p className="text-gray-600 leading-relaxed">
                  Data may be retained beyond standard periods when required by:
                </p>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li>Legal or regulatory requirements</li>
                  <li>Ongoing legal proceedings or investigations</li>
                  <li>Contractual obligations</li>
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  In such cases, data is retained only as long as necessary and is securely disposed of when the requirement ends.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Policy Review</h2>
                <p className="text-gray-600 leading-relaxed">
                  This policy is reviewed annually or when significant changes occur to our data processing activities or applicable regulations.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Contact</h2>
                <p className="text-gray-600 leading-relaxed">
                  For questions about this policy or to exercise your data rights, contact: <a href="mailto:buildmoreandmore@gmail.com" className="text-steady-teal underline">buildmoreandmore@gmail.com</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default DataRetention;
