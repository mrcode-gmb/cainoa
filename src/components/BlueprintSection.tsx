import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowRight, Cpu, Network, Shield } from "lucide-react"

const capabilities = [
  {
    title: "AI & LLM Integration",
    subtitle: "Advanced Intelligent Systems",
    description:
      "Custom LLM deployment, fine-tuning, and AI pipeline engineering for enterprise-scale natural language processing and decision intelligence.",
    icon: Cpu,
    color: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/20",
    accent: "text-blue-500",
  },
  {
    title: "Enterprise Architecture",
    subtitle: "Core Infrastructure",
    description:
      "Scalable cloud-native infrastructure, microservice orchestration, and distributed systems designed for high-availability enterprise operations.",
    icon: Network,
    color: "from-secondary-bg to-secondary-bg",
    border: "border-border",
    accent: "text-primary",
    highlighted: true,
  },
  {
    title: "Cybersecurity & Trust",
    subtitle: "Protecting Critical Digital Assets",
    description:
      "Zero-trust security architecture, implementation, and continuous monitoring for critical digital infrastructure.",
    icon: Shield,
    color: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/20",
    accent: "text-purple-500",
  },
]

export default function BlueprintSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-secondary-bg/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
              Our Approach
            </span>

            <h2 className="mt-3 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-primary">
              The Cainoa
              <br />
              <span className="text-accent-mint">Blueprint</span>
            </h2>

            <p className="mt-4 text-lg text-muted-text leading-relaxed">
              We combine deep engineering expertise with advanced AI to build secure,
              scalable enterprise infrastructure.
            </p>

            <div className="mt-6 space-y-4">
              <p className="text-base text-muted-text leading-relaxed">
                Innovation is only as good as the hands that build it.
              </p>

              <p className="text-base text-muted-text leading-relaxed">
                Cainoa houses a collective of engineers
                across Africa, with deep expertise spanning AI integration,
                Large Language Models (LLMs), enterprise architecture, cloud
                infrastructure, and cybersecurity.
              </p>

              <p className="text-base text-muted-text leading-relaxed">
                We don&apos;t simply build software.
              </p>

              <p className="text-base text-muted-text leading-relaxed">
                We engineer intelligent digital infrastructure capable of
                transforming enterprise and governance.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="rounded-full gap-2 group mt-6"
              >
                Meet Our Engineers
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>
            </motion.div>
          </motion.div>

          <div className="space-y-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ scale: 1.02 }}
                className={`group relative overflow-hidden rounded-3xl border-2 p-8 cursor-default transition-all duration-500 ${
                  cap.highlighted
                    ? "border-border bg-gradient-to-br from-secondary-bg to-transparent shadow-lg shadow-black/5"
                    : "border-border bg-white hover:border-primary/20 hover:shadow-xl"
                }`}
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${cap.color} flex items-center justify-center border ${cap.border}`}
                  >
                    <cap.icon size={26} className={cap.accent} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading text-xl font-bold text-primary">
                      {cap.title}
                    </h3>
                    <p className={`text-sm font-medium mt-0.5 ${cap.accent}`}>
                      {cap.subtitle}
                    </p>
                    <p className="mt-3 text-sm text-muted-text leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
