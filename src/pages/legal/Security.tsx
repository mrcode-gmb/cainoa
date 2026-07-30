import { motion } from "framer-motion"
import SEO from "../../components/SEO"
import PageHero from "../../components/shared/PageHero"
import SectionHeading from "../../components/shared/SectionHeading"
import CTASection from "../../components/shared/CTASection"
import {
  Shield, Lock, Server, Key, Eye, Activity, Bell, AlertTriangle, ArrowRight,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

const encryptionStandards = [
  {
    icon: Lock,
    title: "AES-256 Encryption",
    description:
      "All data at rest is encrypted using AES-256 with Galois/Counter Mode (GCM). Our key management infrastructure uses hardware security modules (HSMs) with automated key rotation and strict access controls.",
    metric: "256-bit",
    metricLabel: "Key Strength",
  },
  {
    icon: Shield,
    title: "TLS 1.3 Protocol",
    description:
      "All data in transit is protected by TLS 1.3, the latest cryptographic protocol standard. We enforce ciphersuite restrictions, disable legacy protocols, and implement certificate pinning across all endpoints.",
    metric: "TLS 1.3",
    metricLabel: "Protocol Version",
  },
  {
    icon: Server,
    title: "End-to-End Encryption",
    description:
      "Customer payloads are encrypted end-to-end with per-session ephemeral keys derived via X25519 ECDH key exchange. Zero-knowledge architecture ensures Cainoa cannot access customer data plaintext.",
    metric: "E2EE",
    metricLabel: "Encryption Model",
  },
]

const infrastructure = [
  {
    icon: Server,
    title: "Cloud Security",
    description:
      "Multi-cloud infrastructure deployed across AWS, Azure, and GCP with hardened configurations aligned to CIS benchmarks. Every resource is provisioned through infrastructure-as-code with automated compliance scanning.",
    features: [
      "CIS Benchmark-aligned cloud configurations",
      "Infrastructure-as-code with automated drift detection",
      "Cloud security posture management (CSPM)",
      "Workload isolation via Kubernetes namespaces and network policies",
      "Automated vulnerability scanning in CI/CD pipelines",
    ],
  },
  {
    icon: Shield,
    title: "Network Security",
    description:
      "Zero-trust network architecture with micro-segmentation at every layer. All traffic is encrypted, authenticated, and logged. East-west traffic inspection prevents lateral movement within our environments.",
    features: [
      "Zero-trust network architecture with micro-segmentation",
      "Web application firewall (WAF) with OWASP Top 10 coverage",
      "DDoS mitigation via multi-region Anycast and auto-scaling",
      "Network detection and response (NDR) sensors across all segments",
      "Strict egress filtering and DNS security layer",
    ],
  },
]

const accessControls = [
  {
    icon: Key,
    title: "Multi-Factor Authentication",
    description:
      "MFA is enforced for all users — including customers, partners, and internal staff — across every interface. We support TOTP, WebAuthn/FIDO2 hardware keys, push notifications, and backup recovery codes.",
  },
  {
    icon: Shield,
    title: "Single Sign-On",
    description:
      "Enterprise SSO via SAML 2.0 and OpenID Connect. SCIM provisioning automates user lifecycle management. Just-in-time (JIT) provisioning eliminates standing privileges for external identities.",
  },
  {
    icon: Lock,
    title: "Role-Based Access Control",
    description:
      "Granular RBAC with attribute-based policy enforcement. Predefined roles follow least-privilege principles with segregation of duties. All access decisions are logged and auditable in real time.",
  },
]

const complianceItems = [
  {
    title: "NDPC Compliance",
    description:
      "Cainoa's data processing framework aligns with the Nigeria Data Protection Commission (NDPC) requirements. We maintain a Register of Processing Activities (ROPA), conduct Data Protection Impact Assessments (DPIAs), and have designated a Data Protection Officer (DPO) as required by the NDPR.",
    status: "Compliant",
  },
  {
    title: "GDPR Alignment",
    description:
      "Our data protection controls meet the General Data Protection Regulation (GDPR) standards for data processing, storage, and cross-border transfers. Data Processing Agreements (DPAs) are available upon request, and we respect all data subject rights including access, erasure, and portability.",
    status: "Aligned",
  },
  {
    title: "SOC 2 Type II",
    description:
      "We maintain SOC 2 Type II certification covering security, availability, processing integrity, confidentiality, and privacy. Annual audits are conducted by an independent third-party auditor with full transparency for enterprise customers under NDA.",
    status: "Certified",
  },
  {
    title: "ISO 27001",
    description:
      "Our Information Security Management System (ISMS) is certified under ISO/IEC 27001. This framework governs our risk management, asset management, access control, cryptography, physical security, and business continuity practices.",
    status: "Certified",
  },
]

const monitoringItems = [
  {
    icon: Activity,
    title: "24/7 Security Operations",
    description:
      "Our SOC operates around the clock with tiered analyst coverage. SIEM platforms ingest and correlate billions of events daily, feeding into automated playbooks that triage, investigate, and remediate threats within defined SLAs.",
  },
  {
    icon: Eye,
    title: "Threat Intelligence",
    description:
      "Real-time threat intelligence feeds from multiple commercial and open-source sources enrich our detection pipeline. Indicators of compromise (IoCs) are cross-referenced against our telemetry within sub-second latency.",
  },
  {
    icon: Bell,
    title: "Anomaly Detection",
    description:
      "Behavioural analytics models establish baseline patterns for user, system, and network activity. Deviations trigger graded alerts — informational, suspicious, or critical — with automated containment actions for high-severity signals.",
  },
]

const incidentResponse = [
  {
    phase: "Preparation",
    description:
      "Runbooks covering every incident class are maintained and tested quarterly. The incident response team completes tabletop exercises and red-purple team drills to validate detection and response capabilities.",
  },
  {
    phase: "Detection & Analysis",
    description:
      "Automated alerts from SIEM, EDR, and NDR systems feed into a central incident queue. Analysts classify severity using the CVSS framework and begin investigation within defined SLAs — critical within 15 minutes.",
  },
  {
    phase: "Containment & Eradication",
    description:
      "Compromised resources are isolated via automated and manual playbooks. Forensic snapshots are captured before remediation. Root cause analysis is conducted to prevent recurrence and improve detection signatures.",
  },
  {
    phase: "Recovery",
    description:
      "Services are restored from immutable backups after verification of clean state. Validated by independent security tooling. Post-incident reviews feed improvements into our detection pipeline and security controls.",
  },
  {
    phase: "Post-Incident",
    description:
      "Incident reports are delivered to affected customers within 48 hours. Lessons learned are documented, and control enhancements are tracked in our security backlog with defined owners and target dates.",
  },
]

const disclosureBenefits = [
  "Validation of fixes before public disclosure",
  "Public acknowledgment on our security hall of fame",
  "Bounty rewards based on severity (CVSS 3.1)",
  "Legal safe harbour protecting good-faith research",
]

export default function Security() {
  const navigate = useNavigate()

  return (
    <>
      <SEO title="Security" description="Cainoa's security practices — encryption, access controls, compliance certifications, and our responsible disclosure policy." path="/legal/security" />
      <PageHero
        badge="Legal / Security"
        title="Enterprise Security Standards"
        subtitle="Cainoa maintains enterprise security protocols across all infrastructure, platforms, and operations. Here's how we protect your data."
      />

      {/* Encryption Standards */}
      <section className="py-16 lg:py-24 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            badge="Data Protection"
            title="Encryption Standards"
            subtitle="All data is encrypted at rest, in transit, and end-to-end using industry-leading cryptographic standards."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {encryptionStandards.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group p-8 rounded-3xl border border-border bg-white hover:shadow-xl hover:shadow-md transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-secondary-bg flex items-center justify-center mb-6 transition-colors duration-500">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-text leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <span className="text-2xl font-bold text-primary">
                      {item.metric}
                    </span>
                    <span className="block text-sm text-muted-text mt-0.5">
                      {item.metricLabel}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Infrastructure Security */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            badge="Infrastructure"
            title="Infrastructure Security"
            subtitle="Our multi-cloud infrastructure is architected with security as a foundational principle, not an afterthought."
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {infrastructure.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-8 lg:p-10 rounded-3xl border border-border bg-white"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-secondary-bg flex items-center justify-center shrink-0">
                      <Icon size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-text leading-relaxed mb-5">
                        {item.description}
                      </p>
                      <ul className="space-y-2.5">
                        {item.features.map((f) => (
                          <li key={f} className="flex items-start gap-3 text-sm text-muted-text">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Authentication & Access Control */}
      <section className="py-16 lg:py-24 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            badge="Access Control"
            title="Authentication & Access Control"
            subtitle="Defence-in-depth identity security — every access request is authenticated, authorised, and continuously validated."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {accessControls.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="p-8 rounded-3xl border border-border bg-white hover:shadow-xl hover:shadow-md transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-secondary-bg flex items-center justify-center mb-6">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-text leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            badge="Compliance"
            title="Compliance & Certifications"
            subtitle="We adhere to global regulatory frameworks and maintain independent certifications to validate our security posture."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {complianceItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-3xl border border-border bg-white"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold text-primary">
                    {item.title}
                  </h3>
                  <span className="shrink-0 px-3 py-1 rounded-full bg-secondary-bg text-primary text-xs font-semibold tracking-wider uppercase">
                    {item.status}
                  </span>
                </div>
                <p className="text-muted-text leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring & Threat Detection */}
      <section className="py-16 lg:py-24 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            badge="Detection"
            title="Monitoring & Threat Detection"
            subtitle="Our 24/7 Security Operations Centre monitors billions of events daily to detect and neutralise threats in real time."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {monitoringItems.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="p-8 rounded-3xl border border-border bg-white hover:shadow-xl hover:shadow-md transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-secondary-bg flex items-center justify-center mb-6">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-text leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            badge="Response"
            title="Incident Response Plan"
            subtitle="Our structured incident response framework ensures rapid detection, containment, and recovery with full transparency."
          />

          <div className="mt-10 relative">
            <div className="hidden lg:block absolute left-1/2 top-6 bottom-6 w-px bg-border -translate-x-1/2" />

            <div className="space-y-8">
              {incidentResponse.map((item, i) => (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex flex-col ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-start gap-6 lg:gap-12`}
                >
                  <div className="flex-1">
                    <div
                      className={`p-8 rounded-3xl border border-border bg-white ${
                        i % 2 === 0 ? "lg:text-right" : ""
                      }`}
                    >
                      <span className="inline-block px-3 py-1 rounded-full bg-secondary-bg text-primary text-xs font-semibold tracking-wider uppercase mb-3">
                        Phase {i + 1}
                      </span>
                      <h3 className="text-2xl font-bold text-primary mb-3">
                        {item.phase}
                      </h3>
                      <p className="text-muted-text leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-lg font-bold shrink-0 border-4 border-secondary-bg">
                    {i + 1}
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Responsible Disclosure */}
      <section className="py-16 lg:py-24 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <SectionHeading
                badge="Disclosure"
                title="Responsible Disclosure"
                subtitle="Cainoa welcomes security researchers to help us maintain the highest security standards. We commit to investigating and remediating verified vulnerabilities promptly."
              />

              <div className="mt-10 space-y-4">
                {disclosureBenefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 text-muted-text"
                  >
                    <div className="w-5 h-5 rounded-full bg-secondary-bg flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    {benefit}
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ x: 4 }}
                onClick={() => navigate("/contact")}
                className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold hover:bg-accent/90 transition-colors duration-300"
              >
                Report a Vulnerability
                <ArrowRight size={18} />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="p-8 rounded-3xl bg-white border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-secondary-bg flex items-center justify-center">
                    <AlertTriangle size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary">
                      Disclosure Policy
                    </h3>
                    <p className="text-sm text-muted-text">
                      Our commitment to researchers
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-text">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    Do not access or modify data that does not belong to you
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    Do not perform attacks that could impact availability
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    Provide sufficient details to reproduce the issue
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    Allow reasonable time for remediation before disclosure
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    Report via our encrypted security contact channel
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
