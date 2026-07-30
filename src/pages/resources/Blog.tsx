import { motion } from "framer-motion"
import SEO from "../../components/SEO"
import PageHero from "../../components/shared/PageHero"
import SectionHeading from "../../components/shared/SectionHeading"
import CTASection from "../../components/shared/CTASection"
import { Button } from "../../components/ui/button"
import { Clock, User, ArrowRight, Calendar, BookOpen } from "lucide-react"
import { useState } from "react"

const categories = [
  "All",
  "Artificial Intelligence",
  "Fintech",
  "Cybersecurity",
  "Enterprise Software",
  "Cloud",
  "Product Engineering",
  "Case Studies",
  "Company News",
]

const featuredArticle = {
  category: "Artificial Intelligence",
  title: "How We Built Africa's First Enterprise-Grade LLM Infrastructure",
  excerpt:
    "A deep technical look at the architecture, challenges, and breakthroughs behind Cainoa's large language model deployment — serving millions of inference requests daily across financial, government, and enterprise customers with sub-100ms latency.",
  author: "Dr. Amina Okafor",
  role: "VP of AI Engineering",
  date: "July 8, 2026",
  readTime: "12 min read",
}

const articles = [
  {
    category: "Artificial Intelligence",
    title: "Building Scalable LLM Infrastructure for African Enterprises",
    excerpt:
      "Engineering lessons from deploying production-grade LLM systems capable of handling high volumes of concurrent requests while maintaining reliable uptime across diverse network conditions.",
    author: "Chidi Eze",
    date: "June 22, 2026",
    readTime: "8 min read",
  },
  {
    category: "Cybersecurity",
    title: "Implementing Zero Trust Architecture in African Banking",
    excerpt:
      "How we designed and deployed a zero-trust security framework for a tier-1 Nigerian bank, reducing breach surface area while maintaining regulatory compliance with CBN guidelines.",
    author: "Folake Adeyemi",
    date: "June 15, 2026",
    readTime: "10 min read",
  },
  {
    category: "Fintech",
    title: "The Future of Cooperative Banking in a Digital Economy",
    excerpt:
      "Exploring how digital transformation and AI-powered member management are reshaping Nigeria's cooperative societies and unlocking financial inclusion for millions of underserved members.",
    author: "Ibrahim Suleiman",
    date: "June 8, 2026",
    readTime: "7 min read",
  },
  {
    category: "Artificial Intelligence",
    title: "AI-Powered Fraud Detection at Transaction Scale",
    excerpt:
      "Inside the machine learning pipeline that processes high volumes of transactions daily, identifying fraudulent patterns in real time with high precision across multiple payment channels.",
    author: "Zainab Bello",
    date: "May 25, 2026",
    readTime: "9 min read",
  },
  {
    category: "Cloud",
    title: "Cloud Architecture for Government Digital Infrastructure",
    excerpt:
      "Design principles and deployment strategies for building sovereign cloud infrastructure that meets the security, scalability, and data residency requirements of African government agencies.",
    author: "Emeka Nwachukwu",
    date: "May 18, 2026",
    readTime: "11 min read",
  },
  {
    category: "Product Engineering",
    title: "Engineering Culture at Cainoa: Building for Reliability",
    excerpt:
      "An inside look at the practices, tools, and mindset that drive our engineering organization — from incident response and postmortems to our approach to technical debt and developer experience.",
    author: "Tunde Balogun",
    date: "May 10, 2026",
    readTime: "6 min read",
  },
]

const allArticles = articles

function AuthorAvatar({ name, className }: { name: string; className?: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
  return (
    <div
      className={`w-9 h-9 rounded-full bg-gradient-to-br from-secondary-bg to-secondary-bg flex items-center justify-center text-primary font-bold text-xs ${className ?? ""}`}
    >
      {initials}
    </div>
  )
}

function PlaceholderImage({ icon: Icon, className }: { icon: React.ElementType; className?: string }) {
  return (
    <div
      className={`aspect-[16/10] bg-gradient-to-br from-secondary-bg via-secondary-bg to-secondary-bg flex items-center justify-center ${className ?? ""}`}
    >
      <Icon size={44} className="text-muted-text/20 group-hover:scale-110 transition-transform duration-500" />
    </div>
  )
}

function CategoryBadge({ label }: { label: string }) {
  return (
    <span className="px-3 py-1 rounded-full bg-secondary-bg text-primary font-semibold text-xs whitespace-nowrap">
      {label}
    </span>
  )
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [visibleCount, setVisibleCount] = useState(6)

  const filtered =
    activeCategory === "All" ? allArticles : allArticles.filter((a) => a.category === activeCategory)
  const displayed = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  return (
    <main>
      <SEO title="Blog" description="Insights and updates from Cainoa's team on AI infrastructure, cybersecurity, fintech, and Africa's technology landscape." path="/resources/blog" />
      <PageHero
        badge="Resources / Blog"
        title="Insights From Our Engineers"
        subtitle="Deep dives into AI infrastructure, fintech engineering, cybersecurity architecture, and enterprise technology from the team building Africa's digital future."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title="Latest Articles" subtitle="Technical insights and industry perspectives from Cainoa's engineering and leadership teams." />

          <div className="mt-10 overflow-x-auto pb-4 -mx-6 px-6 lg:mx-0 lg:px-0">
            <div className="flex gap-3 min-w-max">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat)
                    setVisibleCount(6)
                  }}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap border ${
                    activeCategory === cat
                      ? "bg-accent text-white border-accent shadow-lg shadow-accent/25"
                      : "bg-white text-muted-text border-border hover:border-accent/30 hover:text-accent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {featuredArticle && activeCategory === "All" && (
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-10 group rounded-3xl bg-white border border-border overflow-hidden hover:shadow-md transition-all duration-500"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-secondary-bg via-secondary-bg to-secondary-bg flex items-center justify-center">
                  <BookOpen size={80} className="text-muted-text/20 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <CategoryBadge label={featuredArticle.category} />
                  <h2 className="mt-4 font-heading text-2xl lg:text-3xl font-bold text-primary leading-tight group-hover:text-accent transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="mt-4 text-muted-text leading-relaxed">{featuredArticle.excerpt}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-text">
                    <span className="flex items-center gap-2">
                      <User size={14} className="text-muted-text" />
                      {featuredArticle.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar size={14} className="text-muted-text" />
                      {featuredArticle.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock size={14} className="text-muted-text" />
                      {featuredArticle.readTime}
                    </span>
                  </div>
                  <div className="mt-6">
                    <Button
                      variant="ghost"
                      className="rounded-full gap-2 group/btn px-0 hover:bg-transparent hover:text-accent"
                    >
                      Read Article <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>
          )}

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayed.map((article, i) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl bg-white border border-border overflow-hidden hover:shadow-md transition-all duration-500 flex flex-col"
              >
                <PlaceholderImage icon={BookOpen} />
                <div className="p-6 flex flex-col flex-1">
                  <CategoryBadge label={article.category} />
                  <h3 className="mt-3 font-heading text-lg font-bold text-primary leading-snug group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-text leading-relaxed flex-1">{article.excerpt}</p>
                  <div className="mt-5 pt-5 border-t border-border flex items-center gap-3">
                    <AuthorAvatar name={article.author} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-primary truncate">{article.author}</p>
                      <div className="flex items-center gap-3 text-xs text-muted-text mt-0.5">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {hasMore && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-10 text-center"
            >
              <Button
                size="lg"
                variant="outline"
                className="rounded-full gap-2 group"
                onClick={() => setVisibleCount((prev) => prev + 6)}
              >
                Load More Articles
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          )}
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
                title="Stay Ahead With Our Newsletter"
                subtitle="Get the latest engineering insights, product updates, and industry analysis delivered to your inbox every two weeks."
              />
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-6 flex flex-col sm:flex-row gap-4"
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 h-14 px-6 rounded-2xl border border-border bg-white text-primary placeholder:text-muted-text/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
                />
                <Button
                  size="lg"
                  className="rounded-full gap-2 group shrink-0"
                  onClick={() => {}}
                >
                  Subscribe
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
              <p className="mt-4 text-xs text-muted-text">
                No spam, ever. Unsubscribe anytime. Read our{" "}
                <a href="#" className="text-accent hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-secondary-bg via-secondary-bg to-secondary-bg border border-border flex items-center justify-center p-12">
                <BookOpen size={100} className="text-muted-text/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
