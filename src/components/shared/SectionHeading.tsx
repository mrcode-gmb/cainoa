import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  badge?: string
  align?: "left" | "center"
  highlight?: string
  dark?: boolean
}

export default function SectionHeading({
  title,
  subtitle,
  badge,
  align = "left",
  highlight,
  dark = false,
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
        <span className="text-accent-mint dark:text-emerald-400">{highlight}</span>
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
        <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${
          dark
            ? "bg-white/10 border border-white/20 text-white"
            : "bg-secondary-bg border border-border text-primary"
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${
        dark ? "text-white" : "text-primary"
      }`}>
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-lg leading-relaxed ${
          dark ? "text-white/70" : "text-muted-text"
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
