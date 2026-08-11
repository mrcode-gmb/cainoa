import { motion } from "framer-motion"
import { useState } from "react"
import SEO from "../components/SEO"
import PageHero from "../components/shared/PageHero"
import { Button } from "../components/ui/button"
import { Send, Mail, MapPin } from "lucide-react"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Wire this form to a real backend endpoint (email/CRM/webhook).
    // For now it shows a success state as a UI placeholder.
    setSubmitted(true)
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
                  <div className="w-12 h-12 rounded-2xl bg-secondary-bg flex items-center justify-center shrink-0">
                    <Mail size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-primary">Email</h3>
                    <p className="text-sm text-muted-text mt-1">
                      <a href="mailto:partner@cainoa.com" className="text-primary hover:underline">partner@cainoa.com</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary-bg flex items-center justify-center shrink-0">
                    <MapPin size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-primary">Office</h3>
                    <p className="text-sm text-muted-text mt-1">
                      Cainoa Technologies Ltd.<br />
                      Plot 1072, Cadastral Zone B07<br />
                      Abuja, Nigeria
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
                  <div className="w-16 h-16 rounded-full bg-secondary-bg flex items-center justify-center mx-auto mb-6">
                    <Send size={28} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-3">Thank You</h3>
                  <p className="text-muted-text leading-relaxed">
                    Your message has been received. Our team will review it and get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 lg:p-10 rounded-3xl bg-white border border-border">
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-primary mb-1.5">Full Name</label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full h-12 px-4 rounded-xl border border-border bg-white text-primary placeholder:text-muted-text/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="organization" className="block text-sm font-semibold text-primary mb-1.5">Organization</label>
                      <input
                        id="organization"
                        type="text"
                        required
                        placeholder="Company or institution name"
                        className="w-full h-12 px-4 rounded-xl border border-border bg-white text-primary placeholder:text-muted-text/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-primary mb-1.5">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="you@organization.com"
                        className="w-full h-12 px-4 rounded-xl border border-border bg-white text-primary placeholder:text-muted-text/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-primary mb-1.5">Service Interest</label>
                      <select
                        id="service"
                        required
                        className="w-full h-12 px-4 rounded-xl border border-border bg-white text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        <option value="ai">AI & LLM Integration</option>
                        <option value="cybersecurity">Cybersecurity</option>
                        <option value="infrastructure">Cloud & Infrastructure</option>
                        <option value="fintech">Fintech Platforms</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-primary mb-1.5">Message</label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        placeholder="Tell us about your project or inquiry..."
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-primary placeholder:text-muted-text/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300 resize-y"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full rounded-full gap-2 group">
                      <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
                      Send Message
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
