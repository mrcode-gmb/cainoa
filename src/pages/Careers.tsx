import { useState } from "react"
import { motion } from "framer-motion"
import SEO from "../components/SEO"
import PageHero from "../components/shared/PageHero"
import SectionHeading from "../components/shared/SectionHeading"
import CTASection from "../components/shared/CTASection"
import { Button } from "../components/ui/button"
import {
  ArrowRight,
  Briefcase,
  Users,
  GraduationCap,
  Globe,
  Heart,
  Star,
  TrendingUp,
  Cpu,
  MapPin,
  ChevronDown,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

const whyWorkData = [
  {
    icon: Globe,
    title: "Impact",
    desc: "Build infrastructure that powers Africa's digital transformation and touches millions of lives across the continent.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    desc: "Accelerate your career with cutting-edge projects, mentorship from senior engineers, and clear advancement paths.",
  },
  {
    icon: Cpu,
    title: "Innovation",
    desc: "Work with the latest AI, cloud, and cybersecurity technologies on truly ambitious problems that matter.",
  },
  {
    icon: Users,
    title: "Culture",
    desc: "Join a diverse team of passionate engineers committed to excellence, collaboration, and continuous learning.",
  },
]

const benefitsData = [
  {
    icon: Star,
    title: "Competitive Compensation",
    desc: "Industry-leading salaries, equity options, and performance bonuses that reward exceptional contributions.",
  },
  {
    icon: Globe,
    title: "Remote Options",
    desc: "Flexible remote and hybrid arrangements that let you do your best work from anywhere in the world.",
  },
  {
    icon: GraduationCap,
    title: "Professional Development",
    desc: "Dedicated learning budget, conference access, certifications, and internal training programs to keep you growing.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    desc: "Comprehensive health coverage, wellness stipends, and mental health support for you and your family.",
  },
]

const positionsData = [
  { title: "Senior AI Engineer", location: "Abuja, Nigeria", type: "Full-time" },
  { title: "Fintech Platform Lead", location: "Kano, Nigeria", type: "Full-time" },
  { title: "Cybersecurity Analyst", location: "Remote", type: "Full-time" },
  { title: "Enterprise Architect", location: "Abuja, Nigeria", type: "Full-time" },
  { title: "Cloud Infrastructure Engineer", location: "Remote", type: "Full-time" },
  { title: "Product Designer", location: "Lagos, Nigeria", type: "Full-time" },
]

const hiringSteps = [
  { step: "01", title: "Apply", desc: "Submit your resume and a brief cover letter telling us why you want to build Africa's future." },
  { step: "02", title: "Screening", desc: "A 30-minute call with our talent team to learn about your experience, skills, and career goals." },
  { step: "03", title: "Technical Assessment", desc: "A practical challenge designed to showcase your problem-solving abilities and architectural thinking." },
  { step: "04", title: "Culture Fit", desc: "Meet the team and leadership to ensure mutual alignment on values, working style, and vision." },
  { step: "05", title: "Offer", desc: "Receive a competitive offer package and begin your journey building Africa's infrastructure." },
]

const faqData = [
  {
    q: "What technical stack does Cainoa use?",
    a: "We work across the full technology stack including Python, Go, Rust, React, TypeScript, cloud-native architectures (AWS/GCP/Azure), Kubernetes, LLM frameworks, and zero-trust security systems. Our engineers are encouraged to use the best tools for each challenge.",
  },
  {
    q: "Does Cainoa offer remote work options?",
    a: "Yes. We believe talent is everywhere. Many of our roles offer fully remote or hybrid arrangements. We provide the tools, infrastructure, and support to ensure you can work effectively regardless of location.",
  },
  {
    q: "What is the typical hiring timeline?",
    a: "Our hiring process typically takes 2–3 weeks from application to offer. We move quickly and respect your time, keeping you informed and updated at every stage of the process.",
  },
  {
    q: "Are there growth and promotion opportunities?",
    a: "Absolutely. We invest heavily in our people. Every team member has a personalized development plan, access to mentorship, a dedicated learning budget, and clear, transparent criteria for advancement.",
  },
]

export default function Careers() {
  const navigate = useNavigate()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main>
      <SEO title="Careers" description="Join Cainoa's team of engineers, researchers, and cybersecurity professionals shaping Africa's digital future." path="/careers" />
      <PageHero
        badge="Careers"
        title="Join the Engineers Building Tomorrow"
        highlight="Building Tomorrow"
        subtitle="At Cainoa, you'll work on Africa's most ambitious infrastructure projects alongside the brightest minds in engineering."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title="Why Work at Cainoa" subtitle="More than a job — a chance to shape the future of African technology." align="center" />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyWorkData.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl border border-border bg-white hover:border-border hover:shadow-md transition-all duration-500"
              >
                <item.icon size={28} className="text-primary mb-5" />
                <h3 className="font-heading text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-text leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title="Benefits" subtitle="We take care of our team so they can focus on doing their best work." />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefitsData.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-border group hover:border-border transition-all duration-500"
              >
                <item.icon size={36} className="text-primary mb-4" />
                <h3 className="font-heading text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-text leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title="Open Positions" subtitle="Join the team building Africa's enterprise infrastructure." />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {positionsData.map((pos, i) => (
              <motion.div
                key={pos.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl border border-border bg-white hover:border-border hover:shadow-md transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary-bg flex items-center justify-center">
                    <Briefcase size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-primary">{pos.title}</h3>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-secondary-bg text-primary text-xs font-semibold">
                      {pos.type}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-text">
                  <MapPin size={14} />
                  {pos.location}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <Button size="lg" className="rounded-full gap-2 group">
              View All Openings <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title="Hiring Process" subtitle="A transparent, structured, and respectful process designed to find the best fit." align="center" />
          <div className="mt-10 relative">
            <div className="absolute left-[23px] top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-8">
              {hiringSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative md:pl-20"
                >
                  <div className="hidden md:flex absolute left-0 top-1 w-12 h-12 rounded-full bg-primary items-center justify-center">
                    <span className="text-white text-sm font-bold">{step.step}</span>
                  </div>
                  <div className="md:hidden inline-block px-3 py-1 rounded-full bg-secondary-bg text-primary text-sm font-semibold mb-2">{step.step}</div>
                  <h3 className="font-heading text-xl font-bold text-primary">{step.title}</h3>
                  <p className="mt-2 text-muted-text leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
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
                title="Internship & Graduate Programs"
                subtitle="Launch your career with hands-on experience on real infrastructure projects."
              />
              <div className="mt-6 space-y-4 text-muted-text leading-relaxed">
                <p>
                  Our internship and graduate programs are designed to identify and nurture the next generation of African engineering talent. You won't be fetching coffee — you'll be shipping code, contributing to production systems, and learning from senior engineers who are committed to your growth.
                </p>
                <p>
                  We offer structured 3-month internships, 12-month graduate rotations, and apprenticeship tracks for career changers. Every program includes mentorship, hands-on project work, and a clear pathway to full-time employment.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button size="lg" className="rounded-full gap-2 group mt-6">
                  Explore Programs <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
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
                <GraduationCap size={120} className="text-muted-text/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-secondary-bg via-secondary-bg to-secondary-bg border border-border flex items-center justify-center p-12">
                <Users size={120} className="text-muted-text/20" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <SectionHeading
                title="Diversity & Inclusion"
                subtitle="We build better technology when we build it together."
              />
              <div className="mt-6 space-y-4 text-muted-text leading-relaxed">
                <p>
                  At Cainoa, diversity isn't a metric — it's a strategic advantage. We believe that the best engineering solutions emerge from teams with diverse perspectives, backgrounds, and lived experiences.
                </p>
                <p>
                  We are committed to building a workforce that reflects the communities we serve across Africa. Our hiring practices are designed to reduce bias, and we provide unconscious bias training for every hiring manager. We actively support women in engineering through mentorship programs, scholarships, and partnerships with organizations advancing gender equity in technology.
                </p>
                <p>
                  We celebrate diversity in all its forms — including gender, ethnicity, age, disability, sexual orientation, and socioeconomic background. Every Cainoa team member is expected to contribute to an inclusive environment where everyone can do their best work.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about starting your career at Cainoa."
            align="center"
          />
          <div className="mt-10 max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex items-center justify-between w-full p-6 text-left"
                >
                  <span className="font-heading font-bold text-primary pr-4">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-primary shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === i ? "auto" : 0,
                    opacity: openFaq === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-muted-text leading-relaxed">{faq.a}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 lg:py-24 bg-primary">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary-bg to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ready to Build the{" "}
              <span className="text-accent-mint">Future of Africa</span>?
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Take the first step toward a career that matters. Join the team that's engineering Africa's digital transformation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="rounded-full gap-2 group bg-accent hover:bg-accent/90"
                onClick={() => navigate("/careers")}
              >
                Apply Now
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full gap-2 group border-white/20 text-white hover:bg-white/10"
                onClick={() => navigate("/contact")}
              >
                Ask a Question
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
