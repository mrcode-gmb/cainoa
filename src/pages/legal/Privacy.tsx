import { motion } from "framer-motion"
import SEO from "../../components/SEO"
import PageHero from "../../components/shared/PageHero"
import SectionHeading from "../../components/shared/SectionHeading"
import CTASection from "../../components/shared/CTASection"

import { Shield, Database, Cookie, Share2, Lock, FileText, Mail } from "lucide-react"

const sections = [
  {
    id: "information-we-collect",
    icon: Database,
    title: "Information We Collect",
    content:
      "Cainoa collects only the data necessary to deliver our enterprise AI infrastructure, cybersecurity, and fintech solutions. We are transparent about what we collect and why.",
    bullets: [
      "Account & Contact Information — name, email address, phone number, job title, and organisation details when you create an account, subscribe to our services, or communicate with our team.",
      "Usage & Technical Data — IP address, browser type, device identifiers, operating system, and anonymised interaction logs collected when you access our platform or website.",
      "Service Data — data you intentionally provide to us for processing through our AI, cybersecurity, and fintech platforms, including transaction records, system configurations, and performance metrics.",
      "Communication Records — correspondence with our support, sales, and engineering teams, including emails, chat transcripts, and call recordings made for training and quality assurance purposes.",
      "Payment Information — billing details processed through PCI-DSS-compliant third-party payment processors. Cainoa does not store full payment card numbers on our systems.",
    ],
  },
  {
    id: "how-we-use-your-data",
    icon: Shield,
    title: "How We Use Your Data",
    content:
      "Every piece of data we collect serves a clear, legitimate purpose. We never use your data in ways you haven't authorised.",
    paragraphs: [
      "Service Delivery — To provision, operate, and maintain the Cainoa platforms and infrastructure you have subscribed to, including AI model training, cybersecurity monitoring, and fintech transaction processing.",
      "Account Administration — To manage your account, process billing, provide technical support, and communicate critical service updates, security advisories, or changes to our terms and policies.",
      "Product Improvement — To analyse anonymised usage patterns, identify performance bottlenecks, and develop new features that enhance the reliability, security, and usability of our platforms.",
      "Legal Compliance — To fulfil our obligations under applicable data protection laws, including the Nigeria Data Protection Regulation (NDPR), the General Data Protection Regulation (GDPR), and other relevant regulatory frameworks.",
    ],
  },
  {
    id: "cookies-tracking",
    icon: Cookie,
    title: "Cookies & Tracking",
    content:
      "We use cookies and similar tracking technologies strictly to ensure our platforms function properly, remain secure, and deliver a seamless experience.",
    paragraphs: [
      "Essential Cookies — Required for core platform functionality including authentication, session management, and load balancing. These cannot be disabled and do not require consent.",
      "Analytics Cookies — Anonymised, aggregated data collected via privacy-preserving analytics tools to help us understand platform usage trends and improve performance. These do not identify individual users.",
      "Preference Cookies — Remember your settings, language preferences, and display options so you don't have to reconfigure them on each visit.",
      "We do not use advertising cookies, cross-site tracking, or any technology that sells or monetises your browsing behaviour. Third-party cookies are limited to essential payment processors and infrastructure providers who are contractually bound to our data protection standards.",
    ],
  },
  {
    id: "third-party-sharing",
    icon: Share2,
    title: "Third-Party Sharing",
    content:
      "Cainoa never sells your personal data. We share data only when necessary to deliver our services and only with trusted partners who meet our rigorous security and privacy standards.",
    bullets: [
      "Service Providers — Carefully vetted sub-processors who provide cloud infrastructure, payment processing, customer relationship management, and email delivery services. All sub-processors are bound by data processing agreements that comply with NDPR and GDPR requirements.",
      "Legal Obligations — When required by law, court order, or regulatory authority, we may disclose information necessary to comply with a valid legal request. We will notify you in advance where permitted and will challenge overbroad or unlawful requests.",
      "Business Transfers — In the event of a merger, acquisition, or sale of assets, your data may be transferred as part of that transaction. You will be notified of any change in ownership or data use practices.",
      "We conduct annual security assessments of all third-party providers and maintain a current list of sub-processors available upon request from your account representative.",
    ],
  },
  {
    id: "data-security",
    icon: Lock,
    title: "Data Security",
    content:
      "We protect your data with enterprise-grade security controls designed, tested, and audited to the highest industry standards.",
    paragraphs: [
      "Encryption — All data in transit is encrypted using TLS 1.3. Data at rest is encrypted using AES-256 with regularly rotated keys managed through a hardware security module (HSM).",
      "Access Controls — We enforce strict least-privilege access controls, multi-factor authentication, and comprehensive audit logging across all systems. Access to production data is granted on a need-to-know basis and revoked immediately when no longer required.",
      "Infrastructure Security — Our platforms are hosted in ISO 27001-certified data centres with 24/7 physical security, biometric access controls, redundant power and cooling, and continuous environmental monitoring.",
      "Incident Response — We maintain a 24/7 security operations centre (SOC) staffed by certified cybersecurity professionals. Our incident response plan is tested quarterly, and we commit to notifying affected customers within 24 hours of confirming a security incident involving their data.",
      "Compliance & Audits — Cainoa undergoes annual independent security audits, penetration testing, and vulnerability assessments. We hold certifications including ISO 27001 and SOC 2 Type II, with additional certifications in progress.",
    ],
  },
  {
    id: "your-rights",
    icon: FileText,
    title: "Your Rights",
    content:
      "We believe data protection is a fundamental right. Under the Nigeria Data Protection Regulation (NDPR) and the General Data Protection Regulation (GDPR), you have the following rights regarding your personal data:",
    bullets: [
      "Right of Access — You may request a copy of the personal data we hold about you, along with details of how and why we process it.",
      "Right to Rectification — You may request correction of inaccurate or incomplete personal data at any time.",
      "Right to Erasure — You may request deletion of your personal data where it is no longer necessary for the purposes for which it was collected, subject to legal retention obligations.",
      "Right to Restriction — You may request that we limit the processing of your data in certain circumstances, such as during a dispute over accuracy.",
      "Right to Data Portability — You may request a structured, machine-readable copy of your data for transfer to another service provider.",
      "Right to Object — You may object to the processing of your data for direct marketing or legitimate interests at any time.",
      "Right to Withdraw Consent — Where processing is based on your consent, you may withdraw that consent at any time without affecting the lawfulness of processing carried out before the withdrawal.",
      "To exercise any of these rights, contact our Data Protection Officer at dpo@cainoa.com. We will respond to all legitimate requests within 30 days.",
    ],
  },
  {
    id: "contact-us",
    icon: Mail,
    title: "Contact Us",
    content:
      "If you have questions about this Privacy Policy, wish to exercise your data rights, or need to report a privacy concern, our team is ready to help.",
    contact: {
      email: "privacy@cainoa.com",
      dpo: "dpo@cainoa.com",
      address: "Cainoa Technologies Ltd., Plot 1072, Cadastral Zone B07, Abuja, Nigeria",
    },
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Privacy() {
  return (
    <main>
      <SEO title="Privacy Policy" description="Cainoa's privacy policy — how we collect, use, and protect your personal data in compliance with NDPR and other applicable regulations." path="/legal/privacy" />
      <PageHero
        badge="Legal / Privacy Policy"
        title="Privacy Policy"
        subtitle="Last updated: January 2025. At Cainoa, we take your privacy seriously. This policy describes how we collect, use, and protect your personal data."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {sections.map((section) => (
              <motion.div
                key={section.id}
                id={section.id}
                variants={itemVariants}
                className="scroll-mt-24"
              >
                <div className="rounded-3xl bg-white border border-border p-10 lg:p-14 hover:shadow-xl hover:shadow-md transition-all duration-500">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-secondary-bg flex items-center justify-center shrink-0">
                      <section.icon size={28} className="text-primary" />
                    </div>
                    <SectionHeading
                      title={section.title}
                      subtitle=""
                    />
                  </div>

                  <p className="text-muted-text leading-relaxed mb-6">{section.content}</p>

                  {"bullets" in section && section.bullets && (
                    <ul className="space-y-4">
                      {section.bullets.map((bullet, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: j * 0.05 }}
                          className="flex items-start gap-3 text-muted-text leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                          <span>{bullet}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}

                  {"paragraphs" in section && section.paragraphs && (
                    <div className="space-y-4">
                      {section.paragraphs.map((para, j) => {
                        const [heading, ...rest] = para.split(" — ")
                        return (
                          <motion.div
                            key={j}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: j * 0.05 }}
                          >
                            <p className="text-muted-text leading-relaxed">
                              <span className="font-semibold text-primary">{heading}</span>
                              {rest.length > 0 && <span> — {rest.join(" — ")}</span>}
                            </p>
                          </motion.div>
                        )
                      })}
                    </div>
                  )}

                  {"contact" in section && section.contact && (
                    <div className="mt-8 p-6 rounded-2xl bg-secondary-bg/50 border border-border">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <p className="text-sm font-semibold text-primary mb-1">Privacy Inquiries</p>
                          <a href="mailto:privacy@cainoa.com" className="text-accent hover:underline text-sm">
                            privacy@cainoa.com
                          </a>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-primary mb-1">Data Protection Officer</p>
                          <a href="mailto:dpo@cainoa.com" className="text-accent hover:underline text-sm">
                            dpo@cainoa.com
                          </a>
                        </div>
                      <div>
                          <p className="text-sm font-semibold text-primary mb-1">Address</p>
                          <p className="text-muted-text text-sm leading-relaxed">
                            Cainoa Technologies Ltd., Plot 1072, Cadastral Zone B07, Abuja, Nigeria
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
