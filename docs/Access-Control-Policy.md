# Steady Money Inc.
# Access Control Policy

**Document Version:** 1.0
**Effective Date:** December 2024
**Last Reviewed:** December 2024
**Next Review Date:** December 2025
**Classification:** Internal
**Owner:** Security Team
**Contact:** buildmoreandmore@gmail.com

---

## 1. Purpose

This Access Control Policy defines the standards, procedures, and controls for managing access to Steady Money Inc.'s production assets, systems, and sensitive data. The policy ensures that access is granted based on the principles of least privilege and business need, protecting consumer financial data and company resources from unauthorized access.

## 2. Scope

This policy applies to:
- All production systems and infrastructure
- All databases containing consumer data
- All cloud services (Supabase, Vercel, Plaid)
- All employees, contractors, and third-party service providers
- Physical access to any company facilities or equipment
- Consumer financial data obtained through Plaid integration

## 3. Access Control Principles

### 3.1 Least Privilege
Users are granted the minimum level of access necessary to perform their job functions. Access rights are regularly reviewed and adjusted as responsibilities change.

### 3.2 Need-to-Know
Access to sensitive data, including consumer financial information, is restricted to individuals who require it for legitimate, documented business purposes.

### 3.3 Separation of Duties
Critical functions are divided among multiple individuals to prevent fraud, errors, and unauthorized actions. No single individual has complete control over sensitive processes.

### 3.4 Defense in Depth
Multiple layers of security controls protect sensitive systems and data, ensuring that the failure of one control does not result in unauthorized access.

## 4. Access Control Categories

### 4.1 Production System Access

| Access Level | Description | Personnel | Controls |
|--------------|-------------|-----------|----------|
| Administrator | Full system access | Security Owner only | MFA, audit logging, approval required |
| Developer | Deploy and debug access | Authorized developers | MFA, code review, limited scope |
| Read-Only | View logs and metrics | Operations team | MFA, no data modification |
| No Access | Default state | All others | Access denied by default |

### 4.2 Database Access (Consumer Data)

| Access Level | Description | Approval Required | Logging |
|--------------|-------------|-------------------|---------|
| Production Read | View consumer data | Security Owner | Full audit trail |
| Production Write | Modify consumer data | Prohibited except system | N/A |
| Backup Access | Access encrypted backups | Security Owner | Full audit trail |

### 4.3 Third-Party Service Access

| Service | Access Type | Controls |
|---------|-------------|----------|
| Plaid Dashboard | API management | MFA, role-based access |
| Supabase | Database administration | MFA, IP allowlisting |
| Vercel | Deployment management | MFA, team permissions |
| GitHub | Source code | MFA, branch protection |

## 5. Authentication Requirements

### 5.1 Multi-Factor Authentication (MFA)

**Required for:**
- All production system access
- All administrative interfaces
- All cloud service dashboards
- All code repositories
- VPN and remote access

**Acceptable MFA Methods:**
- Hardware security keys (preferred)
- Authenticator apps (Google Authenticator, Authy)
- Biometric authentication where supported

**Prohibited:**
- SMS-based authentication for administrative access

### 5.2 Password Requirements

| Requirement | Standard |
|-------------|----------|
| Minimum Length | 12 characters |
| Complexity | Upper, lower, number, special character |
| Expiration | 90 days for privileged accounts |
| History | Cannot reuse last 12 passwords |
| Lockout | 5 failed attempts triggers 30-minute lockout |

### 5.3 Session Management

- Automatic session timeout after 15 minutes of inactivity
- Re-authentication required for sensitive operations
- Concurrent session limits enforced
- Sessions terminated upon password change

## 6. Consumer Application Access

### 6.1 User Authentication
- Email/password with strong password requirements
- Biometric authentication supported (Face ID, Touch ID)
- Session tokens with secure expiration
- Account lockout after failed attempts

### 6.2 Financial Data Access
- Users access only their own financial data
- Household sharing requires explicit consent
- Access tokens stored securely on device
- Plaid connections can be revoked at any time

## 7. Access Management Procedures

### 7.1 Access Request Process

1. **Request Submission**
   - Requestor submits documented access request
   - Business justification required
   - Specific systems and access level identified

2. **Approval**
   - Manager approval required
   - Security Owner approval for production/sensitive data
   - Documented approval retained

3. **Provisioning**
   - Access provisioned per approved request
   - User notified of access and responsibilities
   - Access logged in access management system

4. **Verification**
   - Access verified against approved request
   - Confirmation sent to approvers

### 7.2 Access Review

| Review Type | Frequency | Scope |
|-------------|-----------|-------|
| User Access Review | Quarterly | All user access rights |
| Privileged Access Review | Monthly | Administrative accounts |
| Service Account Review | Quarterly | System and API accounts |
| Third-Party Access Review | Annually | Vendor and contractor access |

**Review Process:**
- Access rights compared to current job responsibilities
- Excessive or unused access identified and revoked
- Findings documented and tracked to completion
- Exceptions require documented approval

### 7.3 Access Revocation

**Immediate Revocation (within 1 hour):**
- Employment termination
- Contract end
- Security incident involvement
- Policy violation

**Timely Revocation (within 24 hours):**
- Role change
- Department transfer
- Project completion

**Revocation Process:**
1. Notification received from HR or management
2. All access disabled across systems
3. Credentials rotated for shared resources
4. Access removal verified and documented
5. Equipment collected if applicable

## 8. Privileged Access Management

### 8.1 Privileged Account Controls

- Privileged accounts separate from daily-use accounts
- Just-in-time access for administrative tasks
- All privileged actions logged and monitored
- Regular rotation of privileged credentials

### 8.2 Emergency Access

- Break-glass procedures documented
- Emergency access requires post-incident review
- All emergency access logged and audited
- Credentials changed after emergency use

## 9. Third-Party Access

### 9.1 Vendor Access Requirements

Before granting access, third parties must:
- Sign confidentiality and data protection agreements
- Demonstrate appropriate security controls
- Agree to access monitoring and audit rights
- Complete security assessment

### 9.2 Vendor Access Controls

- Time-limited access with defined expiration
- Scope limited to specific systems and data
- All access logged and monitored
- Regular review of continued need

### 9.3 Plaid Integration Security

- Plaid access tokens stored server-side only
- Tokens never exposed to client applications
- Token refresh handled securely
- User can revoke Plaid access at any time

## 10. Physical Access Controls

### 10.1 Facility Access
- Access limited to authorized personnel
- Visitor access logged and escorted
- Access credentials not shared
- Lost credentials reported immediately

### 10.2 Equipment Security
- Workstations locked when unattended
- Mobile devices require passcode/biometric
- Encryption required on all devices
- Remote wipe capability enabled

## 11. Monitoring and Audit

### 11.1 Access Logging

All access to production systems and sensitive data is logged:
- User identity
- Timestamp
- Action performed
- Resources accessed
- Source IP address

### 11.2 Log Retention
- Access logs retained for minimum 12 months
- Logs stored securely with integrity protection
- Logs available for audit and investigation

### 11.3 Monitoring
- Real-time alerting for suspicious access patterns
- Failed authentication monitoring
- Privileged action monitoring
- Automated anomaly detection

## 12. Compliance

This policy supports compliance with:
- Plaid's security requirements for data access applications
- Consumer financial data protection requirements
- Industry best practices (NIST, CIS Controls)
- SOC 2 Type II control requirements

## 13. Enforcement

Violations of this policy may result in:
- Immediate access revocation
- Disciplinary action up to termination
- Legal action where appropriate
- Notification to affected parties and regulators

## 14. Policy Review

This policy is reviewed:
- Annually at minimum
- When significant changes occur to systems or regulations
- After security incidents involving access control
- Upon request from auditors or regulators

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | December 2024 | Security Team | Initial policy |

---

## Approval

This Access Control Policy has been reviewed and approved by Steady Money Inc. leadership.

**Approved By:** Martin Francis
**Title:** Founder
**Date:** December 2024

---

**Contact Information**

For questions about this policy:
- Email: buildmoreandmore@gmail.com
- Web: https://steadymoney.app/access-control

---

*This document is proprietary to Steady Money Inc. and intended for internal use and regulatory compliance purposes.*
