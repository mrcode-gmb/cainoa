import { motion } from "framer-motion"

interface PageHeroProps {
  title: string
  subtitle: string
  badge?: string
  highlight?: string
}

export default function PageHero({ title, subtitle, badge, highlight }: PageHeroProps) {
  const renderTitle = () => {
    if (!highlight || !title.includes(highlight)) {
      return <>{title}</>
    }
    const before = title.slice(0, title.indexOf(highlight))
    const after = title.slice(title.indexOf(highlight) + highlight.length)
    return (
      <>
        {before}
        <span className="text-accent-mint">{highlight}</span>
        {after}
      </>
    )
  }

  return (
    <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-secondary-bg/50 to-background">
      <div className="absolute inset-0 pointer-events-none">
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          {badge && (
            <span className="inline-block px-4 py-2 rounded-full bg-secondary-bg border border-border text-primary text-sm font-medium mb-4">
              {badge}
            </span>
          )}
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-primary">
            {renderTitle()}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted-text max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
