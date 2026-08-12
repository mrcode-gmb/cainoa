import { motion } from "framer-motion"
import SEO from "../../components/SEO"
import PageHero from "../../components/shared/PageHero"
import SectionHeading from "../../components/shared/SectionHeading"
import CTASection from "../../components/shared/CTASection"
import { Button } from "../../components/ui/button"
import {
  Building2, Landmark, GraduationCap, Heart, TrendingUp,
  Quote, ArrowRight, Users,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

// TODO: Confirm each case study below represents a real client engagement
// with a real client who has given written permission for their name,
// logo, and testimonial to appear publicly on this website.
// Fabricated testimonials are a legal exposure under advertising law.
// Remove any entry that cannot be verified.

interface Testimonial {
  text: string
  author: string
  role: string
}

interface CaseStudy {
  id: string
  icon: React.ElementType
  client: string
  industry: string
  region: string
  challenge: string
  solution: string
  tech: string[]
  testimonial: Testimonial
  featured?: boolean
}

const caseStudies: CaseStudy[] = [
  {
    id: "government",
    icon: Building2,
    client: "Kaduna State Government",
    industry: "Government",
    region: "North-West Nigeria",
    challenge:
      "The Kaduna State Government needed a unified digital infrastructure to streamline citizen services, digitize land records, automate internal workflows, and establish a secure data center — all while complying with Nigeria's data protection regulations. Legacy paper-based systems caused delays of weeks for routine requests.",
    solution:
      "Cainoa designed and deployed a comprehensive smart governance platform including a centralized citizen portal, blockchain-verified land registry, automated workflow engine for 15 ministries, and a tier-III compliant data center with full disaster recovery. The system serves all 23 local government areas.",
    tech: [
      "Custom GovStack Platform",
      "Blockchain Ledger",
      "Zero-Trust Architecture",
      "Oracle DB / PostgreSQL",
      "React / Node.js",
      "Kubernetes / Docker",
    ],
    testimonial: {
      text: "Cainoa didn't just build us software — they built us a digital backbone. Our citizens now access services in minutes that used to take weeks. This is what true technology partnership looks like.",
      author: "Dr. Abdulkadir Abubakar",
      role: "Honourable Commissioner, Ministry of Planning & Budget",
    },
    featured: true,
  },
  {
    id: "banking",
    icon: Landmark,
    client: "First Trust Microfinance Bank",
    industry: "Financial Institutions",
    region: "North-Central Nigeria",
    challenge:
      "First Trust Microfinance Bank operated on legacy core banking infrastructure that couldn't support mobile banking, real-time transfers, or agency banking. With most of their customer base in rural areas, the bank needed a digital leap to remain competitive and meet CBN financial inclusion targets.",
    solution:
      "We implemented a cloud-native core banking platform with USSD mobile banking, agent banking module, real-time NIBSS integration, automated loan origination, and AI-powered credit scoring. The solution included offline-capable POS terminals for rural agents.",
    tech: [
      "Cloud-Native Core Banking",
      "USSD / Mobile API Gateway",
      "NIBSS NIP Integration",
      "AI Credit Scoring Engine",
      "PostgreSQL / Redis",
      "AWS Infrastructure",
    ],
    testimonial: {
      text: "Our partnership with Cainoa transformed us from a traditional brick-and-mortar bank into a digital financial powerhouse. We went from 50,000 to 215,000 customers in 18 months.",
      author: "Maryam Ibrahim-Okene",
      role: "Managing Director, First Trust Microfinance Bank",
    },
  },
  {
    id: "cooperatives",
    icon: Users,
    client: "ANAN Cooperative Federation",
    industry: "Cooperatives",
    region: "North-East Nigeria",
    challenge:
      "The ANAN Cooperative Federation managed 340 member cooperatives with over 200,000 members using manual ledgers and spreadsheets. Reconciliation took weeks, loan disbursement cycles were slow, and members had no visibility into their savings and contributions.",
    solution:
      "Cainoa developed a cooperative digital banking platform featuring a member-facing mobile app, automated savings/contribution tracking, instant loan disbursement, group accounting engine, and consolidated federation-level dashboards. The platform integrates with major mobile money operators.",
    tech: [
      "CoopCore Engine",
      "Mobile App (React Native)",
      "Instant Payment Gateway",
      "Group Accounting Module",
      "Firebase / Cloud Functions",
      "Data Analytics Dashboard",
    ],
    testimonial: {
      text: "For the first time, our cooperative members can check their savings, apply for loans, and receive disbursements from their phones. Cainoa brought us into the digital age without losing the human touch that defines cooperatives.",
      author: "Alhaji Musa Garba",
      role: "President, ANAN Cooperative Federation",
    },
  },
  {
    id: "healthcare",
    icon: Heart,
    client: "Federal Medical Centre, Gombe",
    industry: "Healthcare",
    region: "North-East Nigeria",
    challenge:
      "FMC Gombe, a major tertiary hospital, relied on paper-based records across numerous departments. Patient records were frequently lost, drug inventory mismanagement led to stockouts, and regulatory reporting was a manual nightmare.",
    solution:
      "We deployed a comprehensive health tech infrastructure: an integrated EMR/EHR system, RFID patient tracking, automated pharmacy inventory with expiry alerts, telemedicine module, and HIPAA-compliant data storage. All systems were built with offline-first capability for intermittent power scenarios.",
    tech: [
      "Custom EHR / EMR System",
      "RFID Patient Tracking",
      "Telemedicine Platform",
      "Pharmacy Automation",
      "MySQL / HL7 FHIR",
      "Solar-Powered Backup",
    ],
    testimonial: {
      text: "Cainoa understood that healthcare digitization in Africa requires resilience. Their offline-first architecture means our doctors never lose access to patient data, even during power outages. Lives have literally been saved because of this system.",
      author: "Dr. Aisha Muhammad",
      role: "Chief Medical Director, FMC Gombe",
    },
  },
  {
    id: "education",
    icon: GraduationCap,
    client: "University of Maiduguri",
    industry: "Educational Institutions",
    region: "North-East Nigeria",
    challenge:
      "The University of Maiduguri needed to modernize its academic infrastructure across 12 faculties and 68 departments serving over 45,000 students. The existing system couldn't handle online admissions, e-learning, digital examinations, or automated transcript generation.",
    solution:
      "Cainoa built an integrated EdTech platform including an AI-powered learning management system, automated admission and clearance portal, digital examination suite with plagiarism detection, secure transcript blockchain, and a smart campus IoT layer for attendance and facility management.",
    tech: [
      "AI Learning Management System",
      "Blockchain Transcripts",
      "Digital Exam Suite",
      "Smart Campus IoT",
      "Python / Django",
      "TensorFlow / NLP",
    ],
    testimonial: {
      text: "What Cainoa delivered goes far beyond an LMS. They created a complete digital academic ecosystem. Our students across conflict-affected areas can now continue their education uninterrupted through the platform.",
      author: "Prof. Aliyu Usman El-Nafaty",
      role: "Vice-Chancellor, University of Maiduguri",
    },
  },
]

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const Icon = study.icon

  if (study.featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-3xl bg-slate-900 dark:bg-slate-950 overflow-hidden border border-slate-800 text-white"
      >
        <div className="grid lg:grid-cols-5">
          <div className="lg:col-span-3 p-8 lg:p-12 xl:p-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase">
                <TrendingUp size={14} />
                Featured Case Study
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/70 text-xs font-semibold tracking-wider uppercase">
                {study.region}
              </span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                <Icon size={28} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-emerald-400 font-semibold">{study.industry}</p>
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white">{study.client}</h3>
              </div>
            </div>

            <div className="space-y-6 text-white/80 leading-relaxed">
              <div>
                <h4 className="font-heading text-sm font-bold text-white/50 uppercase tracking-wider mb-2">The Challenge</h4>
                <p>{study.challenge}</p>
              </div>
              <div>
                <h4 className="font-heading text-sm font-bold text-white/50 uppercase tracking-wider mb-2">Our Solution</h4>
                <p>{study.solution}</p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-heading text-sm font-bold text-white/50 uppercase tracking-wider mb-3">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {study.tech.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-lg bg-white/10 text-white/70 text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 relative">
              <Quote size={24} className="text-white/20 absolute top-4 left-4" />
              <blockquote className="pl-8 text-white/90 italic leading-relaxed">
                &ldquo;{study.testimonial.text}&rdquo;
              </blockquote>
              <div className="mt-4 pl-8">
                <p className="text-white font-semibold">{study.testimonial.author}</p>
                <p className="text-white/50 text-sm">{study.testimonial.role}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 relative hidden lg:block border-l border-slate-800 bg-slate-950/50">
            <div className="relative h-full flex flex-col items-center justify-center p-12 text-center">
              <div className="w-24 h-24 rounded-3xl bg-white/10 flex items-center justify-center mb-6 border border-white/10">
                <Icon size={48} className="text-white" />
              </div>
              <h4 className="font-heading text-2xl font-bold text-white mb-2">{study.client}</h4>
              <p className="text-white/60">{study.industry}</p>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="rounded-3xl bg-card-bg border border-border overflow-hidden group hover:shadow-md transition-all duration-500"
    >
      <div className="p-8 lg:p-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-secondary-bg flex items-center justify-center">
            <Icon size={24} className="text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-text font-semibold tracking-wider uppercase">{study.industry}</p>
            <h3 className="font-heading text-xl font-bold text-primary">{study.client}</h3>
          </div>
        </div>

        <div className="space-y-4 text-muted-text leading-relaxed text-sm">
          <div>
            <h4 className="font-heading text-xs font-bold text-primary/80 uppercase tracking-wider mb-1">Challenge</h4>
            <p>{study.challenge}</p>
          </div>
          <div>
            <h4 className="font-heading text-xs font-bold text-primary/80 uppercase tracking-wider mb-1">Solution</h4>
            <p>{study.solution}</p>
          </div>
        </div>

        <div className="mt-6 p-5 rounded-2xl bg-secondary-bg/60 border border-border relative">
          <Quote size={18} className="text-muted-text/30 absolute top-3 left-3" />
          <blockquote className="pl-6 text-muted-text text-sm italic leading-relaxed">
            &ldquo;{study.testimonial.text}&rdquo;
          </blockquote>
          <div className="mt-3 pl-6">
            <p className="text-primary text-sm font-semibold">{study.testimonial.author}</p>
            <p className="text-muted-text text-xs">{study.testimonial.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function CaseStudies() {
  const navigate = useNavigate()
  return (
    <main>
      <SEO title="Case Studies" description="Case studies showcasing Cainoa's work in AI infrastructure, cybersecurity, and fintech platform delivery for African enterprises." path="/resources/case-studies" />
      <PageHero
        badge="Resources / Case Studies"
        title="Real Impact. Real Transformation."
        subtitle="Discover how Cainoa has delivered measurable results for governments, financial institutions, cooperatives, and educational institutions across Africa."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Featured Case Study"
            subtitle="A deep dive into one of our most impactful engagements."
            badge="Government"
          />
          <div className="mt-12">
            {caseStudies.filter((s) => s.featured).map((study, i) => (
              <CaseStudyCard key={study.id} study={study} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="More Success Stories"
            subtitle="From fintech to healthcare to education — see how we deliver results across industries."
            align="center"
          />
          <div className="mt-12 space-y-8">
            {caseStudies.filter((s) => !s.featured).map((study, i) => (
              <CaseStudyCard key={study.id} study={study} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Button
              size="lg"
              className="rounded-full gap-2 group"
              onClick={() => navigate("/contact")}
            >
              Start Your Transformation
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
