import { motion } from "framer-motion"
import PageHero from "../../components/shared/PageHero"
import SectionHeading from "../../components/shared/SectionHeading"
import CTASection from "../../components/shared/CTASection"
import { Button } from "../../components/ui/button"
import {
  Shield, Lock, Eye, Network, AlertTriangle,
  Server, ArrowRight, Fingerprint, Radio, Cloud,
  GraduationCap, ShieldCheck, Scan,
} from "lucide-react"
import SEO from "../../components/SEO"
import { useNavigate } from "react-router-dom"

const services = [
  {
    icon: Shield,
    title: "Penetration Testing",
    subtitle: "Comprehensive Security Assessments",
    description:
      "Our red-team engineers simulate real-world attack scenarios against your infrastructure, applications, and personnel. We identify vulnerabilities before malicious actors do and provide actionable remediation roadmaps.",
    features: [
      "External & internal network penetration testing",
      "Web and mobile application security assessments",
      "Social engineering and phishing simulations",
      "Cloud infrastructure security reviews",
      "API and microservices vulnerability analysis",
      "Detailed remediation roadmaps with prioritisation",
    ],
  },
  {
    icon: Lock,
    title: "Zero Trust Architecture",
    subtitle: "Never Trust, Always Verify",
    description:
      "We design and implement zero-trust frameworks that eliminate implicit trust across your network. Every access request is authenticated, authorised, and continuously validated — regardless of origin.",
    features: [
      "Micro-segmentation and software-defined perimeters",
      "Identity-aware proxy and just-in-time access",
      "Continuous authentication and session monitoring",
      "Zero-trust network access (ZTNA) deployment",
      "Policy engine and attribute-based access control",
      "Legacy system zero-trust migration strategies",
    ],
  },
  {
    icon: Fingerprint,
    title: "Identity & Access Management",
    subtitle: "Enterprise IAM Solutions",
    description:
      "Centralised identity governance that ensures the right people access the right resources at the right time. Our IAM solutions span the full identity lifecycle from provisioning to decommissioning.",
    features: [
      "Single sign-on (SSO) and multi-factor authentication",
      "Privileged access management (PAM)",
      "Identity lifecycle and governance administration",
      "Role-based and attribute-based access control",
      "Federated identity management (SAML, OIDC, SCIM)",
      "User behaviour analytics for anomaly detection",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    subtitle: "Protect Your Cloud Estate",
    description:
      "Comprehensive cloud security posture management across AWS, Azure, and GCP. We harden configurations, enforce compliance policies, and continuously monitor for misconfigurations and threats.",
    features: [
      "Cloud security posture management (CSPM)",
      "Cloud workload protection platforms (CWPP)",
      "Infrastructure-as-code security scanning",
      "Serverless and container security",
      "Cloud SIEM and threat detection",
      "Compliance automation for cloud environments",
    ],
  },
  {
    icon: Network,
    title: "Data Encryption",
    subtitle: "Enterprise Cryptographic Standards",
    description:
      "End-to-end encryption solutions that protect data at rest, in transit, and in use. We implement cryptographic frameworks aligned with international standards and regulatory requirements.",
    features: [
      "AES-256 and ChaCha20 encryption deployment",
      "TLS 1.3 and mTLS implementation",
      "Hardware security module (HSM) integration",
      "Database and file-level transparent encryption",
      "Key management lifecycle and rotation policies",
      "Homomorphic encryption for privacy-preserving computation",
    ],
  },
  {
    icon: Radio,
    title: "Threat Intelligence",
    subtitle: "Proactive Threat Detection",
    description:
      "Actionable threat intelligence powered by global feeds, dark-web monitoring, and AI-driven analysis. We correlate indicators of compromise with your environment to detect threats before they escalate.",
    features: [
      "Open-source and commercial threat feed aggregation",
      "Dark-web and underground forum monitoring",
      "AI-powered threat correlation and scoring",
      "Indicator of compromise (IoC) management",
      "Threat hunting and adversary profiling",
      "Real-time threat intelligence feeds to SIEM",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Compliance",
    subtitle: "Regulatory Compliance & Governance",
    description:
      "End-to-end compliance management that aligns your organisation with local and international regulatory frameworks. We map controls, automate evidence collection, and streamline audit readiness.",
    features: [
      "NDPR and data protection compliance",
      "ISO 27001, SOC 2, PCI DSS readiness",
      "Regulatory control mapping and gap analysis",
      "Automated compliance monitoring and reporting",
      "Policy development and governance frameworks",
      "Audit preparation and remediation support",
    ],
  },
  {
    icon: Eye,
    title: "Risk Assessment",
    subtitle: "Enterprise Risk Management",
    description:
      "Quantitative and qualitative risk assessments that provide a clear picture of your cybersecurity posture. We identify, prioritise, and mitigate risks across people, process, and technology domains.",
    features: [
      "Business impact analysis (BIA)",
      "Threat and vulnerability risk ranking",
      "Third-party and vendor risk assessments",
      "Residual risk calculation and risk appetite alignment",
      "Board-ready risk reporting and dashboards",
      "Continuous risk monitoring and re-assessment",
    ],
  },
  {
    icon: Scan,
    title: "Vulnerability Assessment & Penetration Testing (VAPT)",
    subtitle: "Comprehensive Security Testing",
    description:
      "Full-spectrum vulnerability assessment and penetration testing that covers your entire attack surface. Our certified testers combine automated scanning with manual exploitation to uncover weaknesses across networks, applications, and cloud environments.",
    features: [
      "Internal and external network vulnerability assessments",
      "Web and mobile application penetration testing",
      "Cloud infrastructure security reviews (AWS, Azure, GCP)",
      "API and microservices security testing",
      "Social engineering and physical security assessments",
      "Remediation verification and regression testing",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Blue Team / Managed Detection & Response",
    subtitle: "Defensive Security Operations",
    description:
      "24/7 managed detection and response powered by certified security analysts and AI-driven correlation. Our Blue Team defends your environment against advanced threats through continuous monitoring, threat hunting, and rapid incident response.",
    features: [
      "Security operations centre (SOC) as a service",
      "Managed detection and response (MDR)",
      "Endpoint detection and response (EDR) deployment",
      "SIEM architecture, tuning, and management",
      "Threat hunting and adversary tracking",
      "Incident response planning and tabletop exercises",
    ],
  },
  {
    icon: GraduationCap,
    title: "Cybersecurity Training & Awareness",
    subtitle: "Build Your Security Culture",
    description:
      "Practical, role-based cybersecurity training programmes that transform your workforce from your biggest risk into your strongest defence. We deliver engaging content tailored to technical and non-technical audiences alike.",
    features: [
      "Security awareness and phishing simulation programmes",
      "Technical training: ethical hacking, incident response, cloud security",
      "Executive briefings and board-level risk communication",
      "Custom curriculum development aligned to your threat profile",
      "Capture-the-flag (CTF) exercises and hands-on labs",
      "Measurable behaviour change and reporting metrics",
    ],
  },
]

const partners = [
  { name: "AWS", role: "Cloud Infrastructure Partner" },
  { name: "Cisco", role: "Technology Partner" },
  { name: "Palo Alto Networks", role: "Technology Partner" },
  { name: "Fortinet", role: "Technology Partner" },
]

export default function Cybersecurity() {
  const navigate = useNavigate()

  return (
    <main>
      <SEO title="Cybersecurity" description="Enterprise cybersecurity services including VAPT, Blue Team operations, zero trust architecture, and compliance for African organisations." path="/solutions/cybersecurity" />
      <PageHero
        badge="Solutions / Cybersecurity"
        title="Security Built Into Every Layer"
        highlight="Every Layer"
        subtitle="Enterprise cybersecurity architecture protecting Africa's most critical digital infrastructure."
      />



      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                badge="Security Monitoring"
                title="Continuous Security Surveillance"
                subtitle="24/7 threat monitoring and incident response by certified security analysts."
              />
              <div className="mt-8 space-y-4 text-muted-text leading-relaxed">
                <p>
                  Our security operations framework provides continuous monitoring of your
                  digital estate for threats, anomalies, and advanced persistent threats.
                  Certified analysts powered by AI-driven correlation engines deliver the
                  vigilance that enterprise security demands.
                </p>
                <p>
                  From initial triage to full incident response and forensic investigation, our
                  teams follow industry-leading frameworks including NIST, MITRE ATT&CK, and
                  ISO 27035 to ensure consistent, repeatable, and effective security operations.
                </p>
              </div>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  "Real-time threat monitoring and alerting",
                  "MITRE ATT&CK-aligned threat hunting",
                  "Automated playbook-based incident response",
                  "Dedicated security analyst coverage",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-muted-text">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-secondary-bg via-secondary-bg to-secondary-bg border border-border flex items-center justify-center p-12">
                <Server size={100} className="text-muted-text/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Enterprise Cybersecurity Services"
            subtitle="Comprehensive security solutions engineered for Africa's most critical infrastructure."
            align="center"
          />
          <div className="mt-8 space-y-16">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <service.icon size={36} className="text-primary mb-5" />
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary-bg text-primary text-xs font-semibold tracking-wider uppercase mb-3">
                    {service.subtitle}
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-primary leading-tight mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-text leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-sm text-muted-text">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-secondary-bg via-secondary-bg to-secondary-bg border border-border flex items-center justify-center p-12">
                    <service.icon size={80} className="text-muted-text/20" />
                  </div>
                </div>
              </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Trusted by Industry Leaders"
            subtitle="Our security partnerships and certifications ensure enterprise-grade service delivery."
            align="center"
          />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-card-bg border border-border text-center group hover:border-border hover:shadow-xl hover:shadow-md transition-all duration-500"
              >
                <h3 className="font-heading text-xl font-bold text-primary mb-1">
                  {p.name}
                </h3>
                <p className="text-sm text-muted-text">{p.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="Ready to Secure Your Infrastructure?"
              subtitle="Partner with Cainoa's cybersecurity division to protect what matters most."
              align="center"
            />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Button
                size="lg"
                className="rounded-full gap-2 group mt-8"
                onClick={() => navigate("/contact")}
              >
                Schedule a Consultation
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
