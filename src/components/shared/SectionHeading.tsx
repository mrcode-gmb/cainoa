import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  badge?: string
  align?: "left" | "center"
  highlight?: string
}

export default function SectionHeading({
  title,
  subtitle,
  badge,
  align = "left",
  highlight,
}: SectionHeadingProps) {
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
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {badge && (
          <span className="inline-block px-3 py-1.5 rounded-full bg-secondary-bg border border-border text-primary text-xs font-semibold tracking-wider uppercase mb-3">
          {badge}
        </span>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-muted-text leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
