import { motion } from "framer-motion"
import PageHero from "../../components/shared/PageHero"
import SectionHeading from "../../components/shared/SectionHeading"
import CTASection from "../../components/shared/CTASection"
import { Button } from "../../components/ui/button"
import {
  Cloud, Server, Database, GitBranch, Activity, Monitor,
  RotateCcw, Settings2, ArrowRight, RefreshCw
} from "lucide-react"
import SEO from "../../components/SEO"
import { useNavigate } from "react-router-dom"

const services = [
  {
    icon: Cloud,
    title: "Cloud Architecture",
    subtitle: "Cloud Design & Migration",
    description:
      "Enterprise-grade cloud architecture design, migration, and optimization across AWS, Azure, and GCP. We build scalable, cost-efficient cloud environments with automated orchestration, ensuring seamless transitions from on-premise infrastructure with zero downtime and maximum operational continuity.",
    highlights: [
      "Multi-cloud strategy & architecture design",
      "Lift-and-shift & re-platform migrations",
      "Cloud cost optimization & FinOps",
      "Kubernetes & container orchestration",
      "Serverless & event-driven computing",
      "Cloud security posture management",
    ],
  },
  {
    icon: Server,
    title: "Enterprise Platforms",
    subtitle: "Custom Platform Engineering",
    description:
      "We engineer custom enterprise platforms that serve as the digital backbone for mission-critical operations. From core banking systems to government service portals, our platforms are built for scale, security, and longevity using modern microservices architectures.",
    highlights: [
      "Core banking & fintech platforms",
      "Government service portals",
      "Enterprise resource planning systems",
      "Microservices & event-driven architecture",
      "Platform scalability & performance tuning",
      "Legacy system modernization",
    ],
  },
  {
    icon: GitBranch,
    title: "API Design & Management",
    subtitle: "API Strategy & Governance",
    description:
      "End-to-end API strategy covering design, development, gateway management, and governance. We build RESTful, GraphQL, and gRPC APIs with rate limiting, authentication, versioning, and comprehensive documentation that enables seamless ecosystem integration.",
    highlights: [
      "REST & GraphQL API design",
      "API gateway configuration & management",
      "OAuth 2.0 & OpenID Connect integration",
      "Rate limiting & traffic management",
      "API versioning & lifecycle management",
      "Developer portal & documentation",
    ],
  },
  {
    icon: RotateCcw,
    title: "DevOps & Automation",
    subtitle: "CI/CD & Infrastructure as Code",
    description:
      "Comprehensive DevOps transformation that accelerates delivery cycles while improving reliability. We implement GitOps workflows, automated CI/CD pipelines, infrastructure as code, and policy-as-code frameworks that enable rapid, safe, and repeatable deployments.",
    highlights: [
      "CI/CD pipeline architecture & implementation",
      "Infrastructure as Code (Terraform, Pulumi)",
      "GitOps & ArgoCD workflows",
      "Configuration management & secrets orchestration",
      "Container registry & artifact management",
      "Automated testing & security scanning",
    ],
  },
  {
    icon: Activity,
    title: "High Availability Architecture",
    subtitle: "HA & Fault-Tolerant Systems",
    description:
      "Architecting systems that never go down. We design multi-region, active-active, and active-passive architectures with automated failover, load balancing, and disaster avoidance strategies to guarantee enterprise-grade uptime for enterprise applications.",
    highlights: [
      "Multi-region active-active deployments",
      "Automated failover & self-healing",
      "Load balancing & traffic routing",
      "Database clustering & replication",
      "SLA definition & SLO monitoring",
      "Chaos engineering & resilience testing",
    ],
  },
  {
    icon: Monitor,
    title: "Monitoring & Observability",
    subtitle: "Full-Stack Observability",
    description:
      "Implementing comprehensive observability stacks that provide real-time visibility into every layer of your infrastructure. From distributed tracing and metrics collection to structured logging and alerting, we ensure you see everything before it becomes a problem.",
    highlights: [
      "Prometheus, Grafana & Thanos stacks",
      "Distributed tracing with OpenTelemetry",
      "Centralized logging with ELK/Loki",
      "Custom dashboard engineering",
      "Intelligent alerting & on-call management",
      "SLO tracking & error budgeting",
    ],
  },
  {
    icon: RefreshCw,
    title: "Disaster Recovery",
    subtitle: "Backup & Business Continuity",
    description:
      "Building resilient disaster recovery strategies that protect your data and ensure business continuity. We design and implement backup architectures, recovery runbooks, and cross-region replication that meet rigorous RPO and RTO requirements.",
    highlights: [
      "Backup strategy & architecture design",
      "Cross-region data replication",
      "Disaster recovery runbooks & automation",
      "RPO/RTO definition & validation",
      "Data encryption at rest & in transit",
      "Regular DR drills & compliance reporting",
    ],
  },
  {
    icon: Settings2,
    title: "Infrastructure Automation",
    subtitle: "Automated Provisioning",
    description:
      "Eliminating manual operations through comprehensive infrastructure automation. We implement self-service provisioning, automated scaling policies, configuration drift remediation, and policy-driven governance that reduces operational overhead and human error.",
    highlights: [
      "Self-service infrastructure portals",
      "Automated scaling & capacity management",
      "Configuration drift detection & remediation",
      "Policy-as-Code with OPA/Sentinel",
      "Infrastructure cost governance",
      "Automated compliance enforcement",
    ],
  },
  {
    icon: Database,
    title: "Digital Transformation",
    subtitle: "Transformation Strategy & Execution",
    description:
      "Guiding organizations through end-to-end digital transformation journeys. From strategy formulation and technology selection to implementation and change management, we help enterprises modernize operations, adopt cloud-native practices, and build future-ready digital capabilities.",
    highlights: [
      "Digital maturity assessment & roadmap",
      "Technology stack modernization",
      "Cloud adoption & migration strategy",
      "Agile & DevOps culture transformation",
      "Change management & team upskilling",
      "ROI tracking & transformation KPIs",
    ],
  },
]

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Infrastructure() {
  const navigate = useNavigate()

  return (
    <main>
      <SEO title="Infrastructure" description="Cloud infrastructure and DevOps platform for deploying, monitoring, and scaling applications across African regions." path="/solutions/infrastructure" />
      <PageHero
        badge="Solutions / Infrastructure"
        title="Scalable Infrastructure for Mission-Critical Systems"
        highlight="Mission-Critical"
        subtitle="Cloud-native architecture, DevOps automation, and high-availability platforms engineered for enterprise reliability."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-10 lg:p-14 rounded-3xl bg-slate-900 dark:bg-slate-950 border border-slate-800 text-white"
          >
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase mb-4">
                  Our Approach
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                  Enterprise Infrastructure,{" "}
                  <span className="text-accent-mint dark:text-emerald-400">Reimagined</span>
                </h2>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Cainoa delivers production-grade infrastructure that
                  combines cloud-native architectures with battle-tested
                  operational practices. Every solution is designed for
                  scale, hardened for security, and optimized for
                  performance — enabling enterprises to focus on
                  innovation while we run the foundation.
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.title}
          className={`py-16 lg:py-24 ${
            index % 2 === 0 ? "bg-secondary-bg/50" : "bg-card-bg"
          }`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              className={`grid lg:grid-cols-2 gap-12 lg:gap-12 items-center ${
                index % 2 !== 0 ? "lg:direction-rtl" : ""
              }`}
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <service.icon size={40} className="text-primary mb-4" />
                <SectionHeading
                  title={service.title}
                  subtitle={service.subtitle}
                />
                <p className="mt-6 text-muted-text leading-relaxed">
                  {service.description}
                </p>
                <motion.ul
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="mt-8 space-y-3"
                >
                  {service.highlights.map((item) => (
                    <motion.li
                      key={item}
                      variants={fadeUp}
                      className="flex items-start gap-3 text-sm text-muted-text"
                    >
                      <span className="mt-0.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative ${
                  index % 2 !== 0 ? "lg:order-first" : ""
                }`}
              >
                <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-secondary-bg via-secondary-bg to-secondary-bg border border-border flex items-center justify-center p-12">
                  <service.icon
                    size={100}
                    className="text-muted-text/20"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 lg:py-24 bg-slate-900 dark:bg-slate-950 border-t border-slate-800 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              title="Why Choose Cainoa Infrastructure"
              subtitle="We don't just deploy infrastructure — we engineer long-term operational excellence."
              align="center"
              dark={true}
            />
          </motion.div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Certified Expertise",
                desc: "AWS, Azure, GCP, and CNCF certified engineers with deep enterprise experience.",
              },
              {
                title: "Security-First Design",
                desc: "Zero-trust architecture, encryption everywhere, and compliance-ready by default.",
              },
              {
                title: "24/7 Managed Operations",
                desc: "Follow-the-sun NOC with real-time monitoring, automated incident response, and dedicated SREs.",
              },
              {
                title: "Vendor-Agnostic",
                desc: "Best-of-breed technology selection with no vendor lock-in commitments.",
              },
              {
                title: "Proven at Scale",
                desc: "enterprise deployments processing high volumes of transactions daily.",
              },
              {
                title: "African-Grown",
                desc: "Deep understanding of local infrastructure challenges, connectivity constraints, and regulatory requirements.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl border border-white/10 dark:border-slate-800 bg-white/10 dark:bg-slate-900/80 text-left hover:bg-white/15 dark:hover:bg-slate-800/80 transition-all duration-500"
              >
                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="Ready to Modernize Your Infrastructure?"
              subtitle="Let's build a resilient, automated, and future-ready foundation for your enterprise."
              align="center"
            />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                className="rounded-full gap-2 group"
                onClick={() => navigate("/contact")}
              >
                Start Your Journey
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full gap-2 group"
                onClick={() => navigate("/solutions")}
              >
                Explore All Solutions
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
