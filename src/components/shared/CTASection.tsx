import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { ArrowUpRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function CTASection() {
  const navigate = useNavigate()

  return (
    <section className="relative py-20 lg:py-28 bg-primary">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary-bg to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Let&apos;s Build the{" "}
            <span className="text-accent-mint">Future Together</span>
          </h2>
          <p className="mt-4 text-lg text-white/60 leading-relaxed">
            Partner with Cainoa to deliver secure, scalable, and intelligent
            digital infrastructure.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="rounded-full gap-2 group bg-accent hover:bg-accent/90"
              onClick={() => navigate("/contact")}
            >
              Partner With Us
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full gap-2 group border-white/20 text-white hover:bg-white/10"
              onClick={() => navigate("/contact")}
            >
              Contact Our Team
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
