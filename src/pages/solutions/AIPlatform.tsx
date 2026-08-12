import { motion } from "framer-motion"
import PageHero from "../../components/shared/PageHero"
import SectionHeading from "../../components/shared/SectionHeading"
import CTASection from "../../components/shared/CTASection"
import { Button } from "../../components/ui/button"
import { Brain, Cpu, Bot, BarChart3, Network, Zap, Shield, ArrowRight } from "lucide-react"
import SEO from "../../components/SEO"
import { useNavigate } from "react-router-dom"

const llmFeatures = [
  {
    icon: Brain,
    title: "LLM Deployment",
    desc: "Deploy open-source and proprietary LLMs in your private cloud or on-premise infrastructure with our optimized serving stack.",
  },
  {
    icon: Cpu,
    title: "Fine-Tuning & RAG",
    desc: "Fine-tune foundation models on your proprietary data and implement retrieval-augmented generation pipelines for domain-specific accuracy.",
  },
  {
    icon: Network,
    title: "Custom Models",
    desc: "Build and train bespoke transformer models tailored to your enterprise use cases, from document understanding to code generation.",
  },
]

const automationFeatures = [
  {
    icon: Zap,
    title: "Workflow Automation",
    desc: "Replace manual workflows with AI-powered pipelines that route, transform, and act on data across your enterprise applications.",
  },
  {
    icon: Bot,
    title: "Intelligent Process Automation",
    desc: "Deploy computer vision and NLP agents that automate document processing, data entry, compliance checks, and customer onboarding.",
  },
  {
    icon: Network,
    title: "Decision Engines",
    desc: "Build rules-based and ML-driven decision engines that approve loans, flag fraud, and optimize supply chains in real time.",
  },
]

const agentFeatures = [
  {
    icon: Bot,
    title: "Autonomous Task Agents",
    desc: "Deploy AI agents that independently execute multi-step tasks — querying databases, generating reports, and triggering workflows.",
  },
  {
    icon: Brain,
    title: "Multi-Agent Orchestration",
    desc: "Coordinate swarms of specialized agents that collaborate to solve complex enterprise problems with human-in-the-loop oversight.",
  },
  {
    icon: Cpu,
    title: "Agent Observability",
    desc: "Monitor every agent decision, trace reasoning chains, and audit actions with full logging and explainability tooling.",
  },
]

const infrastructureFeatures = [
  {
    icon: Cpu,
    title: "GPU Cluster Management",
    desc: "Provision and manage GPU clusters with automated scaling, job scheduling, and real-time utilization monitoring.",
  },
  {
    icon: Network,
    title: "Model Serving Infrastructure",
    desc: "Deploy high-throughput, low-latency model serving endpoints with autoscaling, A/B testing, and canary deployments.",
  },
  {
    icon: BarChart3,
    title: "MLOps & Model Registry",
    desc: "Track experiments, version models, manage artifacts, and automate CI/CD pipelines for ML lifecycles at scale.",
  },
]

const benefits = [
  {
    icon: Zap,
    title: "Faster Deployment",
    desc: "Pre-built infrastructure blueprints cut AI deployment timelines from months to weeks.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    desc: "Every model and pipeline is secured with encryption, access controls, and compliance guardrails.",
  },
  {
    icon: BarChart3,
    title: "Cost-Optimized Inference",
    desc: "Our serving stack reduces inference costs through intelligent batching and model quantization.",
  },
  {
    icon: Network,
    title: "Seamless Integration",
    desc: "Connect AI models to your existing ERP, CRM, and data lake infrastructure with pre-built connectors.",
  },
]

const stagger = (i: number) => ({ duration: 0.5, delay: i * 0.1 })

export default function AIPlatform() {
  const navigate = useNavigate()

  return (
    <main>
      <SEO title="AI Platform" description="Enterprise AI inference, model orchestration, and LLM integration platform built for African use cases and regulatory requirements." path="/solutions/ai-platform" />
      <PageHero
        badge="Solutions / AI Platform"
        title="Enterprise AI Built for Scale"
        subtitle="From LLM integration to autonomous AI agents — we deploy intelligent systems that transform how enterprises operate."
      />

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
                badge="AI Strategy"
                title="Strategic AI Consulting & Deployment"
                subtitle="We don't just deploy models — we architect enterprise AI strategies aligned with your business objectives, data infrastructure, and regulatory environment."
              />
              <div className="mt-8 space-y-4 text-muted-text leading-relaxed">
                <p>
                  Every enterprise AI journey starts with strategy. Our team of AI architects and domain
                  specialists works alongside your leadership to identify high-impact use cases, evaluate
                  model feasibility, and build a phased roadmap that delivers measurable ROI from day one.
                </p>
                <p>
                  We conduct comprehensive data audits, infrastructure assessments, and risk analyses to
                  ensure your AI initiatives are built on a foundation of quality data, scalable
                  infrastructure, and robust governance frameworks.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-secondary-bg via-secondary-bg to-secondary-bg border border-border flex items-center justify-center p-12">
                <Brain size={120} className="text-muted-text/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            badge="Large Language Models"
            title="LLM Infrastructure for the Enterprise"
            subtitle="Deploy, fine-tune, and serve large language models at scale — with full control over data, costs, and performance."
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {llmFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={stagger(i)}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl border border-border bg-card-bg hover:border-border hover:shadow-xl hover:shadow-md transition-all duration-500"
              >
                <f.icon size={28} className="text-primary mb-5" />
                <h3 className="font-heading text-lg font-bold text-primary mb-2">{f.title}</h3>
                <p className="text-sm text-muted-text leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            badge="AI Automation"
            title="Intelligent Automation at Scale"
            subtitle="Transform manual processes into autonomous, AI-driven operations that reduce costs and accelerate decision-making."
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={stagger(i)}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl border border-border bg-card-bg hover:border-border hover:shadow-xl hover:shadow-md transition-all duration-500"
              >
                <f.icon size={28} className="text-primary mb-5" />
                <h3 className="font-heading text-lg font-bold text-primary mb-2">{f.title}</h3>
                <p className="text-sm text-muted-text leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            badge="AI Agents"
            title="Autonomous Enterprise Agents"
            subtitle="Deploy intelligent agents that reason, act, and learn — transforming how work gets done across your organization."
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {agentFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={stagger(i)}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl border border-border bg-card-bg hover:border-border hover:shadow-xl hover:shadow-md transition-all duration-500"
              >
                <f.icon size={28} className="text-primary mb-5" />
                <h3 className="font-heading text-lg font-bold text-primary mb-2">{f.title}</h3>
                <p className="text-sm text-muted-text leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-secondary-bg via-secondary-bg to-secondary-bg border border-border flex items-center justify-center p-12">
                <BarChart3 size={120} className="text-muted-text/20" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                badge="AI Analytics"
                title="Business Intelligence Powered by AI"
                subtitle="Unlock predictive insights, anomaly detection, and natural-language querying across your enterprise data."
              />
              <div className="mt-8 space-y-4 text-muted-text leading-relaxed">
                <p>
                  Our AI analytics layer sits on top of your existing data infrastructure, adding
                  predictive capabilities that transform raw data into actionable intelligence. From
                  demand forecasting to fraud detection, our models surface insights traditional BI
                  tools cannot.
                </p>
                <p>
                  Deploy natural-language dashboards that let your team ask questions in plain English
                  and receive instant answers backed by your enterprise data — no SQL required.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            badge="AI Infrastructure"
            title="The Foundation for AI at Scale"
            subtitle="Purpose-built infrastructure designed to train, serve, and monitor AI models in production environments."
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {infrastructureFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={stagger(i)}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl border border-border bg-white hover:border-border hover:shadow-xl hover:shadow-md transition-all duration-500"
              >
                <f.icon size={28} className="text-primary mb-5" />
                <h3 className="font-heading text-lg font-bold text-primary mb-2">{f.title}</h3>
                <p className="text-sm text-muted-text leading-relaxed">{f.desc}</p>
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
                badge="Enterprise Integrations"
                title="AI That Connects With Everything"
                subtitle="Our integration layer connects AI models to your existing ERP, CRM, HRIS, and data lake systems out of the box."
              />
              <div className="mt-8 space-y-4 text-muted-text leading-relaxed">
                <p>
                  Enterprise AI is only as powerful as the systems it integrates with. We build
                  connectors that bridge AI models with your existing technology stack — from SAP and
                  Oracle to custom legacy systems — ensuring AI outputs flow directly into business
                  workflows.
                </p>
                <p>
                  Our integration framework supports REST APIs, event streams, database connectors,
                  and file-based ingestion, making it possible to plug AI into any enterprise
                  environment with minimal disruption.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-secondary-bg via-secondary-bg to-secondary-bg border border-border flex items-center justify-center p-12">
                <Network size={120} className="text-muted-text/20" />
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
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-secondary-bg via-secondary-bg to-secondary-bg border border-border flex items-center justify-center p-12">
                <Shield size={120} className="text-muted-text/20" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                badge="Security & Governance"
                title="Secure AI by Design"
                subtitle="Enterprise-grade security, model governance, and compliance frameworks built into every layer of your AI infrastructure."
              />
              <div className="mt-8 space-y-4 text-muted-text leading-relaxed">
                <p>
                  We implement model governance frameworks that track every artifact, dataset, and
                  deployment — ensuring full auditability and compliance with regulatory requirements
                  including NDPR, GDPR, and industry-specific standards.
                </p>
                <p>
                  Our security architecture covers model access controls, data encryption in transit
                  and at rest, adversarial attack mitigation, prompt injection prevention, and
                  continuous monitoring for model drift and data leakage.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Why Choose Cainoa for AI"
            subtitle="Enterprise AI infrastructure engineered for performance, security, and scale."
            align="center"
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={stagger(i)}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl border border-border bg-card-bg hover:border-border hover:shadow-xl hover:shadow-md transition-all duration-500"
              >
                <b.icon size={28} className="text-primary mb-5" />
                <h3 className="font-heading text-lg font-bold text-primary mb-2">{b.title}</h3>
                <p className="text-sm text-muted-text leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-28 bg-slate-900 dark:bg-slate-950 border-t border-slate-800 text-white">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ready to Build Your{" "}
              <span className="text-accent-mint dark:text-emerald-400">AI Future</span>?
            </h2>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Partner with Cainoa to architect, deploy, and scale enterprise AI systems that
              transform your operations.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                size="lg"
                className="rounded-full gap-2 group bg-accent-mint text-slate-900 hover:bg-accent-mint/90 font-semibold mt-10"
                onClick={() => navigate("/contact")}
              >
                Request a Demo
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
