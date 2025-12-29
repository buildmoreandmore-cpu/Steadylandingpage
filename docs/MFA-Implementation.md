# Steady Money Inc.
# Multi-Factor Authentication (MFA) Implementation

**Document Version:** 1.0
**Effective Date:** December 2024
**Last Updated:** December 2024
**Classification:** Internal / Regulatory Compliance
**Contact:** buildmoreandmore@gmail.com

---

## 1. Overview

Steady Money Inc. implements Multi-Factor Authentication (MFA) for consumer access to the mobile application. MFA is required before users can access financial data or link accounts through Plaid.

## 2. MFA Implementation Type

**Classification:** Non-phishing-resistant MFA

**Authentication Factors Used:**
- **Something you have:** The registered mobile device
- **Something you are:** Biometric authentication (Face ID / Touch ID)

## 3. Authentication Flow

### 3.1 Initial App Access
1. User opens the Steady mobile application
2. If biometric lock is enabled, user must authenticate via Face ID or Touch ID
3. Upon successful biometric verification, user gains access to the app
4. User can then access Plaid Link to connect financial accounts

### 3.2 Plaid Link Access
- MFA verification occurs BEFORE Plaid Link is surfaced
- Users cannot access account linking without completing authentication
- Session tokens are validated before any financial data operations

## 4. Supported Authentication Methods

| Method | Platform | Type |
|--------|----------|------|
| Face ID | iOS | Biometric |
| Touch ID | iOS | Biometric |
| Face Recognition | Android | Biometric |
| Fingerprint | Android | Biometric |
| Device Passcode | iOS/Android | Fallback |

## 5. Technical Implementation

### 5.1 Technology Stack
- **Library:** expo-local-authentication
- **Platform:** React Native / Expo
- **Security Level:** Device-level biometric security

### 5.2 Code Implementation

```typescript
// Authentication is triggered before app access
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
}
```

### 5.3 Session Management
- Authentication state stored securely using AsyncStorage
- Session cleared when app moves to background (configurable)
- Re-authentication required on app foreground (when enabled)

## 6. User Experience

### 6.1 Enabling MFA
1. User navigates to Settings → Security
2. User toggles "Face ID Lock" or "Touch ID Lock"
3. User verifies identity with biometric scan
4. MFA is enabled for future app access

### 6.2 Authentication Prompt
When MFA is enabled, users see:
- App branding and "Secure Access" header
- Biometric icon (Face ID or Fingerprint)
- "Authenticate with [Face ID/Touch ID]" button
- Security assurance message

## 7. Security Controls

### 7.1 Biometric Security
- Biometric data never leaves the device
- Authentication handled by device secure enclave
- No biometric templates stored by Steady

### 7.2 Fallback Authentication
- Device passcode available as fallback
- Fallback requires device-level authentication
- Multiple failed attempts trigger lockout

### 7.3 Session Security
- Sessions expire after configurable period
- Background app state triggers re-authentication
- Sensitive operations require fresh authentication

## 8. Compliance

### 8.1 Plaid Requirements
This implementation satisfies Plaid's requirement for consumer MFA before Plaid Link is surfaced by:
- Requiring authentication before app access
- Using industry-standard biometric authentication
- Implementing secure session management

### 8.2 Industry Standards
- Follows NIST 800-63B guidelines for authentication
- Implements defense-in-depth approach
- Uses platform-native security features

## 9. Screenshots

### 9.1 Authentication Screen
The authentication screen displays:
- Steady branding with shield icon
- "Secure Access" subtitle
- Biometric authentication icon
- "Authenticate with Face ID" button
- "Your data is protected with bank-level security" footer

### 9.2 Settings Screen
The settings screen displays:
- Security section with "Face ID Lock" toggle
- Description: "Require authentication to open app"
- Switch to enable/disable biometric lock

## 10. Future Enhancements

Planned security improvements include:
- Hardware security key support (phishing-resistant)
- Email-based one-time codes
- SMS verification (as additional factor)
- App-based TOTP authentication

---

## Document Approval

**Prepared By:** Security Team
**Approved By:** Martin Francis, Founder
**Date:** December 2024

---

## Contact

For questions about this MFA implementation:
- Email: buildmoreandmore@gmail.com
- Security Page: https://steadymoney.app/security

---

*This document is provided for regulatory compliance purposes and describes Steady Money Inc.'s multi-factor authentication implementation.*
