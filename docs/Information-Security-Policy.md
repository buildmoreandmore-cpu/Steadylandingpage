# Steady Money Inc.
# Information Security Policy

**Document Version:** 1.0
**Effective Date:** December 2024
**Last Reviewed:** December 2024
**Next Review Date:** December 2025
**Classification:** Internal
**Owner:** Security Team
**Contact:** buildmoreandmore@gmail.com

---

## 1. Purpose

This Information Security Policy establishes the framework for protecting the confidentiality, integrity, and availability of information assets at Steady Money Inc. ("Steady," "Company," "we," or "us"). This policy ensures that information security risks are identified, assessed, mitigated, and continuously monitored in alignment with industry best practices and regulatory requirements.

## 2. Scope

This policy applies to:
- All employees, contractors, and third-party service providers
- All information systems, applications, and infrastructure
- All data collected, processed, stored, or transmitted by Steady
- Consumer financial data obtained through Plaid integration
- All physical and logical access to company resources

## 3. Information Security Governance

### 3.1 Security Leadership
- **Security Owner:** Responsible for overall security strategy and policy enforcement
- **Development Team:** Implements security controls in application code
- **Operations:** Maintains infrastructure security and monitoring

### 3.2 Responsibilities
- Security policies are reviewed and approved annually
- Security incidents are reported to leadership within 24 hours
- All team members are responsible for adhering to security policies

## 4. Risk Management

### 4.1 Risk Assessment Process
Steady conducts ongoing risk assessments to identify and evaluate information security risks:

1. **Asset Inventory:** Maintain current inventory of all information assets
2. **Threat Identification:** Identify potential threats to each asset category
3. **Vulnerability Assessment:** Regular scanning and penetration testing
4. **Risk Evaluation:** Assess likelihood and impact of identified risks
5. **Risk Treatment:** Implement controls to mitigate unacceptable risks
6. **Continuous Monitoring:** Ongoing monitoring of risk indicators

### 4.2 Risk Categories
- **Consumer Data Risk:** Financial data from Plaid, personal information
- **Infrastructure Risk:** Cloud services, databases, APIs
- **Application Risk:** Mobile app, web services, third-party integrations
- **Operational Risk:** Business processes, vendor management

### 4.3 Risk Mitigation Controls
| Risk Category | Primary Controls |
|---------------|------------------|
| Data Breach | Encryption (AES-256), access controls, monitoring |
| Unauthorized Access | MFA, RBAC, session management |
| Data Loss | Automated backups, disaster recovery |
| Third-Party Risk | Vendor assessments, contractual obligations |

## 5. Access Control

### 5.1 Access Control Principles
- **Least Privilege:** Users receive minimum access necessary
- **Need-to-Know:** Access restricted to business requirements
- **Separation of Duties:** Critical functions divided among personnel

### 5.2 Authentication Requirements
- Multi-Factor Authentication (MFA) required for all production systems
- Minimum 12-character passwords with complexity requirements
- Biometric authentication supported for consumer mobile app
- Session timeout after 15 minutes of inactivity

### 5.3 Access Management
- Access requests require documented approval
- Access reviews conducted quarterly
- Access revoked immediately upon termination
- Privileged access logged and audited

## 6. Data Protection

### 6.1 Data Classification
| Classification | Description | Examples |
|----------------|-------------|----------|
| Confidential | Consumer financial data | Transactions, balances, account numbers |
| Internal | Business operations data | Logs, configurations, internal docs |
| Public | Marketing materials | Website content, public announcements |

### 6.2 Encryption Standards
- **In Transit:** TLS 1.2 or higher for all network communications
- **At Rest:** AES-256 encryption for all stored data
- **Key Management:** Keys stored securely, rotated annually

### 6.3 Consumer Financial Data (Plaid)
- Plaid access tokens stored server-side only (never in client apps)
- Transaction data retained for maximum 24 months
- Data deletion within 30 days of user request
- No consumer financial data sold or shared for marketing

## 7. Network and Infrastructure Security

### 7.1 Network Security Controls
- Firewall protection for all network boundaries
- Intrusion detection and prevention systems
- Network segmentation between environments
- VPN required for administrative access

### 7.2 Cloud Security (Supabase/Vercel)
- SOC 2 Type II compliant providers selected
- Data residency in compliant jurisdictions
- Regular review of provider security certifications
- Encrypted connections to all cloud services

### 7.3 Application Security
- Secure development lifecycle (SDLC) practices
- Code review for all production changes
- Dependency scanning for vulnerabilities
- OWASP Top 10 vulnerability prevention

## 8. Vulnerability Management

### 8.1 Vulnerability Scanning
- Automated scanning of infrastructure and applications
- Third-party penetration testing conducted annually
- Critical vulnerabilities remediated within 72 hours
- High vulnerabilities remediated within 30 days

### 8.2 Patch Management
- Security patches applied within defined SLAs
- Emergency patches for critical vulnerabilities
- Testing in non-production before deployment
- Rollback procedures documented

## 9. Incident Response

### 9.1 Incident Classification
| Severity | Description | Response Time |
|----------|-------------|---------------|
| Critical | Data breach, system compromise | Immediate |
| High | Service disruption, security alert | 4 hours |
| Medium | Policy violation, suspicious activity | 24 hours |
| Low | Minor security event | 72 hours |

### 9.2 Incident Response Phases
1. **Detection:** Monitoring and alerting systems
2. **Containment:** Isolate affected systems
3. **Eradication:** Remove threat from environment
4. **Recovery:** Restore normal operations
5. **Lessons Learned:** Post-incident review and improvements

### 9.3 Breach Notification
- Affected consumers notified within 72 hours of confirmed breach
- Regulatory authorities notified as required by law
- Plaid notified immediately for incidents involving their data

## 10. Business Continuity

### 10.1 Backup and Recovery
- Automated daily backups of all critical data
- Backups encrypted and stored in separate region
- Recovery testing conducted quarterly
- Recovery Point Objective (RPO): 24 hours
- Recovery Time Objective (RTO): 4 hours

### 10.2 Disaster Recovery
- Documented disaster recovery procedures
- Alternate processing capabilities available
- Annual disaster recovery testing

## 11. Third-Party Security

### 11.1 Vendor Assessment
All third-party vendors with access to sensitive data undergo:
- Security questionnaire and assessment
- Review of security certifications (SOC 2, ISO 27001)
- Contractual security and privacy obligations
- Annual reassessment of critical vendors

### 11.2 Key Third Parties
| Vendor | Purpose | Security Standard |
|--------|---------|-------------------|
| Plaid | Financial data aggregation | SOC 2 Type II |
| Supabase | Database and authentication | SOC 2 Type II |
| Vercel | Application hosting | SOC 2 Type II |

## 12. Security Awareness

### 12.1 Training Requirements
- Security awareness training for all personnel
- Role-specific training for developers and administrators
- Phishing awareness and testing
- Annual refresher training

### 12.2 Acceptable Use
- Company resources used for business purposes
- Personal devices must meet security requirements
- Prohibited activities clearly defined
- Violations subject to disciplinary action

## 13. Compliance

### 13.1 Regulatory Compliance
Steady maintains compliance with applicable regulations:
- Consumer financial data protection laws
- State privacy laws (CCPA, etc.)
- Payment card industry standards where applicable
- Plaid's data security requirements

### 13.2 Audit and Assessment
- Internal security assessments quarterly
- External audits as required
- Continuous compliance monitoring
- Findings tracked to remediation

## 14. Policy Management

### 14.1 Policy Review
- Annual review of all security policies
- Updates when significant changes occur
- Version control and change history maintained
- Approval by security leadership required

### 14.2 Exception Process
- Exceptions require documented business justification
- Risk assessment for all exceptions
- Compensating controls required
- Time-limited with regular review

## 15. Enforcement

Violations of this policy may result in:
- Disciplinary action up to and including termination
- Revocation of system access
- Legal action where appropriate
- Notification to relevant authorities

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | December 2024 | Security Team | Initial policy |

---

## Approval

This Information Security Policy has been reviewed and approved by Steady Money Inc. leadership.

**Approved By:** Martin Francis
**Title:** Founder
**Date:** December 2024

---

**Contact Information**

For questions about this policy or to report security concerns:
- Email: buildmoreandmore@gmail.com
- Security Page: https://steadymoney.app/security

---

*This document is proprietary to Steady Money Inc. and intended for internal use and regulatory compliance purposes.*
