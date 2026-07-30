import { useState } from "react"
import { motion } from "framer-motion"
import SEO from "../../components/SEO"
import PageHero from "../../components/shared/PageHero"
import SectionHeading from "../../components/shared/SectionHeading"
import CTASection from "../../components/shared/CTASection"
import { Button } from "../../components/ui/button"
import {
  BookOpen,
  Code,
  Terminal,
  Lock,
  Search,
  PlayCircle,
  FileQuestion,
  ArrowRight,
} from "lucide-react"

const quickstartData = [
  {
    icon: Terminal,
    title: "Installation",
    desc: "Install the Cainoa CLI and SDK using npm, pip, or our Docker image. Get started in under 5 minutes with a single command.",
    code: "npm install @cainoa/cli -g",
    tag: "Coming Soon",
  },
  {
    icon: BookOpen,
    title: "Configuration",
    desc: "Configure your API keys, environment variables, and service endpoints. Our setup wizard handles the heavy lifting.",
    code: "cainoa init --project=my-app",
    tag: "Coming Soon",
  },
  {
    icon: Code,
    title: "First Request",
    desc: "Make your first API call to verify connectivity and test authentication against our sandbox environment.",
    code: "cainoa api ping --env=sandbox",
    tag: "Coming Soon",
  },
]

const apiReferenceData = [
  {
    title: "REST API",
    desc: "Full RESTful HTTP API for AI inference, fintech transactions, identity verification, and infrastructure orchestration. All endpoints are versioned and secured with OAuth 2.0.",
    endpoints: [
      { method: "POST", path: "/v1/ai/inference", desc: "Run AI model inference" },
      { method: "GET", path: "/v1/fintech/accounts/{id}", desc: "Retrieve account details" },
      { method: "POST", path: "/v1/identity/verify", desc: "Verify user identity" },
      { method: "PUT", path: "/v1/infrastructure/deploy", desc: "Deploy infrastructure stack" },
    ],
  },
  {
    title: "GraphQL API",
    desc: "Flexible GraphQL API for querying real-time data streams, monitoring system health, and aggregating analytics across your Cainoa services.",
    endpoints: [
      { method: "POST", path: "/graphql", desc: "Execute GraphQL queries and mutations" },
      { method: "GET", path: "/graphql/schema", desc: "Retrieve the full GraphQL schema" },
      { method: "POST", path: "/graphql/subscribe", desc: "Subscribe to real-time events" },
    ],
  },
  {
    title: "WebSocket API",
    desc: "Persistent, bidirectional WebSocket connections for low-latency event streaming, market data feeds, and real-time AI agent communication.",
    endpoints: [
      { method: "WS", path: "/ws/events", desc: "Stream system and service events" },
      { method: "WS", path: "/ws/fintech/trades", desc: "Real-time trade execution feed" },
      { method: "WS", path: "/ws/ai/stream", desc: "Stream AI model responses" },
    ],
  },
]

const sdkData = [
  {
    icon: Code,
    title: "TypeScript / JavaScript",
    desc: "First-class TypeScript SDK with full type definitions, tree-shakeable modules, and native support for both Node.js and browser environments.",
  },
  {
    icon: Terminal,
    title: "Python SDK",
    desc: "Comprehensive Python SDK with async support, pandas integration, and Jupyter notebook helpers for data scientists and ML engineers.",
  },
  {
    icon: Terminal,
    title: "Go SDK",
    desc: "High-performance Go SDK designed for low-latency microservices, with built-in retry logic, circuit breakers, and observability hooks.",
  },
  {
    icon: Code,
    title: "Rust SDK",
    desc: "Memory-safe Rust SDK for systems-level integration. Zero-cost abstractions with full async/await support and no_std compatibility.",
  },
]

const authData = [
  {
    title: "API Keys",
    desc: "Generate and rotate API keys from the Cainoa dashboard. Keys are scoped to specific services and environments with granular permission controls.",
    items: [
      "Create keys with read, write, or admin permissions",
      "Restrict keys to specific IP ranges and service endpoints",
      "Automatic rotation policies with grace periods",
    ],
  },
  {
    title: "OAuth 2.0",
    desc: "Enterprise-grade OAuth 2.0 implementation supporting authorization code, client credentials, and device grant flows for diverse application architectures.",
    items: [
      "Full PKCE support for mobile and SPA applications",
      "Custom scopes for fine-grained access control",
      "Refresh token rotation with automatic revocation",
    ],
  },
  {
    title: "Mutual TLS",
    desc: "Mutual TLS authentication for server-to-server communication. Certificates are managed through Cainoa's certificate authority with automatic renewal.",
    items: [
      "Automated certificate issuance and renewal via ACME",
      "Certificate revocation lists with real-time propagation",
      "Hardware security module (HSM) support for key storage",
    ],
  },
]

const codeExampleData = [
  {
    icon: Code,
    title: "AI Inference Request",
    lang: "TypeScript",
    code: `import { Cainoa } from "@cainoa/sdk"

const client = new Cainoa({
  apiKey: process.env.CAINOA_API_KEY,
})

const result = await client.ai.infer({
  model: "cainoa-gpt-4",
  prompt: "Summarize the transaction report",
  maxTokens: 1024,
})`,
  },
  {
    icon: Code,
    title: "Fintech Payment",
    lang: "Python",
    code: `from cainoa import FintechClient

client = FintechClient(api_key="sk-...")

payment = client.create_payment(
    amount=25000.00,
    currency="NGN",
    source="account_abc123",
    destination="account_xyz789",
    description="Invoice #INV-2024-001",
)

print(f"Payment {payment.id} - {payment.status}")`,
  },
  {
    icon: Code,
    title: "Identity Verification",
    lang: "Go",
    code: `import "github.com/cainoa/sdk-go"

client := cainoa.NewClient(os.Getenv("CAINOA_API_KEY"))

result, err := client.Identity.Verify(
    context.Background(),
    &cainoa.VerifyRequest{
        DocumentType: "NIN_SLIP",
        DocumentID:   "12345678901",
        UserID:       "usr_2k3j4h5b6n",
    },
)`,
  },
  {
    icon: Code,
    title: "Infrastructure Deploy",
    lang: "Rust",
    code: `use cainoa_sdk::prelude::*;

#[tokio::main]
async fn main() -> Result<()> {
    let client = CainoaClient::from_env()?;
    
    let deployment = client
        .infrastructure()
        .deploy(DeployRequest {
            stack: "production-web".into(),
            region: Region::AfricaWest,
            replicas: 3,
        })
        .await?;
    
    println!("Deployed: {}", deployment.id);
    Ok(())
}`,
  },
]

const tutorialData = [
  {
    icon: PlayCircle,
    title: "Build an AI Chatbot in 15 Minutes",
    desc: "Step-by-step guide to creating a production-ready AI chatbot using Cainoa's LLM inference API, including context management, rate limiting, and monitoring.",
    duration: "15 min",
    level: "Beginner",
  },
  {
    icon: PlayCircle,
    title: "Integrate Mobile Money Payments",
    desc: "Learn to process mobile money transactions across MTN MoMo, Airtel Money, and Glo Pay using Cainoa's unified fintech API with webhook callbacks.",
    duration: "25 min",
    level: "Intermediate",
  },
  {
    icon: PlayCircle,
    title: "Zero-Trust Identity Verification",
    desc: "Implement a complete identity verification pipeline with document verification, biometric matching, and liveness detection using Cainoa's Identity API.",
    duration: "30 min",
    level: "Advanced",
  },
  {
    icon: PlayCircle,
    title: "Deploy Scalable Infrastructure",
    desc: "Use Cainoa's infrastructure API to deploy a multi-region, auto-scaling application stack with integrated monitoring, logging, and alerting.",
    duration: "20 min",
    level: "Intermediate",
  },
]

const faqData = [
  {
    q: "How do I get an API key?",
    a: "Sign up for a Cainoa account, navigate to the API Keys section in your dashboard, and click Generate Key. Choose the appropriate permissions and environment scope. Keys are shown only once, so store them securely in environment variables or a secrets manager.",
  },
  {
    q: "What are the rate limits for the API?",
    a: "Rate limits vary by plan. The Developer tier allows 1,000 requests per hour, Business tier 10,000 per hour, and Enterprise tier has custom limits with dedicated throughput. Rate limit headers (X-RateLimit-Remaining, X-RateLimit-Reset) are included in every response.",
  },
  {
    q: "Do you offer a sandbox environment?",
    a: "Yes. Every account includes a fully isolated sandbox environment at api.sandbox.cainoa.io. The sandbox mimics production behavior with mock data, simulated delays, and configurable error scenarios for testing edge cases.",
  },
  {
    q: "How do I handle webhook events?",
    a: "Cainoa sends webhook events to your registered endpoints for async operations. Each webhook includes a signature header (X-Cainoa-Signature) for verification. Use our SDK's webhook helper to validate payloads. Respond with 200 OK within 5 seconds to acknowledge receipt.",
  },
  {
    q: "What SDKs do you support?",
    a: "We provide officially supported SDKs for TypeScript/JavaScript, Python, Go, and Rust. Community SDKs are available for Java, Kotlin, Swift, and .NET. All official SDKs are open source and published on GitHub and respective package registries.",
  },
  {
    q: "How is data encrypted in transit and at rest?",
    a: "All data in transit is encrypted using TLS 1.3 with strong cipher suites. Data at rest is encrypted using AES-256-GCM with keys managed through our HSM infrastructure. We support customer-managed encryption keys (CMK) on Enterprise plans.",
  },
]

interface SearchResult {
  title: string
  description: string
  category: string
}

const searchIndex: SearchResult[] = [
  ...quickstartData.map(d => ({ title: d.title, description: d.desc, category: "Quickstart" })),
  ...apiReferenceData.flatMap(d => d.endpoints.map(e => ({
    title: `${d.title}: ${e.method} ${e.path}`,
    description: e.desc,
    category: "API Reference"
  }))),
  ...sdkData.map(d => ({ title: d.title, description: d.desc, category: "SDKs" })),
  ...authData.map(d => ({ title: d.title, description: d.desc, category: "Authentication" })),
  ...codeExampleData.map(d => ({
    title: d.title,
    description: `Code example in ${d.lang}`,
    category: "Code Examples"
  })),
  ...tutorialData.map(d => ({ title: d.title, description: d.desc, category: "Tutorials" })),
  ...faqData.map(d => ({ title: d.q, description: d.a.slice(0, 120).replace(/\n/g, " ") + "...", category: "FAQ" })),
]

export default function Documentation() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredResults = searchQuery
    ? searchIndex.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  const fadeUp = (delay: number = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true } as const,
    transition: { duration: 0.5, delay },
  })

  return (
    <main>
      <SEO title="Documentation" description="Cainoa developer documentation — API references, SDKs, code examples, and tutorials for integrating AI, fintech, and infrastructure platforms." path="/resources/documentation" />
      <PageHero
        badge="Resources / Documentation"
        title="Developer Documentation"
        subtitle="Everything you need to integrate Cainoa's AI infrastructure, fintech APIs, and enterprise platforms into your systems."
      />

      <section className="py-16 lg:py-24 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Getting Started"
            subtitle="Jump into Cainoa's platform with our quickstart guides. From installation to your first API call in minutes."
            align="center"
          />
          <div className="mt-6 max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              SDK and CLI tools are currently in development. Documentation reflects our planned API surface.
            </div>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {quickstartData.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp(i * 0.1)}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl border border-border bg-white hover:shadow-md transition-all duration-500"
              >
                <item.icon size={28} className="text-primary mb-5" />
                <h3 className="font-heading text-lg font-bold text-primary mb-2">{item.title}</h3>
                {item.tag && (
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold mb-3">
                    {item.tag}
                  </span>
                )}
                <p className="text-sm text-muted-text leading-relaxed mb-5">{item.desc}</p>
                <div className="rounded-2xl bg-primary/5 px-4 py-3 font-mono text-xs text-primary">
                  <span className="text-primary">$</span> {item.code}
                </div>
              </motion.div>
            ))}
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
            className="max-w-2xl mx-auto text-center mb-10"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary-bg mb-6">
              <Search size={28} className="text-primary" />
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              Search Documentation
            </h2>
            <p className="mt-4 text-lg text-muted-text leading-relaxed">
              Find the exact documentation, API reference, or code example you need.
            </p>
            <div className="mt-8 relative max-w-xl mx-auto">
              <Search
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-text"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search API references, SDKs, tutorials..."
                aria-label="Search documentation"
                className="w-full h-14 pl-14 pr-5 rounded-full border border-border bg-white text-primary placeholder:text-muted-text focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
              />
            </div>
          </motion.div>

          {searchQuery && filteredResults.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-3xl mx-auto space-y-3"
            >
              <p className="text-sm text-muted-text mb-4">
                {filteredResults.length} result{filteredResults.length !== 1 ? "s" : ""} for &quot;{searchQuery}&quot;
              </p>
              {filteredResults.map((r, i) => (
                <motion.div
                  key={`${r.category}-${r.title}-${i}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="p-5 rounded-2xl border border-border bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-secondary-bg text-primary text-xs font-semibold shrink-0 mt-0.5">
                      {r.category}
                    </span>
                    <div>
                      <h4 className="font-heading font-bold text-primary text-sm">{r.title}</h4>
                      <p className="text-xs text-muted-text mt-1 leading-relaxed">{r.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
          {searchQuery && filteredResults.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-sm text-muted-text"
            >
              No results found for &quot;{searchQuery}&quot;. Try a different search term.
            </motion.p>
          )}
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="API Reference"
            subtitle="Comprehensive documentation for Cainoa's REST, GraphQL, and WebSocket APIs."
          />
          <div className="mt-10 space-y-6">
            {apiReferenceData.map((api, i) => (
              <motion.div
                key={api.title}
                {...fadeUp(i * 0.1)}
                className="rounded-3xl border border-border bg-white p-8 transition-all duration-500"
              >
                <h3 className="font-heading text-xl font-bold text-primary mb-2">{api.title}</h3>
                <p className="text-muted-text text-sm leading-relaxed mb-6">{api.desc}</p>
                <div className="space-y-2">
                  {api.endpoints.map((ep) => (
                    <div
                      key={ep.path}
                      className="flex items-center gap-4 p-3 rounded-2xl bg-secondary-bg/50 text-sm"
                    >
                      <span
                        className={`inline-flex items-center justify-center w-14 h-7 rounded-lg font-bold text-xs tracking-wider ${
                          ep.method === "POST"
                            ? "bg-secondary-bg text-primary"
                            : ep.method === "GET"
                              ? "bg-blue-100 text-blue-600"
                              : ep.method === "PUT"
                                ? "bg-amber-100 text-amber-600"
                                : ep.method === "WS"
                                  ? "bg-purple-100 text-purple-600"
                                  : "bg-primary/10 text-primary"
                        }`}
                      >
                        {ep.method}
                      </span>
                      <code className="font-mono text-primary">{ep.path}</code>
                      <span className="text-muted-text ml-auto hidden sm:inline">{ep.desc}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="SDKs & Libraries"
            subtitle="Official Cainoa SDKs for every major programming language and runtime."
            align="center"
          />
          <div className="mt-6 max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              SDKs are currently in development and will be published on GitHub and npm/pip when ready.
            </div>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdkData.map((sdk, i) => (
              <motion.div
                key={sdk.title}
                {...fadeUp(i * 0.1)}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl border border-border bg-white hover:shadow-md transition-all duration-500"
              >
                <sdk.icon size={28} className="text-primary mb-5" />
                <h3 className="font-heading text-lg font-bold text-primary mb-2">{sdk.title}</h3>
                <p className="text-sm text-muted-text leading-relaxed">{sdk.desc}</p>
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
              View All SDKs <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Authentication & Security"
            subtitle="Cainoa's multi-layered security model ensures your data and integrations are protected at every level."
          />
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {authData.map((auth, i) => (
              <motion.div
                key={auth.title}
                {...fadeUp(i * 0.1)}
                className="rounded-3xl border border-border bg-white p-8 transition-all duration-500"
              >
                <Lock size={28} className="text-primary mb-5" />
                <h3 className="font-heading text-lg font-bold text-primary mb-2">{auth.title}</h3>
                <p className="text-sm text-muted-text leading-relaxed mb-5">{auth.desc}</p>
                <ul className="space-y-2">
                  {auth.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-text">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Code Examples"
            subtitle="Ready-to-run code snippets for common Cainoa API workflows across all supported languages."
            align="center"
          />
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {codeExampleData.map((example, i) => (
              <motion.div
                key={example.title}
                {...fadeUp(i * 0.1)}
                className="rounded-3xl border border-border bg-white overflow-hidden transition-all duration-500"
              >
                <div className="flex items-center justify-between px-6 pt-6 pb-3">
                  <div className="flex items-center gap-3">
                    <example.icon size={20} className="text-primary" />
                    <h3 className="font-heading font-bold text-primary">{example.title}</h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    {example.lang}
                  </span>
                </div>
                <div className="px-6 pb-6">
                  <pre className="rounded-2xl bg-primary p-4 overflow-x-auto text-xs leading-relaxed">
                    <code className="text-white/90 font-mono">{example.code}</code>
                  </pre>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Tutorials"
            subtitle="Hands-on tutorials that walk you through building real-world applications with Cainoa."
            align="center"
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tutorialData.map((tutorial, i) => (
              <motion.div
                key={tutorial.title}
                {...fadeUp(i * 0.1)}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl border border-border bg-white hover:shadow-md transition-all duration-500 flex flex-col"
              >
                <PlayCircle size={32} className="text-primary mb-5" />
                <h3 className="font-heading text-lg font-bold text-primary mb-2">{tutorial.title}</h3>
                <p className="text-sm text-muted-text leading-relaxed mb-6 flex-1">{tutorial.desc}</p>
                <div className="flex items-center gap-3 text-xs">
                  <span className="px-3 py-1 rounded-full bg-secondary-bg text-primary font-semibold">
                    {tutorial.duration}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                    {tutorial.level}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Quick answers to the most common questions about integrating with Cainoa."
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
                  <FileQuestion size={20} className="text-accent shrink-0" />
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

      <CTASection />
    </main>
  )
}
