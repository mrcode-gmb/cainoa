import { motion } from "framer-motion"
import SEO from "../../components/SEO"
import PageHero from "../../components/shared/PageHero"
import SectionHeading from "../../components/shared/SectionHeading"
import CTASection from "../../components/shared/CTASection"
import { Button } from "../../components/ui/button"
import { Clock, User, ArrowRight, Calendar, BookOpen, Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { listNews } from "../../lib/news"

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

interface Article {
  id?: string
  category: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  imageUrl?: string
}

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

function ArticleImage({ icon: Icon, imageUrl, className }: { icon: React.ElementType; imageUrl?: string; className?: string }) {
  if (imageUrl) {
    return (
      <div className={`aspect-[16/10] overflow-hidden bg-secondary-bg border-b border-border ${className ?? ""}`}>
        <img
          src={imageUrl}
          alt=""
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLElement).style.display = "none"
          }}
        />
      </div>
    )
  }
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
  const [articleList, setArticleList] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    listNews("blog", true)
      .then((items) => {
        if (!active) return
        setArticleList(
          (items ?? []).map((item) => ({
            id: item.id,
            category: item.category,
            title: item.title,
            excerpt: item.excerpt,
            author: item.author,
            date: item.date,
            readTime: item.readTime ?? "5 min read",
            imageUrl: item.imageUrl,
          }))
        )
        setActiveCategory("All")
      })
      .catch(() => {
        if (active) setArticleList([])
      })
      .finally(() => {
        if (active) setLoading(false)
      })
    return () => {
      active = false
    }
  }, [])

  const filtered =
    activeCategory === "All" ? articleList : articleList.filter((a) => a.category === activeCategory)
  const featured = activeCategory === "All" && articleList.length > 0 ? articleList[0] : null
  const gridItems = activeCategory === "All" && articleList.length > 0 ? filtered.slice(1) : filtered
  const displayed = gridItems.slice(0, visibleCount)
  const hasMore = visibleCount < gridItems.length

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
                      ? "bg-primary text-white border-primary shadow-lg shadow-primary/25"
                      : "bg-card-bg text-muted-text border-border hover:border-primary/30 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="py-24 flex flex-col items-center justify-center text-muted-text">
              <Loader2 size={32} className="animate-spin text-primary mb-3" />
              <p className="text-sm">Loading articles from database...</p>
            </div>
          ) : articleList.length === 0 ? (
            <div className="mt-12 py-20 text-center rounded-3xl bg-card-bg border border-border px-6">
              <BookOpen size={48} className="mx-auto text-muted-text/30" />
              <h3 className="mt-4 font-heading text-lg font-bold text-primary">
                No Articles Published Yet
              </h3>
              <p className="mt-1 text-sm text-muted-text max-w-md mx-auto">
                Articles published in the admin dashboard will appear here automatically.
              </p>
            </div>
          ) : (
            <>
              {featured && (
                <motion.article
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mt-10 group rounded-3xl bg-card-bg border border-border overflow-hidden hover:shadow-md transition-all duration-500"
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    <ArticleImage icon={BookOpen} imageUrl={featured.imageUrl} className="aspect-[4/3] lg:aspect-auto" />
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <CategoryBadge label={featured.category} />
                      <h2 className="mt-4 font-heading text-2xl lg:text-3xl font-bold text-primary leading-tight group-hover:text-primary transition-colors">
                        {featured.title}
                      </h2>
                      <p className="mt-4 text-muted-text leading-relaxed">{featured.excerpt}</p>
                      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-text">
                        <span className="flex items-center gap-2">
                          <User size={14} className="text-muted-text" />
                          {featured.author}
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar size={14} className="text-muted-text" />
                          {featured.date}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock size={14} className="text-muted-text" />
                          {featured.readTime}
                        </span>
                      </div>
                      <div className="mt-6">
                        {featured.id ? (
                          <Link to={`/resources/blog/${featured.id}`}>
                            <Button
                              variant="ghost"
                              className="rounded-full gap-2 group/btn px-0 hover:bg-transparent hover:text-primary font-semibold"
                            >
                              Read Full Article <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                            </Button>
                          </Link>
                        ) : (
                          <Button
                            variant="ghost"
                            className="rounded-full gap-2 group/btn px-0 hover:bg-transparent hover:text-primary font-semibold"
                          >
                            Read Article <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              )}

              {displayed.length > 0 && (
                <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {displayed.map((article, i) => (
                    <motion.article
                      key={article.title + i}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      whileHover={{ y: -6 }}
                      className="group rounded-3xl bg-card-bg border border-border overflow-hidden hover:shadow-md transition-all duration-500 flex flex-col"
                    >
                      <ArticleImage icon={BookOpen} imageUrl={article.imageUrl} />
                      <div className="p-6 flex flex-col flex-1">
                        <CategoryBadge label={article.category} />
                        {article.id ? (
                          <Link to={`/resources/blog/${article.id}`}>
                            <h3 className="mt-3 font-heading text-lg font-bold text-primary leading-snug hover:text-accent transition-colors">
                              {article.title}
                            </h3>
                          </Link>
                        ) : (
                          <h3 className="mt-3 font-heading text-lg font-bold text-primary leading-snug">
                            {article.title}
                          </h3>
                        )}
                        <p className="mt-2 text-sm text-muted-text leading-relaxed flex-1">{article.excerpt}</p>
                        <div className="mt-5 pt-5 border-t border-border flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
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
                          {article.id && (
                            <Link
                              to={`/resources/blog/${article.id}`}
                              className="text-xs font-semibold text-accent hover:underline shrink-0"
                            >
                              Read →
                            </Link>
                          )}
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              )}

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
            </>
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
                  className="flex-1 h-14 px-6 rounded-2xl border border-border bg-card-bg text-primary placeholder:text-muted-text/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
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
                <a href="#" className="text-primary hover:underline">
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
