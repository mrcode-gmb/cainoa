import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, Calendar, User, Newspaper } from "lucide-react"
import { listNews, type NewsItem } from "../lib/news"
import SectionHeading from "./shared/SectionHeading"
import { Button } from "./ui/button"

export default function LatestNewsSection() {
  const [newsList, setNewsList] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    listNews(undefined, true)
      .then((items) => {
        if (!active) return
        // Take latest 3 published articles
        setNewsList((items ?? []).slice(0, 3))
      })
      .catch((err) => {
        console.error("Failed to load latest news for home section:", err)
      })
      .finally(() => {
        if (active) setLoading(false)
      })
    return () => {
      active = false
    }
  }, [])

  if (!loading && newsList.length === 0) {
    return null
  }

  return (
    <section className="py-20 lg:py-28 bg-secondary-bg/50 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            badge="Press & Insights"
            title="Latest News & Updates"
            subtitle="Explore our recent press releases, technical insights, and company announcements."
          />
          <Link to="/press" className="shrink-0">
            <Button variant="outline" className="rounded-full gap-2 group">
              View All News
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-96 rounded-3xl bg-card-bg border border-border animate-pulse p-6" />
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsList.map((item, i) => {
              const linkHref = item.channel === "press" ? `/press/${item.id}` : `/resources/blog/${item.id}`

              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group rounded-3xl bg-card-bg border border-border overflow-hidden hover:shadow-md transition-all duration-500 flex flex-col"
                >
                  {item.imageUrl ? (
                    <div className="aspect-[16/10] overflow-hidden bg-secondary-bg border-b border-border relative">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = "none"
                        }}
                      />
                      <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur text-white text-xs font-semibold uppercase tracking-wider">
                        {item.channel}
                      </span>
                    </div>
                  ) : (
                    <div className="aspect-[16/10] bg-gradient-to-br from-secondary-bg to-secondary-bg flex items-center justify-center border-b border-border relative">
                      <Newspaper size={44} className="text-muted-text/30 group-hover:scale-110 transition-transform duration-500" />
                      <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-card-bg/80 backdrop-blur border border-border text-primary text-xs font-semibold uppercase tracking-wider">
                        {item.channel}
                      </span>
                    </div>
                  )}

                  <div className="p-6 lg:p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-secondary-bg border border-border text-primary text-xs font-semibold">
                        {item.category}
                      </span>
                    </div>

                    <Link to={linkHref}>
                      <h3 className="font-heading text-xl font-bold text-primary leading-snug hover:text-accent transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                    </Link>

                    <p className="mt-3 text-sm text-muted-text leading-relaxed line-clamp-3 flex-1">
                      {item.excerpt}
                    </p>

                    <div className="mt-6 pt-5 border-t border-border flex items-center justify-between text-xs text-muted-text">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 font-medium text-primary">
                          <User size={13} className="text-muted-text" />
                          {item.author}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar size={13} />
                          {item.date}
                        </span>
                      </div>
                      <Link
                        to={linkHref}
                        className="inline-flex items-center gap-1 font-semibold text-accent hover:underline shrink-0"
                      >
                        Read <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
