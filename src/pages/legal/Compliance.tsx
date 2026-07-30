import { motion } from "framer-motion"
import SEO from "../../components/SEO"
import PageHero from "../../components/shared/PageHero"
import SectionHeading from "../../components/shared/SectionHeading"
import CTASection from "../../components/shared/CTASection"
import { BadgeCheck, FileCheck, Shield, Globe, Lock, CheckCircle, ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

const frameworks = [
  {
    icon: BadgeCheck,
    title: "NDPC",
    subtitle: "Nigeria Data Protection Commission",
    what: "The NDPC is Nigeria's primary data protection authority, established under the Nigeria Data Protection Act 2023. It sets the standard for lawful processing of personal data, ensuring citizens' privacy rights are upheld across all sectors.",
    align: "Cainoa aligns fully with NDPC requirements through mandatory Data Protection Impact Assessments, lawful consent mechanisms, data subject access request handling, and breach notification protocols. Our systems are architected with privacy-by-design principles that exceed the minimum compliance thresholds.",
  },
  {
    icon: Shield,
    title: "GDPR",
    subtitle: "General Data Protection Regulation",
    what: "The European Union's gold standard for data protection and privacy. GDPR governs how organizations handle personal data of EU residents, with strict rules around consent, data minimization, right to erasure, and cross-border data transfers.",
    align: "Cainoa implements GDPR-grade controls across all customer-facing platforms, including granular consent management, data portability APIs, automated retention policies, and Data Processing Agreements with every subprocessor. Our architecture supports right-to-erasure workflows and privacy impact assessments as standard practice.",
  },
  {
    icon: FileCheck,
    title: "ISO 27001",
    subtitle: "Information Security Management",
    what: "The internationally recognized standard for information security management systems (ISMS). ISO 27001 provides a systematic framework for managing sensitive company information, ensuring robust risk assessment, security controls, and continuous improvement.",
    align: "Cainoa operates an ISMS aligned with ISO 27001 controls, covering asset management, access control, cryptography, physical security, and incident response. Our security policies are reviewed quarterly and audited annually through independent third-party assessments to maintain certification readiness.",
  },
  {
    icon: Lock,
    title: "PCI DSS",
    subtitle: "Payment Card Industry Data Security Standard",
    what: "A comprehensive set of security standards designed to ensure that all companies that accept, process, store, or transmit credit card information maintain a secure environment. PCI DSS v4.0 introduces enhanced requirements for multi-factor authentication and risk analysis.",
    align: "Cainoa's payment infrastructure operates in a PCI DSS-compliant environment with encrypted cardholder data, segmented network architecture, role-based access controls, and regular vulnerability scans. We never store sensitive authentication data and maintain strict key management practices approved by the payment card industry.",
  },
  {
    icon: Globe,
    title: "SOC 2",
    subtitle: "Service Organization Controls",
    what: "An auditing framework developed by the American Institute of CPAs (AICPA) that evaluates service organizations' controls related to security, availability, processing integrity, confidentiality, and privacy — known as the Trust Services Criteria.",
    align: "Cainoa maintains SOC 2-aligned controls across our cloud infrastructure and SaaS platforms. We enforce logical access controls, monitor system availability, log all administrative actions, and conduct annual penetration testing. Our operations team follows documented change management and incident response procedures that meet Type II examination standards.",
  },
  {
    icon: CheckCircle,
    title: "OWASP Best Practices",
    subtitle: "Open Web Application Security Project",
    what: "A globally recognized community-led framework for application security. The OWASP Top 10 catalogs the most critical security risks to web applications, providing developers with actionable guidance to build secure software from the ground up.",
    align: "Every Cainoa engineering team integrates OWASP guidelines into the software development lifecycle. We conduct automated SAST and DAST scans on every pull request, perform regular threat modeling sessions, and maintain a security champions program. Our secure coding standards are enforced through mandatory peer reviews and pre-production security gates.",
  },
]

const commitmentItems = [
  {
    title: "Data Protection by Design",
    desc: "Privacy is not an afterthought — it is the foundation of every system we architect. All data collection, processing, and storage decisions are guided by the principle of least privilege and purpose limitation.",
  },
  {
    title: "Independent Audits",
    desc: "We engage accredited third-party auditors to evaluate our controls, processes, and compliance posture on an annual basis. Audit reports are reviewed by our board and used to drive continuous improvement across the organization.",
  },
  {
    title: "Employee Training",
    desc: "Every Cainoa team member undergoes mandatory security and privacy training upon onboarding and annually thereafter. Role-specific training ensures that engineers, operations staff, and leadership all understand their compliance responsibilities.",
  },
  {
    title: "Customer Transparency",
    desc: "We provide customers with detailed compliance documentation, including Data Processing Agreements, subprocessor lists, security whitepapers, and incident response timelines. Our compliance team is available for direct inquiries and customer audits.",
  },
  {
    title: "Regulatory Monitoring",
    desc: "Our legal and compliance team continuously monitors regulatory developments across Africa and internationally. We proactively adjust our policies and controls to stay ahead of emerging requirements rather than reacting after enforcement.",
  },
  {
    title: "Incident Response",
    desc: "A dedicated security incident response team operates 24/7 with documented playbooks for containment, eradication, recovery, and notification. We commit to regulatory breach notification within the mandated timeframe for each jurisdiction.",
  },
]

const improvementItems = [
  {
    title: "Quarterly Risk Assessments",
    desc: "We evaluate emerging threats, regulatory changes, and control effectiveness every quarter, adjusting our compliance roadmap accordingly.",
  },
  {
    title: "Penetration Testing",
    desc: "Annual external penetration tests and continuous internal vulnerability scanning ensure our infrastructure remains resilient against evolving attack vectors.",
  },
  {
    title: "Policy Reviews",
    desc: "All security and compliance policies are reviewed and updated at least annually, with out-of-cycle revisions triggered by regulatory changes or significant security events.",
  },
  {
    title: "Compliance Roadmap",
    desc: "We maintain a rolling 12-month compliance roadmap that targets additional certifications, enhanced controls, and expanded regulatory coverage across the jurisdictions we serve.",
  },
]

export default function Compliance() {
  const navigate = useNavigate()

  return (
    <main>
      <SEO title="Compliance" description="Cainoa's regulatory compliance framework — NDPR, ISO 27001, SOC 2, and industry-specific standards for African markets." path="/legal/compliance" />
      <PageHero
        badge="Legal / Compliance"
        title="Meeting Global Standards"
        subtitle="Cainoa aligns with international security and privacy frameworks to ensure our infrastructure meets the highest standards of trust and reliability."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Compliance Framework"
            subtitle="Our infrastructure is built to meet and exceed the most rigorous global compliance standards."
            align="center"
          />
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            {frameworks.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group p-8 lg:p-10 rounded-3xl border border-border bg-white hover:shadow-2xl hover:shadow-md transition-all duration-500"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-secondary-bg flex items-center justify-center shrink-0 transition-colors duration-500">
                    <f.icon size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-primary">{f.title}</h3>
                    <span className="text-sm text-muted-text font-medium">{f.subtitle}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-1.5">What It Means</h4>
                    <p className="text-sm text-muted-text leading-relaxed">{f.what}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-muted-text uppercase tracking-wider mb-1.5">How Cainoa Aligns</h4>
                    <p className="text-sm text-muted-text leading-relaxed">{f.align}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Our Compliance Commitment"
            subtitle="Compliance is not a checkbox — it is a continuous discipline embedded in how we design, build, and operate every system."
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {commitmentItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl border border-border bg-white hover:shadow-xl hover:shadow-md transition-all duration-500"
              >
                <h3 className="font-heading text-lg font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-sm text-muted-text leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                title="Continuous Improvement"
                subtitle="Our compliance posture evolves as threats change, regulations advance, and our infrastructure scales."
              />
              <div className="mt-10 space-y-8">
                {improvementItems.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-secondary-bg flex items-center justify-center shrink-0 mt-0.5">
                      <ArrowRight size={16} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-primary mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-text leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <button
                  onClick={() => navigate("/contact")}
                  className="inline-flex items-center gap-2 mt-10 px-6 py-3 rounded-full bg-accent text-white font-semibold hover:bg-accent/90 transition-colors duration-300 group"
                >
                  Request Compliance Documentation
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-secondary-bg via-secondary-bg to-secondary-bg border border-border flex items-center justify-center p-12">
                <Shield size={120} className="text-muted-text/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
