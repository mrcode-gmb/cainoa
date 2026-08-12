import { motion } from "framer-motion"
import SEO from "../components/SEO"
import PageHero from "../components/shared/PageHero"
import SectionHeading from "../components/shared/SectionHeading"
import CTASection from "../components/shared/CTASection"
import { Button } from "../components/ui/button"
import { ArrowRight, Users, Cpu, Network, Shield, Code, Brain, Lock, Star, Building2 } from "lucide-react"
import { useNavigate } from "react-router-dom"

const teamCapabilities = [
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    count: "8 Engineers",
    desc: "LLM deployment, fine-tuning, RAG pipelines, computer vision, and predictive analytics. Our AI team brings research backgrounds and production deployment experience across healthcare, finance, and government.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    count: "6 Engineers",
    desc: "Zero-trust architecture, penetration testing, cloud security posture management, and incident response. Certified professionals with experience securing critical national infrastructure.",
  },
  {
    icon: Network,
    title: "Cloud & Infrastructure",
    count: "7 Engineers",
    desc: "AWS, Azure, and GCP certified architects. Kubernetes, Terraform, CI/CD, and high-availability systems designed for enterprise reliability and scale.",
  },
  {
    icon: Code,
    title: "Software Engineering",
    count: "12 Engineers",
    desc: "Full-stack development across TypeScript, Python, Go, and Rust. Microservices architecture, API design, and platform engineering for fintech and enterprise applications.",
  },
  {
    icon: Brain,
    title: "Product & Design",
    count: "4 Engineers",
    desc: "Human-centered design, enterprise UX, and product management. Translating complex technical capabilities into intuitive, accessible interfaces for institutional users.",
  },
  {
    icon: Lock,
    title: "Compliance & Governance",
    count: "3 Engineers",
    desc: "ISO 27001, NDPR, GDPR, and PCI DSS compliance specialists. Data protection, risk management, and regulatory alignment for African and international standards.",
  },
]

const principles = [
  {
    icon: Users,
    title: "Lead with Impact",
    desc: "Every decision is measured by its impact on Africa's technological sovereignty and the communities we serve.",
  },
  {
    icon: Star,
    title: "Engineer Trust",
    desc: "Trust is our most valuable asset. We earn it through transparency, security, and unwavering reliability in everything we build.",
  },
  {
    icon: Building2,
    title: "Think Long-Term",
    desc: "We build infrastructure that lasts decades, not quarters. Sustainable systems require patient capital and enduring vision.",
  },
  {
    icon: Cpu,
    title: "Empower Teams",
    desc: "Great leaders build great teams. We invest in our people, foster ownership, and create environments where talent thrives.",
  },
]

// TODO: When real leadership is ready to be named publicly, replace this page
// with individual profiles including real names, titles, bios, and LinkedIn links.

export default function Leadership() {
  const navigate = useNavigate()

  return (
    <main>
      <SEO title="Leadership" description="Cainoa's team combines deep expertise in AI, cybersecurity, fintech, and cloud infrastructure to deliver enterprise-grade platforms." path="/leadership" />
      <PageHero
        badge="Our Team"
        title="The Engineers Building Africa's Digital Infrastructure"
        subtitle="Cainoa is a collective of 40+ engineers, architects, and security specialists — one of the deepest technical teams in the region."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <SectionHeading
              title="Team by Discipline"
              subtitle="Our team spans the full technology stack — from embedded systems and hardware to cloud-native architectures, LLM deployment, and zero-trust security."
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamCapabilities.map((cap, i) => {
              const Icon = cap.icon
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="p-8 rounded-3xl border border-border bg-card-bg hover:border-border hover:shadow-md transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-secondary-bg flex items-center justify-center mb-5">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-heading text-xl font-bold text-primary">{cap.title}</h3>
                    <span className="shrink-0 px-3 py-1 rounded-full bg-secondary-bg text-primary text-xs font-semibold whitespace-nowrap">
                      {cap.count}
                    </span>
                  </div>
                  <p className="text-sm text-muted-text leading-relaxed">{cap.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                title="How We Hire"
                subtitle="Every engineer is rigorously selected through a process designed to identify not just technical skill, but architectural thinking, security mindset, and problem-solving creativity."
              />
              <div className="mt-6 space-y-4 text-muted-text leading-relaxed">
                <p>
                  Our engineers come from backgrounds spanning computer science, electrical engineering, mathematics, and physics — with experience across startups, enterprise, government, and research.
                </p>
                <p>
                  We invest heavily in continuous learning: every team member has a personalized development plan, a dedicated learning budget, and access to certifications across AWS, Azure, GCP, Kubernetes, and offensive security.
                </p>
                <p>
                  We are actively hiring across all disciplines. If you share our vision for Africa's digital future, we want to hear from you.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button size="lg" className="rounded-full gap-2 group mt-6" onClick={() => navigate("/careers")}>
                  Join Our Team <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Button>
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
                <Users size={120} className="text-muted-text/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title="Our Leadership Principles" subtitle="The values that define how we lead, build, and grow." align="center" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p, i) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="p-8 rounded-3xl border border-border bg-card-bg hover:border-border hover:shadow-md transition-all duration-500"
                >
                  <Icon size={28} className="text-primary mb-5" />
                  <h3 className="font-heading text-lg font-bold text-primary mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-text leading-relaxed">{p.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="Individual Leadership Profiles"
              subtitle="We believe in leading by example, not by titles. As our team grows, we will introduce our leadership here."
              align="center"
            />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Button size="lg" className="rounded-full gap-2 group mt-6" onClick={() => navigate("/careers")}>
                View Open Positions <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
