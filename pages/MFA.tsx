import React from 'react';
import PageLayout from '../components/PageLayout';

const MFA: React.FC = () => {
  return (
    <PageLayout>
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero */}
          <div className="text-center space-y-6">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-steady-teal">Security</p>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              Multi-Factor<br />Authentication
            </h1>
            <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
              Steady Money Inc. implements biometric MFA to protect your financial data before you can access account linking.
            </p>
          </div>

          {/* Document Info */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-gray-400">Version</p>
                <p className="text-lg font-black text-steady-charcoal">1.0</p>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-gray-400">Effective</p>
                <p className="text-lg font-black text-steady-charcoal">Dec 2024</p>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-gray-400">Classification</p>
                <p className="text-lg font-black text-steady-charcoal">Regulatory</p>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-gray-400">Contact</p>
                <a href="mailto:buildmoreandmore@gmail.com" className="text-lg font-black text-steady-teal hover:underline">Email</a>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black uppercase tracking-tight">1. Overview</h2>
            <p className="text-gray-600 font-medium leading-relaxed">
              Steady Money Inc. implements Multi-Factor Authentication (MFA) for consumer access to the mobile application. MFA is required before users can access financial data or link accounts through Plaid.
            </p>
          </div>

          {/* MFA Type */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black uppercase tracking-tight">2. MFA Implementation Type</h2>
            <div className="bg-steady-teal/10 p-8 rounded-3xl border border-steady-teal/20">
              <p className="text-xs font-black uppercase tracking-widest text-steady-teal mb-2">Classification</p>
              <p className="text-2xl font-black text-steady-charcoal">Non-phishing-resistant MFA</p>
              <div className="mt-6 space-y-4">
                <p className="text-sm font-bold uppercase tracking-widest text-gray-500">Authentication Factors Used:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-steady-teal rounded-lg flex items-center justify-center">
                      <iconify-icon icon="solar:smartphone-bold" width="16" className="text-white"></iconify-icon>
                    </div>
                    <span className="font-bold text-steady-charcoal">Something you have:</span>
                    <span className="text-gray-600">The registered mobile device</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-steady-teal rounded-lg flex items-center justify-center">
                      <iconify-icon icon="solar:face-scan-circle-bold" width="16" className="text-white"></iconify-icon>
                    </div>
                    <span className="font-bold text-steady-charcoal">Something you are:</span>
                    <span className="text-gray-600">Biometric authentication (Face ID / Touch ID)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Authentication Flow */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black uppercase tracking-tight">3. Authentication Flow</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 space-y-4">
                <h3 className="text-xl font-black uppercase tracking-tight">Initial App Access</h3>
                <ol className="space-y-3 text-gray-600 font-medium">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-steady-teal rounded-full flex items-center justify-center text-white text-xs font-black shrink-0">1</span>
                    User opens the Steady mobile application
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-steady-teal rounded-full flex items-center justify-center text-white text-xs font-black shrink-0">2</span>
                    If biometric lock is enabled, user must authenticate via Face ID or Touch ID
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-steady-teal rounded-full flex items-center justify-center text-white text-xs font-black shrink-0">3</span>
                    Upon successful biometric verification, user gains access to the app
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-steady-teal rounded-full flex items-center justify-center text-white text-xs font-black shrink-0">4</span>
                    User can then access Plaid Link to connect financial accounts
                  </li>
                </ol>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 space-y-4">
                <h3 className="text-xl font-black uppercase tracking-tight">Plaid Link Access</h3>
                <ul className="space-y-3 text-gray-600 font-medium">
                  <li className="flex items-start gap-2">
                    <iconify-icon icon="solar:check-circle-bold" width="20" className="text-steady-teal shrink-0 mt-0.5"></iconify-icon>
                    MFA verification occurs BEFORE Plaid Link is surfaced
                  </li>
                  <li className="flex items-start gap-2">
                    <iconify-icon icon="solar:check-circle-bold" width="20" className="text-steady-teal shrink-0 mt-0.5"></iconify-icon>
                    Users cannot access account linking without completing authentication
                  </li>
                  <li className="flex items-start gap-2">
                    <iconify-icon icon="solar:check-circle-bold" width="20" className="text-steady-teal shrink-0 mt-0.5"></iconify-icon>
                    Session tokens are validated before any financial data operations
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Supported Methods */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black uppercase tracking-tight">4. Supported Authentication Methods</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-steady-charcoal text-white">
                    <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-widest rounded-tl-2xl">Method</th>
                    <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-widest">Platform</th>
                    <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-widest rounded-tr-2xl">Type</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold">Face ID</td>
                    <td className="px-6 py-4 text-gray-600">iOS</td>
                    <td className="px-6 py-4"><span className="bg-steady-teal/10 text-steady-teal px-3 py-1 rounded-full text-xs font-black uppercase">Biometric</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold">Touch ID</td>
                    <td className="px-6 py-4 text-gray-600">iOS</td>
                    <td className="px-6 py-4"><span className="bg-steady-teal/10 text-steady-teal px-3 py-1 rounded-full text-xs font-black uppercase">Biometric</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold">Face Recognition</td>
                    <td className="px-6 py-4 text-gray-600">Android</td>
                    <td className="px-6 py-4"><span className="bg-steady-teal/10 text-steady-teal px-3 py-1 rounded-full text-xs font-black uppercase">Biometric</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold">Fingerprint</td>
                    <td className="px-6 py-4 text-gray-600">Android</td>
                    <td className="px-6 py-4"><span className="bg-steady-teal/10 text-steady-teal px-3 py-1 rounded-full text-xs font-black uppercase">Biometric</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold rounded-bl-2xl">Device Passcode</td>
                    <td className="px-6 py-4 text-gray-600">iOS/Android</td>
                    <td className="px-6 py-4 rounded-br-2xl"><span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-black uppercase">Fallback</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black uppercase tracking-tight">5. Technical Implementation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center space-y-2">
                <p className="text-xs font-black uppercase tracking-widest text-gray-400">Library</p>
                <p className="text-lg font-black text-steady-charcoal">expo-local-authentication</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center space-y-2">
                <p className="text-xs font-black uppercase tracking-widest text-gray-400">Platform</p>
                <p className="text-lg font-black text-steady-charcoal">React Native / Expo</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center space-y-2">
                <p className="text-xs font-black uppercase tracking-widest text-gray-400">Security Level</p>
                <p className="text-lg font-black text-steady-charcoal">Device-level biometric</p>
              </div>
            </div>
            <div className="bg-steady-charcoal rounded-3xl p-8 overflow-x-auto">
              <pre className="text-sm text-gray-300 font-mono"><code>{`// Authentication is triggered before app access
const result = await LocalAuthentication.authenticateAsync({
  promptMessage: 'Authenticate to access Steady',
  fallbackLabel: 'Use passcode',
  cancelLabel: 'Cancel',
  disableDeviceFallback: false,
});

if (result.success) {
  // Grant access to app and Plaid Link
  await AsyncStorage.setItem('authenticated', 'true');
  router.replace('/(tabs)');
}`}</code></pre>
            </div>
          </div>

          {/* Security Controls */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black uppercase tracking-tight">6. Security Controls</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 space-y-4">
                <div className="w-14 h-14 bg-steady-teal/10 rounded-2xl flex items-center justify-center text-steady-teal">
                  <iconify-icon icon="solar:face-scan-circle-bold-duotone" width="32"></iconify-icon>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight">Biometric Security</h3>
                <ul className="space-y-2 text-gray-600 font-medium text-sm">
                  <li>Biometric data never leaves the device</li>
                  <li>Authentication handled by device secure enclave</li>
                  <li>No biometric templates stored by Steady</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 space-y-4">
                <div className="w-14 h-14 bg-steady-teal/10 rounded-2xl flex items-center justify-center text-steady-teal">
                  <iconify-icon icon="solar:key-bold-duotone" width="32"></iconify-icon>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight">Fallback Auth</h3>
                <ul className="space-y-2 text-gray-600 font-medium text-sm">
                  <li>Device passcode available as fallback</li>
                  <li>Fallback requires device-level authentication</li>
                  <li>Multiple failed attempts trigger lockout</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 space-y-4">
                <div className="w-14 h-14 bg-steady-teal/10 rounded-2xl flex items-center justify-center text-steady-teal">
                  <iconify-icon icon="solar:clock-circle-bold-duotone" width="32"></iconify-icon>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight">Session Security</h3>
                <ul className="space-y-2 text-gray-600 font-medium text-sm">
                  <li>Sessions expire after configurable period</li>
                  <li>Background app state triggers re-authentication</li>
                  <li>Sensitive operations require fresh authentication</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Compliance */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black uppercase tracking-tight">7. Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-steady-teal/10 p-8 rounded-3xl border border-steady-teal/20 space-y-4">
                <h3 className="text-xl font-black uppercase tracking-tight text-steady-teal">Plaid Requirements</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  This implementation satisfies Plaid's requirement for consumer MFA before Plaid Link is surfaced by:
                </p>
                <ul className="space-y-2 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2">
                    <iconify-icon icon="solar:check-circle-bold" width="18" className="text-steady-teal shrink-0 mt-0.5"></iconify-icon>
                    Requiring authentication before app access
                  </li>
                  <li className="flex items-start gap-2">
                    <iconify-icon icon="solar:check-circle-bold" width="18" className="text-steady-teal shrink-0 mt-0.5"></iconify-icon>
                    Using industry-standard biometric authentication
                  </li>
                  <li className="flex items-start gap-2">
                    <iconify-icon icon="solar:check-circle-bold" width="18" className="text-steady-teal shrink-0 mt-0.5"></iconify-icon>
                    Implementing secure session management
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 space-y-4">
                <h3 className="text-xl font-black uppercase tracking-tight">Industry Standards</h3>
                <ul className="space-y-2 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2">
                    <iconify-icon icon="solar:check-circle-bold" width="18" className="text-steady-teal shrink-0 mt-0.5"></iconify-icon>
                    Follows NIST 800-63B guidelines for authentication
                  </li>
                  <li className="flex items-start gap-2">
                    <iconify-icon icon="solar:check-circle-bold" width="18" className="text-steady-teal shrink-0 mt-0.5"></iconify-icon>
                    Implements defense-in-depth approach
                  </li>
                  <li className="flex items-start gap-2">
                    <iconify-icon icon="solar:check-circle-bold" width="18" className="text-steady-teal shrink-0 mt-0.5"></iconify-icon>
                    Uses platform-native security features
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Document Approval */}
          <div className="bg-steady-charcoal rounded-3xl p-12 text-center space-y-6">
            <iconify-icon icon="solar:verified-check-bold" width="48" className="text-steady-teal"></iconify-icon>
            <div className="space-y-2">
              <p className="text-white font-medium">Prepared By: Security Team</p>
              <p className="text-white font-medium">Approved By: Martin Francis, Founder</p>
              <p className="text-gray-400 font-medium">Date: December 2024</p>
            </div>
            <p className="text-gray-400 font-medium text-sm">
              For questions: <a href="mailto:buildmoreandmore@gmail.com" className="text-steady-teal hover:underline">buildmoreandmore@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default MFA;
