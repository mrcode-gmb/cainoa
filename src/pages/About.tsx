import { motion } from "framer-motion"
import SEO from "../components/SEO"
import PageHero from "../components/shared/PageHero"
import SectionHeading from "../components/shared/SectionHeading"
import CTASection from "../components/shared/CTASection"
import { Button } from "../components/ui/button"
import { ArrowRight, Target, Eye, Shield, Cpu, Users, Building2, GraduationCap, Landmark, HeartHandshake } from "lucide-react"
import { useNavigate } from "react-router-dom"

const values = [
  { icon: Shield, title: "Trust & Security", desc: "Every system we build is engineered with zero-trust architecture, AES-256 encryption, and continuous security monitoring." },
  { icon: Cpu, title: "Engineering Excellence", desc: "We house deep engineering talent across AI, cloud infrastructure, and cybersecurity — delivering enterprise-grade systems for African organizations." },
  { icon: Users, title: "African Innovation", desc: "Built by Africans, for Africa — solving real continental challenges with technology." },
  { icon: HeartHandshake, title: "Long-Term Partnership", desc: "We don't just deliver projects. We build lasting relationships with our clients." },
]

const industries = [
  { icon: Building2, name: "Government", desc: "Digital infrastructure for public sector transformation." },
  { icon: Landmark, name: "Financial Institutions", desc: "Secure fintech platforms and payment infrastructure." },
  { icon: GraduationCap, name: "Educational Institutions", desc: "Smart campus systems and EdTech platforms." },
  { icon: Users, name: "Cooperatives", desc: "Digital banking and member management solutions." },
]

// TODO: Verify each timeline entry against the real company history.
// Remove or correct any date, title, or description that cannot be confirmed.
const timeline = [
  { year: "2020", title: "Foundation", desc: "Cainoa was founded with a vision to bridge the AI infrastructure gap in Africa." },
  { year: "2021", title: "First Enterprise Deployments", desc: "Deployed first enterprise AI systems for financial institutions across Africa." },
  { year: "2022", title: "Fintech Platform Launch", desc: "Launched secure payment and cooperative banking infrastructure." },
  { year: "2023", title: "Cybersecurity Practice Established", desc: "Established security operations and zero-trust architecture practice." },
  { year: "2024", title: "Regional Growth", desc: "Expanded operations across multiple states, serving government and enterprise clients." },
  { year: "2025", title: "AI Leadership", desc: "Launched advanced LLM integration services and AI agent frameworks." },
]

export default function About() {
  const navigate = useNavigate()

  return (
    <main>
      <SEO title="About" description="Cainoa is an AI infrastructure and cybersecurity company building secure digital platforms for African enterprises." path="/about" />
      <PageHero
        badge="About Cainoa"
        title="Building Africa's Future Through AI Infrastructure"
        highlight="AI Infrastructure"
        subtitle="Cainoa is an enterprise technology company delivering secure AI systems, fintech platforms, enterprise software, and digital infrastructure for governments, cooperatives, financial institutions, and businesses across Africa."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <SectionHeading title="Our Story" subtitle="From a bold vision to a movement reshaping African enterprise technology." />
              <div className="mt-6 space-y-4 text-muted-text leading-relaxed">
                <p>Cainoa was born from a simple but powerful recognition: Africa's digital future cannot be built with imported solutions designed for other continents.</p>
                <p>We set out to assemble the continent's sharpest engineering minds and build the infrastructure that would power Africa's AI transformation — on our own terms, with our own talent, and for our own people.</p>
                <p>Today, Cainoa stands as a premier AI infrastructure and enterprise technology company trusted across Africa by governments, financial institutions, cooperatives, and educational institutions to deliver mission-critical digital systems.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-secondary-bg via-secondary-bg to-secondary-bg border border-border flex items-center justify-center p-12">
                <Cpu size={120} className="text-muted-text/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="p-10 rounded-3xl bg-white border border-border">
              <Target size={36} className="text-primary mb-6" />
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-text leading-relaxed">To deploy AI infrastructure and enterprise technology that powers Africa's digital transformation, enabling governments, businesses, and institutions to operate at global standards.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="p-10 rounded-3xl bg-white border border-border">
              <Eye size={36} className="text-primary mb-6" />
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-text leading-relaxed">A digitally sovereign Africa where enterprise infrastructure is built by African engineers, powered by African innovation, and trusted by the world.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title="Core Values" subtitle="The principles that guide every system we build and every partnership we form." align="center" />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -4 }} className="p-8 rounded-3xl border border-border bg-white hover:border-border hover:shadow-md transition-all duration-500">
                <v.icon size={28} className="text-primary mb-5" />
                <h3 className="font-heading text-lg font-bold text-primary mb-2">{v.title}</h3>
                <p className="text-sm text-muted-text leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title="Industries We Serve" subtitle="Delivering enterprise infrastructure across Africa's most critical sectors." />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, i) => (
              <motion.div key={ind.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="p-8 rounded-3xl bg-white border border-border text-center group hover:border-border transition-all duration-500">
                <ind.icon size={36} className="text-primary mx-auto mb-4" />
                <h3 className="font-heading text-lg font-bold text-primary mb-2">{ind.name}</h3>
                <p className="text-sm text-muted-text">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title="Company Timeline" subtitle="Our journey from vision to impact." />
          <div className="mt-10 relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div key={item.year} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative md:pl-20">
                  <div className="hidden md:flex absolute left-4 top-1 w-9 h-9 rounded-full bg-primary items-center justify-center">
                    <span className="text-white text-xs font-bold">{item.year.slice(-2)}</span>
                  </div>
                  <div className="md:hidden inline-block px-3 py-1 rounded-full bg-secondary-bg text-primary text-sm font-semibold mb-2">{item.year}</div>
                  <h3 className="font-heading text-xl font-bold text-primary">{item.title}</h3>
                  <p className="mt-2 text-muted-text">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading title="Engineering Excellence" subtitle="Our engineers are the backbone of everything we build." align="center" />
            <div className="mt-6 text-muted-text leading-relaxed text-left max-w-2xl mx-auto space-y-4">
              <p>We don't just hire engineers. We curate them. Every member of our engineering team undergoes a rigorous selection process that tests not just technical ability, but architectural thinking, security mindset, and problem-solving creativity.</p>
              <p>Our team brings expertise from across the full technology stack — from embedded systems and hardware integration to cloud-native architectures, LLM deployment, and zero-trust security frameworks.</p>
            </div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Button size="lg" className="rounded-full gap-2 group mt-6" onClick={() => navigate("/careers")}>
                Join Our Team <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
