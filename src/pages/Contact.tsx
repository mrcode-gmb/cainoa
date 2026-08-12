import { motion } from "framer-motion"
import { useState } from "react"
import SEO from "../components/SEO"
import PageHero from "../components/shared/PageHero"
import { Button } from "../components/ui/button"
import { Send, Mail, MapPin, Loader2, CheckCircle2 } from "lucide-react"
import { submitContactMessage } from "../lib/contact"

export default function Contact() {
  const [name, setName] = useState("")
  const [organization, setOrganization] = useState("")
  const [email, setEmail] = useState("")
  const [service, setService] = useState("")
  const [message, setMessage] = useState("")

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const res = await submitContactMessage({
        name,
        organization,
        email,
        service,
        message,
      })

      if (res.success) {
        setSubmitted(true)
        // Also trigger mailto notification to contact@cainoa.com
        const mailtoUrl = `mailto:contact@cainoa.com?subject=${encodeURIComponent(
          `New Contact Inquiry from ${name} (${organization || "Individual"})`
        )}&body=${encodeURIComponent(
          `Name: ${name}\nOrganization: ${organization}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`
        )}`
        
        // Open background mailto link if requested
        const a = document.createElement("a")
        a.href = mailtoUrl
        a.target = "_blank"
        a.click()
      } else {
        setError(res.error || "Unable to send message. Please try again.")
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to send message."
      setError(msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main>
      <SEO title="Contact" description="Get in touch with Cainoa's team. Schedule a consultation or send us a message about your project." path="/contact" />
      <PageHero
        badge="Contact"
        title="Let's Build Together"
        subtitle="Tell us about your project and we'll get back to you within one business day."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary leading-tight">
                Start a Conversation
              </h2>
              <p className="mt-4 text-muted-text leading-relaxed">
                Whether you're evaluating AI infrastructure, need a cybersecurity assessment, or want to discuss a custom platform — our team is ready.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary-bg flex items-center justify-center shrink-0 border border-border">
                    <Mail size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-primary">Email Direct</h3>
                    <p className="text-sm text-muted-text mt-1">
                      <a href="mailto:contact@cainoa.com" className="text-accent font-semibold hover:underline">contact@cainoa.com</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary-bg flex items-center justify-center shrink-0 border border-border">
                    <MapPin size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-primary">Headquarters Office</h3>
                    <p className="text-sm text-muted-text mt-1 leading-relaxed">
                      Port Harcourt Crescent, Off Gimbiya Street, <br />
                      Area11, Garki, Abuja, Nigeria.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {submitted ? (
                <div className="p-10 rounded-3xl bg-secondary-bg border border-border text-center">
                  <div className="w-16 h-16 rounded-full bg-accent-tint flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} className="text-accent" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-3">Message Delivered</h3>
                  <p className="text-muted-text leading-relaxed max-w-md mx-auto">
                    Thank you, <strong>{name}</strong>! Your message has been saved and dispatched to <strong>contact@cainoa.com</strong> and our admin dashboard. Our team will get back to you within one business day.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 rounded-full"
                    onClick={() => {
                      setSubmitted(false)
                      setName("")
                      setOrganization("")
                      setEmail("")
                      setService("")
                      setMessage("")
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 lg:p-10 rounded-3xl bg-card-bg border border-border shadow-sm">
                  {error && (
                    <div className="mb-5 p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm">
                      {error}
                    </div>
                  )}
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-primary mb-1.5">Full Name *</label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full h-12 px-4 rounded-xl border border-border bg-card-bg text-primary placeholder:text-muted-text/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="organization" className="block text-sm font-semibold text-primary mb-1.5">Organization / Company</label>
                      <input
                        id="organization"
                        type="text"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="Company or institution name"
                        className="w-full h-12 px-4 rounded-xl border border-border bg-card-bg text-primary placeholder:text-muted-text/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-primary mb-1.5">Email Address *</label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@organization.com"
                        className="w-full h-12 px-4 rounded-xl border border-border bg-card-bg text-primary placeholder:text-muted-text/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-primary mb-1.5">Service Interest</label>
                      <select
                        id="service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full h-12 px-4 rounded-xl border border-border bg-card-bg text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all duration-300"
                      >
                        <option value="" className="bg-card-bg text-primary">Select a service</option>
                        <option value="AI & LLM Integration" className="bg-card-bg text-primary">AI & LLM Integration</option>
                        <option value="Cybersecurity" className="bg-card-bg text-primary">Cybersecurity Assessment & Zero Trust</option>
                        <option value="Cloud & Infrastructure" className="bg-card-bg text-primary">Cloud & Sovereign Infrastructure</option>
                        <option value="Fintech Platforms" className="bg-card-bg text-primary">Fintech Platforms & Banking</option>
                        <option value="Other Enterprise Request" className="bg-card-bg text-primary">Other Enterprise Request</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-primary mb-1.5">Message *</label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about your project, timeline, or requirements..."
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card-bg text-primary placeholder:text-muted-text/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all duration-300 resize-y"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full rounded-full gap-2 group" disabled={loading}>
                      {loading ? (
                        <>
                          <Loader2 size={16} className="animate-spin" /> Sending Message…
                        </>
                      ) : (
                        <>
                          <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
                          Send Message &amp; Notify Admin
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
