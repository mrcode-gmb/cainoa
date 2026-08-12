import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { useNavigate, Link } from "react-router-dom"
import SEO from "../components/SEO"
import PageHero from "../components/shared/PageHero"
import SectionHeading from "../components/shared/SectionHeading"
import CTASection from "../components/shared/CTASection"
import { Button } from "../components/ui/button"
import { listNews, type NewsItem } from "../lib/news"
import {
  ArrowRight,
  Download,
  Building2,
  Rocket,
  Landmark,
  ShieldCheck,
  MapPin,
  Brain,
  Calendar,
  FileText,
  FolderDown,
  Users,
  Image as ImageIcon,
  Newspaper,
  Loader2,
} from "lucide-react"

// TODO: Replace placeholder announcements with real, verifiable company updates
// (with client permission). Remove any item whose facts cannot be confirmed.
const categories = ["All", "Company", "Product", "Engineering", "Security"]

type Announcement = {
  id?: string
  category: string
  title: string
  date: string
  excerpt: string
  icon: React.ElementType
  imageUrl?: string
}

const categoryIcons: Record<string, React.ElementType> = {
  Company: Building2,
  Product: Rocket,
  Engineering: Brain,
  Security: ShieldCheck,
  "Artificial Intelligence": Brain,
  Fintech: Landmark,
  Cybersecurity: ShieldCheck,
  "Enterprise Software": Building2,
  Cloud: MapPin,
  "Product Engineering": Rocket,
  "Company News": Newspaper,
  "Case Studies": FileText,
}

function newsToAnnouncement(item: NewsItem): Announcement {
  return {
    id: item.id,
    category: item.category,
    title: item.title,
    date: item.date,
    excerpt: item.excerpt,
    icon: categoryIcons[item.category] ?? Newspaper,
    imageUrl: item.imageUrl,
  }
}

function CategoryBadge({ label }: { label: string }) {
  return (
    <span className="px-3 py-1 rounded-full bg-secondary-bg text-primary font-semibold text-xs whitespace-nowrap">
      {label}
    </span>
  )
}

function AnnouncementVisual({ icon: Icon, imageUrl }: { icon: React.ElementType; imageUrl?: string }) {
  if (imageUrl) {
    return (
      <div className="aspect-[16/10] overflow-hidden bg-secondary-bg border-b border-border">
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
    <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-secondary-bg via-secondary-bg to-secondary-bg border-b border-border flex items-center justify-center">
      <Icon
        size={44}
        className="text-muted-text/20 group-hover:scale-110 group-hover:text-primary/30 transition-all duration-500"
      />
    </div>
  )
}

const pressKitAssets = [
  { icon: ImageIcon, label: "Company Logos", note: "PNG & SVG" },
  { icon: FileText, label: "Brand Guidelines", note: "PDF" },
  { icon: Users, label: "Executive Headshots", note: "High resolution" },
  { icon: FolderDown, label: "Media Pack", note: "ZIP" },
]

export default function Press() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [visibleCount, setVisibleCount] = useState(3)
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    let active = true
    listNews("press", true)
      .then((items) => {
        if (!active) return
        setAnnouncements((items ?? []).map(newsToAnnouncement))
        setActiveCategory("All")
      })
      .catch(() => {
        if (active) setAnnouncements([])
      })
      .finally(() => {
        if (active) setLoading(false)
      })
    return () => {
      active = false
    }
  }, [])

  const filtered = useMemo(() => {
    return activeCategory === "All"
      ? announcements
      : announcements.filter((a) => a.category === activeCategory)
  }, [activeCategory, announcements])

  // Featured article is the first announcement when "All" is active
  const featured = activeCategory === "All" && announcements.length > 0 ? announcements[0] : null
  const gridItems = activeCategory === "All" && announcements.length > 0 ? filtered.slice(1) : filtered
  const displayed = gridItems.slice(0, visibleCount)
  const hasMore = visibleCount < gridItems.length

  return (
    <main>
      <SEO title="Press" description="Company announcements, milestones, and media resources from Cainoa Technologies." path="/press" />
      <PageHero
        badge="Press & Media"
        title="Company News & Announcements"
        subtitle="The latest from Cainoa — milestones, product launches, and the people behind Africa's digital infrastructure."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <SectionHeading title="Recent News" subtitle="Filter by category or explore the full company timeline." />
          </div>

          <div className="mt-10 overflow-x-auto pb-2 -mx-6 px-6 lg:mx-0 lg:px-0">
            <div className="flex gap-3 min-w-max border-b border-border">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat)
                    setVisibleCount(3)
                  }}
                  className={`relative px-1 py-3 text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
                    activeCategory === cat
                      ? "text-primary"
                      : "text-muted-text hover:text-primary"
                  }`}
                >
                  {cat}
                  {activeCategory === cat && (
                    <motion.span
                      layoutId="press-filter"
                      className="absolute left-0 right-0 -bottom-px h-0.5 bg-primary"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="py-24 flex flex-col items-center justify-center text-muted-text">
              <Loader2 size={32} className="animate-spin text-primary mb-3" />
              <p className="text-sm">Loading announcements from database...</p>
            </div>
          ) : announcements.length === 0 ? (
            <div className="mt-12 py-20 text-center rounded-3xl bg-white border border-border px-6">
              <Newspaper size={48} className="mx-auto text-muted-text/30" />
              <h3 className="mt-4 font-heading text-lg font-bold text-primary">
                No Press Releases Published Yet
              </h3>
              <p className="mt-1 text-sm text-muted-text max-w-md mx-auto">
                Official press announcements will appear here automatically once created and published in the admin dashboard.
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
                  className="group mt-12 grid lg:grid-cols-2 rounded-3xl border border-border bg-white overflow-hidden hover:shadow-md transition-all duration-500"
                >
                  <AnnouncementVisual icon={featured.icon} imageUrl={featured.imageUrl} />
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3">
                      <CategoryBadge label={featured.category} />
                      <span className="flex items-center gap-1.5 text-xs text-muted-text">
                        <Calendar size={12} />
                        {featured.date}
                      </span>
                    </div>
                    <h3 className="mt-4 font-heading text-2xl lg:text-3xl font-bold text-primary leading-tight">
                      {featured.title}
                    </h3>
                    <p className="mt-4 text-muted-text leading-relaxed max-w-xl">
                      {featured.excerpt}
                    </p>
                    <div className="mt-6">
                      {featured.id ? (
                        <Link to={`/press/${featured.id}`}>
                          <Button
                            variant="ghost"
                            className="rounded-full gap-2 group/btn px-0 hover:bg-transparent hover:text-accent font-semibold"
                          >
                            Read Full Announcement
                            <ArrowRight
                              size={16}
                              className="transition-transform group-hover/btn:translate-x-1"
                            />
                          </Button>
                        </Link>
                      ) : (
                        <Button
                          variant="ghost"
                          className="rounded-full gap-2 group/btn px-0 hover:bg-transparent hover:text-accent font-semibold"
                        >
                          Read Announcement
                          <ArrowRight
                            size={16}
                            className="transition-transform group-hover/btn:translate-x-1"
                          />
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.article>
              )}

              {displayed.length > 0 && (
                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {displayed.map((item, i) => (
                    <motion.article
                      key={item.title + i}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      whileHover={{ y: -6 }}
                      className="group rounded-3xl border border-border bg-white overflow-hidden hover:shadow-md transition-all duration-500 flex flex-col"
                    >
                      <AnnouncementVisual icon={item.icon} imageUrl={item.imageUrl} />
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-3">
                          <CategoryBadge label={item.category} />
                          <span className="flex items-center gap-1.5 text-xs text-muted-text">
                            <Calendar size={12} />
                            {item.date}
                          </span>
                        </div>
                        <h3 className="mt-3 font-heading text-lg font-bold text-primary leading-snug">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-text leading-relaxed flex-1">
                          {item.excerpt}
                        </p>
                        <div className="mt-5 pt-5 border-t border-border">
                          {item.id ? (
                            <Link to={`/press/${item.id}`}>
                              <Button
                                variant="ghost"
                                className="gap-2 group/btn px-0 hover:bg-transparent hover:text-accent font-semibold"
                              >
                                Read Full Announcement
                                <ArrowRight
                                  size={16}
                                  className="transition-transform group-hover/btn:translate-x-1"
                                />
                              </Button>
                            </Link>
                          ) : (
                            <Button
                              variant="ghost"
                              className="gap-2 group/btn px-0 hover:bg-transparent hover:text-accent font-semibold"
                            >
                              Learn more
                              <ArrowRight
                                size={16}
                                className="transition-transform group-hover/btn:translate-x-1"
                              />
                            </Button>
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
                    onClick={() => setVisibleCount((prev) => prev + 3)}
                  >
                    Load More Updates
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Button>
                </motion.div>
              )}
            </>
          )}
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                badge="Media Resources"
                title="Press Kit & Brand Assets"
                subtitle="Official logos, brand guidelines, and product imagery for media professionals and partners."
              />
              <p className="mt-4 text-muted-text leading-relaxed max-w-xl">
                Access Cainoa's official brand assets for editorial, partnership, and event use. All
                resources are made available in accordance with our brand guidelines.
              </p>
              <Button size="lg" className="rounded-full gap-2 group mt-8" onClick={() => {}}>
                <Download
                  size={18}
                  className="transition-transform group-hover:translate-y-0.5"
                />
                Download Full Press Kit
              </Button>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-5">
              {pressKitAssets.map((asset, i) => (
                <motion.div
                  key={asset.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="rounded-3xl border border-border bg-white p-6 flex items-start gap-4 hover:shadow-md transition-all duration-500"
                >
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-secondary-bg flex items-center justify-center">
                    <asset.icon size={22} className="text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading text-base font-bold text-primary">
                      {asset.label}
                    </h3>
                    <p className="text-xs text-muted-text mt-1">{asset.note}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
            className="max-w-3xl mx-auto text-center"
          >
            <SectionHeading title="Contact the Media Team" align="center" />
            <p className="mt-4 text-muted-text leading-relaxed">
              For press inquiries, interview requests, or media accreditation, our communications
              team is ready to assist. Reach us at{" "}
              <a href="mailto:media@cainoa.com" className="text-primary hover:underline font-medium">
                media@cainoa.com
              </a>
              .
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                className="rounded-full gap-2 group"
                onClick={() => navigate("/contact")}
              >
                Get in Touch
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}