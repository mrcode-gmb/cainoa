import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import SEO from "../components/SEO"
import PageHero from "../components/shared/PageHero"
import SectionHeading from "../components/shared/SectionHeading"
import CTASection from "../components/shared/CTASection"
import { Button } from "../components/ui/button"
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
} from "lucide-react"

// TODO: Replace placeholder announcements with real, verifiable company updates
// (with client permission). Remove any item whose facts cannot be confirmed.
const categories = ["All", "Company", "Product", "Engineering", "Security"]

const announcements = [
  {
    category: "Engineering",
    title: "AI Leadership",
    date: "2025",
    excerpt:
      "Launched LLM integration services, AI agent frameworks, and expanded our engineering team.",
    icon: Brain,
  },
  {
    category: "Company",
    title: "Regional Growth",
    date: "2024",
    excerpt:
      "Expanded operations to serve government, financial, and educational clients across multiple states.",
    icon: MapPin,
  },
  {
    category: "Security",
    title: "Cybersecurity Practice Established",
    date: "2023",
    excerpt:
      "Formalized security operations, zero-trust architecture, and penetration testing services.",
    icon: ShieldCheck,
  },
  {
    category: "Product",
    title: "Fintech Platform Launch",
    date: "2022",
    excerpt: "Launched secure payment and cooperative banking infrastructure.",
    icon: Landmark,
  },
  {
    category: "Product",
    title: "First Enterprise Deployments",
    date: "2021",
    excerpt: "Deployed first enterprise AI systems for financial institutions.",
    icon: Rocket,
  },
  {
    category: "Company",
    title: "Founded",
    date: "2020",
    excerpt:
      "Cainoa was established with a mission to build enterprise-grade AI infrastructure for African organizations.",
    icon: Building2,
  },
]

function CategoryBadge({ label }: { label: string }) {
  return (
    <span className="px-3 py-1 rounded-full bg-secondary-bg text-primary font-semibold text-xs whitespace-nowrap">
      {label}
    </span>
  )
}

function AnnouncementVisual({ icon: Icon }: { icon: React.ElementType }) {
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
  const navigate = useNavigate()

  const displayed = useMemo(() => {
    const filtered =
      activeCategory === "All"
        ? announcements
        : announcements.filter((a) => a.category === activeCategory)
    return filtered.slice(0, visibleCount)
  }, [activeCategory, visibleCount])

  const hasMore = (() => {
    const filtered =
      activeCategory === "All"
        ? announcements
        : announcements.filter((a) => a.category === activeCategory)
    return visibleCount < filtered.length
  })()

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

          {activeCategory === "All" && (
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group mt-12 grid lg:grid-cols-2 rounded-3xl border border-border bg-white overflow-hidden hover:shadow-md transition-all duration-500"
            >
              <AnnouncementVisual icon={announcements[0].icon} />
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <CategoryBadge label={announcements[0].category} />
                  <span className="flex items-center gap-1.5 text-xs text-muted-text">
                    <Calendar size={12} />
                    {announcements[0].date}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-2xl lg:text-3xl font-bold text-primary leading-tight">
                  {announcements[0].title}
                </h3>
                <p className="mt-4 text-muted-text leading-relaxed max-w-xl">
                  {announcements[0].excerpt}
                </p>
                <div className="mt-6">
                  <Button
                    variant="ghost"
                    className="rounded-full gap-2 group/btn px-0 hover:bg-transparent hover:text-accent"
                  >
                    Read Announcement
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover/btn:translate-x-1"
                    />
                  </Button>
                </div>
              </div>
            </motion.article>
          )}

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayed.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl border border-border bg-white overflow-hidden hover:shadow-md transition-all duration-500 flex flex-col"
              >
                <AnnouncementVisual icon={item.icon} />
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
                    <Button
                      variant="ghost"
                      className="gap-2 group/btn px-0 hover:bg-transparent hover:text-accent"
                    >
                      Learn more
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover/btn:translate-x-1"
                      />
                    </Button>
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