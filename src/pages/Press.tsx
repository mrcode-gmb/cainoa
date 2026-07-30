import { motion } from "framer-motion"
import SEO from "../components/SEO"
import PageHero from "../components/shared/PageHero"
import SectionHeading from "../components/shared/SectionHeading"
import CTASection from "../components/shared/CTASection"
import { Button } from "../components/ui/button"
import { ArrowRight, Newspaper, Download } from "lucide-react"
import { useNavigate } from "react-router-dom"

// TODO: Replace featured content below with real, verifiable client engagements
// (with client permission). Remove any item whose facts cannot be confirmed.
const milestones = [
  {
    year: "2020",
    title: "Founded",
    desc: "Cainoa was established with a mission to build enterprise-grade AI infrastructure for African organizations.",
  },
  {
    year: "2021",
    title: "First Enterprise Deployments",
    desc: "Deployed first enterprise AI systems for financial institutions.",
  },
  {
    year: "2022",
    title: "Fintech Platform Launch",
    desc: "Launched secure payment and cooperative banking infrastructure.",
  },
  {
    year: "2023",
    title: "Cybersecurity Practice Established",
    desc: "Formalized security operations, zero-trust architecture, and penetration testing services.",
  },
  {
    year: "2024",
    title: "Regional Growth",
    desc: "Expanded operations to serve government, financial, and educational clients across multiple states.",
  },
  {
    year: "2025",
    title: "AI Leadership",
    desc: "Launched LLM integration services, AI agent frameworks, and expanded engineering team.",
  },
]

export default function Press() {
  const navigate = useNavigate()

  return (
    <main>
      <SEO title="Press" description="Company announcements, milestones, and media resources from Cainoa Technologies." path="/press" />
      <PageHero
        badge="Press & Media"
        title="Company Updates & Milestones"
        subtitle="Stay informed about Cainoa's journey building enterprise AI infrastructure for Africa."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title="Company Timeline" subtitle="Key milestones in Cainoa's journey." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl bg-white border border-border hover:border-border hover:shadow-md transition-all duration-500"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-secondary-bg text-primary text-xs font-semibold mb-3">{item.year}</span>
                <h3 className="font-heading text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-text leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <SectionHeading title="Brand Assets" subtitle="Download our official logos, brand guidelines, and media resources." />
              <p className="mt-4 text-muted-text leading-relaxed">
                Access Cainoa's official brand assets including company logos in various formats, brand style guide, product imagery, and executive headshots. These resources are available for media professionals and partners to use in accordance with our brand guidelines.
              </p>
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                <Button size="lg" className="rounded-full gap-2 group mt-8" onClick={() => {}}>
                  <Download size={18} className="transition-transform group-hover:translate-y-0.5" />
                  Download Press Kit
                </Button>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-secondary-bg via-secondary-bg to-secondary-bg border border-border flex items-center justify-center p-12">
                <Newspaper size={100} className="text-muted-text/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <SectionHeading title="Contact Media Team" align="center" />
            <p className="mt-4 text-muted-text leading-relaxed">
              For press inquiries, interview requests, or media accreditation, our communications team is ready to assist.
              Reach us at <a href="mailto:media@cainoa.com" className="text-accent hover:underline font-medium">media@cainoa.com</a>.
            </p>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-8">
              <Button size="lg" className="rounded-full gap-2 group" onClick={() => navigate("/contact")}>
                Get in Touch <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
