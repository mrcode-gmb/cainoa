import { motion } from "framer-motion"
import PageHero from "../../components/shared/PageHero"
import SectionHeading from "../../components/shared/SectionHeading"
import CTASection from "../../components/shared/CTASection"
import { Button } from "../../components/ui/button"
import { Wallet, Banknote, CreditCard, ShieldCheck, ArrowRight, Building2, Users, Globe } from "lucide-react"
import SEO from "../../components/SEO"
import { useNavigate } from "react-router-dom"

const solutions = [
  {
    icon: CreditCard,
    title: "Digital Payments",
    tagline: "Process transactions at scale with zero downtime.",
    description: "Enterprise-grade payment processing engine handling real-time transfers, batch collections, and merchant settlement across multiple channels. Built for the reliability demands of African financial institutions.",
    features: ["Real-time payment processing & routing", "Bulk disbursement & collection engine", "Multi-channel POS, USSD, and web payments", "Automated reconciliation & settlement"],
  },
  {
    icon: Wallet,
    title: "Wallet Systems",
    tagline: "Full-spectrum digital wallet infrastructure.",
    description: "White-label wallet platform powering everything from agent banking to mobile money. Supports tiered KYC, wallet-to-wallet transfers, bill payments, and integration with core banking systems.",
    features: ["Tiered wallet accounts with KYC integration", "Agent network management & float monitoring", "Bill payments, airtime & data bundles", "Real-time balance & transaction history"],
  },
  {
    icon: Building2,
    title: "Cooperative Banking",
    tagline: "Specialized banking for cooperatives and thrift societies.",
    description: "Purpose-built platform for cooperative financial institutions. Manage member contributions, loan disbursements, savings products, and dividend calculations with full regulatory compliance.",
    features: ["Member registration & contribution tracking", "Automated loan origination & repayment", "Savings product management with interest", "Dividend computation & payout engine"],
  },
  {
    icon: Globe,
    title: "Virtual Accounts",
    tagline: "Programmable virtual account management.",
    description: "Dynamic virtual account generation for seamless fund collection and reconciliation. Perfect for fintechs, e-commerce platforms, and enterprises needing real-time payment matching.",
    features: ["On-demand virtual account provisioning", "Real-time payment notification webhooks", "Automated reconciliation & ledger updates", "Multi-bank & multi-currency support"],
  },
  {
    icon: ShieldCheck,
    title: "Payment APIs",
    tagline: "Developer-first payment APIs for rapid integration.",
    description: "RESTful and WebSocket APIs that let your developers integrate powerful payment capabilities in hours, not months. Comprehensive documentation, SDKs, and sandbox testing environments.",
    features: ["RESTful & WebSocket API endpoints", "Language SDKs for Python, JS, PHP, Go", "Sandbox environment with test data", "Webhook-based event notifications"],
  },
  {
    icon: Users,
    title: "Compliance & KYC",
    tagline: "Regulatory-first identity and compliance infrastructure.",
    description: "End-to-end KYC/AML compliance platform with biometric verification, document authentication, and continuous monitoring. Designed to meet CBN and regional regulatory requirements.",
    features: ["Biometric & document-based identity verification", "Automated AML screening & PEP checks", "Ongoing transaction monitoring & reporting", "Regulatory reporting & audit trails"],
  },
  {
    icon: Banknote,
    title: "Fraud Detection",
    tagline: "AI-powered fraud detection and prevention.",
    description: "Machine learning models trained on African transaction patterns detect and block fraud in real time. Behavioral analytics, device fingerprinting, and anomaly detection protect every transaction.",
    features: ["Real-time ML-based fraud scoring", "Behavioral analytics & device fingerprinting", "Rule engine for custom risk policies", "Case management & investigation dashboard"],
  },
  {
    icon: ShieldCheck,
    title: "AI-Powered Risk Scoring",
    tagline: "Predictive intelligence for lending and credit decisions.",
    description: "Alternative credit scoring engine leveraging transaction history, mobile data, and behavioral patterns to assess creditworthiness for underbanked populations across Africa.",
    features: ["Alternative credit scoring models", "Transaction pattern analysis", "Mobile & digital footprint evaluation", "Real-time credit decisioning APIs"],
  },
]

export default function Fintech() {
  const navigate = useNavigate()

  return (
    <main>
      <SEO title="Financial Infrastructure" description="Unified fintech API platform for payments, identity verification, mobile money, and open banking across African markets." path="/solutions/fintech" />
      <PageHero
        badge="Solutions / Financial Infrastructure"
        title="Modern Financial Infrastructure"
        subtitle="Secure, scalable payment systems and digital banking platforms built for African financial institutions and cooperatives."
      />

      <section className="py-16 lg:py-24 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Complete Financial Infrastructure Stack"
            subtitle="End-to-end financial infrastructure powering payments, banking, and compliance for African institutions."
          />
          <div className="mt-10 space-y-6">
            {solutions.map((sol, i) => (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="p-8 lg:p-10 rounded-3xl border border-border bg-card-bg hover:border-border hover:shadow-xl hover:shadow-md transition-all duration-500"
              >
                <div className="grid lg:grid-cols-5 gap-8 items-start">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-secondary-bg flex items-center justify-center shrink-0">
                        <sol.icon size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading text-2xl font-bold text-primary">{sol.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-text font-semibold mb-3">{sol.tagline}</p>
                    <p className="text-muted-text leading-relaxed text-sm">{sol.description}</p>
                  </div>
                  <div className="lg:col-span-3">
                    <div className="grid sm:grid-cols-2 gap-3">
                      {sol.features.map((f) => (
                        <div key={f} className="flex items-start gap-3 p-3 rounded-2xl bg-primary/5">
                          <ArrowRight size={16} className="text-primary mt-0.5 shrink-0" />
                          <span className="text-sm text-primary font-medium">{f}</span>
                        </div>
                      ))}
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
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="Enterprise-Grade Security"
              subtitle="Every layer of our financial infrastructure stack is built with encryption, zero-trust architecture, and full regulatory compliance."
              align="center"
            />
            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-3xl border border-border bg-card-bg hover:border-border hover:shadow-xl hover:shadow-md transition-all duration-500"
              >
                <ShieldCheck size={32} className="text-primary mb-4 mx-auto" />
                <h3 className="font-heading text-lg font-bold text-primary mb-2">PCI DSS Level 1</h3>
                <p className="text-sm text-muted-text">Highest level of payment card industry compliance.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-3xl border border-border bg-card-bg hover:border-border hover:shadow-xl hover:shadow-md transition-all duration-500"
              >
                <Globe size={32} className="text-primary mb-4 mx-auto" />
                <h3 className="font-heading text-lg font-bold text-primary mb-2">ISO 27001</h3>
                <p className="text-sm text-muted-text">International standard for information security management.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-3xl border border-border bg-card-bg hover:border-border hover:shadow-xl hover:shadow-md transition-all duration-500"
              >
                <Users size={32} className="text-primary mb-4 mx-auto" />
                <h3 className="font-heading text-lg font-bold text-primary mb-2">NDPR Compliant</h3>
                <p className="text-sm text-muted-text">Full compliance with Nigeria data protection regulations.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="Custom Enterprise Solutions"
              subtitle="Beyond our standard platforms, we design and build bespoke financial systems tailored to your institution's unique requirements."
              align="center"
            />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Button size="lg" className="rounded-full gap-2 group mt-8" onClick={() => navigate("/contact")}>
                Build Your Solution <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
