import { motion } from "framer-motion"
import SEO from "../../components/SEO"
import PageHero from "../../components/shared/PageHero"
import CTASection from "../../components/shared/CTASection"
import { Button } from "../../components/ui/button"
import { FileCheck, Scale, Users, Cpu, Shield, AlertTriangle, ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

const sections = [
  {
    icon: FileCheck,
    title: "Acceptance of Terms",
    content:
      "By accessing or using Cainoa's platforms, APIs, software, or services, you agree to be bound by these Terms of Service. If you are entering into these Terms on behalf of an organization, you represent that you have the authority to bind that organization. If you do not agree to all of these Terms, you may not access or use the Services. Cainoa reserves the right to update or modify these Terms at any time without prior notice.",
  },
  {
    icon: Cpu,
    title: "Services Description",
    content:
      "Cainoa provides enterprise AI infrastructure, fintech platforms, cybersecurity solutions, and digital infrastructure services. The scope, features, and specifications of each service are detailed in the applicable service agreement. Cainoa reserves the right to modify, suspend, or discontinue any service with reasonable notice to clients.",
  },
  {
    icon: Users,
    title: "User Responsibilities",
    content:
      "Clients and users agree to use Cainoa's services in compliance with all applicable laws and regulations. Users are responsible for maintaining the confidentiality of their account credentials and for all activities conducted under their account. Any unauthorized use or security breach must be reported to Cainoa immediately.",
  },
  {
    icon: Scale,
    title: "Intellectual Property",
    content:
      "All intellectual property rights in Cainoa's platforms, software, documentation, and technologies remain the exclusive property of Cainoa. Client data remains the property of the client. Cainoa is granted a license to process client data solely for the purpose of providing the contracted services.",
  },
  {
    icon: Shield,
    title: "Limitation of Liability",
    content:
      "Cainoa's liability for any claim arising from the use of its services is limited to the fees paid by the client for the specific service giving rise to the claim. Cainoa shall not be liable for indirect, incidental, or consequential damages, including loss of data, revenue, or business opportunities.",
  },
  {
    icon: AlertTriangle,
    title: "Termination",
    content:
      "Either party may terminate a service agreement in accordance with the notice periods specified in the applicable contract. Upon termination, Cainoa will return or delete client data in accordance with the agreement. Cainoa may suspend services immediately for violations of these Terms or applicable law.",
  },
  {
    icon: FileCheck,
    title: "Governing Law",
    content:
      "These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising from these Terms shall be resolved through arbitration in accordance with the Arbitration and Conciliation Act, with the venue in Kaduna State, Nigeria.",
  },
]

export default function Terms() {
  const navigate = useNavigate()

  return (
    <main>
      <SEO title="Terms of Service" description="Cainoa's terms of service — the conditions governing your use of Cainoa's platforms, APIs, and services." path="/legal/terms" />
      <PageHero
        badge="Legal / Terms of Service"
        title="Terms of Service"
        subtitle="Last updated: January 2025. These terms govern your use of Cainoa's platforms, APIs, and services."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-8">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-8 rounded-3xl bg-white border border-border hover:shadow-xl hover:shadow-md transition-all duration-500"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary-bg to-secondary-bg border border-border flex items-center justify-center">
                  <section.icon size={22} className="text-primary" />
                </div>
                <div>
                  <h2 className="font-heading text-xl font-bold text-primary mb-3">{section.title}</h2>
                  <p className="text-muted-text leading-relaxed">{section.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-secondary-bg/50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <p className="text-muted-text mb-6">For questions about these terms, please contact our legal team at <span className="text-muted-text font-medium">legal@cainoa.com</span></p>
          <Button variant="outline" size="lg" className="rounded-full" onClick={() => navigate("/about")}>
            Contact Our Team <ArrowRight size={18} className="ml-1" />
          </Button>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
