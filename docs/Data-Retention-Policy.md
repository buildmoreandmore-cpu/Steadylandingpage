# Steady Money Inc.
# Data Retention & Disposal Policy

**Document Version:** 1.0
**Effective Date:** December 2024
**Last Updated:** December 2024
**Classification:** Internal / Regulatory Compliance
**Contact:** buildmoreandmore@gmail.com

---

## 1. Purpose

This Data Retention and Disposal Policy establishes guidelines for the retention, archival, and secure disposal of data collected and processed by Steady Money Inc. The policy ensures compliance with applicable data protection laws and minimizes risk from retaining unnecessary data.

## 2. Scope

This policy applies to all data collected, processed, or stored by Steady Money Inc., including:
- Consumer personal data
- Financial data from linked accounts (via Plaid)
- Operational data
- Access logs and system data

## 3. Data Retention Periods

| Data Type | Retention Period | Disposal Method |
|-----------|------------------|-----------------|
| Account Information | Duration of account + 30 days | Secure deletion |
| Transaction Data (from Plaid) | 24 months or until account deletion | Secure deletion |
| Plaid Access Tokens | Until user disconnects or deletes account | Secure deletion + Plaid revocation |
| User Preferences | Duration of account | Secure deletion |
| Access Logs | 12 months | Automated purge |
| Support Communications | 3 years | Secure deletion |

## 4. Consumer Rights

Consumers have the following rights regarding their data:

- **Right to Access:** Request a copy of all personal data we hold
- **Right to Correction:** Request correction of inaccurate data
- **Right to Deletion:** Request complete deletion of all personal data
- **Right to Data Portability:** Export data in a machine-readable format
- **Right to Disconnect:** Revoke access to linked financial accounts at any time

## 5. Account Deletion Process

When a user requests account deletion:

1. All linked account connections are immediately revoked with Plaid
2. Personal data is marked for deletion within 24 hours
3. Data is permanently deleted from all production systems within 30 days
4. Backup systems are purged according to the backup retention cycle (maximum 90 days)
5. User receives confirmation of deletion completion

## 6. Secure Disposal Methods

All data disposal follows secure practices:

- **Digital Data:** Cryptographic erasure or secure overwriting
- **Database Records:** Hard deletion with verification
- **Backups:** Encrypted backups are destroyed according to retention schedule
- **Third-Party Data:** Deletion requests sent to service providers (e.g., Plaid token revocation)

## 7. Plaid Data Handling

### 7.1 Data Received from Plaid
- Transaction history
- Account balances
- Account and routing numbers (masked)
- Institution information

### 7.2 Plaid Token Management
- Access tokens stored encrypted at rest
- Tokens revoked immediately upon user request
- No credential data stored (handled by Plaid)

### 7.3 Data Refresh
- Transaction data refreshed periodically while account is linked
- Stale data purged according to retention schedule

## 8. Exceptions

Data may be retained beyond standard periods when required by:

- Legal or regulatory requirements
- Ongoing legal proceedings or investigations
- Contractual obligations

In such cases, data is retained only as long as necessary and is securely disposed of when the requirement ends.

## 9. Data Minimization

Steady Money Inc. practices data minimization:

- Only collect data necessary for service functionality
- Do not retain data longer than required
- Regularly audit stored data for necessity
- Automatically purge expired data

## 10. Policy Review

This policy is reviewed:
- Annually, at minimum
- When significant changes occur to data processing activities
- When applicable regulations change
- After any data security incident

## 11. Compliance

This policy is designed to comply with:

- California Consumer Privacy Act (CCPA)
- General Data Protection Regulation (GDPR) where applicable
- Plaid's data handling requirements
- Industry best practices for financial data

---

## Document Approval

**Prepared By:** Security Team
**Approved By:** Martin Francis, Founder
**Date:** December 2024

---

## Contact

For questions about this policy or to exercise your data rights:
- Email: buildmoreandmore@gmail.com
- Security Page: https://steadymoney.app/security
- Data Retention Policy: https://steadymoney.app/data-retention

---

*This document is provided for regulatory compliance purposes and describes Steady Money Inc.'s data retention and disposal practices.*
