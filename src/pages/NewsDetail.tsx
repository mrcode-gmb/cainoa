import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Check,
  Newspaper,
  BookOpen,
  Loader2,
  ArrowRight,
} from "lucide-react"
import SEO from "../components/SEO"
import PageHero from "../components/shared/PageHero"
import CTASection from "../components/shared/CTASection"
import { Button } from "../components/ui/button"
import { getNews, listNews, type NewsItem } from "../lib/news"

function AuthorAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
  return (
    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
      {initials}
    </div>
  )
}

export default function NewsDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const [item, setItem] = useState<NewsItem | null>(null)
  const [related, setRelated] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!id) return
    setLoading(true)
    let active = true

    getNews(id)
      .then((data) => {
        if (!active) return
        setItem(data)
        if (data) {
          listNews(data.channel, true).then((all) => {
            if (active && all) {
              setRelated(all.filter((n) => n.id !== data.id).slice(0, 3))
            }
          })
        }
      })
      .catch((err) => {
        console.error("Error loading article:", err)
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [id])

  const copyShareLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <PageHero
          badge="Article"
          title="Loading Content…"
          subtitle="Fetching the latest updates from Cainoa."
        />
        <div className="py-24 flex flex-col items-center justify-center text-muted-text">
          <Loader2 size={36} className="animate-spin text-accent mb-4" />
          <p className="text-sm font-medium">Retrieving article details…</p>
        </div>
      </main>
    )
  }

  if (!item) {
    return (
      <main className="min-h-screen bg-white">
        <PageHero
          badge="404"
          title="Article Not Found"
          subtitle="The requested publication could not be found or may have been moved."
        />
        <div className="py-20 text-center mx-auto max-w-xl px-6">
          <p className="text-muted-text mb-8">
            The article you are looking for does not exist or is no longer published.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="rounded-full gap-2" onClick={() => navigate(-1)}>
              <ArrowLeft size={16} /> Go Back
            </Button>
            <Link to="/press">
              <Button size="lg" variant="outline" className="rounded-full">
                View All Press
              </Button>
            </Link>
          </div>
        </div>
      </main>
    )
  }

  const backLink = item.channel === "press" ? "/press" : "/resources/blog"
  const backLabel = item.channel === "press" ? "Back to Press" : "Back to Blog"

  // Split body text into paragraphs if multi-line
  const bodyParagraphs = item.body
    ? item.body.split(/\n\n+/).filter((p) => p.trim().length > 0)
    : []

  return (
    <main className="bg-background">
      <SEO
        title={item.title}
        description={item.excerpt}
        path={item.channel === "press" ? `/press/${item.id}` : `/resources/blog/${item.id}`}
      />

      {/* Header section with breadcrumbs and title */}
      <section className="pt-28 sm:pt-32 lg:pt-36 pb-10 lg:pb-16 bg-secondary-bg/40 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-muted-text uppercase tracking-wider mb-6">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to={backLink} className="hover:text-primary transition-colors">
              {item.channel === "press" ? "Press" : "Blog"}
            </Link>
            <span>/</span>
            <span className="text-primary truncate max-w-[200px] sm:max-w-none">
              {item.category}
            </span>
          </div>

          <Link
            to={backLink}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors mb-6 group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            {backLabel}
          </Link>

          <div className="flex items-center gap-3 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-accent-tint text-accent font-semibold text-xs uppercase tracking-wide">
              {item.channel}
            </span>
            <span className="px-3 py-1 rounded-full bg-card-bg border border-border text-primary font-semibold text-xs">
              {item.category}
            </span>
          </div>

          <h1 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
            {item.title}
          </h1>

          <div className="mt-8 pt-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <AuthorAvatar name={item.author} />
              <div>
                <p className="text-sm font-bold text-primary">{item.author}</p>
                <div className="flex items-center gap-3 text-xs text-muted-text mt-0.5">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {item.date}
                  </span>
                  {item.readTime && (
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {item.readTime}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Share action buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={copyShareLink}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card-bg text-xs font-semibold text-muted-text hover:text-primary hover:border-primary/40 transition-colors"
                title="Copy Article Link"
              >
                {copied ? <Check size={14} className="text-green-600" /> : <Share2 size={14} />}
                {copied ? "Link Copied!" : "Share"}
              </button>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(item.title)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on X"
                className="w-8 h-8 rounded-full border border-border bg-card-bg flex items-center justify-center text-muted-text hover:text-primary hover:border-primary/40 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="w-8 h-8 rounded-full border border-border bg-card-bg flex items-center justify-center text-muted-text hover:text-primary hover:border-primary/40 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Cover Image */}
          {item.imageUrl ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl sm:rounded-3xl overflow-hidden border border-border bg-secondary-bg aspect-[16/9] max-h-[520px] mb-8 sm:mb-12 shadow-sm"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none"
                }}
              />
            </motion.div>
          ) : (
            <div className="rounded-3xl overflow-hidden border border-border bg-gradient-to-br from-secondary-bg via-secondary-bg to-secondary-bg aspect-[21/9] mb-12 flex items-center justify-center">
              {item.channel === "press" ? (
                <Newspaper size={64} className="text-muted-text/20" />
              ) : (
                <BookOpen size={64} className="text-muted-text/20" />
              )}
            </div>
          )}

          {/* Key Excerpt Callout */}
          <div className="p-6 sm:p-8 rounded-3xl bg-accent-tint/40 border border-accent/20 mb-10">
            <p className="text-base sm:text-lg font-medium text-primary leading-relaxed italic">
              "{item.excerpt}"
            </p>
          </div>

          {/* Article Body Paragraphs */}
          {bodyParagraphs.length > 0 ? (
            <div className="space-y-6 text-primary/90 text-base sm:text-lg leading-relaxed font-body">
              {bodyParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          ) : (
            <div className="py-8 text-muted-text text-base leading-relaxed">
              <p>{item.excerpt}</p>
            </div>
          )}

          {/* Article Footer & Navigation */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link to={backLink}>
              <Button variant="outline" className="rounded-full gap-2">
                <ArrowLeft size={16} /> {backLabel}
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-text">Published on {item.date}</span>
              <button
                onClick={copyShareLink}
                className="text-xs font-semibold text-accent hover:underline flex items-center gap-1"
              >
                {copied ? "Link Copied!" : "Copy Link"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      {related.length > 0 && (
        <section className="py-16 bg-secondary-bg/50 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4 mb-10">
              <h2 className="font-heading text-2xl font-bold text-primary">
                Related {item.channel === "press" ? "Announcements" : "Articles"}
              </h2>
              <Link
                to={backLink}
                className="text-sm font-semibold text-accent hover:text-accent-light flex items-center gap-1"
              >
                View all <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((relItem) => (
                <Link
                  key={relItem.id}
                  to={item.channel === "press" ? `/press/${relItem.id}` : `/resources/blog/${relItem.id}`}
                  className="group rounded-3xl bg-white border border-border overflow-hidden hover:shadow-md transition-all duration-500 flex flex-col"
                >
                  {relItem.imageUrl ? (
                    <div className="aspect-[16/10] overflow-hidden bg-secondary-bg border-b border-border">
                      <img
                        src={relItem.imageUrl}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[16/10] bg-secondary-bg border-b border-border flex items-center justify-center">
                      <Newspaper size={40} className="text-muted-text/20" />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <span className="px-3 py-1 rounded-full bg-secondary-bg text-primary font-semibold text-xs w-fit">
                      {relItem.category}
                    </span>
                    <h3 className="mt-3 font-heading text-base font-bold text-primary group-hover:text-accent transition-colors line-clamp-2">
                      {relItem.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted-text line-clamp-2 flex-1">
                      {relItem.excerpt}
                    </p>
                    <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-text">
                      <span>{relItem.date}</span>
                      <span className="font-semibold text-accent group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Read →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </main>
  )
}
