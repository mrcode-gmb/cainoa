import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import aqtrisLogo from "../assets/aqtris-logo-solid-1color.png"
import gsuLogo from "../assets/gsu alumni.png"
import benevolenceLogo from "../assets/Benovelance.jpeg"
import fmbnLogo from "../assets/fmbn.jpeg"

function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const particles: {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      alpha: number
    }[] = []

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      })
    }

    const drawGrid = () => {
      ctx.strokeStyle = "rgba(1, 69, 39, 0.08)"
      ctx.lineWidth = 1
      const spacing = 60
      for (let x = 0; x < canvas.width; x += spacing) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += spacing) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    const drawGradients = () => {
      const grd1 = ctx.createRadialGradient(
        canvas.width * 0.3,
        canvas.height * 0.4,
        0,
        canvas.width * 0.3,
        canvas.height * 0.4,
        400
      )
      grd1.addColorStop(0, "rgba(1, 69, 39, 0.08)")
      grd1.addColorStop(1, "rgba(1, 69, 39, 0)")
      ctx.fillStyle = grd1
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const grd2 = ctx.createRadialGradient(
        canvas.width * 0.7,
        canvas.height * 0.6,
        0,
        canvas.width * 0.7,
        canvas.height * 0.6,
        300
      )
      grd2.addColorStop(0, "rgba(15, 23, 42, 0.05)")
      grd2.addColorStop(1, "rgba(15, 23, 42, 0)")
      ctx.fillStyle = grd2
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawGrid()
      drawGradients()

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(1, 69, 39, ${p.alpha})`
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  )
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white via-secondary-bg/30 to-white">
      <AnimatedBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 pt-36 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl"
        >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-bg border border-border text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Enterprise AI Infrastructure
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-primary">
            Powering the{" "}
            <span className="text-accent-mint">AI Transformation</span>
            <br />
            of a Modern Economy
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-text max-w-2xl leading-relaxed">
            Home to the region&apos;s leading engineers. We deploy advanced AI
            integrations, secure fintech platforms, and scalable digital
            infrastructure for governments, enterprises, cooperatives,
            financial institutions, and educational institutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 max-w-xl"
        >
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Enter your organization email"
              className="w-full h-14 pl-5 pr-4 rounded-2xl border-2 border-border bg-white text-primary placeholder:text-muted-text/70 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 text-base"
              aria-label="Organization email"
            />
          </div>
          <Button size="lg" className="rounded-full shrink-0 gap-2 group">
            Initiate a Partnership
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 flex items-center gap-4 sm:gap-6 text-sm text-muted-text"
        >
          <div className="flex -space-x-2 sm:-space-x-3">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-white bg-white shadow-sm overflow-hidden flex items-center justify-center">
              <img src={aqtrisLogo} alt="Aqtris" loading="eager" className="h-5 sm:h-6 w-auto" />
            </div>
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-white bg-white shadow-sm overflow-hidden flex items-center justify-center">
              <img src={gsuLogo} alt="GSU Alumni" loading="eager" className="h-6 sm:h-7 w-auto" />
            </div>
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-white bg-white shadow-sm overflow-hidden flex items-center justify-center">
              <img src={benevolenceLogo} alt="Benevolence" loading="eager" className="h-5 sm:h-6 w-auto object-contain" />
            </div>
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-white bg-white shadow-sm overflow-hidden flex items-center justify-center">
              <img src={fmbnLogo} alt="FMBN Equishare" loading="eager" className="h-5 sm:h-6 w-auto object-contain" />
            </div>
          </div>
          <span className="font-medium">Trusted by leading organizations across Africa</span>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}
